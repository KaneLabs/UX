import React, { useState } from 'react';
import {
  View,
  Avatar,
  Multiline,
  OutlinedButton,
  ImageUploadButton,
} from 'eros-ui/components';
import { useQuery } from '@apollo/react-hooks';
import { ACCOUNT } from 'eros-ui/queries';
import { useTheme, makeStyles } from 'eros-ui/theme';
import FilePreviews from './FilePreviews';

const ComposeListHeader = (props) => {
  const styles = useStyles();
  const [{ NAV_HEIGHT }] = useTheme();

  const { data: accountData } = useQuery(ACCOUNT);
  const account = accountData && accountData.account;
  const [files, setFiles] = useState([]);

  const removeFile = (i) =>
    setFiles((prevFiles) => prevFiles.filter((_, index) => i !== index));
  const onFiles = (nextFiles) =>
    setFiles((prevFiles) => [...prevFiles, ...nextFiles]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Avatar size={NAV_HEIGHT} avatarUrl={account.avatarUrl} />
        </View>
        <Multiline flat style={styles.multiline} />
      </View>
      <FilePreviews files={files} onRemove={removeFile} />
      <View style={styles.buttonRow}>
        <View style={styles.buttonRowLeft}>
          <ImageUploadButton onFiles={onFiles} />
        </View>
        <OutlinedButton text="Submit" />
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme) => {
  const innerWidth = theme.FEED_WIDTH - theme.gutterSize * 3 - theme.NAV_HEIGHT;
  const imageHeight = (innerWidth * 9) / 16;

  return {
    container: {
      width: '100%',
      maxWidth: theme.FEED_WIDTH,
      borderColor: theme.borderColor,
      borderBottomWidth: theme.borderWidth,
      // paddingHorizontal: unit * 2,
    },
    avatarContainer: {
      paddingHorizontal: theme.unit * 2,
    },
    buttonRow: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingVertical: theme.unit * 2,
      paddingHorizontal: theme.unit * 2,
      // height: NAV_HEIGHT,
    },
    buttonRowLeft: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
    },
    multiline: {
      width: innerWidth,
      paddingVertical: theme.unit,
      paddingLeft: 0,
      paddingRight: 0,
    },
    imagePreviewContainer: {
      alignItems: 'flex-end',
      paddingRight: theme.unit * 2,
    },
    imagePreview: {
      height: imageHeight,
      width: innerWidth,
      borderRadius: theme.unit,
      overflow: 'hidden',
      alignItems: 'flex-end',
    },
    closeButton: { backgroundColor: 'rgba(0,0,0,0.85)', margin: theme.unit },
    closeButtonHover: {
      backgroundColor: 'rgba(0,0,0,0.75)',
      margin: theme.unit,
    },
    header: { flexDirection: 'row', marginBottom: theme.unit * 2 },
  };
});

export default ComposeListHeader;

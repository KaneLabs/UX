import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { useQuery, useMutation } from '@apollo/client';
import { TIP_MODAL, CLOSE_TIP_MODAL } from '../../queries';
import { Modal, Title, TextField, Button } from '../../components';
import ClassicalWave from '../../assets/ClassicalWave.jpg';
// import IncoronazioneDellaVergine from '../../assets/Incoronazione_della_Vergine-1080x1080.jpg';

export const TipModal = () => {
  const query = useQuery(TIP_MODAL);
  const open = query?.data?.TipModal?.open;
  const [closeTipModal] = useMutation(CLOSE_TIP_MODAL);
  const [amount, setAmount] = useState('');
  const [number, setNumber] = useState();
  const [expMonth, setExpMonth] = useState();
  const [expYear, setExpYear] = useState();
  const [cvc, setCVC] = useState();

  return (
    <Modal
      open={open}
      onClose={closeTipModal}
      Body={
        <View
          style={{
            width: '100%',
            flex: 1,
            flexDirection: 'row',
            borderRadius: 4,
            overflow: 'hidden',
          }}>
          <View style={{ flex: 1 }}>
            <View style={{ padding: 12 }}>
              <Title type={6} text="Tip Ryan." gutter />
              <TextField autoFocus value={amount} onChangeText={setAmount} />
              <TextField
                placeholder="Number"
                value={number}
                onChangeText={setNumber}
              />
              <TextField
                placeholder="MM"
                value={expMonth}
                onChangeText={setExpMonth}
              />
              <TextField
                placeholder="YY"
                value={expYear}
                onChangeText={setExpYear}
              />
              <TextField placeholder="CVC" value={cvc} onChangeText={setCVC} />
            </View>
            <Button primary text="SEND" onPress={closeTipModal} />
          </View>
          <View style={{ flex: 1 }}>
            <Image
              style={{ flex: 1, height: 270, width: 270 }}
              source={ClassicalWave}
            />
          </View>
        </View>
      }
    />
  );
};

export default TipModal;

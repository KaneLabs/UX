export const filterEmptyContent = (contentBlock) => {
  if (contentBlock.type === 'Text' && contentBlock.text === '') {
    return false;
  }
  return true;
};

export const formatContentForGraph = (content) => {
  const contentArray = Object.entries(content)
    .filter(filterEmptyContent)
    .reduce((acc, [index, contentBlock]) => {
      if (contentBlock.type === 'Image' || contentBlock.type === 'Video') {
        const fileArray = new Array(contentBlock.files);
        const files = fileArray.map((file) => ({ id: file.id, url: file.url }));
        const content = {
          index: parseInt(index, 10),
          type: contentBlock.type,
          files,
        };
        return [...acc, content];
      }
      return [...acc, { index: parseInt(index, 10), ...contentBlock }];
    }, []);
  return contentArray;
};

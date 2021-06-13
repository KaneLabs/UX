module.exports = function(api) {
  console.log('WHICH AM I USING??')
    api.cache(true);
    return {
      presets: [
        'module:metro-react-native-babel-preset',
      ],
      plugins: [
        'react-native-web',
        'module-resolver',
        {
          root: ['../src'],
          alias: {
            'eros-ui': '../src',
          },
        },
      ],
    };
  };
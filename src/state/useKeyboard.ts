import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

export const useKeyboard = () => {
  const [keyboard, setKeyboard] = useState({
    open: false,
    endCoordinates: {},
    startCoordinates: {},
  });

  useEffect(() => {
    const listenerA = Keyboard.addListener('keyboardDidShow', (e) => {
      setKeyboard({ ...e, open: true });
    });
    // const listenerB = Keyboard.addListener('keyboardWillShow', e => setKeyboard(true))
    const listenerC = Keyboard.addListener('keyboardDidHide', (e) => {
      setKeyboard({ ...e, open: false });
    });
    // const listenerD = Keyboard.addListener('keyboardWillHide', e => setKeyboard(false))

    return () => {
      listenerA.remove();
      // listenerB.remove()
      listenerC.remove();
      // listenerD.remove()
    };
  });

  return keyboard;
};

export default useKeyboard;

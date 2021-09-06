import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

const useKeyboard = () => {
  const [keyboard, setKeyboard] = useState<KeyboardEvent>({
    open: false,
    endCoordinates: {},
    startCoordinates: {},
  });

  useEffect(() => {
    const listenerA = Keyboard.addListener(
      'keyboardDidShow',
      (e: KeyboardEvent) => {
        setKeyboard({ ...e, open: true });
      },
    );
    // const listenerB = Keyboard.addListener('keyboardWillShow', e => setKeyboard(true))
    const listenerC = Keyboard.addListener(
      'keyboardDidHide',
      (e: KeyboardEvent) => {
        setKeyboard({ ...e, open: true });
      },
    );
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

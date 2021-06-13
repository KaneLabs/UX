export const validPhoneNumber = (number) => {
  try {
    const digitsOnly = number.replace(/\D/g, '');

    if (digitsOnly.length === 10) {
      return true;
    }

    return false;
  } catch (e) {
    return false;
  }
};

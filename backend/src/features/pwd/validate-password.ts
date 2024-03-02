export const validatePassword = (password: string) => {
  const regEx =
    // eslint-disable-next-line max-len
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (password.match(regEx)) {
    return true;
  }
  return false;
};

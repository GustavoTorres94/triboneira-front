function verifyPasswordLen(password: string): boolean {
  return password.length >= 8;
}

function verifyPassword(password: string): boolean {
  const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}[\]:;<>?,./]).+$/;
  return regex.test(password);
}

export {
  verifyPasswordLen,
  verifyPassword,
};

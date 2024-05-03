function verifyNickLength(nickData: string): boolean {
  return nickData.length >= 3 && nickData.length <= 12;
}

function verifyNick(nickData: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(nickData);
}

export {
  verifyNickLength,
  verifyNick,
};

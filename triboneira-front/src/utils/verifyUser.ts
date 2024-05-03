function verifyUser(userName: string, userLastName: string): boolean {
  if (userName.length < 3 || userLastName.length < 3) return false;
  const regex: RegExp = /[0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;
  return !(regex.test(userName) || regex.test(userLastName));
}

export default verifyUser;

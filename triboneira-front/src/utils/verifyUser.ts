function verifyUser(userName: string, userLastName: string): boolean {
  const regex: RegExp = /[0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;
  return !(regex.test(userName) || regex.test(userLastName));
}

export default verifyUser;

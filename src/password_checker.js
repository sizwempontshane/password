const lengthPassword = /.{9,}/;
const lowercaseLetter = /[a-z]/g;
const uppercaseLetter = /[A-Z]/g;
const digit = /[0-9]/g;
const specialChar = /\W/g;

function passwordIsValid(password) {
  if (password == null) {
    throw Error("password should exist");
  }
  if (!password.match(lengthPassword)) {
    throw Error("password length should be longer than 8 characters");
  }
  if (!password.match(lowercaseLetter)) {
    throw Error("password should have at least one lowercase letter");
  }
  if (!password.match(uppercaseLetter)) {
    throw Error("password should have at least one uppercase letter");
  }
  if (!password.match(digit)) {
    throw Error("password should at least have one digit");
  }
  if (!password.match(specialChar)) {
    throw Error("password should have at least have one special character");
  }

passwordIsValid("Sizwe@13s");

function passwordIsOk(password) {
  var ok = 0;

  if (password != null) {
    ok = ok + 1;
  }
  if (password.match(lengthPassword)) {
    ok = ok + 1;
  }
  if (password.match(lowercaseLetter)) {
    ok = ok + 1;
  }
  if (password.match(uppercaseLetters)) {
    ok = ok + 1;
  }
  if (password.match(digit)) {
    ok = ok + 1;
  }
  if (password.match(specialChar)) {
    ok = ok + 1;
  }
  if (ok >= 3) {
    return true;
  }
  var ok2 = 0;
  if (password == null) {
    ok2 = ok2 + 1;
  }
  if (!password.match(Length)) {
    ok2 = ok2 + 1;
  }
  if ((ok2 = 2)) {
    return true;
  } 
}
console.log(passwordIsOk("Sizwe@13"));

module.exports = {passwordIsValid, passwordIsOk};

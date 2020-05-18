const longerThanEightChar = /.{9,}/;
const lowercaseLetter = /[a-z]/g;
const uppercaseLetter = /[A-Z]/g;
const digit = /[0-9]/g;
const specialChar = /\W/g;

function passwordIsValid(password) {
  if (password == "") {
    throw Error("password should exist");
  }
  if (!password.match(longerThanEightChar)) {
    throw Error("password length should be longer than 8 characters");
    S;
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
}

passwordIsValid("Sizwe@13s");

function passwordIsOk(password) {
  var conditionsMet = 0;

  let passwordIsOk = true;

  if (password != "") {
    conditionsMet = conditionsMet + 1;
  }
  if (password.match(longerThanEightChar)) {
    conditionsMet = conditionsMet + 1;
  }
  if (password.match(lowercaseLetter)) {
    conditionsMet = conditionsMet + 1;
  }
  if (password.match(uppercaseLetter)) {
    conditionsMet = conditionsMet + 1;
  }
  if (password.match(digit)) {
    conditionsMet = conditionsMet + 1;
  }
  if (password.match(specialChar)) {
    conditionsMet = conditionsMet + 1;
  }
  if (conditionsMet < 3 || !password.match(longerThanEightChar)) {
    passwordIsOk = false;
  }
  return passwordIsOk;
  // var conditionsMet2 = 0;
  // if (password == null) {
  //   conditionsMet2 = conditionsMet2 + 1;
  // }
  // if (!password.match(longerThanEightChar)) {
  //   conditionsMet2 = conditionsMet2 + 1;
  // }
  // if ((conditionsMet2 = 2)) {
  //   return true;
}
console.log(passwordIsOk("Sizweseize@13"));

module.exports = { passwordIsValid, passwordIsOk };

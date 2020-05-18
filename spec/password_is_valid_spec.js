const { passwordIsValid } = require("../src/password_checker");

describe("passwordIsValid", function () {
  it("should check if password exists", function () {
    expect(function () {
      passwordIsValid("");
    }).toThrow(new Error("password should exist"));
  });
  it("should check if password has more than 8 letters", function () {
    expect(function () {
      passwordIsValid("Seize");
    }).toThrow(new Error("password length should be longer than 8 characters"));
  });
  it("should check if password has at least one lowercase letter", function () {
    expect(function () {
      passwordIsValid("SEIZEZZZZ");
    }).toThrow(new Error("password should have at least one lowercase letter"));
  });
  it("should check if password has at least one upperercase letter", function () {
    expect(function () {
      passwordIsValid("siezwe123");
    }).toThrow(new Error("password should have at least one uppercase letter"));
  });
  it("should check if password has at least one number", function () {
    expect(function () {
      passwordIsValid("Sizwe@mpo");
    }).toThrow(new Error("password should at least have one digit"));
  });
  it("should check if password has at least special character", function () {
    expect(function () {
      passwordIsValid("Sizwe13rt");
    }).toThrow(
      new Error("password should have at least have one special character")
    );
  });
});

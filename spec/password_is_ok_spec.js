const { passwordIsOk } = require("../src/password_checker");

describe("passwordIsOk", function () {
  it("should test if password exists", function () {
    expect(passwordIsOk("")).toBe(false);
  });
  it("should test if password is greater than 8 characters", function () {
    expect(passwordIsOk("sizwe13hg")).toBe(true);
  });
  it("should test if password has at least 1 lowercase letter", function () {
    expect(passwordIsOk("SIZWEsanele2")).toBe(true);
  });
  it("should test if password has at least 1 uppercase letter", function () {
    expect(passwordIsOk("sizeweSandz21")).toBe(true);
  });
  it("should test if password has at least 1 number", function () {
    expect(passwordIsOk("Siezwe13bae")).toBe(true);
  });
  it("should test if password has at least 1 special character", function () {
    expect(passwordIsOk("Sizwesa12")).toBe(true);
  });
  it("should test if  conditionsMet are less than 3 or password is less than 8 characters", function () {
    expect(passwordIsOk("SizweSAndz13")).toBe(true);
  });
});

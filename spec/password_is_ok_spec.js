const { passwordIsOk } = require("../src/password_checker");

describe("passwordIsOk", function () {
  it("shouold check if password meets at least 3 conditions", function () {
    expect(function () {
      passwordIsOk("Sizwe1308");
    }).toThrow(true);
  });
  // it("should check if password meets the 1st two coditions", functions(){
  //   expect(function () { passwordIsOk("")}).toBe("password is never ok")
  // })
  
});

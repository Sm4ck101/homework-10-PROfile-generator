const Manager = require("../lib/Manager");

const example = new Manager(9, "boss", "boss@boss.com");

test("manager class returns an object where the name property is a string", () => {
  expect(typeof example.name).toBe("string");
});

test("get office number returns the correct office number", () => {
  expect(example.getOfficeNumber()).toBe(this.officeNumber);
});

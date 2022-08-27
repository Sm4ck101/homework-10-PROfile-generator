const Intern = require("../lib/Intern");

const example = new Intern(8, "Claire", "claire@claire.com");

test("intern class returns an object where the name property is a string", () => {
  expect(typeof example.name).toBe("string");
});

test("get role returns the correct school name", () => {
  expect(example.getSchool()).toBe(this.school);
});

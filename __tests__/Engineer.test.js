const Engineer = require("../lib/Engineer");

const example = new Engineer(5, "albert", "albert@albert.com");

test("engineer class returns an object where the name property is a string", () => {
  expect(typeof example.name).toBe("string");
});

test("get Github returns the correct github username", () => {
  expect(example.getGithub()).toBe(this.github);
});

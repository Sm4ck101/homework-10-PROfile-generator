const Employee = require("../lib/Employee");

const example = new Employee(3, "mike", "mike@mike.com");

test("employee class returns an object where the name property is a string", () => {
  expect(typeof example.name).toBe("string");
});

test('get role returns the string "Employee"', () => {
  expect(example.getRole()).toBe("Employee");
});

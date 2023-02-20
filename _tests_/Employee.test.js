//employee test
const Employee = require("../lib/Employee");

describe("Employee",() => {
    describe("Initializing", () => {
        it("Should return an object using properties name, id and email", () => {
            const employee = new Employee("Reese", 213456, "potato@test.com");
        })
    })
})
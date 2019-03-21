const assert = require("assert");

class BankCustomer {
  constructor(name, pinInput) {
    let customersName = name;
    let privatePin = pinInput;
    this.getName = () => customersName;
    this.verifyPinInput = privatePin => {
      if (pinInput == privatePin) {
        return true;
      } else {
        return false;
      }
    };
  }
}

const customer = new BankCustomer("John Doe", "3579");
assert.equal(typeof customer.getName, "function");
assert.equal(typeof customer.verifyPinInput, "function");
assert.equal(customer.getName(), "John Doe");
assert.ok(customer.verifyPinInput("3579"));
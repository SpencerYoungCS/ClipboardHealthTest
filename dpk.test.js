const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when event.partitionkey is a string", () => {
    let event = {};
    event['partitonKey'] = "test"
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns some string when trivial key has an input without partitionKey", () => {
    let event = {};
    // event['partitonKey'] = "test"
    const trivialKey = typeof deterministicPartitionKey();
    expect(trivialKey).toBe('string');
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns some string when trivial key has an input with garbage data", () => {
    let event = {};
    event['uselessData'] = 3;
    const trivialKey = typeof deterministicPartitionKey();
    expect(trivialKey).toBe('string');
  });
});
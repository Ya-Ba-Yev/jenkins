const { test } = require("node:test");
const assert = require("node:assert");
const { greets, randomGreets }  = require("../greets");

test("there is atleast 5 greets in the factory", () => {
    assert.ok(greets.length >= 5, "Need at least 5 greets");
})

test("every greet is a non empty string", () => {
    for(const greet of greets) {
        assert.strictEqual(typeof greet, "string", "greet has to be a string");
        assert.ok(greet.trim().length > 0, "there is an empty greet");
    }
});

test('Greets returnes a greet from the list', () => {
    const result = randomGreets();
    assert.ok(greets.includes(result), "the greet has to be from the list");
})
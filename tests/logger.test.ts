import {logger} from "../lib";

const TEST_MSG = 'Test Message';
const TEST_OBJECT = {test:"object"}
const TEST_ARRAY = [1,2,3,4,5];

const TEST_MSG_RESPONSE = /\[Test.*\]/;
const TEST_OBJECT_RESPONSE = "\n{\n\t\"test\": \"object\"\n}"
const TEST_ARRAY_RESPONSE = "\n[\n\t1,\n\t2,\n\t3,\n\t4,\n\t5\n]"

test("logger.test no object", () => {
    console.log = jest.fn();
    logger.test(TEST_MSG);
    expect(console.log.mock.calls[0][1]).toMatch(TEST_MSG_RESPONSE);
    expect(console.log.mock.calls[0][2]).toBe(TEST_MSG);
});

test("logger.test object", () => {
    console.log = jest.fn();
    logger.test(TEST_MSG, TEST_OBJECT);
    expect(console.log.mock.calls[0][1]).toMatch(TEST_MSG_RESPONSE);
    expect(console.log.mock.calls[0][2]).toBe(TEST_MSG);
    expect(console.log.mock.calls[0][3]).toBe(TEST_OBJECT_RESPONSE);
});

test("logger.test array", () => {
    console.log = jest.fn();
    logger.test(TEST_MSG, TEST_ARRAY);
    expect(console.log.mock.calls[0][1]).toMatch(TEST_MSG_RESPONSE);
    expect(console.log.mock.calls[0][2]).toBe(TEST_MSG);
    expect(console.log.mock.calls[0][3]).toBe(TEST_ARRAY_RESPONSE);
});
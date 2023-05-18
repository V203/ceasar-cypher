"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const mocha_1 = require("mocha");
const isbn13_1 = require("../isbn13");
(0, mocha_1.describe)("Ceases Cypher tests", () => {
    (0, mocha_1.it)("The isbn number 9780316066525 should return Valid.", () => {
        let result = "Valid";
        assert_1.default.equal((0, isbn13_1.isbn13)('9780316066525'), result);
    });
    (0, mocha_1.it)("The isbn number 9783866155237 should return Valid.", () => {
        let result = "Valid";
        assert_1.default.equal((0, isbn13_1.isbn13)('9780316066525'), result);
    });
    (0, mocha_1.it)("The isbn number 9780345453747 should return Valid.", () => {
        let result = "Valid";
        assert_1.default.equal((0, isbn13_1.isbn13)('9780316066525'), result);
    });
    (0, mocha_1.it)("The isbn number 031606652X should return Invalid.", () => {
        let result = "Invalid";
        assert_1.default.equal((0, isbn13_1.isbn13)('031606652X'), result);
    });
    (0, mocha_1.it)("The isbn number 9783876155237 should return Invalid.", () => {
        let result = "Invalid";
        assert_1.default.equal((0, isbn13_1.isbn13)('9783876155237'), result);
    });
    (0, mocha_1.it)("The isbn number 0345453747 should return Invalid.", () => {
        let result = "Invalid";
        assert_1.default.equal((0, isbn13_1.isbn13)('0345453747'), result);
    });
    (0, mocha_1.it)("The isbn number 0316066524 should return 9780316066525.", () => {
        let result = "9780316066525";
        assert_1.default.equal((0, isbn13_1.isbn13)('0316066524'), result);
    });
    (0, mocha_1.it)("The isbn number 3866155239 should return 9783866155237.", () => {
        let result = "9783866155237";
        assert_1.default.equal((0, isbn13_1.isbn13)('3866155239'), result);
    });
    (0, mocha_1.it)("The isbn number 817450494X should return 9788174504944.", () => {
        let result = "9788174504944";
        assert_1.default.equal((0, isbn13_1.isbn13)('817450494X'), result);
    });
});
// assert.equal(isbn13('9780316066525'),'Valid')
// assert.equal(isbn13('9783866155237'),'Valid')
// assert.equal(isbn13('9780345453747'),'Valid')
// assert.equal(isbn13('031606652X'),'Invalid')
// assert.equal(isbn13('9783876155237'),'Invalid')
// assert.equal(isbn13('0345453747'),'Invalid')
// assert.equal(isbn13('0316066524'),'9780316066525')
// assert.equal(isbn13('3866155239'),'9783866155237')
// assert.equal(isbn13('817450494X'),'9788174504944')

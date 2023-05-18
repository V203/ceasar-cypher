import assert from "assert";
import { describe, it } from "mocha";
import { isbn13 } from "../isbn13"

describe("Ceases Cypher tests", () => {
    it("The isbn number 9780316066525 should return Valid.", () => {

        let result: string = "Valid";

        assert.equal(isbn13('9780316066525'), result);
    })

    it("The isbn number 9783866155237 should return Valid.", () => {

        let result = "Valid";

        assert.equal(isbn13('9780316066525'), result);
    })

    it("The isbn number 9780345453747 should return Valid.", () => {

        let result: string = "Valid";

        assert.equal(isbn13('9780316066525'), result);
    })

    it("The isbn number 031606652X should return Invalid.", () => {

        let result: string = "Invalid";

        assert.equal(isbn13('031606652X'), result);
    })

    it("The isbn number 9783876155237 should return Invalid.", () => {

        let result: string = "Invalid";

        assert.equal(isbn13('9783876155237'), result);
    })

    it("The isbn number 0345453747 should return Invalid.", () => {

        let result: string = "Invalid";

        assert.equal(isbn13('0345453747'), result);
    })

    it("The isbn number 0316066524 should return 9780316066525.", () => {

        let result: string = "9780316066525";

        assert.equal(isbn13('0316066524'), result);
    })

    it("The isbn number 3866155239 should return 9783866155237.", () => {

        let result: string = "9783866155237";

        assert.equal(isbn13('3866155239'), result);
    })

    it("The isbn number 817450494X should return 9788174504944.", () => {

        let result: string = "9788174504944";

        assert.equal(isbn13('817450494X'), result);
    })



})


// assert.equal(isbn13('9780316066525'),'Valid')
// assert.equal(isbn13('9783866155237'),'Valid')
// assert.equal(isbn13('9780345453747'),'Valid')
// assert.equal(isbn13('031606652X'),'Invalid')
// assert.equal(isbn13('9783876155237'),'Invalid')
// assert.equal(isbn13('0345453747'),'Invalid')
// assert.equal(isbn13('0316066524'),'9780316066525')
// assert.equal(isbn13('3866155239'),'9783866155237')
// assert.equal(isbn13('817450494X'),'9788174504944')
const {
    wordLength,
    wordLetters,
    targetIndex,
} = require("./Challenge18");

describe("Challenge18-01", () => {
    test("Get-Word-Length", () => {
        let test1 = "You can't handle the truth!"
        let test2 = "You're gonna need a bigger boat"

        expect(wordLength(test1)).toStrictEqual(6);
        expect(wordLength(test2)).toStrictEqual(1);
    });
});

describe("Challenge18-02", () => {
    test("Check-Words-Letters", () => {
        expect(wordLetters("dad", "add")).toStrictEqual(true);
        expect(wordLetters("dad", "aadd")).toStrictEqual(false);
        expect(wordLetters("table", "label")).toStrictEqual(false);
        expect(wordLetters("cat", "rat")).toStrictEqual(false);
    });
});

describe("Challenge18-03", () => {
    test.skip("Find-Target-Index", () => {
        expect(targetIndex([1, 3, 5, 6], 5)).toStrictEqual(2);
        expect(targetIndex([1, 3, 5, 6], 2)).toStrictEqual(1);
        expect(targetIndex([1, 3, 5, 6], 7)).toStrictEqual(4);
    });
});

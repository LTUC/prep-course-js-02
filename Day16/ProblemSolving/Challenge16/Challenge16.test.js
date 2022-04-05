const { reverseString, detectFace, eveCharacter, chickenGradients } = require('./Challenge16');

describe('Challenge16-01', () => {
    test('Reverse-String', () => {
        let inputString = "Bard's"

        expect(reverseString(inputString)).toStrictEqual("s'draB");
        expect(reverseString(inputString).charAt(0)).toStrictEqual("s");
    })
})


describe('Challenge16-02', () => {
    test('Detect face', () => {
        let inputString = ["hello ^_^ ", "Hi ^_^", "What's up ^_-", "lol"]
        expect(detectFace(inputString)).toStrictEqual(["hello ^_^ ", "Hi ^_^"]);

    })
})

describe('Challenge16-03', () => {
    test.skip('Even characters', () => {
        let input = "coding";
        let output = "cdn"

        expect(eveCharacter(input)).toStrictEqual(output);
    })
})

describe('Challenge16-04', () => {
    test.skip('Chicken Gradients', () => {
        let input = [
            ["mushroom", "grilled chicken", "sauce"],
            ["Bread", "Potato", "baked chicken"],
            ["fried potato", "garlic sauce", "fried chicken"]
        ];;
        let output = [
            ["grilled chicken"],
            ["baked chicken"],
            ["fried chicken"]
        ]

        expect(chickenGradients(input)).toStrictEqual(output);
    })
})
const { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter } = require('./Challenge14');

describe('Challenge14-01', () => {
    test('LastWord', () => {

        let test1 = "I did my waiting 12 years of it in Azkaban";
        let res1 = "Azkaban";
        let test2 = "Impossible";
        let res2 = "Impossible";
        let test3 = "you dare use my spells against me, potter";
        let res3 = "potter";

        expect(LastWord(test1)).toStrictEqual(res1);
        expect(LastWord(test2)).toStrictEqual(res2);
        expect(LastWord(test3)).toStrictEqual(res3);

    })
});

describe('Challenge14-02', () => {
    test('LastWord_2', () => {

        let test1 = "I did my waiting 12 years of it in Azkaban";
        let res1 = "Azkaban";
        let test2 = "Impossible";
        let res2 = "Impossible";
        let test3 = "you dare use my spells against me, potter";
        let res3 = "potter";

        expect(LastWord_2(test1)).toStrictEqual(res1);
        expect(LastWord_2(test2)).toStrictEqual(res2);
        expect(LastWord_2(test3)).toStrictEqual(res3);
    })
})

describe('Challenge14-03', () => {
    test('replace_The_Words', () => {

        let test1 = "I thought you had a plan";
        let res1 = "We thought you had a plan";

        let test2 = "I was there 3000 years ago";
        let res2 =  "We were there 3000 years ago";

        let test3 = "I am Venom";
        let res3 =  "We are Venom";

        expect(replaceWords(test1)).toStrictEqual(res1);
        expect(replaceWords(test2)).toStrictEqual(res2);
        expect(replaceWords(test3)).toStrictEqual(res3);
    })
})


describe('Challenge14-04', () => {
    test('array_To_String', () => {

        let test1 = ["move", "it", "away", "from", "the", "street"];
        let res1 = "move it away from the, street";

        let test2 = ["hello", "from", "the", "other", "side"];
        let res2 = "hello from the other side,";

        expect(arrToStr(test1)).toEqual(res1);
        expect(arrToStr(test2)).toEqual(res2);

    })
})

describe('Challenge14-05', () => {
    test.skip('letter_Counter', () => {

        let test1 = "aaaa bbb sdf"; 
        let res1 = "a4 b3 s1d1f1";

        let test2 = "Good morning";
        let res2 = "G1o2d1 m1o1r1n1i1n1g1";

        expect(letterCounter(test1)).toEqual(res1);
        expect(letterCounter(test2)).toEqual(res2);

    })
})

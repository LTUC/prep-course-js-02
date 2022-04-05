const {
    recursionPattern,
    filterLinks,
    isPalindrome,
    samePattern,
} = require("./Challenge17");

describe("Challenge17-01", () => {
    test("Recursion-Pattern", () => {
        let Output1 = [16, 11, 6, 1, -4, 1, 6, 11, 16];
        let Output2 = [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50];

        expect(recursionPattern(16, 5)).toStrictEqual(Output1);
        expect(recursionPattern(50, 9)).toStrictEqual(Output2);
    });
});

describe("Challenge17-02", () => {
    let test1 ='<a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a>';
    let test2 ='<a href="http://www.something.org"><h1><b>HackerRank</b></h1></a>';

    let res1 = "www.hackerrank.com";
    let res2 = "www.something.org";
    
    test("Filter-Links", () => {
        expect(filterLinks(test1)).toStrictEqual(res1);
        expect(filterLinks(test2)).toStrictEqual(res2);
    });
});

describe("Challenge17-03", () => {
    let test1 =  "A man, a plan, a canal: Panama";
    let test2 = "race a car";
    let test3 = " ";
    let test4 = "f";

    test("Is-Palindrome", () => {
        expect(isPalindrome(test1)).toStrictEqual(true);
        expect(isPalindrome(test2)).toStrictEqual(false);
        expect(isPalindrome(test3)).toStrictEqual(true);
        expect(isPalindrome(test4)).toStrictEqual(true);
    });
});

describe.skip("Challenge17-04", () => {
    test("Have-Same-Pattern", () => {

        expect(samePattern("cda", ['cat', 'dog', 'cat'])).toStrictEqual(false);
        expect(samePattern("abba", ['cat', 'dog', 'dog', 'cat'])).toStrictEqual(true);
        expect(samePattern("cda", ['mouse', 'dog', 'cat'])).toStrictEqual(true);
    });
});

'use strict';

const { findMax, sumNums, reverseArray } = require('./Challenge06');

describe('Challenge01', () => {
    test('Find_Max', () => {
        expect(findMax([12, 32, 22, 45, 78, 12, 50])).toStrictEqual(78);
        expect(findMax([20, 31, 15, 41, 20, 48])).toStrictEqual(48);
        expect(findMax([88, 10, 10, 46, 71])).toStrictEqual(88);
    })

    test('Sum_Nums', () => {
        expect(sumNums([78, 'sad', 45, 'hungry', 'agony', 23, 10])).toStrictEqual(156);
        expect(sumNums([20, '234', 'car', 41, 20, 'chair'])).toStrictEqual(81);
        expect(sumNums([88, 10, 10, 46, 71])).toStrictEqual(225);
    })

    test('reverse_Array', () => {
        expect(reverseArray([1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1]);
        expect(reverseArray(['C#', 'JS', 'Ruby', 'Python'])).toStrictEqual(['Python', 'Ruby', 'JS', 'C#']);
        expect(reverseArray(['88', 10, 'course', 71])).toStrictEqual([71, 'course', 10, '88']);
    })
})
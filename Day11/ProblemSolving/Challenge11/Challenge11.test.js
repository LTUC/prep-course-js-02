const { square, fullName, gradesAvg, studentsResult } = require('./Challenge11');

var students = [{
        firstName: 'Adam',
        lastName: 'Anderson',
        gradsList: [20, 50, 13, 11, 2, 45, 60, 29]
    },
    {
        firstName: 'Ben',
        lastName: 'Zeller',
        gradsList: [20, 10, 11, 11, 2, 5, 3, 2]
    },
    {
        firstName: 'Peter',
        lastName: 'Mccord',
        gradsList: [62, 50, 80, 90, 39, 45, 60, 50],
    },
    {
        firstName: 'Fred',
        lastName: 'Sagar',
        gradsList: [20, 10, 18, 11, 2, 20, 3, 10]
    }
]


var example = [{
        firstName: 'Adam',
        lastName: 'Anderson',
    },
    {
        firstName: 'Ben',
        lastName: 'Zeller',
    },
    {
        firstName: 'Peter',
        lastName: 'Mccord',
    }
]


var output = ['Adam Anderson', 'Ben Zeller', 'Peter Mccord']

describe('Challenge 11', () => {
    test('this function calculate the square for the array indexes', () => {
            var arr = [5, 9, 2, 10, 11, 6]
            expect(square(arr)).toStrictEqual([25, 81, 4, 100, 121, 36])
        }),

        test('this function will combine the first and last name of the students', () => {
            expect(fullName(example)).toStrictEqual(output)
        })

    test('this function calculate the average grades of the students', () => {
        expect(gradesAvg(students)).toStrictEqual(
            [{
                    firstName: 'Adam',
                    lastName: 'Anderson',
                    gradsList: [
                        20, 50, 13, 11,
                        2, 45, 60, 29
                    ],
                    avg: 28.75
                },
                {
                    firstName: 'Ben',
                    lastName: 'Zeller',
                    gradsList: [
                        20, 10, 11, 11,
                        2, 5, 3, 2
                    ],
                    avg: 8
                },
                {
                    firstName: 'Peter',
                    lastName: 'Mccord',
                    gradsList: [62, 50, 80, 90, 39, 45, 60, 50],
                    avg: 59.5,
                },
                {
                    firstName: 'Fred',
                    lastName: 'Sagar',
                    gradsList: [20, 10, 18, 11, 2, 20, 3, 10],
                    avg: 11.75,
                }
            ]
        )
    });

    test.skip('this function will determine the failed from the passed students', () => {
        expect(studentsResult(gradesAvg(students))).toStrictEqual(
            [{
                    firstName: 'Adam',
                    lastName: 'Anderson',
                    gradsList: [20, 50, 13, 11, 2, 45, 60, 29],
                    avg: 28.75,
                    result: 'Failed'
                },
                {
                    firstName: 'Ben',
                    lastName: 'Zeller',
                    gradsList: [20, 10, 11, 11, 2, 5, 3, 2],
                    avg: 8,
                    result: 'Failed'
                },
                {
                    firstName: 'Peter',
                    lastName: 'Mccord',
                    gradsList: [62, 50, 80, 90, 39, 45, 60, 50],
                    avg: 59.5,
                    result: 'Passed'
                },
                {
                    firstName: 'Fred',
                    lastName: 'Sagar',
                    gradsList: [20, 10, 18, 11, 2, 20, 3, 10],
                    avg: 11.75,
                    result: 'Failed'
                }
            ]
        )
    })
})
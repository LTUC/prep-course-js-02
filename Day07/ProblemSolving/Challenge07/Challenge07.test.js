'use strict';

const { objLat, cvFormatter, applicationsStatics, classesAvg } = require('./Challenge07');

const data = {
    SchoolName: "Al Farouk",
    Capacity: 1000,
    grades: [{
        grade: "First",
        numberOFClasses: 3,
        classes: [{
            avg: 0,
            classNumber: "01",
            classScores: [
                89, 87, 45, 48, 89, 65, 21, 54, 78, 62, 51, 54, 50, 49
            ]
        },
        {
            avg: 0,
            classNumber: "02",
            classScores: [
                87, 54, 95, 45, 41, 51, 25, 63, 58, 47, 64, 51, 98, 100
            ]
        },
        {
            avg: 0,
            classNumber: "03",
            classScores: [
                74, 85, 20, 51, 59, 58, 62, 71, 74, 99, 84, 71, 38, 70
            ]
        },
        ]
    },
    {
        grade: "Second",
        numberOFClasses: 2,
        classes: [{
            avg: 0,
            classNumber: "01",
            classScores: [
                71, 82, 86, 3, 1, 52, 91, 84, 44, 68, 64, 23, 80, 60,
            ]
        },
        {
            avg: 0,
            classNumber: "02",
            classScores: [
                86, 39, 71, 17, 61, 76, 60, 54, 42, 65, 49, 75, 96, 70
            ]
        },
        ]
    },
    {
        grade: "Third",
        numberOFClasses: 2,
        classes: [{
            avg: 0,
            classNumber: "01",
            classScores: [
                11, 12, 28, 78, 57, 3, 54, 72, 14, 19, 88, 74, 68, 58
            ]
        },
        {
            avg: 0,
            classNumber: "02",
            classScores: [
                62, 8, 35, 43, 96, 9, 97, 73, 4, 32, 18, 81, 70, 42
            ]
        },
        ]
    },
    {
        grade: "Forth",
        numberOFClasses: 4,
        classes: [{
            avg: 0,
            classNumber: "01",
            classScores: [
                63, 71, 93, 87, 83, 85, 67, 49, 62, 45, 38, 48, 58, 52
            ]
        },
        {
            avg: 0,
            classNumber: "02",
            classScores: [
                100, 45, 70, 75, 87, 63, 39, 46, 54, 68, 74, 96, 52, 49
            ]
        },
        {
            avg: 0,
            classNumber: "03",
            classScores: [
                97, 54, 80, 95, 69, 31, 88, 84, 50, 81, 67, 34, 41, 87
            ]
        },
        {
            avg: 0,
            classNumber: "04",
            classScores: [
                64, 96, 66, 38, 78, 58, 43, 100, 34, 56, 82, 53, 89, 72
            ]
        },
        ]
    },
    ],
};

describe('Challenge07', () => {
    test('Object-Laterals', () => {
        var first_Person = {
            firstName: 'John',
            lastName: 'Doe',
            age: 42,
            hobby: 'Reading'
        }

        var second_Person = {
            firstName: 'Jane',
            lastName: 'Doe',
            age: 33,
            hobby: 'Campaign'
        }

        var third_Person = {
            firstName: 'mark',
            lastName: 'Kimberly',
            age: 25,
            hobby: 'hiking'
        }
        expect(objLat(first_Person)).toStrictEqual('my name is John Doe I am 42 YO, and I love Reading.');
        expect(objLat(second_Person)).toStrictEqual('my name is Jane Doe I am 33 YO, and I love Campaign.');
        expect(objLat(third_Person)).toStrictEqual('my name is Mark Kimberly I am 25 YO, and I love hiking.');
    })

})

describe('Challenge07', () => {
    test('CV-Formatter', () => {
        let first_Cv_Sample = [{
            firstName: "Jason",
            lastName: "James",
            yearsOfExperience: 20,
            tech: "JS"
        },
        {
            firstName: "Aaron",
            lastName: "William",
            yearsOfExperience: 2,
            tech: "JS"
        },
        {
            firstName: "Shira",
            lastName: null,
            yearsOfExperience: 5,
            tech: ".Net"
        },
        {
            firstName: "Dimitri",
            lastName: "Akkerman",
            yearsOfExperience: 1,
            tech: "Python"
        },
        {
            firstName: "Isabella",
            lastName: null,
            yearsOfExperience: 7,
            tech: "Java"
        }
        ]

        let second_Cv_Sample = [{
            firstName: "Adele",
            lastName: "Douglas",
            yearsOfExperience: 7,
            tech: ".Net"
        },
        {
            firstName: "Jack",
            lastName: "Tyler",
            yearsOfExperience: 17,
            tech: "Java"
        },
        {
            firstName: null,
            lastName: "Henry",
            yearsOfExperience: 0,
            tech: "JS"
        },
        {
            firstName: "Jose",
            lastName: "Adam",
            yearsOfExperience: 5,
            tech: ".Net"
        },
        {
            firstName: "Victoria",
            lastName: "Zachary",
            yearsOfExperience: 10,
            tech: "Python"
        }
        ]

        let received = [{
            fullName: "Jason James",
            tech: "JS"
        },
        {
            fullName: "Aaron William",
            tech: "JS"
        },
        {
            fullName: "Shira",
            tech: ".Net"
        },
        {
            fullName: "Isabella",
            tech: "Java"
        }
        ]

        let received2 = [{
            fullName: "Adele Douglas",
            tech: ".Net"
        },
        {
            fullName: "Jack Tyler",
            tech: "Java"
        },
        {
            fullName: "Jose Adam",
            tech: ".Net"
        },
        {
            fullName: "Victoria Zachary",
            tech: "Python"
        }
        ]
        expect(cvFormatter(first_Cv_Sample)).toStrictEqual(received);
        expect(cvFormatter(second_Cv_Sample)).toStrictEqual(received2);

    })

})

describe('Challenge07', () => {

    test.skip('cv_filter', () => {
        let received = {
            python_Devs: 1,
            javaScript_Devs: 2,
            dotNet_Devs: 1,
            java_Devs: 1,
            totalApplicants: 5,
            rejectedApplicants: 1,
        }

        let received2 = {
            python_Devs: 1,
            javaScript_Devs: 1,
            dotNet_Devs: 2,
            java_Devs: 1,
            totalApplicants: 5,
            rejectedApplicants: 1,
        }

        let first_Cv_Sample = [{
            firstName: "Jason",
            lastName: "James",
            yearsOfExperience: 20,
            tech: "JS"
        },
        {
            firstName: "Aaron",
            lastName: "William",
            yearsOfExperience: 2,
            tech: "JS"
        },
        {
            firstName: "Shira",
            lastName: null,
            yearsOfExperience: 5,
            tech: ".Net"
        },
        {
            firstName: "Dimitri",
            lastName: "Akkerman",
            yearsOfExperience: 1,
            tech: "Python"
        },
        {
            firstName: "Isabella",
            lastName: null,
            yearsOfExperience: 7,
            tech: "Java"
        }
        ]

        let second_Cv_Sample = [{
            firstName: "Adele",
            lastName: "Douglas",
            yearsOfExperience: 7,
            tech: ".Net"
        },
        {
            firstName: "Jack",
            lastName: "Tyler",
            yearsOfExperience: 17,
            tech: "Java"
        },
        {
            firstName: null,
            lastName: "Henry",
            yearsOfExperience: 0,
            tech: "JS"
        },
        {
            firstName: "Jose",
            lastName: "Adam",
            yearsOfExperience: 5,
            tech: ".Net"
        },
        {
            firstName: "Victoria",
            lastName: "Zachary",
            yearsOfExperience: 10,
            tech: "Python"
        }
        ]

        expect(applicationsStatics(first_Cv_Sample)).toStrictEqual(received);
        expect(applicationsStatics(second_Cv_Sample)).toStrictEqual(received2);
    })

})

describe('Challenge07', () => {
    test.skip('classes_Avg', () => {
        let received = {
            SchoolName: "Al Farouk",
            Capacity: 1000,
            grades: [{
                grade: "First",
                numberOFClasses: 3,
                classes: [{
                    avg: 60,
                    classNumber: "01",
                    classScores: [
                        89, 87, 45, 48, 89, 65, 21, 54, 78, 62, 51, 54, 50, 49
                    ]
                },
                {
                    avg: 62,
                    classNumber: "02",
                    classScores: [
                        87, 54, 95, 45, 41, 51, 25, 63, 58, 47, 64, 51, 98, 100
                    ]
                },
                {
                    avg: 65,
                    classNumber: "03",
                    classScores: [
                        74, 85, 20, 51, 59, 58, 62, 71, 74, 99, 84, 71, 38, 70
                    ]
                },
                ]
            },
            {
                grade: "Second",
                numberOFClasses: 2,
                classes: [{
                    avg: 57,
                    classNumber: "01",
                    classScores: [
                        71, 82, 86, 3, 1, 52, 91, 84, 44, 68, 64, 23, 80, 60,
                    ]
                },
                {
                    avg: 61,
                    classNumber: "02",
                    classScores: [
                        86, 39, 71, 17, 61, 76, 60, 54, 42, 65, 49, 75, 96, 70
                    ]
                },
                ]
            },
            {
                grade: "Third",
                numberOFClasses: 2,
                classes: [{
                    avg: 45,
                    classNumber: "01",
                    classScores: [
                        11, 12, 28, 78, 57, 3, 54, 72, 14, 19, 88, 74, 68, 58
                    ]
                },
                {
                    avg: 47,
                    classNumber: "02",
                    classScores: [
                        62, 8, 35, 43, 96, 9, 97, 73, 4, 32, 18, 81, 70, 42
                    ]
                },
                ]
            },
            {
                grade: "Forth",
                numberOFClasses: 4,
                classes: [{
                    avg: 64,
                    classNumber: "01",
                    classScores: [
                        63, 71, 93, 87, 83, 85, 67, 49, 62, 45, 38, 48, 58, 52
                    ]
                },
                {
                    avg: 65,
                    classNumber: "02",
                    classScores: [
                        100, 45, 70, 75, 87, 63, 39, 46, 54, 68, 74, 96, 52, 49
                    ]
                },
                {
                    avg: 68,
                    classNumber: "03",
                    classScores: [
                        97, 54, 80, 95, 69, 31, 88, 84, 50, 81, 67, 34, 41, 87
                    ]
                },
                {
                    avg: 66,
                    classNumber: "04",
                    classScores: [
                        64, 96, 66, 38, 78, 58, 43, 100, 34, 56, 82, 53, 89, 72
                    ]
                },
                ]
            },
            ],
        };

        expect(classesAvg(data)).toStrictEqual(received);

    })
})
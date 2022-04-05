const { objectCounter, stringReverse, statistics, cleanData } = require('./Challenge13');

describe('Challenge13-01', () => {
    test('Object-Counter', () => {
        var voters = [
            {
                voter_Name: "Adam Scott",
                votes_To: "James",
            },
            {
                voter_Name: "Abril Blake",
                votes_To: "Jade",
            },
            {
                voter_Name: "Ruby Andrews",
                votes_To: "Jade",
            },
            {
                voter_Name: "Junior Maxwell",
                votes_To: "Bailey",
            },
            {
                voter_Name: "Junior Maxwell",
                votes_To: "Bailey",
            }
        ];
        var voters2 = [
            {
                voter_Name: "Adam Scott",
                votes_To: "James",
            },
            {
                voter_Name: "Junior Maxwell",
                votes_To: "Bailey",
            }
        ];

        expect(objectCounter(voters)).toStrictEqual(5);
        expect(objectCounter(voters2)).toStrictEqual(2);
    })
});

describe('Challenge13-02', () => {
    test('String-Reverse', () => {

        let test1 = 'you shall not pass';
        let res1 = 'pass not shall you';

        let test2 = 'I am your father';
        let res2 = 'father your am I';

        expect(stringReverse(test1)).toStrictEqual(res1);
        expect(stringReverse(test2)).toStrictEqual(res2);

    })
})

describe('Challenge13-03', () => {
    test.skip('Get-statistics', () => {

        let voters = [
            {
                voter_Name: "Adam Scott",
                votes_To: "James",
            },
            {
                voter_Name: "Abril Blake",
                votes_To: "Jade",
            },
            {
                voter_Name: "Ruby Andrews",
                votes_To: "Jade",
            },
            {
                voter_Name: "Junior Maxwell",
                votes_To: "Bailey",
            },
            {
                voter_Name: "Junior Maxwell",
                votes_To: "Bailey",
            }
        ];

        let res = {
            James: 1,
            Jade: 2,
            Bailey: 2
        };

        let voters2 = [
            {
                voter_Name: "Adam Scott",
                votes_To: "Chad",
            },
            {
                voter_Name: "Abril Blake",
                votes_To: "Jade",
            },
            {
                voter_Name: "Junior Maxwell",
                votes_To: "Chad",
            },
            {
                voter_Name: "Junior Maxwell",
                votes_To: "Jade",
            }
        ];

        let res2 = {
            Chad: 2,
            Jade: 2,
        };

        expect(statistics(voters)).toEqual(res);
        expect(statistics(voters2)).toEqual(res2);

    })
})
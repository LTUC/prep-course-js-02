const { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison } = require('./Challenge12');

describe('Challenge12-01', () => {
    test('Get_odd_numbers', () => {
        let list1 = [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200];
        let list2 = [25, 47, 8, 95, 2, 3, 55, 41];
        let list3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        let res1 = [89, 41, 31, 111, 15, 31];
        let res2 = [25, 47, 95, 3, 55, 41];
        let res3 = [1, 3, 5, 7, 9];

        expect(oddFiltration(list1)).toStrictEqual(res1);
        expect(oddFiltration(list2)).toStrictEqual(res2);
        expect(oddFiltration(list3)).toStrictEqual(res3);
    })
});

describe('Challenge12-02', () => {
    test('cvsFiltration', () => {
        let cvs1 = [
            {
                firstName: "Jason",
                LastName: "James",
                yearsOfExperience: 20,
                tech: "JS"
            },
            {
                firstName: "Shira",
                LastName: null,
                yearsOfExperience: 5,
                tech: ".Net"
            },
            {
                firstName: "Dmitri",
                LastName: "Akkerman",
                yearsOfExperience: 1,
                tech: "Python"
            },
            {
                firstName: "Isabella",
                LastName: null,
                yearsOfExperience: 4,
                tech: "Java"
            }
        ];
        let res1 = [
            {
                fullName: "Jason James",
                tech: "JS"
            }
        ];

        let cvs2 = [
            {
                firstName: "Nelson",
                LastName: "Mandela",
                yearsOfExperience: 15,
                tech: "JS"
            },
            {
                firstName: "Shira",
                LastName: null,
                yearsOfExperience: 1,
                tech: ".Net"
            },
            {
                firstName: "Isabella",
                LastName: null,
                yearsOfExperience: 4,
                tech: "Java"
            }
        ];
        let res2 = [
            {
                fullName: "Nelson Mandela",
                tech: "JS"
            }
        ];


        expect(cvsFiltration(cvs1)).toStrictEqual(res1);
        expect(cvsFiltration(cvs2)).toStrictEqual(res2);

    })
})

describe('Challenge12-03', () => {
    test('words_without_vowels', () => {

        expect(vowelsFiltration(['car', 'spy', 'dry'])).toEqual(['spy', 'dry']);
        expect(vowelsFiltration(['boy', 'building', 'why'])).toEqual(['why']);
        expect(vowelsFiltration(['sad', 'angry', 'lovely', 'fresh'])).toEqual([]);

    })
})

describe('Challenge12-04', () => {
    test.skip('employee_skill_comparison', () => {
        let em1 = ["C", "C#", "Java", "Angular", "PHP"];
        let em2 = ["C#", ".Net", "JavaScript", "React", "Angular"];

        let em3 = ["Ruby", "Angular", "PHP"];
        let em4 = ["Vue", "Ruby", "Angular"];

        expect(skillComparison(em1, em2)).toEqual(["C", "Java", "PHP", ".Net", "JavaScript", "React"]);
        expect(skillComparison(em3, em4)).toEqual(["PHP", "Vue"]);

    })
})
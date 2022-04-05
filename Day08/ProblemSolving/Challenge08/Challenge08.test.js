const {
    customerAndAge,
    getEntries,
    courses,
    getInfo,
    getStudents,
} = require("./Challenge08");

describe("Challenge08-01", () => {
    test("Customer-and-average", () => {
        let names = {
            "Romio Joliat": 35,
            "Mario Ristrova": 39,
            "Sofia firnando": 50,
        };
        expect(customerAndAge(names)[0]).toStrictEqual(
            "Customer Name :Romio Joliat , Age :35"
        );
    });
});

describe("Challenge08-02", () => {
    test("Get-recipe-key", () => {
        let recipeInfo = {
            name: "pizza",
            ingredients: ["bread", "tomato", "chicken", "mayo"],
            cookTime: "twoHours",
            price: "25$",
        };
        expect(getEntries(recipeInfo)).toStrictEqual(
            ["name: pizza", "ingredients: bread,tomato,chicken,mayo", "cookTime: twoHours", "price: 25$"]
        );
    });
});

describe("Challenge08-03", () => {
    test.skip("Get-Course-Name", () => {

        expect(getInfo(courses).coursesName[0]).toEqual("Java");
        expect(getInfo(courses).coursesName.length).toStrictEqual(4);

        expect(getInfo(courses).studentsName.length).toStrictEqual(16);
    });
});

describe("Challenge08-04", () => {
    test.skip("Get-Student-Names-And-Courses", () => {
        let test1 = ['Kalé', 'Alisha', 'Alphonso', 'Briana'];
        let res1 = [
            { Student: "Kalé", course: "Python" },
            { Student: "Alisha", course: "Python" },
            { Student: "Alphonso", course: "JavaScript" },
            { Student: "Briana", course: "Java" }
        ];

        let test2 = ['Daley', 'Pru'];
        let res2 = [
            { Student: "Daley", course: "JavaScript" },
            { Student: "Pru", course: "DotNet" },
        ];


        expect(getStudents(test1)).toEqual(res1);
        expect(getStudents(test2)).toEqual(res2);
    });
});
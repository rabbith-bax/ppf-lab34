const languages = ["javascript", "c++", "python", "java"];
const dsl = ["SQL", "HTML", "CSS", "NoSQL"];

const allLanguages = [...languages, ...dsl];

const courseData = {
  name: "Projektowanie i programowanie front-end",
  shortcut: "PPFront",
  year: "2",
  content: {
    types: {
      lectures: true,
      laboratories: true,
      projects: true,
    },
    hours: {
      lectures: 15,
      laboratories: 15,
      projects: 15,
    },
  },
};

const courseDataForYear = { ...courseData, startYear: "2021", endYear: "2022" };

console.log(languages);
console.log(dsl);
console.log(allLanguages);
console.log(courseDataForYear);

const tasks = ["nauka programowania", "nauka matematyki", "nauka baz danych"];
const [task1, task2, task3] = tasks;

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

const { lectures, laboratories, projects } = courseData.content.hours;
const lectureHours = courseData.content.hours.lectures;

console.log(lectureHours);

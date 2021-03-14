const students = [
  {
    name: "Mark",
    marks: [100, 65, 88, 90, 50],
    attends: 0,
    avgMark: getAvgMark,
    maxMark: getMaxMark,
    setAttend: setAttend,
    info: getInfo,
  },
  {
    name: "John",
    marks: [83, 10, 65, 0, 50, 83],
    attends: 0,
    avgMark: getAvgMark,
    maxMark: getMaxMark,
    setAttend: setAttend,
    info: getInfo,
  },
  {
    name: "Joel",
    marks: [100, 65, 90, 20],
    attends: 0,
    avgMark: getAvgMark,
    maxMark: getMaxMark,
    setAttend: setAttend,
    info: getInfo,
  },
];
function getAvgMark() {
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  let result = sum / this.marks.length;
  return result;
} // средняя оценка студента

function getMaxMark() {
  let result = Math.max(...this.marks);
  return result;
} // максимальна оценка студента

function setAttend() {
  this.attends++;
} // увличить счетчик посещений студента

function getInfo() {
  return `
  Имя: ${this.name};
  Средняя оценка: ${this.avgMark()};
  Посещения: ${this.attends};
`;
} // возвращаем строку с именем студента, средней оценкой и колличеством посещений

console.log("-------------------------------");
students.map((e) => {
  console.log(`Средняя оценка: ${e.avgMark()}`);
});

console.log("-------------------------------");
students.map((e) => {
  console.log(`Максимальная оценка: ${e.maxMark()}`);
});

console.log("-------------Посещения------------------");
students.map((e) => {
  for (let i = 0; i < 5; i++) {
    e.setAttend();
    console.log(e.attends);
  }
});

console.log("-------------Итог------------------");

students.map((e) => {
  console.log(e.info());
});
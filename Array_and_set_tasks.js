//Задача 1. Вывести зарплаты по инженерному департаменту
const employees = [
  { name: "Alice", department: "engineering", salary: 5000 },
  { name: "Bob", department: "hr", salary: 3000 },
  { name: "Carol", department: "engineering", salary: 5500 },
  { name: "Dave", department: "marketing", salary: 4000 },
  { name: "Eve", department: "engineering", salary: 6000 }
];
const engDep = employees.filter((emp) => emp.department === "engineering");
const engSal = engDep.map((emp) => `${emp.name}: ${emp.salary}`);
console.log(engSal);

// Задача 2. Сделать массив чисел по возрастанию, без повторов
const numbers = [4, 2, 5, 2, 3, 4, 1, 5];
const mySet = new Set();
for (const num of numbers) {
  mySet.add(num);
}
const newNumbers = [...mySet];
const num2 = newNumbers.sort((a, b) => a - b);
console.log(num2);
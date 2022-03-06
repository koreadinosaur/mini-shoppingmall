`use strict`;
// api문서에서 ?는 optional이라는 뜻. 해도 되고 안해도 되고

// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const arrString = fruits.toString();
  console.log(arrString);
  // 엘리 썜은 toString말고 join(`,`) 으로 풀었음
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  let arr = [];
  arr.push(fruits);
  console.log(arr);
  // 이렇게하면 배열 안에 아이템이 하나만 생성됨. length가 1이라는 뜻
  // push말고, string.split(`,`)이렇게 해야 배열 생성 제대로 됨.
}
// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.reverse();
  console.log(array);
}
// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const array2 = array.slice(2);
  console.log(array2);
  //splice는 새로운 배열이 아니라 기존의 배열을 바꾸는거임
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];
// Q5. find a student with the score 90
{
  function findStudent(student) {
    return student.score === 90;
  }
  console.log(students.find(findStudent));
}

// Q6. make an array of enrolled students
{
  function filterStudent(student) {
    return student.enrolled === true;
  }
  console.log(students.filter(filterStudent));
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  let arr = [];
  for (let i = 0; i < students.length; i++) {
    arr.push(students[i].score);
  }
  console.log(arr);
  //엘리쌤은 map으로 해결함.
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  function scoreFilter(student) {
    return student.score >= 50;
  }
  console.log(!students.every(scoreFilter));
  //여기선 some을 쓰는게 더 쉬움.
  //const result = students.some((student)=> student.score < 50)
}

// Q9. compute students' average score
{
  let arr = [];
  for (let i = 0; i < students.length; i++) {
    arr.push(students[i].score);
  }

  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    average += arr[i];
  }
  console.log(average / arr.length);
  //엘리쌤은 reduce로 해결함.
  const result = students.reduce((prev, curr) => {
    console.log(prev);
    return prev + curr.score; //이값이 다음 prev에 누적됨.
  }, 0);
  console.log(`reduce result : ${result / students.length}`);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  let arr = [];
  for (let i = 0; i < students.length; i++) {
    arr.push(students[i].score);
  }
  // 엘리쌤은 map과 join 이용. map은 새로운 배열을 만들어줌.
  const result = students.map((student) => student.score).join();
  console.log(`Quiz 10 : ${result}`);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort()
    .join();
  console.log(`Quiz 10 : ${result}`);
}

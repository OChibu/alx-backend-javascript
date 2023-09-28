import HolbertonCourse from './HolbertonCourse.js';

const course = new HolbertonCourse('JavaScript Basics', 12, ['Alice', 'Bob', 'Charlie']);

console.log(course.name);
console.log(course.length);
console.log(course.students);

course.name = 'Advanced JavaScript';
console.log(course.name);

course.length = 15;
console.log(course.length);

course.students.push('David');
console.log(course.students);

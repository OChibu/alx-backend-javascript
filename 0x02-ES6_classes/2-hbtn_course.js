import HolbertonCourse from './HolbertonCourse.js';

const course = new HolbertonCourse('JavaScript Basics', 12, ['Alice', 'Bob', 'Charlie']);

console.log(course.name); JavaScript Basics;
console.log(course.length), 12;
console.log(course.students); ['Alice', 'Bob', 'Charlie']);

course.name = 'Advanced JavaScript';
console.log(course.name);  Advanced JavaScript;

course.length = 15;
console.log(course.length),  15;

course.students.push('David');
console.log(course.students); ['Alice', 'Bob', 'Charlie', 'David']);

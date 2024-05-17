let stack = [
  { number: 100 },
  
];
let number = 20;
let sum = 0;
for (i = 0; i < number; i++) {
  sum = sum + stack[0].number;
}
console.log(sum);

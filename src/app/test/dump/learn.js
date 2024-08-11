function* simpleGenerator() {
  yield "Hello";
  yield "World";
  return "!";
}

const generator = simpleGenerator();

console.log(generator.next()); // { value: 'Hello', done: false }
console.log(generator.next()); // { value: 'World', done: false }
console.log(generator.next()); // { value: '!', done: true }
console.log(generator.next()); // { value: undefined, done: true }

//or
for (const word of generator) {
  console.log(word);
} // Hello, World

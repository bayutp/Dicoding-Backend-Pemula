const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environtment = process.env.NODE_ENV;

for (let i = 0; i < 1000; i++) {
  // process looping ini akan membuat penggunaan memory usage naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed;
console.log(` Hi, ${yourName}`);
console.log(` Mode environtment : ${environtment}`);
console.log(
  ` Memory usage : ${initialMemoryUsage} up to ${currentMemoryUsage}`
);

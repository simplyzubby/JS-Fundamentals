const arg = process.argv[2];

// Convert it to an integer
const count = parseInt(arg, 10);

// Check if the argument is a valid positive number
if (!arg || isNaN(count) || count <= 0) {
  console.log("Missing number of occurrences");
} else {
  // Loop count times and print "C is fun"
  for (let i = 0; i < count; i++) {
    console.log("C is fun");
  }
}
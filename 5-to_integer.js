const arg = process.argv[2];

// Convert it to an integer
const intArg = parseInt(arg, 10);

// Check if it can be converted to a valid number
if (!isNaN(intArg)) {
  console.log("My number: " + intArg);
} else {
  console.log("Not a number");
}
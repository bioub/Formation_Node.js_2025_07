const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

/**
 * Greets a user by name.
 * @param {string} name - The name of the user.
 * @returns {string} A greeting message.
 */
function greet(name) {
  return `Hello, ${name.toUpperCase()}!`;
}

console.log("Greetings:");

for (const n of names) {
  if (n.length > 3) {
    console.log(greet(n));
  }
}

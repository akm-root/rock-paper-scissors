function getComputerChoice() {
  let objects = ["Rock", "Paper", "Scissors"];
  console.log(Math.floor(Math.random() * objects.length));
  return objects[Math.floor(Math.random() * objects.length)];
}

console.log(getComputerChoice());

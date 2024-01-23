function rps(p1, p2) {
  const choice1 = p1.toLowerCase();
  const choice2 = p2.toLowerCase();
  // Check for a draw
  if (choice1 === choice2) {
    return "Draw!";
  }
  // jika p1 wins
  if (
    (choice1 === "rock" && choice2 === "scissors") ||
    (choice1 === "scissors" && choice2 === "paper") ||
    (choice1 === "paper" && choice2 === "rock")
  ) {
    return "Player 1 won!";
  }
  // p2 adalah kebalikan dari p1
  return "Player 2 won!";
}

const result = rps("paper", "rock");
console.log(result);

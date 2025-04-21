const symbols = ["🍒", "7️⃣", "🔔"];
const slots = document.querySelectorAll(".slot");
const spinButton = document.getElementById("spin-button");
const message = document.getElementById("message");

spinButton.addEventListener("click", () => {
  let result = [];

  for (let i = 0; i < 3; i++) {
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    slots[i].textContent = randomSymbol;
    result.push(randomSymbol);
  }

  if (result[0] === result[1] && result[1] === result[2]) {
    message.textContent = "🎉 JACKPOT! You won!";
  } else {
    message.textContent = "Try again!";
  }
});

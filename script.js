const buttons = document.querySelectorAll(".btn");
const display = document.getElementById("display");
const clickSound = document.getElementById("clickSound");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();

    const value = button.textContent;

    if (value === "C") {
      expression = "";
      display.value = "";
    } else if (value === "=") {
      try {
        expression = eval(expression).toString();
        display.value = expression;
      } catch {
        display.value = "Error";
        expression = "";
      }
    } else {
      expression += value;
      display.value = expression;
    }
  });
});

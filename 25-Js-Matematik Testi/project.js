const correctAnswers = ["8", "10", "3", "25"];
const form = document.querySelector(".question-form");
const result = document.querySelector(".result");
const successMessage = document.querySelector("#successMessage");
const button = document.querySelector(".btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let totalScore = 0;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      totalScore += 25;
    }
  });

  result.classList.remove("d-none");
  result.querySelector("#percentage").textContent = `${totalScore}%`;
  if (totalScore == 100) {
    successMessage.classList.remove("d-none");
    button.setAttribute("disabled", "");
  }
});

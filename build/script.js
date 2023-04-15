const openIllustration = document.querySelector(".open-illustration");
const illustration = document.querySelector(".illustration");
const closeIllustration = document.querySelector(".close-illustration");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

let number = (document.querySelector(".number").textContent = 0);

const illustrator = function () {
  illustration.classList.toggle("hidden");
  closeIllustration.classList.toggle("hidden");
};

openIllustration.addEventListener("click", illustrator);

one.addEventListener("click", function () {
  number = document.querySelector(".number").textContent = 1;
});

two.addEventListener("click", function () {
  number = document.querySelector(".number").textContent = 2;
});

three.addEventListener("click", function () {
  number = document.querySelector(".number").textContent = 3;
});

four.addEventListener("click", function () {
  number = document.querySelector(".number").textContent = 4;
});

five.addEventListener("click", function () {
  number = document.querySelector(".number").textContent = 5;
});

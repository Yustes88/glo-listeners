const btnElement = document.querySelector("#btn");
const textInputElement = document.querySelector("input[type=text]");
const rangeInputElement = document.querySelector("input[type=range]");
const squareElement = document.querySelector("#square");
const circleElement = document.querySelector("#circle");
const circleBtnElement = document.querySelector("#circle > #e_btn");

circleBtnElement.style.display = "none";

const changeSquareColor = function () {
  btnElement.addEventListener("click", (e) => {
    const value = e.target.value;

    squareElement.style.backgroundColor = value;
  });
};

const changeCircleSize = function () {
  rangeInputElement.addEventListener("input", (e) => {
    const value = e.target.value;

    circleElement.style.width = `${value}%`;
    circleElement.style.height = `${value}%`;
  });
};

changeSquareColor();
changeCircleSize();

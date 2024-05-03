const btnElement = document.querySelector("#btn");
const textInputElement = document.querySelector("input[type=text] ");
const squareElement = document.querySelector("#square");

const changeSquareColor = function () {
  btnElement.addEventListener("click", () => {
    const value = textInputElement.value;

    squareElement.style.backgroundColor = value;
    console.log(value);
  });
};

changeSquareColor();

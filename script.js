const one = document.querySelector(".one");
const two = document.querySelector(".two");
const numberToConvert = document.querySelector("#converter");
const convertBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const p = document.querySelector("p");

const convertToCelcius = () => {
  if (numberToConvert.value === "") {
    p.textContent = "Give me a number!"; // nie działa
  } else {
    const result = (numberToConvert.value - 32) / 1.8;
    p.textContent = `${numberToConvert.value} ${
      one.textContent
    } is ${result.toFixed(1)} ${two.textContent}`;
  }
};

const convertToFahrenheit = () => {
  if (numberToConvert.value === "") {
    p.textContent = "Give me a number!"; // nie działa
  } else {
    const result = numberToConvert.value * 1.8 + 32;
    p.textContent = `${numberToConvert.value} ${
      one.textContent
    } is ${result.toFixed(1)} ${two.textContent}`;
  }
};

const change = () => {
  if (one.textContent === "°C") {
    one.textContent = "°F";
    two.textContent = "°C";
    convertToCelcius();
  } else {
    one.textContent = "°C";
    two.textContent = "°F";
    convertToFahrenheit();
  }
};

const swap = () => {
  if (one.textContent === "°C") convertToFahrenheit();
  else convertToCelcius();
};

const reset = () => {
  one.textContent = "°C";
  two.textContent = "°F";
  numberToConvert.value = "";
  p.textContent = "";
};

convertBtn.addEventListener("click", swap);
resetBtn.addEventListener("click", reset);
changeBtn.addEventListener("click", change);

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
function calculatePercent(number) { //for calculating the percentage of number
  return number / 100;
}
function toggledSign(number){ //for plus-minus sign
  return -number;
}
 

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") { //for clearing all elements
      display.innerText = "";


    } else if (item.id == "backspace") { //for backspace
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);


    } else if (item.id == "%") { //for getting percentage
      let number = parseFloat(display.innerText);

      if (!isNaN(number)) {
        let percent = calculatePercent(number);
        display.innerText = percent ;
      } else {
        display.innerText = "Error";
      }


    } else if(item.id=="+/-"){ //for plus-minus sign 
      let number = parseFloat(display.innerText);

      if(!isNaN(number)){
        let toggledNumber = toggledSign(number);
        display.innerText = toggledNumber;
      } else{
        display.innerText = "Error";
      }


    } else if (display.innerText != "" && item.id == "equal") { //for result
      display.innerText = eval(display.innerText);


    } else if (display.innerText == "" && item.id == "equal") { //if the field is empty
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);

    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
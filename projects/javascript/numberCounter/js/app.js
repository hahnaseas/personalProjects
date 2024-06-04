// set initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    const buttonClass = e.currentTarget.classList;

    if (buttonClass.contains("decrease")) {
      count--;
    } else if (buttonClass.contains('increase')) {
      count++;
    } else {
      count = 0;
    }

    //update text content
    value.textContent = count;

    //change color based on count number
    if (count > 0) {
      value.style.color = 'Green';
    } else if (count < 0) {
      value.style.color = 'Red';
    } else {
      value.style.color = 'Black';
    }
  });
});

const formPrize = document.querySelector("#formPrize");
const text = document.querySelector("#inputText");
const prizeBtn = document.querySelector("#prizeBtn");
const output = document.querySelector("#output");
const sign = document.querySelectorAll(".bg-container")
const signChild = document.querySelectorAll(".overlay");

/* Color Radio */
const radioRegular = document.querySelector("#radioRegular");
const radioGold = document.querySelector("#radioGold");
const radioOrange = document.querySelector("#radioOrange");
const radioBlue = document.querySelector("#radioBlue");
const radioWhite = document.querySelector("#radioWhite");


/* Font Radio */
const radioFontRegular = document.querySelector("#radioFontRegular");
const radioFontCursive = document.querySelector("#radioFontCursive");
const radioFontFantasy = document.querySelector("#radioFontFantasy");
const radioFontPapyrus = document.querySelector("#radioFontPapyrus");



prizeBtn.addEventListener("click", (e) => {
  e.preventDefault();

  output.innerHTML = cost();

for (let item of signChild) {
  item.innerHTML = text.value.toUpperCase();
}

});

/* text.addEventListener("keypress", (e) => {
  let liveText = text.value.toUpperCase();
  signChild.innerHTML = liveText;
  liveCalc();

})

function liveCalc() {
  const chars = text.value.length;
  let sum = chars * 5;
    output.value = `There are ${chars} letters. `;
    output.value += `This will cost ${sum}$`;
} */

function cost() {
  const chars = text.value.length;
  if (chars === 0) {
    output.value = "Please insert some letters in the textbox to the left";
  } else {
    let sum = chars * 5;
    output.value = `There are ${chars} letters. `;
    output.value += `This will cost ${sum}$`;
  }
}

[radioGold, 
 radioRegular, 
 radioOrange, 
 radioBlue,
 radioWhite].forEach((radio) => {
  radio.addEventListener("click", function (e) {
    switch (true) {
      case radioGold.checked === true:
        color("#ffd60a");
        break;

      case radioRegular.checked === true:
        color("black");
        break;

      case radioOrange.checked === true:
        color("orange");  
        break;

      case radioBlue.checked === true:
        color("blue");
        break;

        case radioWhite.checked === true:
          color("white");
          break;

      default:
    }
  });
});
[
  radioFontRegular,
  radioFontCursive,
  radioFontFantasy,
  radioFontPapyrus,
].forEach((radio) => {
  radio.addEventListener("click", function (e) {
    switch (true) {
      case radioFontRegular.checked === true:
        font("");
      break;

      case radioFontCursive.checked === true:
        font("cursive")
        break;

      case radioFontFantasy.checked === true:
        font("fantasy");
        break;

      case radioFontPapyrus.checked === true:
        font("papyrus")
        break;

      default:
    }
  });
});


function color(color) {
  for (let item of signChild) {
    item.style.color = color;
    }
}

function font(font) {
  for (let item of signChild) {
    item.style.fontFamily = font;
  }
}


/* .sign .signChild */




let elem = document.querySelector('.sign-one'), 
div = document.querySelector('.one'), 
         x = 0, 
         y = 0, 
         mousedown = false; 
  
 div.addEventListener('mousedown', function (e) { 
     mousedown = true; 
     // subtract offset 
     x = div.offsetLeft - e.clientX; 
     y = div.offsetTop - e.clientY; 
 }, true); 
  
 div.addEventListener('mouseup', function (e) { 
     mousedown = false; 
 }, true); 
  
 // element mousemove to stop 
 elem.addEventListener('mousemove', function (e) { 
     // Is mouse pressed 
     if (mousedown) { 
         // Now we calculate the difference upwards 
         div.style.left = e.clientX + x + 'px'; 
         div.style.top = e.clientY + y + 'px'; 
     } 
 }, true);  
 


let currentTime = document.getElementById("#currentTime");
let currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

let textarea = document.getElementById("textarea1");
let button = document.getElementById("button1");
let past = document.getElementsByClassName("past");

window.addEventListener("load", function () {
  let savedValue = localStorage.getItem("textareaValue");
  color = window.localStorage.getItem("past");
  if (savedValue) {
    textarea.value = savedValue;
  }
});

$(document).ready(function () {
  $("#button1").on("click", function () {
    $("#textarea1").addClass("past");
    localStorage.setItem("backgroundColor", past);
  });

  button.addEventListener("click", function () {
    localStorage.setItem("textareaValue", textarea.value);
    localStorage.setItem("textareaColor", past);
    // textarea.addEventListener("change", function () {

    //   localStorage.setItem("textareaColor", past);
  });
});

// $(document).ready(function () {
//   $("#button2").on("click", function () {
//     $("#textarea2").addClass("past");
//   });
// });

// $(document).ready(function () {
//   $("#button3").on("click", function () {
//     $("#textarea3").addClass("past");
//   });
// });

// $(document).ready(function () {
//   $("#button4").on("click", function () {
//     $("#textarea4").addClass("present");
//   });
// });

// $(document).ready(function () {
//   $("#button5").on("click", function () {
//     $("#textarea5").addClass("future");
//   });
// });

// $(document).ready(function () {
//   $("#button6").on("click", function () {
//     $("#textarea6").addClass("future");
//   });
// });

// $(document).ready(function () {
//   $("#button7").on("click", function () {
//     $("#textarea7").addClass("future");
//   });
// });

// $(document).ready(function () {
//   $("#button8").on("click", function () {
//     $("#textarea8").addClass("future");
//   });
// });

// $(document).ready(function () {
//   $("#button9").on("click", function () {
//     $("#textarea9").addClass("future");
//   });
// });

// $(document).ready(function () {
//   $("#button10").on("click", function () {
//     $("#textarea10").addClass("future");
//   });
// });

// $(document).ready(function () {
//   $("#button11").on("click", function () {
//     $("#textarea11").addClass("future");
//   });
// });

// localStorage.setItem("server", input.val());
// document.getElementById("description").value = localStorage.getItem("server");

// button1.addEventListener("click", function(){

//     localStorage.setItem("value", textarea.value);
//     textarea.innerHTML = localStorage.getItem("value");
// });

// function display() {
//   localStorage.setItem("value", textarea.value);
//   textarea.innerHTML = localStorage.getItem("value");
// }

// localStorage.setItem("key", input.value);
// textarea.innerHTML = localStorage.getItem("value")

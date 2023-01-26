//Display current day
let currentTime = document.getElementById("#currentTime");
let currentDay = moment().format("dddd, MMMM Do, ha");
$("#currentDay").text(currentDay);

//What happen when page refresh
window.addEventListener("load", function () {
  let savedValue = localStorage.getItem("textareaValue");
  let savedColor = localStorage.getItem(
    "backgroundColor",
    textarea.style.backgroundColor
  );

  if (savedValue) {
    textarea.value = savedValue;

    if (color) {
      color.style.backgroundColor = color;
    }
  }
});

//On click function store textarea value and color in localStorage
$(document).ready(function () {
  $("#button1").on("click", function () {
    $("#textarea1").addClass("past");
    localStorage.setItem("textareaValue", textarea.value);
    localStorage.setItem("backgroundColor", past);
  });
});

$(document).ready(function () {
  $("#button2").on("click", function () {
    $("#textarea2").addClass("past");
    localStorage.setItem("textareaValue", textarea.value);
    localStorage.setItem("backgroundColor", past);
  });
});
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

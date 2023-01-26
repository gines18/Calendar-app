//Display current day
let currentTime = document.getElementById("#currentTime");
let currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

// $(".saveBtn").onClick function   
$(".saveBtn").on("click", function(){
  let textInput = $(this).siblings(".description").val();
  let timeStamp = $(this).parent().attr("id");
  localStorage.setItem(timeStamp, textInput);
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

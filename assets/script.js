//Display current day
let currentTime = document.getElementById("#currentTime");
let currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

// .on click function   
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

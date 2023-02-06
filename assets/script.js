//Display current date
let currentTime = document.getElementById("#currentTime");
let currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

// .on click function referring to the buttons 
$(".saveBtn").on("click", function(){
  let textInput = $(this).siblings(".description").val();
  let timeStamp = $(this).parent().attr("id");
  localStorage.setItem(timeStamp, textInput);
});

// Function displaying textarea background-color depends on current time
let actualTime = function() {
let currentHour = moment().hours();
  $(".row").each(function(){
    let timeBlock = parseInt($(this).attr("id"));
      if (timeBlock < currentHour){
        $(this).addClass("past");
        } else if (timeBlock === currentHour){
          $(this).removeClass("past");
          $(this).addClass("present");
        } else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
}
})
};
actualTime()

//Retrieve user tasks from local storage
let savedItems = 
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));



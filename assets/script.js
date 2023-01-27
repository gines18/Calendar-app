//Display current day.

let currentTime = document.getElementById("#currentTime");
let currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

// .on click function referring to the buttons.   

$(".saveBtn").on("click", function(){
  let textInput = $(this).siblings(".description").val();
  let timeStamp = $(this).parent().attr("id");
  localStorage.setItem(timeStamp, textInput);
});

// Function displaying textarea background-color depends on current time.
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



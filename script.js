$(function() {
    createDB()
    displaySchedule()
});
    
//CREATE DATABASE
function createDB() {
    var todayDate = getDateandTime();
    var myDay = [
{hour: "09", task: "",}, {hour: "10", task: "",}, {hour: "11", task: "",}, {hour: "12", task: "",}, {hour: "13", task: "",}, {hour: "14", task: "",}, {hour: "15", task: "",}, {hour: "16", task: "",}, {hour: "17", task: "",}
]
    var dataToday = localStorage.getItem(todayDate)
    if (dataToday == null) {
    localStorage.setItem(todayDate, JSON.stringify(myDay));
}}

//GET DATE AND TIME AND DISPLAY ON PAGE
function getDateandTime() {
    var DateandTime =moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(DateandTime);
    return (DateandTime);
}

//DISPLAY SCHEDULE ONSITE
function displaySchedule() {
    var DateandTime = getDateandTime();
    var savedDay = JSON.parse(localStorage.getItem(DateandTime));
    for (var i = 0; i < savedDay.length; i++) {
    var getHour = savedDay[i].hour;
    var getTask = savedDay[i].task;
    
//CREATE DIV/HOURS/TEXTAREA/SAVEBUTTON
    var timeTable = $('<div>').attr({ "class": "row", "id": "form_" + getHour });
    var hourArea = $('<div>').text(getHour).attr({ "class": "col-md-2 hour", "id": "div_" + getHour });
    var taskArea = $('<textarea>').text(getTask).attr({ "id": "textarea_" + getHour });
    var buttonIcon = $("<i class='far fa-save fa-lg'></i>");
    var saveButton = $("<button>").attr({ "class": "col-md-1 saveBtn", "id": "Btn_" + getHour });
    
//PAST-PRESENT-FUTURE TIME CHECK
    var presentMoment = moment().hour();
    var momentCheck = getHour;
    if (momentCheck < presentMoment) {
    taskArea.attr({ "class": "col-md-9 description p-0 past" });
    } else if (momentCheck == presentMoment) {
    taskArea.attr({ "class": "col-md-9 description p-0 present" });
    } else if (momentCheck > presentMoment) {
    taskArea.attr({ "class": "col-md-9 description p-0 future" });
    }
    saveButton.append(buttonIcon);
    timeTable.append(hourArea, taskArea, saveButton)
    $(".container").append(timeTable);
}}


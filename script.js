
var todos = $(this).parent().attr("id");


//SETS TEXT TODAY DATE 

var date = moment().format("[Today is: ]dddd, MMMM Do YYYY");
$("#currentDay").text(date);


//GETS THE DAY HOUR

var workDayHours = moment().format("hha"); // 12H clock;


console.log(typeof workDayHours);

console.log(workDayHours)



// BUTTON EVENT LISTENER

function todosStorage() {

    for (i = 1; i < 10; i++) {

        $("#btn" + i).click(function () {
            var todos = $(this).parent().attr("id");
            localStorage.setItem(todos,($("#" + todos + " textarea").val()));
      
        })

    }

}

function todosShow() {
    
    var hours = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"]
 
    for (i = 0; i <= hours.length; i++) {

        var todosScreen = localStorage.getItem(hours[i]);

        $("#text"+i).text(todosScreen);
    

        console.log(todosScreen);

    }
}
   

todosStorage()
todosShow()




// try to create the elements in the html trough js code, using jquery
//think on how to match the hour current hour with to the hour sections. 

















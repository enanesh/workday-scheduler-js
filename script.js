



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
            localStorage.setItem(todos, JSON.stringify($("#" + todos + " textarea").val()));
      
        })

    }


}

todosStorage()




















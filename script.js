
//GLOBAL VARIABLES 
var todos = $(this).parent().attr("id");
var hours = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"]


//SETS TEXT TODAY DATE 

var date = moment().format("[Today is: ]dddd, MMMM Do YYYY");
$("#currentDay").text(date);




//SETS THE CODE COLORS IN THE TEXT BOXES

function colorBlock() {
    
    //GETS THE CURRENT HOUR


    var currentTime = moment().format("HH:mm"); // 12H clock;

    var idTime = $(".time-block").get(0).id
    
   

    console.log(typeof currentTime);
    console.log(currentTime);
    console.log(idTime);

}




// BUTTON EVENT LISTENER

function todosStorage() {

    for (i = 1; i < 10; i++) {

        $("#btn" + i).click(function () {
            var todos = $(this).parent().attr("id");
            localStorage.setItem(todos,($("#" + todos + " textarea").val()));
      
        })

    }

}


//GETS THE LOCAL STORAGE AND DISPLAY IT INTO THE TEXTAREA ELEMENT


function todosShow() {
    
   
 
    for (i = 0; i <= hours.length; i++) {

        var todosScreen = localStorage.getItem(hours[i]);

        $("#text"+i).text(todosScreen);
    

        console.log(todosScreen);

    }
}
 


colorBlock()
todosStorage()
todosShow()




 

















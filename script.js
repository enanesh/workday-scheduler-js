
//GLOBAL VARIABLES 
var todos = $(this).parent().attr("id");
var hours = ["09","10","11","12","13","14","15","16","17"]


//SETS TEXT CURRENT DATE 

var date = moment().format("[Today is: ]dddd, MMMM Do YYYY");
$("#currentDay").text(date);




//SETS THE CODE COLORS IN THE TEXT BOXES

function colorBlock() {

    
    $(".row").each(function () {
        //GETS THE ID FROM THE DIV  AND CONVERTS THAT INTO A INT TO BE ABLE TO COMPARE VALUES WITH CURRENT TIME INT 
        
        var idTime = parseInt($(this).attr("id"));

        //GETS THE CURRENT HOUR
        var currentTime = parseInt(moment().format("HH"));// 24H clock;

        //REMOVES THE CLASSES FROM THE TIME-BLOCK 
        $(this).removeClass("past present future");

                
        if (currentTime > idTime) {
            $(this).addClass("past");

            
        } else if (currentTime < idTime) {

            $(this).addClass("future");

        } else {

            $(this).addClass("present");
        }
            

    })
   
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
        //GETS THE DATA FROM THE LOCAL STORAGE
        var todosScreen = localStorage.getItem(hours[i]);

        //SHOWS THE LOCAL AS A TEXT INTO THE TEXTARE TAG
        $("#text"+i).text(todosScreen);
    

        console.log(todosScreen);

    }

    
}
 

todosShow()
colorBlock()
todosStorage()





 

















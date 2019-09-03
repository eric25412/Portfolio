// var button= $('#resume-button').on('click', ()=>{

// button.$('.dark-theme').style.display = 'flex';
// });

// var close= $('.close').on('click', () =>{

//     close.$('.dark-theme').style.display = 'none';


// });

// var button = document.getElementById('resume-button')
// button.addEventListener("click", function() {
//     console.log("done")
//     // document.querySelector('.dark-theme').style.display = "flex";
//     document.documentElement('<img src="img/offical-resume.jpg"/>');
//     return false;
// });

// var close=document.querySelector('.close')
// close.addEventListener("click", function() {
//     document.querySelector('.dark-theme').style.display = "none";
// });

$(document).ready(function() {

    // Here we use jQuery to select the header with "click-me" as its ID.
    // Notice I have the #click-me, click, and then the function
    // So $("#id|.class|element").on("action", function(){});
    // And so whenever it is clicked...
    $("#resume-button").on("click", function() {
        window.location = 'img/offical-resume-converted-pdf.pdf';
    });

  });




// var button= $('#resume-button').on('click', ()=>{

// button.$('.dark-theme').style.display = 'flex';
// });

// var close= $('.close').on('click', () =>{

//     close.$('.dark-theme').style.display = 'none';


// });

var button = document.getElementById('resume-button')
button.addEventListener("click", function() {
    console.log("done")
	document.querySelector('.dark-theme').style.display = "flex";
});

var close=document.querySelector('.close')
close.addEventListener("click", function() {
    document.querySelector('.dark-theme').style.display = "none";
});
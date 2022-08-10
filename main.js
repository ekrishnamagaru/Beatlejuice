/*
    Beatlejuice: This is the JavaScript file for the Beatlejuice webpage.
    The file provides animations that enhance the users experience when surfing
    the playlists.
*/

/*
This function listens for and performs events once
the HTML page is loaded
*/
$(document).ready(() => {
    opening(); // Short animation for title

    // Animation when user hovers over each album
    $("td").hover((event)=>{
        let imgElement = event.currentTarget.lastChild.firstChild;
        let imgSource = imgElement.src;
        $(imgElement).animate({width: "400px", height: "400px", opacity: "0.25"}, "slow", ()=>{});
    }, (event)=>{
        let imgElement = event.currentTarget.lastChild.firstChild;
        let imgSource = imgElement.src;
        $(imgElement).animate({width: "250px", height: "250px", opacity: "1"}, "slow", ()=>{});
    });
});

/*
    This function is responsible for displaying the title three times,
    then slides the title to its permanenent position.
*/
function opening() { 
    let count = 1; // Counter to keep track of how many times title appears

    // Initially hide HTML components when document loads
    ($("#discography")).hide();
    ($("#beatlejuice")).hide();

    // Animation: Say, "Beatlejuice" three times
    do {
        ($("#beatlejuice")).fadeToggle(500);
        count += 1;
    }
    while (count <= 5);

    // Slide title to the top.
    $("#beatlejuice").animate({top: "-=50%",}, 2000, function(){
        ($("#discography")).fadeToggle(1000);
    });
    
} 

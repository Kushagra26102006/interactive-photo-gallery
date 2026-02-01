/*
 * In this assignment you will use the code that I provide in order to create an interactive photo gallery.
 * The goal is to gain practice with writing JavaScript code to update elements of the DOM.
 */

function upDate(previewPic) {
    /* In this function you should 
       1) change the url for the background image of the div with the id of "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id of "image" 
       to the alt text of the preview image 
    */
    console.log("Event Triggered");
    console.log("Alt Text: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function undo() {
    /* In this function you should 
       1) Update the url for the background image of the div with the id of "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id of "image" 
       back to the original text.  You can use the html code to see what that original text was
    */
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

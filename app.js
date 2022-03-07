darkModeButton = document.getElementById("dark-mode-button")

body = document.body;

const defaultBackground = body.style.backgroundColor;
const defaultTextColour = body.style.color;
const defaultBorderColour = document.getElementById("title-section").style.border;
const headingDefaultColour = document.getElementsByTagName("h3")[0].style.color;

const darkModeBackground = "#091d1e";
const darkModeTextColour = "#aaaaaa";
const darkModeBorderColour = "#aaaaaa";
const headingDarkModeColour = "#466876";

let darkMode = false;

const changeToLightMode = function(){
    console.log("button clicked")
    // change the background colour and text
    body = document.body;
    body.style.backgroundColor = defaultBackground;
    body.style.color = defaultTextColour;

    // change the border of the title

    title = document.getElementById("title-section")
    title.style.border = "1px solid " + defaultBorderColour;

    // change the border and headings on the posts

    posts = document.getElementsByClassName("post")
    for (post of posts){
        post.style.border = "1px solid " + defaultBorderColour;
    }

    postHeadings = document.getElementsByTagName("h3")
    for (heading of postHeadings){
        heading.style.color = headingDefaultColour;
    }

    darkMode = false;
}

const changeToDarkMode = function(){
    console.log("button clicked")
    // change the background colour and text
    body = document.body;
    body.style.backgroundColor = darkModeBackground;
    body.style.color = darkModeTextColour;

    // change the border of the title

    title = document.getElementById("title-section")
    title.style.border = "1px solid " + darkModeBorderColour;

    // change the border and headings on the posts

    posts = document.getElementsByClassName("post")
    for (post of posts){
        post.style.border = "1px solid " + darkModeBorderColour
    }

    postHeadings = document.getElementsByTagName("h3")
    for (heading of postHeadings){
        heading.style.color = headingDarkModeColour;
    }

    darkMode = true;
}

handleButtonClick = function () {
    console.log("button clicked")
    // change the background colour and text
    body = document.body;
    if (darkMode){
        changeToLightMode();
    } else {
        changeToDarkMode();
    }
}

darkModeButton.addEventListener("click", handleButtonClick);

favouriteButtons = document.getElementsByClassName("favourite-button");
let highlightedPosts = [];
for (i = 0; i < favouriteButtons.length; i++){
    highlightedPosts.push(false);
}
for (i = 0; i < favouriteButtons.length; i++){
    let favouriteButton = favouriteButtons[i];
    let handleFavouriteButtonClick = function() {
        let postToFavourite = favouriteButton.parentElement;
        if (highlightedPosts[i] === false){    
            postToFavourite.style.backgroundColor = "yellow";
            highlightedPosts[i] = true;
        } else {
            postToFavourite.style.backgroundColor = defaultBackground;
            highlightedPosts[i] = false;
        }
        // favouriteButton.parentElement.style.backgroundColor = "yellow";
    }
    favouriteButton.addEventListener("click", handleFavouriteButtonClick);
}

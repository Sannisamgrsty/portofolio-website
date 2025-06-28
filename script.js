// CHANGEABLE ADDABLE DATA
// Object array
let photos = [
    {
        'name': 'image-1',
        'comment': 'Me with ka fatin, waitin for next photo session, but still vibin'
    }, {
        'name': 'image-2',
        'comment': 'Indriws looked at her watch fondly'
    }, {
        'name': 'image-3',
        'comment': 'Group photo love it so much tee hee'
    }, {
        'name': 'image-4',
        'comment': 'Indriws at the abandoned mangrove forest bridge. it\'s kinda scary though'
    }, {
        'name': 'image-5',
        'comment': 'Lovely selfie with ka fatin, luv luv'
    }, {
        'name': 'image-6',
        'comment': 'Me with my fav heart cheek pose, cheesee'
    }, {
        'name': 'image-7',
        'comment': 'Group photo amidst stunning scenery, sun and energy'
    }, {
        'name': 'image-8',
        'comment': 'On the boat, below the load, cause tomorrow have to do the jobs'
    }, {
        'name': 'image-9',
        'comment': 'Looking at the sea? no, just trying to look good.'
    }, {
        'name': 'image-10',
        'comment': 'Thanks god i take photos using cellphone, because the photo session is\'nt look good'
    }, {
        'name': 'image-11',
        'comment': 'With my besties. love it.'
    }, {
        'name': 'image-12',
        'comment': 'The mesmerizing sea (Taken by mar\'ah)'
    }
] // Can be changed or added, It's consist the name of the file photo and the comments from all the photo that stored
let figureNumber = 2; // Can be changed based on how much figure we want to show in the display

// DOM Selector
// It's used for selecting the instances like html element, class, or id
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const h2 = document.querySelector("h2");
const h1 = document.querySelector("h1");

// Select the div that element sibling next to previous button
// const albumContainer = previousButton.nextElementSibling; -> change to selector by id
const albumContainer = document.getElementById("album-container");

// GLOBAL VARIABLE
// It's used for save the container core data like data length, container length, container data iteration array etc.
let containerIndex = 0; // Container index will contain and replaced with a value between 0 , 1 , ... , containerIndexMax Value
let containerArray = [];
const photosLength = photos.length; // Consist Photos Object data length
const containerIndexMax = (photosLength / figureNumber) - 1; // For counting how many container array can be swithed;

// Function that should run when the page opened
createArray(containerIndex, figureNumber);
addFigures(albumContainer, figureNumber);


// EVENT DECLARATION
nextButton.addEventListener("click", nextButtonDo);
previousButton.addEventListener("click", previousButtonDo);
window.addEventListener("resize", changeFigureNumber);


// FUNCTION:

// Next button function is for iterate to next data
// This function used for iterate the *photos*(CHANGEABLE ADDABLE DATA) Data Array based on *figureNumber*(CHANGEABLE ADDABLE DATA)
function nextButtonDo() {
    // Force reflow to restart the animation
    albumContainer.style.animationName = "fade-out1";

    // Delete the last container index
    if (albumContainer.innerHTML) {
        albumContainer.innerHTML = "";
    }

    // Adding the *containerIndex*(GLOBAL VARIABLE) if the container index is less than *containerIndexMax*()
    if (containerIndex < containerIndexMax) {
        containerIndex++; // This updates the global variable directly
    }

    // Described at the FUNCTION list (return container Array
    filterArray();

    // Add new container to *albumContainer*(GLOBAL VARIABLE) based on *containerArray*(GLOBAL VARIABLE) value
    addFigures(albumContainer, figureNumber);

    // Force reflow to restart the animation
    void albumContainer.offsetWidth;
    // albumContainer.style.display = "flex";
    // addTransition(albumContainer, 1);
    albumContainer.style.animationName = "fade-in1";
}

// Previous button function is for iterate to previous data
// This function used for iterate the *photos*(CHANGEABLE ADDABLE DATA) Data Array based on *figureNumber*(CHANGEABLE ADDABLE DATA)
function previousButtonDo() {
    // Force reflow to restart the animation
    albumContainer.style.animationName = "fade-out1";

    // Delete the last container index
    if (albumContainer.innerHTML) {
        albumContainer.innerHTML = "";
    }

    if (containerIndex > 0) {
        containerIndex--;
    }

    // Described at the FUNCTION list
    filterArray();

    // Add new container to *albumContainer*(GLOBAL VARIABLE) based on *containerArray*(GLOBAL VARIABLE) value
    addFigures(albumContainer, figureNumber);
    // Set album container display to flex and fade in

    // Force reflow to restart the animation
    void albumContainer.offsetWidth;
    // albumContainer.style.display = "flex";
    // addTransition(albumContainer, 1);
    albumContainer.style.animationName = "fade-in2";
}

// Function for storing the data on *containerArray*(GLOBAL VARIABLE) based on the first *containerIndex*(GLOBAL VARIABLE) multiplied by *figureNumber*(CHANGEABLE ADDABLE DATA)
function createArray(index, number) {
    let indexVal = index * figureNumber; // Multiplying 
    containerArray.push(indexVal);
    for (let i = 0; i < number - 1; i++) { // Looping for add IndexVal based on *figureNumber*(CHANGEABLE ADDABLE DATA)
        indexVal++; // Add indexVal by one
        indexVal < photosLength ? containerArray.push(indexVal) : containerArray = containerArray;
    }
}

// Function for delete the previous array
function filterArray() {
    // If container array is length is 0 (NO DATA)
    if (containerArray.length === 0) {
        // Then store the data in the array use createArray Function
        createArray(containerIndex, figureNumber);
        // Else, if the array consist a data
    } else {
        // Then remove the data first
        containerArray.length = 0;
        // And then store the data
        createArray(containerIndex, figureNumber);
    }
}

function addFigures(containerTarget, figureNumber) {
    for (let i = 0; i < figureNumber; i++) {
        addFigureImageandComment(containerTarget, containerArray[i])
    };
}

function addFigureImageandComment(containerTarget, index) {
    // containerTarget.classList.add("fade-in");
    containerTarget.innerHTML += `
    <figure>
        <img id="album-image-${index}" src="./image/${photos[index].name}.jpg" alt="Photos database">
        <figcaption>${photos[index].comment}</figcaption>
    </figure>`
        ;

}

function changeFigureNumber() {
    if (window.innerWidth < 500) {
        figureNumber = 2;

        // Delete the last container index
        if (albumContainer.innerHTML) {
            albumContainer.innerHTML = "";
        }

        if (containerIndex > 0) {
            containerIndex--;
        }

        // Described at the FUNCTION list
        filterArray();

        // Add new container to *albumContainer*(GLOBAL VARIABLE) based on *containerArray*(GLOBAL VARIABLE) value
        addFigures(albumContainer, figureNumber);
        // Set album container display to flex and fade in

    } else {
        figureNumber = 3;
        // Delete the last container index
        if (albumContainer.innerHTML) {
            albumContainer.innerHTML = "";
        }

        if (containerIndex > 0) {
            containerIndex--;
        }

        // Described at the FUNCTION list
        filterArray();

        // Add new container to *albumContainer*(GLOBAL VARIABLE) based on *containerArray*(GLOBAL VARIABLE) value
        addFigures(albumContainer, figureNumber);
        // Set album container display to flex and fade in

    }
}

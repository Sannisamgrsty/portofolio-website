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
let figureNumber = 3; // Can be changed based on how much figure we want to show in the display

// DOM Selector
// It's used for selecting the instances like html element, class, or id
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const h2 = document.querySelector("h2");
const h1 = document.querySelector("h1");

// GLOBAL VARIABLE
// It's used for save the container core data like data length, container length, container data iteration array etc.
let containerIndex = 0; // Container index will contain and replaced with a value between 0 , 1 , ... , containerIndexMax Value
let containerArray = [];
const photosLength = photos.length; // Consist Photos Object data length
const containerIndexMax = (photosLength / figureNumber) - 1; // For counting how many container array can be swithed;

// Function that should run when the page opened
createArray(containerIndex, figureNumber);

// EVENT DECLARATION
nextButton.addEventListener("click", nextButtonDo);
previousButton.addEventListener("click", previousButtonDo);


// FUNCTION:

// Next button function is for iterate to next data
// This function used for iterate the *photos*(CHANGEABLE ADDABLE DATA) Data Array based on *figureNumber*(CHANGEABLE ADDABLE DATA)
function nextButtonDo() {
    // Adding the *containerIndex*(GLOBAL VARIABLE) if the container index is less than *containerIndexMax*()
    if (containerIndex < containerIndexMax) {
        containerIndex++; // This updates the global variable directly
    }

    // Desctibed at the FUNCTION list
    filterArray();
}

// Previous button function is for iterate to previous data
// This function used for iterate the *photos*(CHANGEABLE ADDABLE DATA) Data Array based on *figureNumber*(CHANGEABLE ADDABLE DATA)
function previousButtonDo() {
    if (containerIndex > 0) {
        containerIndex--;
    }

    // Desctibed at the FUNCTION list
    filterArray();
}

// Function for storing the data on *containerArray*(GLOBAL VARIABLE) based on the first container
function createArray(index, number) {
    let indexVal = index * figureNumber;
    containerArray.push(indexVal);
    for (let i = 0; i < number - 1; i++) {
        indexVal++;
        indexVal < photosLength ? containerArray.push(indexVal) : containerArray = containerArray;
    }
    h2.innerHTML = containerArray;
}

function filterArray() {
    if (containerArray.length === 0) {
        createArray(containerIndex, figureNumber);
    } else {
        containerArray.length = 0;
        createArray(containerIndex, figureNumber);
    }
}


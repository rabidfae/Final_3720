
//Card things
const desireCard = document.getElementById('desireCard');
const desireBtn = document.getElementById('desireBtn');
const desireImage = document.getElementById('desireImage');
const relationshipCard = document.getElementById('relationshipCard');
const relationshipBtn = document.getElementById('relationshipBtn');
const relationshipImage = document.getElementById('relationshipImage');
const npcCard = document.getElementById('npcCard');
const npcBtn = document.getElementById('npcBtn');
const npcImage = document.getElementById('npcImage');

//desire card things
async function retrieveDesire() {
    // Generate a random number between 1 and 22
    const randomDesireCard = Math.floor(Math.random() * 22) + 1;
    const imageName = `${randomDesireCard}.png`;

    try {
        const response = await fetch(`/api/images/${imageName}`);
        if (!response.ok) {
            throw new Error('Laura effed up on the desire card');
        }
        const imageData = await response.json();
        desireImage.src = imageData.url;
        desireImage.alt = imageData.description;
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}
// Add an event listener to the button
desireBtn.addEventListener("click", function() {
    retrieveDesire();
});

//relationship card things

async function retrieveRelation() {
    // Generate a random number between 23 and 36
    const randomRelationCard = Math.floor(Math.random() * 13) + 23; //13 is the number of cards in the relationship deck + 23 shifts it to start at 23
    const imageName = `${randomRelationCard}.png`;

    try {
        const response = await fetch(`/api/images/${imageName}`);
        if (!response.ok) {
            throw new Error('Laura effed up on the relationship card');
        }
        const imageData2 = await response.json();
        relationshipImage.src = imageData2.url;
        relationshipImage.alt = imageData2.description;
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}
// Add an event listener to the button
relationshipBtn.addEventListener("click", function() {
    retrieveRelation();
});

// NPC card stuff here  
async function npcRelation() {
    // Generate a random number between 37 and 56
    const randomNpcCard = Math.floor(Math.random() * 19) + 37; 
    const imageName = `${randomNpcCard}.png`;

    try {
        const response = await fetch(`/api/images/${imageName}`);
        if (!response.ok) {
            throw new Error('Laura effed up on the relationship card');
        }
        const imageData3 = await response.json();
        npcImage.src = imageData3.url;
        npcImage.alt = imageData3.description;
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}
// Add an event listener to the button
npcBtn.addEventListener("click", function() {
    npcRelation();
});

//Character Sheet things


const nameEditBtn = document.getElementById('nameEditBtn');
const nameSaveBtn = document.getElementById('nameSaveBtn');
const characterName = document.getElementById('characterName');
const nameField = document.getElementById('nameField');

const ageSaveBtn = document.getElementById('ageSaveBtn');
const ageEditBtn = document.getElementById('ageEditBtn');
const ageField = document.getElementById('ageField');
const characterAge = document.getElementById('characterAge');

let nameListItem; // Variable to hold the last created list item
let ageListItem; // Variable to hold the last created list item

nameSaveBtn.addEventListener('click', () => {
    const name = nameField.value.trim()
    if (name) {
        if (nameListItem) {
            // Update the existing list item
            nameListItem.textContent = name;
        } else {
            // Create a new list item
            nameListItem = document.createElement('li');
            nameListItem.textContent = name;
            characterName.appendChild(nameListItem);
        }

        // Clear the input field
        nameField.value = '';

        // Hide the input and save button, show the edit button
        nameField.classList.add('hidden');
        nameSaveBtn.classList.add('hidden');
        nameEditBtn.classList.remove('hidden');
    } else {
        console.log('Name field is empty');
    }
});

nameEditBtn.addEventListener('click', () => {
    // Show the input and save button, hide the edit button
    nameField.classList.remove('hidden');
    nameSaveBtn.classList.remove('hidden');
    nameEditBtn.classList.add('hidden');

    // Set the input field value to the last list item's text
    if (nameListItem) {
        nameField.value = nameListItem.textContent;
    }
});

// Age section
ageSaveBtn.addEventListener('click', () => {
    const age = ageField.value.trim();
    if (age) {
        const ageNumber = Number(age); // Convert to number
        if (ageListItem) {
            // Update the existing list item
            ageListItem.textContent = ageNumber; // Store the number
        } else {
            // Create a new list item
            ageListItem = document.createElement('li');
            ageListItem.textContent = ageNumber; // Store the number
            characterAge.appendChild(ageListItem);
        }

        // Clear the input field
        ageField.value = '';

        // Hide the input and save button, show the edit button
        ageField.classList.add('hidden');
        ageSaveBtn.classList.add('hidden');
        ageEditBtn.classList.remove('hidden');
    } else {
        console.log('Age field is empty');
    }
});

ageEditBtn.addEventListener('click', () => {
    // Show the input and save button, hide the edit button
    ageField.classList.remove('hidden');
    ageSaveBtn.classList.remove('hidden');
    ageEditBtn.classList.add('hidden');

    // Set the input field value to the last list item's text
    if (ageListItem) {
        ageField.value = ageListItem.textContent; // It will still be a string when setting the input
    }
});


//Family Background things
const famContainer = document.getElementById('famContainer');
const famSaveBtn = document.getElementById('famSaveBtn');
const famEditBtn = document.getElementById('famEditBtn');

async function familyDrop() {
    try {
        const response = await fetch('/api/familyBackground/');
        if (!response.ok) {
            throw new Error('Failed to fetch family background data');
        }
        const familyBackground = await response.json();

        // Create the select element
        const select = document.createElement('select');
        select.id = 'famInput';
         select.className = 'form-select p-2 m-1 mt-3 rounded-3xl bg-primary-light';

        // Populate the select dropdown with the familyBackground data
        familyBackground.forEach(item => {
            const option = document.createElement('option');
            option.value = item.famId; // Use famId or whatever unique identifier you want
            option.textContent = `${item.famType}`; // Display the family type
            select.appendChild(option);
        });

        // Append the select element to the desired parent element
        famContainer.appendChild(select); // Change to the appropriate parent element
    } catch (error) {
        console.error(error.message);
    }
}

// Call the function to populate the dropdown when the script loads
familyDrop();
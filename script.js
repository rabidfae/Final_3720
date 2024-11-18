
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
    const response = await fetch(`/api/images/${imageName}`);
    const imageData = await response.json();

    desireImage.src = imageData.url;
    desireImage.alt = imageData.description;

    const desireField = document.getElementById('desireField');
    desireField.value = imageData.desire;

}
// Add an event listener to the button
desireBtn.addEventListener("click", function () {
    retrieveDesire();
});

//relationship card things

async function retrieveRelation() {
    // Generate a random number between 23 and 36
    const randomRelationCard = Math.floor(Math.random() * 13) + 23; //13 is the number of cards in the relationship deck + 23 shifts it to start at 23
    const imageName = `${randomRelationCard}.png`;
    const response = await fetch(`/api/images/${imageName}`);
    const imageData2 = await response.json();

    relationshipImage.src = imageData2.url;
    relationshipImage.alt = imageData2.public;

    const relationField = document.getElementById('relationField');
    relationField.value = imageData2.private;

}
// Add an event listener to the button
relationshipBtn.addEventListener("click", function () {
    retrieveRelation();
});

// NPC card stuff here  
async function npcRelation() {
    // Generate a random number between 37 and 56
    const randomNpcCard = Math.floor(Math.random() * 19) + 37;
    const imageName = `${randomNpcCard}.png`;
    const response = await fetch(`/api/images/${imageName}`);
    const imageData3 = await response.json();

    npcImage.src = imageData3.url;
    npcImage.alt = imageData3.sideA;

}
// Add an event listener to the button
npcBtn.addEventListener("click", function () {
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
    nameListItem.classList.add('hidden');

    // Set the input field value to the last list item's text
    nameField.value = nameListItem.textContent;

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
    ageListItem.classList.add('hidden');

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
    const response = await fetch('/api/familyBackground/');
    const familyBackground = await response.json();

    // Create the select element
    const select = document.createElement('select');
    select.id = 'famInput';
    select.className = 'form-select p-2 m-1 mt-3 rounded-3xl bg-primary-light text-primary-dark';

    // Populate the select dropdown with the familyBackground data
    familyBackground.forEach(item => {
        const option = document.createElement('option');
        option.value = item.famId; // Use famId 
        option.textContent = `${item.famType}`; // Display the family type
        select.appendChild(option);
    });

    famContainer.appendChild(select);

}
famSaveBtn.addEventListener('click', async () => {
    const famId = document.getElementById('famInput').value;
    const response = await fetch(`/api/familyBackground/${famId}`);
    const familyData = await response.json();
    const info = familyData.info;
    const type = familyData.famType;

    // Create and append the paragraph with the fetched info
    const famInfoHeader = document.createElement('p');
    famInfoHeader.classList.add('fam-info-header', 'text-white', 'pl-1', 'pt-1');
    famInfoHeader.textContent = type;
    famContainer.appendChild(famInfoHeader);

    const famInfoParagraph = document.createElement('p');
    famInfoParagraph.classList.add('fam-info-paragraph','text-white', 'text-sm', 'pl-1', 'pt-1', 'bg-primary-light/20', 'p-1', 'rounded-3xl');
    famInfoParagraph.textContent = info;
    famContainer.appendChild(famInfoParagraph);

    // Hide the select element
    famInput.classList.add('hidden');
    famSaveBtn.classList.add('hidden');
    famEditBtn.classList.remove('hidden');
});

famEditBtn.addEventListener('click', () => {
    // Remove the paragraph with the fetched info
    const famInfoParagraph = document.querySelector('.fam-info-paragraph');
    if (famInfoParagraph) {
        famContainer.removeChild(famInfoParagraph);
    }
    const famInfoHeader = document.querySelector('.fam-info-header');
    if (famInfoHeader) {
        famContainer.removeChild(famInfoHeader);
    }
    famInput.classList.remove('hidden');
    famSaveBtn.classList.remove('hidden');
    famEditBtn.classList.add('hidden');
});
// Call the function to populate the dropdown when the script loads
familyDrop();

// Character Role things
const roleContainer = document.getElementById('roleContainer');
const roleSaveBtn = document.getElementById('roleSaveBtn');
const roleEditBtn = document.getElementById('roleEditBtn');

async function roleDrop() {
    const response = await fetch('/api/characterRole/');
    const roleBackground = await response.json();

    // Create the select element
    const select = document.createElement('select');
    select.id = 'roleInput';
    select.className = 'form-select p-2 m-1 mt-3 rounded-3xl bg-primary-light text-primary-dark';

    // Populate the select dropdown with the roleBackground data
    roleBackground.forEach(item => {
        const option = document.createElement('option');
        option.value = item.roleId; // Use roleId 
        option.textContent = `${item.role}`; // Display the role
        select.appendChild(option);
    });

    roleContainer.appendChild(select);
}

roleSaveBtn.addEventListener('click', () => {
    const roleInput = document.getElementById('roleInput');
    const selectedOption = roleInput.options[roleInput.selectedIndex];
    const roleText = selectedOption ? selectedOption.textContent : '';

    // Hide the select element
    roleInput.classList.add('hidden');

    // Display the selected option's text
    const roleInfo = document.createElement('p');
    roleInfo.id = 'roleInfo';
    roleInfo.textContent = roleText;
    roleContainer.appendChild(roleInfo);
    roleInfo.classList.add('text-white', 'pl-1', 'bg-primary-light/20', 'rounded-3xl',);

    // Hide the save button and show the edit button
    roleSaveBtn.classList.add('hidden');
    roleEditBtn.classList.remove('hidden');
});

roleEditBtn.addEventListener('click', () => {
    const roleInput = document.getElementById('roleInput');
    const roleInfo = document.getElementById('roleInfo');

    // Show the select element
    roleInput.classList.remove('hidden');

    // Remove the roleInfo element from the DOM
    roleContainer.removeChild(roleInfo);

    // Show the save button and hide the edit button
    roleSaveBtn.classList.remove('hidden');
    roleEditBtn.classList.add('hidden');
});

// Call the function to populate the dropdown when the script loads
roleDrop();

//Desire info
const desireContainer = document.getElementById('desireContainer');
const desireSaveBtn = document.getElementById('desireSaveBtn');
const desireEditBtn = document.getElementById('desireEditBtn');
const desireField = document.getElementById('desireField');
const desireInfo = document.getElementById('desireInfo');

desireSaveBtn.addEventListener('click', () => {
    const type = desireField.value.trim(); // Get the value from the input field

    if (!type) {
        console.log('Desire field is empty');
        return;
    }

    const desireParagraph = document.createElement('p');
    desireParagraph.classList.add('desire-paragraph', 'text-white', 'pl-1', 'p-1', 'bg-primary-light/20', 'rounded-3xl', 'm-2');
    desireParagraph.textContent = type;
    desireContainer.appendChild(desireParagraph);
    
    // Hide the input and save button, show the edit button
    desireField.classList.add('hidden');
    desireSaveBtn.classList.add('hidden');
    desireEditBtn.classList.remove('hidden');
    desireInfo.classList.add('hidden')
});

desireEditBtn.addEventListener('click', () => {
    // Show the input and save button, hide the edit button
    desireField.classList.remove('hidden');
    desireSaveBtn.classList.remove('hidden');
    desireEditBtn.classList.add('hidden');
    desireInfo.classList.remove('hidden');

    // Remove the paragraph with the entered info
    const desireParagraph = document.querySelector('.desire-paragraph');
    if (desireParagraph) {
        desireContainer.removeChild(desireParagraph);
    }
});

//relationship info
const relationContainer = document.getElementById('relationContainer');
const relationSaveBtn = document.getElementById('relationSaveBtn');
const relationEditBtn = document.getElementById('relationEditBtn');
const relationField = document.getElementById('relationField');
const relationInfo = document.getElementById('relationInfo');

relationSaveBtn.addEventListener('click', () => {
    const type = relationField.value.trim(); // Get the value from the input field

    if (!type) {
        console.log('Desire field is empty');
        return;
    }

    const relationParagraph = document.createElement('p');
    relationParagraph.classList.add('relation-paragraph', 'text-white', 'pl-1', 'p-1', 'bg-primary-light/20', 'rounded-3xl', 'm-2');
    relationParagraph.textContent = type;
    relationContainer.appendChild(relationParagraph);
    
    // Hide the input and save button, show the edit button
    relationField.classList.add('hidden');
    relationSaveBtn.classList.add('hidden');
    relationEditBtn.classList.remove('hidden');
    relationInfo.classList.add('hidden')
});

relationEditBtn.addEventListener('click', () => {
    // Show the input and save button, hide the edit button
    relationField.classList.remove('hidden');
    relationSaveBtn.classList.remove('hidden');
    relationEditBtn.classList.add('hidden');
    relationInfo.classList.remove('hidden');

    // Remove the paragraph with the entered info
    const relationParagraph = document.querySelector('.relation-paragraph');
    if (relationParagraph) {
        relationContainer.removeChild(relationParagraph);
    }
});
const desireCard = document.getElementById('desireCard');
const desireBtn = document.getElementById('desireBtn');
const desireImage = document.getElementById('desireImage');
const relationshipCard = document.getElementById('relationshipCard');
const relationshipBtn = document.getElementById('relationshipBtn');
const relationshipImage = document.getElementById('relationshipImage');





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

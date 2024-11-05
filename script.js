

const desireCard = document.getElementById('desireCard');
const desireBtn = document.getElementById('desireBtn');
const desireImage = document.getElementById('desireImage');

async function retrieveDesire() {
    // Generate a random number between 1 and 22
    const randomDesireCard = Math.floor(Math.random() * 22) + 1;

}
// Add an event listener to the button
desireBtn.addEventListener("click", function() {
    retrieveDesire();
});

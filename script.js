const desireCard = document.getElementById('desireCard');
const desireBtn = document.getElementById('desireBtn');
const desireImage = document.getElementById('desireImage');

async function retrieveDesire() {
    // Generate a random number between 1 and 22
    const randomDesireCard = Math.floor(Math.random() * 22) + 1;
    const imageName = `${randomDesireCard}.png`;

    try {
        const response = await fetch(`/api/images/${imageName}`);
        if (!response.ok) {
            throw new Error('Laura effed up');
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

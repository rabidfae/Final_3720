const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const characterRole = [
    {
        roleId: 0,
        role: 'heir',
    }, 
    {
        roleId: 1,
        role: 'Socalite',
    },
    {
        roleId: 2,
        role: 'Dowager',
    },
    {
        roleId: 3,
        role: 'Dependant',
    }, 
    {
        roleId: 4,
        role: 'New Arrival',
    },
    {
        roleId: 5,
        role: 'Meddler',
    },
    {
        roleId: 6,
        role: 'Cornerstone',
    },
    {
        roleId: 7,
        role: 'Hedonist',
    },
    {
        roleId: 8,
        role: 'Tutor',
    },
    {
        roleid: 9,
        role: 'Careerist',
    }
]
const familyBackground = [
    {
        famId: 0,
        famType: 'Old Money',

    },
    {
        famId: 1,
        famType: 'Peerage',
    },
    {
        famId: 2,
        famType: 'New Money',
    },
    {
        famId: 3,
        famType: 'Humble Origins',

    },
    {
        famId: 4,
        famType: 'Clergy',
    },
    {
        famId: 5,
        famType: 'Military',
    },
    {
        famId: 6,
        famType: 'Ill-Reputed',

    },
    {
        famId: 7,
        famType: 'Foreign',
    }
]

const imageData = [
     {
        imageId: '1.png',
        cardId: 1,
        desire: "Restore your reputation and be forgiven by your former friend.",
        description: "Create and spread a rumor about what you did. Start with one extra negative reputation tag and one extra resolve token.",
    },
    {
        imageId: '2.png',
        cardId: 2,
        desire: "Convince your parent to accept you as their legitimate child, and declare your relation to all the world.",
        description: "Born out of wedlock, your wealthier and more powerful progenitor refused to acknowledge you from an early age. Now the time has come for a family reunion."
    },  
     {
        imageId: '3.png',
        cardId: 3,
        desire: "Recieve proposals from or make successful proposals to at least two eligible individuals.",
        description: "the careful hunter checks all their snares -- and only the finest morsel is cooked and eaten for dinner."
    },   {
        imageId: '4.png',
        cardId: 4,
        desire: "Take revenge on your rival for steal what you love",
        description: "Work with the player of your rival to establish what they took from you."
    },   {
        imageId: '5.png',
        cardId: 5,
        desire: "Come into subastantial wealth, while ensureing your reputation stays absolutley impeccable",
        description: "Your debts are severe, and the time to pay is approaching. You need money fast. You can't let anyone know your true situation however, as your good opinion and the help you receive from others would both be lost."
    },   {
        imageId: '6.png',
        cardId: 6,
        desire: "Disinherit your elder sibling.",
        description: "Create a parent as a mandatory connection."
    },   {
        imageId: '7.png',
        cardId: 7,
        desire: "Orchestrate at least one marriage between people of your choosing.",
        description: "Afer the first novel chapter, decide on two potential couples and share these with the faciliator. Your desire is to see one or both happily married."
    },   {
        imageId: '8.png',
        cardId: 8,
        desire: "Restore your family name, and resurem your place in society.",
        description: "Public Knowledge: The scandal your family caused. Create and spread two negative rumours about your family and the scandal they caused."
    },   {
        imageId: '9.png',
        cardId: 9,
        desire: "Bolster your love interest's reputation, and then win your parent's permission to marry them.",
        description: "Create a parent as a mandatory connection."
    },   {
        imageId: '10.png',
        cardId: 10,
        desire: "enter into a marriage with someone who truly loves you -- without revealing your hidden weatlh.",
        description: "Before word speads, you must find someone to marry who loves you for who you are, not your money."
    },   {
        imageId: '11.png',
        cardId: 11,
        desire: "Protect your younger sibling from all ill, and make sure they marry who you choose.",
        description: "After the first novel chapter, decide who your younger sibling should marry -- and protect them from all other advances."
    },   {
        imageId: '12.png',
        cardId: 12,
        desire: "Appear to court your intended while becoming secretly engaged to the object of your true affections.",
        description: "Create your aunt as a manadatory connection",
    },   {
        imageId: '13.png',
        cardId: 13,
        desire: "Get your inheritance back",
        description: "Public Knowledge: You were disinherited. If you do not have the parent relationshop card, careate a parent as a mandatory connection."
    },   {
        imageId: '14.png',
        cardId: 14,
        desire: "Turn your enemy's connections against them.",
        description: "You are ready, willing, and able to turn the tables so emphatically that they can never be turned back."
    },   {
        imageId: '15.png',
        cardId: 15,
        desire: "Save your family from financial ruin so you can break off your engagement.",
        description: "Public Knowledge: You are engaged"
    },   {
        imageId: '16.png',
        cardId: 16,
        desire: "Marry your secret fiance.",
        description: "Your fiance is your only chance for a position, status and rank you could never otherwise hope to achieve."
    },   {
        imageId: '17.png',
        cardId: 17,
        desire: "Best or humiliate your cousin in every matter, and win your uncle's inheritance.",
        description: "Create your uncle as a mandatory connection."
    },   {
        imageId: '18.png',
        cardId: 18,
        desire: "Determine your love's true feelings, and re-establish your engagement.",
        description: "You must know, do they still feel the same way you do? And if they do, would the ever agree to re-establish your union -- this time, for good?"
    },   {
        imageId: '19.png',
        cardId: 19,
        desire: "Break up the relationshop between the object of you affection and their paramour",
        description: "If your relationshop card is rivals, establish who the object of your affection is."
    },   {
        imageId: '20.png',
        cardId: 20,
        desire: "Marry in such a way as to  impress your patron and win their support.",
        description: "Show this desire card to your patron."
    },   {
        imageId: '21.png',
        cardId: 21,
        desire: "Marry your child to somebody tremendously rich or of the peerage",
        description: "They simply must marry in an advantageous manner; its a matter of common decency to all the family."
    },   {
        imageId: '22.png',
        cardId: 22,
        desire: "Reunite the feuding families, through marriage or inheritance.",
        description: "Public Knowledge: The existence of the feud, and who it is between, is well known in the local town."
    },
];
const imageData2 = [
    {
        imageId: '23.png',
        cardId: 23,
        public:"Best of Friends, the giver and the taker of this card are the most intimate companions, and longstanding friends.",
        private:"Best of Friends, the giver and the taker of this card are the most intimate companions, and longstanding friends, and are well disposed to help with each other's plans and endeavours.",
    },
    {
        imageId: '24.png',
        cardId: 24,
        public:"Former Friend: The giver and the taker of this card were former friends, until the givers cruel actions ended the friendship.",
        private: "Former Friend: The giver of this card wronged the taker painfullt and completely."
    },
    {
        imageId: '25.png',
        cardId: 25,
        public: "Friends: The giver and the taker of this card are longstanding acquaintances. They still visit on the rare occasion.",
        private: "Friends: The giver and taker of this card are old flames. They had a romance once, and while the raging fire of their feelings has quietened, the spark never truly dies."
    },
    {
        imageId: '26.png',
        cardId: 26,
        public: "Old Family Friend: The giver and the taker of this card are old family friends. Years ago, their families were quite well acquainted. But since the giver's youth they have rarely corresponded.",
        private: "Parent and Child: The giver of this card is the illegitmate child of the taker. The taker rejected their child from birth to avoid scandal and disrepute to their family and name. The taker has not laid eyes on their child since infancy."

    },
    {
        imageId: '27.png',
        cardId: 27,
        public: "Siblings: the taker of this card is the sibling of the giver. The giver will determine who is older and who is younger.",
        private: "Siblings: The taker of this card is the sibling of the giver. The giver will determine who is older and who is younger."
    },
    {
        imageId: '28.png',
        cardId: 28,
        public: "Rivals: The giver and the taker of this card are rivals.",
        private: "Rivals: The giver and the taker of this card are rivals. For the taker, this may be a trivial rivalry, but for the giver, it is certainly a bitter one."
    },
    {
        imageId: '29.png',
        cardId: 29,
        public: "Relation: Though not in the same immediate family, the giver and the taker of this card are relations. One is the cousin, aunt, uncle, niece, or nephew of the other. The Giver will determine their relationship.",
        private: "Relation: Though not in the same immediate family, the giver and the taker of this card are relations. One is the cousin, aunt, uncle, niece, or nephew of the other. The Giver will determine their relationship."
    },
    {
        imageId: '30.png',
        cardId: 30,
        public:"Object of Affection: The giver of this card is clearly in love with the taker.",
        private: "Object of Affection: The giver of this card is clearly in love with the taker. Whether the taker chooses to reciprocate this affection is entirely up to them."
    },
    {
        imageId: '31.png',
        cardId: 31,
        public: "Acquaintances: The giver and the taker of this card became friends during a season in London three years ago.",
        private: "Secret Fiances: The giver and taker of this card have been secretly engaged for years, despite the disapproval of one of their families. While the giver wishes to go ahead, the taker has become relecutant. The taker is higher in social status or wealthier than the giver."
    },
    {
        imageId: '32.png',
        cardId: 32,
        public:"Intended: The giver and take of this card are publicly engaged or bethrothed.",
        private:"Intended: The giver and take of this card are publicly engaged or bethrothed."
    },
    {
        imageId: '33.png',
        cardId: 33,
        public:"Parent and Child: The giver of this card is the parent or guardian of the taker.",
        private:"Parent and Child: The giver of this card is the parent or guardian of the taker."
    },
    {
        imageId: '34.png',
        cardId: 34,
        public:"Child and Parent:The giver of this card is the child or ward of the taker.",
        private: "Child and Parent:The giver of this card is the child or ward of the taker."
    },
    {
        imageId: '35.png',
        cardId: 35,
        public:"Patron and Client: The taker of this card is the patron of the giver.",
        private: "Patron and Client: The taker of this card is the patron of the giver, for now. What the giver mst do to maintain such a relationship we will discover."
    }
]
const imageData3 = [

]
// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'src')));

app.use(express.static(path.join(__dirname)));

// Serve static files from the 'images' directory
app.use('/images', express.static('images'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});



// Endpoint to get image data by name
app.get('/api/images/:imageName', (req, res) => {
    const imageName = req.params.imageName;

    // Find the image data by imageId in all 3 arrays. 
    const image = imageData.find(img => img.imageId === imageName) || imageData2.find(img => img.imageId === imageName) || imageData3.find(img => img.imageId === imageName);

    // Check if the image data exists
    if (image) {
        // Serve the image metadata along with the image URL
        res.send({
            url: `http://localhost:${PORT}/images/${imageName}`,
            ...image
        });
    } else {
        res.status(404).send('Image has gone missing, please try again.');
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});  



// console.log("Image ID:", imageData[7].imageId); 
// console.log("Desire:", imageData[7].desire); 
// console.log("Description:", imageData[7].description);

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const characterRole = [
    {
        roleId: 0,
        role: 'Heir',
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
            info: 'Since your distant ancestor hired his first historian, hisory has told of your family’s superiority in station and economy. On occasion, you pay visit to the family vault, and imagine your progenitors admiring the same golden trinkets as you now cradle in your hands',
            intialReputation: {
                positive: 'Sensible, well-connected, dependable, generous, caring',
                negative: 'Old-fashioned, miserly, overbearing, self-obsessed, tasteless.',
        
            },
    },
    {
        famId: 1,
        famType: 'Peerage',
            info:'Whichever ancestor replaced the dull grunt of “Mrs”with the pleasant tones of “Lady”, you cannot help but be daily grateful. For in being so elevated they gave you and yours a gift which withstands the infidelities of wealth and reputation. Those four letters which appear before your name grant you access to situations and circles, which in truth, you have little business entering.',
            title:' Earl/Countess,Viscount/Viscountess, Baron/Baroness, Sir, Lord, Lady, the Honourable.',
            intialReputation: {
                positive: 'Influential, austere, wise,famous, giving.',
                negative: 'Vain, proud, vengeful, incompetent, mean-spirited.',
            }
    },
    {
        famId: 2,
        famType: 'New Money',
        info:'England’s industrial age charges but forward, and yours was the family that grabbed it by the horns and rode it bareback to substantial wealth. Though your parents are not genteel in manners, their considerable influence in economic matters has convinced most that they are still worthy of association.',
        intialReputation: {
            positive: 'Rich, ambitious, clever,industrious, novel.',
            negative: 'Vulgar, outsider, uneducated, unfortunate connections, common',
        }
    },
    {
        famId: 3,
        famType: 'Humble Origins',
        info: 'Jesus, they say, was born in a stable—and though few know it, your place of emergence was little better. Hard times hit your family without notice, and have made you humble and resourceful. Your circumstances have won you the trust of poorer people even as your wealthier relations strive to teach you to rise above them',
        intialReputation: {
            positive: 'Sweet, obedient, tough, innocent, open.',
            negative: 'Dirty, ignorant, poor, dangerous, stupid.',
        }

    },
    {
        famId: 4,
        famType: 'Clergy',
        info:'There is nothing more worthy of the expended effort of the generations before you than knowledge of the divine. Your coffers have grown but modestly from your family’s labour, but you are unconcerned. For your true inheritance came in a different form—your substantial moral capital.',
        intialReputation: {
            positive: 'Kind, knowledgeable, moral, charismatic, devoted.',
            negative: 'Dull, hypocritical, greedy, out-of-touch, useless.',
        }
    },
    {
        famId: 5,
        famType: 'Military',
        info: 'Though in reality looks may be deceiving, your family has no qualms in equating sound body with honourable character. As those before you, you were born to stare in the eye the worst humanity has to offer, and yet remain genteel. Your family may be strict, but their unwavering discipline has driven them only to vast accomplishment',
        intialReputation: {
            positive: 'Brave, steadfast,honourable, capable, forthright.',
            negative: 'Blunt, cold, reckless, aloof, angry.',
        }
    },
    {
        famId: 6,
        famType: 'Ill-Reputed',
        info:'There is little more tedious than being born to a family constantly plagued by scandal. Always finding yourself having to move from place to place, constantly finding out that some uncle or another has offended fashionable society, and thus excluding you from the latest ball. Not to mention the questions you have to field at church on a weekly basis. If only everybody would conduct themselves sensibly—society that is, you love your family dearly.',
        intialReputation: {
            positive: ' Reformed, experienced, repentant, unique, widespread',
            negative: 'Immoral,irresponsible,ruined, indebted, unpredictable.',
        }

    },
    {
        famId: 7,
        famType: 'Foreign',
        info:'It isn’t simply that your family is “not from here”, though indeed none of your family had lived nearby until recent times. Rather, it is where you are from that you find fills your life with both prejudice, and delight. On one hand, you will always retain the burden of an outsider. On the other hand, it is surprising how often “outlandish customs” prove themselves useful.',
        intialReputation: {
            positive: 'Charming, fascinating,cultured, worldly, refreshing',
            negative: ' Uncouth, strange,prejudiced, misinformed, hostile.',
        }
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
    },
    {
        imageId: '36.png',
        cardId: 36,
        public:"Mentor: The taker of this card is the mentor of the giver. The giver is the taker's protege.",
        private: "Mentor: The taker of this card is the mentor of the giver. The giver is the their protege."
        
    }
]
const imageData3 = [
    {
        imageId: '37.png',
        cardId: 37,
        sideA: "Evelyn: Succesful Physician. Homely, sincere, and professional. Holds the confidence and secrets of many of society's most influential.",
        sideB: "Evelyn: Succesful Physician. Homely, polite, lacing in ambition. Only the fate of modern medicine can rouse him from his state of professional cordiality."

    },
    {
        imageId: '38.png',
        cardId: 38,
        sideA: "Christine. Good Samaritan. Married. Always take an interest. Equal parts matchmaker and peacemaker. Will not rest until eveyone has reconciled.",
        sideB:"Christine. High-spirited landowner. Military family. Unreserved, caring and always looking for the next adventure. Owns half of the buildings in town."
    },
    {
        imageId: '39.png',
        cardId: 39,
        sideA: "James. Amateur boxer. Precarious Prospects. Gregarious, sun-kissed, and easy going. Few compunctions about abandoning conventional behavoir in favour of good odds or a good laugh.",
        sideB: "James. Married. Perpetually under-dressed. Delightful in relaxed company, endlessly embarassing in good company. A little too free with his money."
    },
    {
        imageId: '40.png',
        cardId: 40,
        sideA: "Edith. Strong-willed teenager. Well-connected family. Usually found out of doors, or evading her governess. Shy in public, but knows much more of her family's business and secrets, than she lets on.",
        sideB:" Edith. Exurberant teenager. Influential family. Perceptive, courageous, and independent. Has substantial over her family, who have subatantial influence over the town."
    },
    {
        imageId: '41.png',
        cardId: 41,
        sideA: "Darling. Paragon of wisdom. Married. Town's foremost advisor on affairs of the heart. Married to an absent naval captian, leaving her estate free for the high purpose of matchmaking.",
        sideB: "Darling. Independent. Apparently Married. Always ready to offer advice, and assist in its execution. Marriend to an absent naval captain, leaving her free to make her own mark on society."
    },
    {
        imageId: '42.png',
        cardId: 42,
        sideA: "Jacob. Curate. Rising prospects. Implusice, exurberant, and colourful. Ambitious, but distracted. Set to inherit his uncle's estate -- provided his reputation remains spotless.",
        sideB: "Jacob. Curate. Questionable Prospects. Enthusiastic, free spirited, and a little unfashionable. His love of the Lord's wrk is matched only by his love for his own voice."

    },
    {
        imageId: '43.png',
        cardId: 43,
        sideA: "Denis. Gentleman of leisure. Bit of a dandy. Quick witted romantic, amiable and flippant. Dressed in only the latest style. Suitably contemptuous of ambitious careerists and hard work.    ",
        sideB: "Denis. Aspiring gentleman of leisure. Naval family. Exellent conversationalist, even better whist player. Desperate to marry well to avoid his father's edict that he become a naval officer."
    },
    {
        imageId: '44.png',
        cardId: 44,
        sideA: "Joy. Town social committee member. Fun locoing and extremely talkative. Enjoys any activity that could be classed as a social occasion, and relishes the oppurtunity to share news.",
        sideB: "Joy. Doting mother. New money. Friendly, extremely talkative, and fond of life's simple pleasures. Has three small children who are the key to obtaining her good opinion."
    },
    {
        imageId: '45.png',
        cardId: 45,
        sideA: "Jasper. Recently wealthly. Yet unmarried. Kindly, socially awkward, and naive. Poor judge of character, and pays excessive regard to the opinons of others.",
        sideB: "Jasper. Unexpectedly wealthy. Yet unmarried. Inherited the Barony of a distant relation. A touch naive. Pursued by a litany of suitors who he is beginning to suspect are fortune hunters."
    },
    {
        imageId: '46.png',
        cardId: 46,
        sideA: "James. Successfull Businessman. New money. Polite, reserved, and extremely private on personal matters. New to good society. Disguises his humble origins at all costs.",
        sideB: "James. Ruthless businessman. New money. Rich in funds but poor in titles. His cold amd mercenary personality is carefully hidden under a gentlemanly exterior."
    },
    {
        imageId: '47.png',
        cardId: 47,
        sideA: "Isabel. Consummate socialite. Extremely wealthy. Friendly, wily, and forthright. Born into the peerage, a fact which she uses to her absolute advantage.",
        sideB: "Isabel. Social tactician. Well-connected.Friendly, fashionable, and disarming. Adept in using society's opinions and conventions to her advantage. Most likely one step ahead of you."
    },
    {
        imageId: '48.png',
        cardId: 48,
        sideA: "Daniel. Asipring professor. Modest prospects. The eternal scholar. An inexhaustible storyteller well-like by good society. Stubborn and wilful if crossed.",
        sideB: "Daniel. Asipiring professor. Doubtful prospects. Ambitious, but poor. Always the centre of attention. His charm is his best weapon in his quest for tenure."
    },
    {
        imageId: '49.png',
        cardId: 49,
        sideA: "Margaret. Secret romantic. New money. Sharp-witted, butting and headstrong on the surface. Secretly, she would go out of her way to see true love blossom.",
        sideB: "Margaret. Broken-hearted. Wealthy heiress. Sharp, headstrong, and independent. Child of a widower with high expectations. Abruptly ended a previous engagement; the scandal still lingers."
    },
    {
        imageId: '50.png',
        cardId: 50,
        sideA: "Mortimer. Awkward horticulturist. Flowering prospects. Enjoys converstaion, but rarely recalls it. Recovers from social faux pas by feigning expertise, or redirecting to the Latin names of flowers.",
        sideB: "Mortimer. Dedicated horticulturist. Wilting prospects. His frim expression masks his social embarrassment. Spends extensive time in gardens at the cost of his meagre annual income."
    },
    {
        imageId: '51.png',
        cardId: 51,
        sideA: "Beatrice. Orphan. Scathing wit. Smart and elegant. Her quiet smile hides her true opinion. Ward of a famed military officer. Her prospects are dependent on his generosity.",
        sideB: "Beatrice. Newly out. Extensive dowry. Smart, resevered and well read. A sly wit for those privileged enough to hear it. Woe to the fortune hunter who thinks her an easy catch."
    },
    {
        imageId: '52.png',
        cardId: 52,
        sideA: "Anastasia. Unconventional. Widowed. Distracted, creative, eccentric. Cad of a husband died in a horse racing accident, leaving her the estate. Cares little about society's opinion.",
        sideB: "Anastasia. Eccentric. Artistic. Creative, warm, absent-minded. Excessively devoted ot art, and frequently holds exhibitions in her family's eclecctic estate."
    },
    {
        imageId: '53.png',
        cardId: 53,
        sideA: "Stephanie. Outspoken. Old money. Witty, intellectual, and literary. Her privileged family background grants her the luxury of being opinionated most women cannot enjoy.",
        sideB: "Stephanie. Bluestocking. High standards. An outspoken lover of literature. Disinclined to marry, due to a general disappointment over the quality of the average suitor."
    },
    {
        imageId: '54.png',
        cardId: 54,
        sideA: "Edwin. Imposing. Army colonel. Strict, demanding, and old-fashioned. From a long line of distinguished military officers. Secretly proud of those he loves.",
        sideB: "Edwin. Devoted father. Army colonel. Severe, dedicated, and thoughtful. Protective of and besotted with his children. has excessively high standards for everyone else."
    },
    {
        imageId: '55.png',
        cardId: 55,
        sideA: "Melissa. Courageous. Fragile prospects. Possessed of an extremely short temper and can't stand beign told what to do. Desires love, but refuses to sacrifice her independence.",
        sideB: "Melissa. Adventurous. Uncertain prospects. Practical, intrepid, and matter of fact. Craves travel abroad, but lacks means. Desires love, but is reluctant to sacrifice her passions."
    },
    {
        imageId: '56.png',
        cardId: 56,
        sideA:"Mollie. Accomplished. Rose from humble origins. Calm, collected, and curious. Cares deeply for those around her, and generously provides others with second, third, and fourth chances.",
        sideB: "Mollie. Philanthropic. Rose from humble. Caring, collected, and curious. Having risen to the upper gentry through tireless determination, she is well placed to advise others on the point."
    }

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

//family background info
app.get('/api/familyBackground', (req, res) => {
    res.send(familyBackground);
});
// character role info
app.get('/api/characterRole', (req, res) => {
    res.send(characterRole);
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});  



// console.log("Image ID:", imageData[7].imageId); 
// console.log("Desire:", imageData[7].desire); 
// console.log("Description:", imageData[7].description);

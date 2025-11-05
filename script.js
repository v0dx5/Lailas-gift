// Birthday Website - JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Birthday website loaded!');
    
    // Initialize positive messages generator
    const positiveButton = document.getElementById('positiveButton');
    const messagesContainer = document.getElementById('positiveMessagesContainer');
    
    if (positiveButton && messagesContainer) {
        positiveButton.addEventListener('click', function() {
            // Generate one message per click
            generatePositiveMessage();
        });
    }
    
    // Initialize compliment generator
    const complimentButton = document.getElementById('complimentButton');
    const complimentContainer = document.getElementById('complimentContainer');
    
    if (complimentButton && complimentContainer) {
        complimentButton.addEventListener('click', function() {
            // Generate one compliment per click
            generateCompliment();
        });
    }
    
    // Initialize animated background
    initializeAnimatedBackground();
    
    // Initialize theme changer
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        let currentTheme = 0; // 0 = default (dark red), 1-4 = other themes
        themeToggle.addEventListener('click', function() {
            const root = document.documentElement;
            root.classList.remove('theme-1', 'theme-2', 'theme-3', 'theme-4');
            currentTheme = (currentTheme % 5);
            if (currentTheme > 0) {
                root.classList.add('theme-' + currentTheme);
            }
            currentTheme++;
        });
    }
    
    // Initialize countdown timer
    initializeCountdown();
    
    // Initialize birthday facts generator
    const factsButton = document.getElementById('factsButton');
    const factsContainer = document.getElementById('factsContainer');
    
    if (factsButton && factsContainer) {
        factsButton.addEventListener('click', function() {
            generateBirthdayFact();
        });
    }
    
    // Initialize zodiac sign
    initializeZodiacSign();
    
    // Initialize birthday statistics
    initializeBirthdayStats();
    
    // Initialize birthday predictions
    const predictionButton = document.getElementById('predictionButton');
    const predictionDisplay = document.getElementById('predictionDisplay');
    if (predictionButton && predictionDisplay) {
        predictionButton.addEventListener('click', function() {
            generateBirthdayPrediction();
        });
    }
    
    // Initialize birthday paragraph modal
    const paragraphButton = document.getElementById('paragraphButton');
    const paragraphModal = document.getElementById('paragraphModal');
    const paragraphClose = document.getElementById('paragraphClose');
    
    if (paragraphButton && paragraphModal) {
        paragraphButton.addEventListener('click', function() {
            paragraphModal.style.display = 'flex';
        });
    }
    
    if (paragraphClose && paragraphModal) {
        paragraphClose.addEventListener('click', function() {
            paragraphModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    if (paragraphModal) {
        paragraphModal.addEventListener('click', function(e) {
            if (e.target === paragraphModal) {
                paragraphModal.style.display = 'none';
            }
        });
    }
    
    // Initialize fortune cookie generator
    const fortuneButton = document.getElementById('fortuneButton');
    const fortuneContainer = document.getElementById('fortuneContainer');
    
    if (fortuneButton && fortuneContainer) {
        fortuneButton.addEventListener('click', function() {
            generateFortuneCookie();
        });
    }
});

// ============================================
// Countdown Timer
// ============================================

function initializeCountdown() {
    // Set the birthday date (year, month-1, day, hour, minute)
    // November 8, 2025 at 12:00 AM
    const birthdayDate = new Date(2025, 10, 8, 0, 0, 0);
    
    // Get current date
    const now = new Date();
    
    // If birthday has passed this year, set for next year
    if (now > birthdayDate) {
        birthdayDate.setFullYear(birthdayDate.getFullYear() + 1);
    }
    
    function updateCountdown() {
        const now = new Date();
        const difference = birthdayDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');
            
            if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
            if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
            if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
            if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
        } else {
            // Birthday has arrived!
            const countdownContainer = document.getElementById('countdownTimer');
            if (countdownContainer) {
                countdownContainer.innerHTML = '<div style="font-size: 1.5rem; font-weight: bold; text-shadow: 0 0 20px rgba(255,255,255,0.8);">🎉 It\'s Your Birthday Today! 🎉</div>';
            }
        }
    }
    
    // Update immediately
    updateCountdown();
    
    // Update every second
    setInterval(updateCountdown, 1000);
}

// ============================================
// Positive Messages Generator
// ============================================

function generatePositiveMessage() {
    const messagesContainer = document.getElementById('positiveMessagesContainer');
    if (!messagesContainer) return;
    
    // Generate a random positive message dynamically
    const randomMessage = generateRandomPositiveMessage();
    
    // Clear previous messages
    messagesContainer.innerHTML = '';
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = 'positive-message-item';
    messageDiv.textContent = randomMessage;
    
    // Add to container (replacing the old one)
    messagesContainer.appendChild(messageDiv);
}

function generateRandomPositiveMessage() {
    // Arrays of different parts to combine
    const adjectives = [
        "amazing", "wonderful", "incredible", "beautiful", "brilliant", "fantastic", 
        "extraordinary", "remarkable", "outstanding", "magnificent", "stunning", 
        "marvelous", "spectacular", "phenomenal", "exceptional", "inspiring", 
        "radiant", "glowing", "bright", "vibrant", "energetic", "passionate", 
        "courageous", "brave", "strong", "resilient", "determined", "focused",
        "creative", "imaginative", "thoughtful", "caring", "compassionate", 
        "kind", "generous", "loving", "gentle", "warm", "friendly", "optimistic",
        "positive", "uplifting", "encouraging", "motivating", "supportive", "helpful"
    ];
    
    const nouns = [
        "person", "soul", "heart", "mind", "spirit", "individual", "being", 
        "friend", "light", "star", "gem", "treasure", "gift", "blessing", 
        "inspiration", "miracle", "wonder", "joy", "hope", "dream", "champion",
        "warrior", "hero", "leader", "creator", "artist", "genius", "masterpiece"
    ];
    
    const actions = [
        "light up", "brighten", "illuminate", "transform", "elevate", "uplift",
        "inspire", "motivate", "encourage", "empower", "strengthen", "heal",
        "bring joy to", "make a difference in", "change", "improve", "enhance",
        "enrich", "bless", "touch", "impact", "influence", "shape", "create"
    ];
    
    const qualities = [
        "strength", "courage", "resilience", "determination", "passion", "creativity",
        "kindness", "compassion", "wisdom", "intelligence", "talent", "skill",
        "potential", "uniqueness", "beauty", "grace", "charm", "charisma",
        "confidence", "optimism", "positivity", "energy", "vibrancy", "spark"
    ];
    
    const outcomes = [
        "the world", "everyone around you", "the lives you touch", "your community",
        "those you love", "your future", "your dreams", "your goals", "your path",
        "your journey", "every moment", "every day", "everything you do"
    ];
    
    const affirmations = [
        "You are", "You have", "You bring", "You create", "You inspire",
        "You radiate", "You possess", "You embody", "You demonstrate", "You show",
        "You display", "You exude", "You reflect", "You represent", "You stand for"
    ];
    
    const messages = [
        "You deserve", "You are worthy of", "You have earned", "You merit",
        "You are entitled to", "You've worked hard for", "You've achieved"
    ];
    
    const rewards = [
        "all the happiness in the world", "every wonderful thing life offers",
        "love and success", "fulfillment and joy", "your dreams coming true",
        "endless possibilities", "amazing opportunities", "incredible adventures",
        "a bright and beautiful future", "all the best things", "wonderful experiences"
    ];
    
    // Randomly select message templates
    const templates = [
        // Template 1: You are [adjective] [noun]
        () => `${getRandom(affirmations)} a ${getRandom(adjectives)} ${getRandom(nouns)}!`,
        
        // Template 2: Your [quality] is [adjective]
        () => `Your ${getRandom(qualities)} is ${getRandom(adjectives)}!`,
        
        // Template 3: You [action] [outcome]
        () => `You ${getRandom(actions)} ${getRandom(outcomes)}!`,
        
        // Template 4: [Message] [reward]
        () => `${getRandom(messages)} ${getRandom(rewards)}!`,
        
        // Template 5: You have the [quality] to [action]
        () => `You have the ${getRandom(qualities)} to ${getRandom(actions)} ${getRandom(outcomes)}!`,
        
        // Template 6: Your [adjective] [quality] [action]
        () => `Your ${getRandom(adjectives)} ${getRandom(qualities)} ${getRandom(actions)} ${getRandom(outcomes)}!`,
        
        // Template 7: Every day you [action] as a [adjective] [noun]
        () => `Every day you ${getRandom(actions)} as a ${getRandom(adjectives)} ${getRandom(nouns)}!`,
        
        // Template 8: The world is better because of your [quality]
        () => `The world is better because of your ${getRandom(qualities)}!`,
        
        // Template 9: You [action] others with your [adjective] [quality]
        () => `You ${getRandom(actions)} others with your ${getRandom(adjectives)} ${getRandom(qualities)}!`,
        
        // Template 10: Your [adjective] spirit [action] [outcome]
        () => `Your ${getRandom(adjectives)} spirit ${getRandom(actions)} ${getRandom(outcomes)}!`,
        
        // Template 11: You are [adjective] in everything you do
        () => `You are ${getRandom(adjectives)} in everything you do!`,
        
        // Template 12: The [quality] you possess is [adjective]
        () => `The ${getRandom(qualities)} you possess is ${getRandom(adjectives)}!`,
        
        // Template 13: You [action] through your [adjective] [quality]
        () => `You ${getRandom(actions)} through your ${getRandom(adjectives)} ${getRandom(qualities)}!`,
        
        // Template 14: Your [adjective] [noun] inspires everyone around you
        () => `Your ${getRandom(adjectives)} ${getRandom(nouns)} inspires everyone around you!`,
        
        // Template 15: You have an [adjective] ability to [action]
        () => `You have an ${getRandom(adjectives)} ability to ${getRandom(actions)} ${getRandom(outcomes)}!`,
        
        // Template 16: The [adjective] [quality] you show is [adjective]
        () => `The ${getRandom(adjectives)} ${getRandom(qualities)} you show is ${getRandom(adjectives)}!`,
        
        // Template 17: You are becoming a more [adjective] [noun] every day
        () => `You are becoming a more ${getRandom(adjectives)} ${getRandom(nouns)} every day!`,
        
        // Template 18: Your [adjective] approach to life [action] [outcome]
        () => `Your ${getRandom(adjectives)} approach to life ${getRandom(actions)} ${getRandom(outcomes)}!`,
        
        // Template 19: You [action] with [adjective] [quality]
        () => `You ${getRandom(actions)} with ${getRandom(adjectives)} ${getRandom(qualities)}!`,
        
        // Template 20: The [adjective] [noun] you are is [adjective]
        () => `The ${getRandom(adjectives)} ${getRandom(nouns)} you are is ${getRandom(adjectives)}!`
    ];
    
    // Randomly select a template and generate the message
    const selectedTemplate = templates[Math.floor(Math.random() * templates.length)];
    return selectedTemplate();
}

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// ============================================
// Compliment Generator (Infinite)
// ============================================

function generateCompliment() {
    const complimentContainer = document.getElementById('complimentContainer');
    if (!complimentContainer) return;
    
    // Generate a random compliment dynamically
    const randomCompliment = generateRandomCompliment();
    
    // Clear previous compliments
    complimentContainer.innerHTML = '';
    
    // Create compliment element
    const complimentDiv = document.createElement('div');
    complimentDiv.className = 'positive-message-item';
    complimentDiv.textContent = randomCompliment;
    
    // Add to container
    complimentContainer.appendChild(complimentDiv);
}

function generateRandomCompliment() {
    // Arrays of different parts to combine
    const compliments = [
        "amazing", "incredible", "wonderful", "beautiful", "stunning", "gorgeous",
        "brilliant", "talented", "creative", "intelligent", "smart", "wise",
        "kind", "caring", "compassionate", "thoughtful", "generous", "loving",
        "funny", "hilarious", "witty", "charming", "charismatic", "captivating",
        "strong", "brave", "courageous", "resilient", "determined", "focused",
        "inspiring", "motivating", "uplifting", "energetic", "vibrant", "radiant"
    ];
    
    const nouns = [
        "person", "soul", "individual", "being", "friend", "star", "gem",
        "treasure", "gift", "blessing", "inspiration", "miracle", "wonder",
        "artist", "genius", "masterpiece", "champion", "hero", "warrior"
    ];
    
    const actions = [
        "light up", "brighten", "illuminate", "transform", "elevate", "uplift",
        "inspire", "motivate", "encourage", "empower", "strengthen", "heal",
        "bring joy to", "make a difference in", "change", "improve", "enhance"
    ];
    
    const starters = [
        "You are", "You have", "You bring", "You create", "You inspire",
        "You radiate", "You possess", "You embody", "You show", "You display"
    ];
    
    const qualities = [
        "smile", "laugh", "personality", "energy", "spirit", "presence",
        "voice", "eyes", "heart", "mind", "soul", "style", "aura", "vibe"
    ];
    
    const templates = [
        // Template 1: You are [compliment] [noun]
        () => `${getRandom(starters)} a ${getRandom(compliments)} ${getRandom(nouns)}!`,
        
        // Template 2: Your [quality] is [compliment]
        () => `Your ${getRandom(qualities)} is ${getRandom(compliments)}!`,
        
        // Template 3: You [action] [noun]
        () => `You ${getRandom(actions)} ${getRandom(nouns)}!`,
        
        // Template 4: You have a [compliment] [quality]
        () => `You have a ${getRandom(compliments)} ${getRandom(qualities)}!`,
        
        // Template 5: You are so [compliment]
        () => `You are so ${getRandom(compliments)}!`,
        
        // Template 6: Your [compliment] [quality] [actions]
        () => `Your ${getRandom(compliments)} ${getRandom(qualities)} ${getRandom(actions)} everyone around you!`,
        
        // Template 7: You look [compliment] today
        () => `You look ${getRandom(compliments)} today!`,
        
        // Template 8: You have the most [compliment] [quality]
        () => `You have the most ${getRandom(compliments)} ${getRandom(qualities)}!`,
        
        // Template 9: You are [compliment] in every way
        () => `You are ${getRandom(compliments)} in every way!`,
        
        // Template 10: Your [quality] makes you [compliment]
        () => `Your ${getRandom(qualities)} makes you ${getRandom(compliments)}!`,
        
        // Template 11: You are [compliment] and [compliment]
        () => `You are ${getRandom(compliments)} and ${getRandom(compliments)}!`,
        
        // Template 12: You have such a [compliment] [quality]
        () => `You have such a ${getRandom(compliments)} ${getRandom(qualities)}!`,
        
        // Template 13: You are [compliment] beyond words
        () => `You are ${getRandom(compliments)} beyond words!`,
        
        // Template 14: Your [compliment] nature [actions]
        () => `Your ${getRandom(compliments)} nature ${getRandom(actions)} everyone!`,
        
        // Template 15: You are truly [compliment]
        () => `You are truly ${getRandom(compliments)}!`,
        
        // Template 16: You have a [compliment] way of [action]
        () => `You have a ${getRandom(compliments)} way of ${getRandom(actions)}!`,
        
        // Template 17: You are [compliment] inside and out
        () => `You are ${getRandom(compliments)} inside and out!`,
        
        // Template 18: Your [quality] is [compliment] and [compliment]
        () => `Your ${getRandom(qualities)} is ${getRandom(compliments)} and ${getRandom(compliments)}!`,
        
        // Template 19: You are [compliment] in the best way
        () => `You are ${getRandom(compliments)} in the best way!`,
        
        // Template 20: You have [compliment] [quality] that [actions]
        () => `You have ${getRandom(compliments)} ${getRandom(qualities)} that ${getRandom(actions)}!`
    ];
    
    // Randomly select a template and generate the compliment
    const selectedTemplate = templates[Math.floor(Math.random() * templates.length)];
    return selectedTemplate();
}

// ============================================
// Animated Background
// ============================================

function initializeAnimatedBackground() {
    const background = document.getElementById('animatedBackground');
    if (!background) return;
    
    // Create stars (more but not too many - around 35 stars)
    for (let i = 0; i < 35; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (2 + Math.random() * 2) + 's'; // Vary animation speed
        background.appendChild(star);
    }
    
    // Create floating hearts
    for (let i = 0; i < 12; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = '💖';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.animationDuration = (8 + Math.random() * 4) + 's';
        heart.style.fontSize = (1 + Math.random() * 0.5) + 'rem';
        background.appendChild(heart);
    }
    
    // Create sparkles
    for (let i = 0; i < 18; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = '✨';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        sparkle.style.animationDuration = (3 + Math.random() * 2) + 's';
        background.appendChild(sparkle);
    }
    
    // Create floating particles
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        background.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, 20000);
    }
    
    // Create particles periodically
    setInterval(createParticle, 2000);
    
    // Create initial particles
    for (let i = 0; i < 8; i++) {
        setTimeout(() => createParticle(), i * 400);
    }
    
    // Add floating balloons
    for (let i = 0; i < 6; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'floating-balloon';
        balloon.textContent = '🎈';
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.top = Math.random() * 100 + '%';
        balloon.style.animationDelay = Math.random() * 6 + 's';
        balloon.style.animationDuration = (12 + Math.random() * 8) + 's';
        balloon.style.fontSize = (1.2 + Math.random() * 0.8) + 'rem';
        background.appendChild(balloon);
    }
    
    // Add confetti elements
    for (let i = 0; i < 10; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 4 + 's';
        confetti.style.animationDuration = (5 + Math.random() * 5) + 's';
        background.appendChild(confetti);
    }
}

// ============================================
// Customization Functions
// ============================================

// Function to update the birthday person's name
function updateName(name) {
    const nameElement = document.querySelector('.birthday-name');
    if (nameElement) {
        nameElement.textContent = name;
    }
}

// Function to update the age
function updateAge(age) {
    const ageElement = document.getElementById('age');
    if (ageElement) {
        ageElement.textContent = age;
    }
}

// Function to update the birthday message
function updateMessage(message) {
    const messageElement = document.querySelector('.birthday-message');
    if (messageElement) {
        messageElement.textContent = message;
    }
}

// ============================================
// List Customization Functions
// ============================================

// Function to update love list items
function updateLoveList(items) {
    const loveList = document.querySelector('.love-list');
    if (loveList && Array.isArray(items) && items.length === 10) {
        const listItems = loveList.querySelectorAll('li');
        items.forEach((item, index) => {
            if (listItems[index]) {
                listItems[index].textContent = item;
            }
        });
    }
}

// Function to update hate list items
function updateHateList(items) {
    const hateList = document.querySelector('.hate-list');
    if (hateList && Array.isArray(items) && items.length === 10) {
        const listItems = hateList.querySelectorAll('li');
        items.forEach((item, index) => {
            if (listItems[index]) {
                listItems[index].textContent = item;
            }
        });
    }
}

// Function to update secret message
function updateSecretMessage(message) {
    const secretMessageDiv = document.querySelector('.secret-message-text');
    if (secretMessageDiv) {
        secretMessageDiv.innerHTML = message;
    }
}

// ============================================
// Example Usage
// ============================================

// Example usage (uncomment and customize):
// updateName('Sarah');
// updateAge('25');
// updateMessage('Your custom birthday message here!');

// Example for updating love list:
// updateLoveList([
//     'Your amazing smile',
//     'Your kindness',
//     'Your sense of humor',
//     'Your intelligence',
//     'Your compassion',
//     'Your creativity',
//     'Your strength',
//     'Your honesty',
//     'Your passion',
//     'Everything about you!'
// ]);

// Example for updating hate list:
// updateHateList([
//     'How perfect you are',
//     'That you\'re always right',
//     'Your terrible jokes',
//     'How you steal blankets',
//     'That you make me smile',
//     'Your amazing cooking',
//     'How caring you are',
//     'That you\'re too good',
//     'How I can\'t stay mad',
//     'That you\'re not here right now'
// ]);

// Example for updating secret message:
// updateSecretMessage('<p>This is a super special secret message just for you!</p><p>I hope you have an amazing birthday!</p>');

// ============================================
// Birthday Facts Generator
// ============================================

function generateBirthdayFact() {
    const factsContainer = document.getElementById('factsContainer');
    if (!factsContainer) return;
    
    const facts = [
        "Your birthday falls on November 8th!",
        "November babies are known for their determination and intensity.",
        "People born in November share their birth month with world leaders and creative geniuses.",
        "Your birthstone is Topaz or Citrine, symbolizing strength and healing.",
        "Scorpio and Sagittarius share November - you're likely passionate and adventurous!",
        "November is the only month that can be written without repeating any letter.",
        "Your birthday falls during the beautiful autumn season when leaves change colors.",
        "People born in November are often described as mysterious and magnetic.",
        "November 8th is a special day that comes around only once a year - just for you!",
        "Your birthday month is perfect for cozy celebrations and warm gatherings.",
        "November birthdays are associated with gratitude and reflection.",
        "You share your birth month with many famous artists and thinkers.",
        "November is the 11th month, and 11 is considered a powerful number!",
        "Your birthday falls during a time when families gather together.",
        "People born in November are often very loyal and trustworthy friends."
    ];
    
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    
    factsContainer.innerHTML = '';
    const factDiv = document.createElement('div');
    factDiv.className = 'positive-message-item';
    factDiv.textContent = randomFact;
    factsContainer.appendChild(factDiv);
}

// ============================================
// Zodiac Sign Calculator
// ============================================

function initializeZodiacSign() {
    const zodiacInfo = document.getElementById('zodiacInfo');
    if (!zodiacInfo) return;
    
    // November 8 falls in Scorpio (Oct 23 - Nov 21)
    const zodiacSign = "Scorpio";
    const zodiacDates = "October 23 - November 21";
    const zodiacTraits = [
        "Passionate",
        "Intense",
        "Mysterious",
        "Determined",
        "Loyal",
        "Resourceful"
    ];
    
    const zodiacDescriptions = {
        "Scorpio": "Scorpios are known for their intensity, passion, and mysterious nature. You're a natural leader with incredible determination and depth."
    };
    
    zodiacInfo.innerHTML = `
        <div class="zodiac-sign-name">${zodiacSign}</div>
        <div class="zodiac-dates">${zodiacDates}</div>
        <div class="zodiac-description">${zodiacDescriptions[zodiacSign]}</div>
        <div class="zodiac-traits">
            <strong>Key Traits:</strong> ${zodiacTraits.join(', ')}
        </div>
    `;
}

// ============================================
// Birthday Statistics
// ============================================

function initializeBirthdayStats() {
    const statsGrid = document.getElementById('statsGrid');
    if (!statsGrid) return;
    
    const birthDate = new Date(2012, 10, 8); // November 8, 2012
    const today = new Date();
    const daysAlive = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
    
    // Calculate next birthday
    const nextBirthday = new Date(today.getFullYear(), 10, 8);
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const daysUntilNextBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
    
    // Calculate weeks and months since birth
    const weeksAlive = Math.floor(daysAlive / 7);
    const monthsAlive = Math.floor(daysAlive / 30);
    
    // Fun stats
    const heartbeats = Math.floor(daysAlive * 24 * 60 * 70); // Approximate 70 bpm
    const breaths = Math.floor(daysAlive * 24 * 60 * 15); // Approximate 15 breaths per minute
    const smiles = Math.floor(daysAlive * 10); // Estimated 10 smiles per day
    const birthdaysCelebrated = Math.floor(daysAlive / 365);
    const seasonsLived = Math.floor(daysAlive / 91); // Approximate seasons
    
    updateBirthdayStatsDisplay(birthdaysCelebrated, seasonsLived, smiles, daysUntilNextBirthday);
    
    // Update days until next birthday every hour (so it updates when day changes)
    setInterval(function() {
        const today = new Date();
        const nextBirthday = new Date(today.getFullYear(), 10, 8);
        if (nextBirthday < today) {
            nextBirthday.setFullYear(today.getFullYear() + 1);
        }
        const daysUntilNextBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
        const daysEl = document.getElementById('daysUntilBirthday');
        if (daysEl) {
            daysEl.textContent = daysUntilNextBirthday;
        }
    }, 3600000); // Update every hour
}

function updateBirthdayStatsDisplay(birthdaysCelebrated, seasonsLived, smiles, daysUntilNextBirthday) {
    const statsGrid = document.getElementById('statsGrid');
    if (!statsGrid) return;
    
    statsGrid.innerHTML = `
        <div class="stat-item">
            <div class="stat-number">${birthdaysCelebrated}</div>
            <div class="stat-label">Birthdays Celebrated</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">${seasonsLived}</div>
            <div class="stat-label">Seasons Experienced</div>
        </div>
        <div class="stat-item">
            <div class="stat-number" id="daysUntilBirthday">${daysUntilNextBirthday}</div>
            <div class="stat-label">Days Until Next Birthday</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">∞</div>
            <div class="stat-label">Smiles Shared</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">∞</div>
            <div class="stat-label">Amount of Love</div>
        </div>
    `;
}

// ============================================
// Birthday Predictions Generator
// ============================================

function generateBirthdayPrediction() {
    const predictionDisplay = document.getElementById('predictionDisplay');
    if (!predictionDisplay) return;
    
    const predictions = [
        { 
            category: "Adventure",
            prediction: "You'll discover a new hobby that brings you immense joy!",
            emoji: "🎯"
        },
        {
            category: "Success",
            prediction: "A big achievement is coming your way this year!",
            emoji: "🏆"
        },
        {
            category: "Friendship",
            prediction: "You'll strengthen bonds with old friends and make amazing new ones!",
            emoji: "👥"
        },
        {
            category: "Growth",
            prediction: "This year will bring personal growth and self-discovery!",
            emoji: "🌱"
        },
        {
            category: "Joy",
            prediction: "Expect many moments of pure happiness and laughter!",
            emoji: "😊"
        },
        {
            category: "Creativity",
            prediction: "Your creative side will shine brighter than ever!",
            emoji: "🎨"
        },
        {
            category: "Love",
            prediction: "You'll feel more love and appreciation from those around you!",
            emoji: "💕"
        },
        {
            category: "Wisdom",
            prediction: "You'll gain valuable insights that change your perspective!",
            emoji: "💡"
        },
        {
            category: "Health",
            prediction: "A year of excellent health and energy awaits you!",
            emoji: "💪"
        },
        {
            category: "Magic",
            prediction: "Unexpected magical moments will surprise you throughout the year!",
            emoji: "✨"
        }
    ];
    
    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    
    predictionDisplay.innerHTML = `
        <div class="prediction-card">
            <div class="prediction-emoji">${randomPrediction.emoji}</div>
            <div class="prediction-category">${randomPrediction.category}</div>
            <div class="prediction-text">${randomPrediction.prediction}</div>
        </div>
    `;
}

// ============================================
// Birthday Fortune Cookie Generator
// ============================================

function generateFortuneCookie() {
    const fortuneContainer = document.getElementById('fortuneContainer');
    if (!fortuneContainer) return;
    
    const fortunes = [
        "This year will bring you unexpected adventures and beautiful surprises!",
        "Your kindness will create ripples of joy that touch many hearts.",
        "Great opportunities are coming your way - be ready to embrace them!",
        "Your dreams are closer than you think. Keep believing!",
        "This year, you'll discover strengths you never knew you had.",
        "Laughter and love will fill your days more than ever before.",
        "A special someone will bring happiness into your life.",
        "Your creativity will shine brighter than ever this year!",
        "New friendships await you - they'll enrich your journey.",
        "This birthday marks the beginning of your most amazing year yet!",
        "Your positive energy will attract wonderful experiences.",
        "Challenges will become stepping stones to greater success.",
        "Memories made this year will be treasured forever.",
        "Your smile will brighten even the darkest days.",
        "This year holds secrets of joy waiting to be discovered!",
        "You'll find courage you didn't know existed within you.",
        "Beautiful moments are stacking up to make this year magical.",
        "Your passion will inspire others around you.",
        "This birthday brings with it a year of endless possibilities!",
        "Love, laughter, and adventure await you - embrace them all!"
    ];
    
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    
    fortuneContainer.innerHTML = `
        <div class="fortune-cookie-display">
            <div class="fortune-cookie-icon">🥠</div>
            <div class="fortune-text">${randomFortune}</div>
        </div>
    `;
    
    // Add animation effect
    fortuneContainer.style.animation = 'none';
    setTimeout(() => {
        fortuneContainer.style.animation = 'fadeIn 0.5s ease-in';
    }, 10);
}

// ============================================
// Share Functionality
// ============================================

function sharePage() {
    const shareData = {
        title: 'Happy Birthday Laila!',
        text: 'Check out this amazing birthday website!',
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.log('Error sharing', error));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Link copied to clipboard!');
        }).catch(() => {
            // Final fallback: show URL
            prompt('Copy this link:', window.location.href);
        });
    }
}

// ============================================
// Print Functionality
// ============================================

function printPage() {
    window.print();
}


const truthButton = document.getElementById('truthButton');
const dareButton = document.getElementById('dareButton');
const challengeText = document.getElementById('challengeText');

const truthChallenges = [
    "Have you ever cheated on a test?",
    "What's the most embarrassing thing you've done in public?",
    "Tell us your biggest secret.",
    "What is a weird food that you love?",
    "What terrible movie or show is your guilty pleasure?",
    "What was your biggest childhood fear?",
    "What is the first letter of your crush's name?",
    "What is the worst grade you received for a class in school/college?",
    "What is the biggest lie you've ever told?",
    "Have you ever accidentally hit something (or someone!) with your car?",
    "Have you ever broken an expensive item?",
    "What is one thing you'd change about your appearance if you could?",
    "If you suddenly had a million dollars, how would you spend it?",
    "Who is the best teacher you've ever had and why?",
    "What is the worst food you've ever tasted?",
    "What is the weirdest way you've met someone you now consider a close friend?",
    "What is the most embarrassing thing you've posted on social media?",
    "Who was your first celebrity crush?",
    "Have you ever revealed a friend's secret to someone else?",
    "How many kids do you want to have one day (or how many did you want to have growing up)?",
    "If you could only eat one meal for the rest of your life, what would it be?",
    "What is a secret you had as a child that you never told your parents?",
    "What is your favorite book of all time?",
    "What is the last text message you sent your best friend?",
    "What is something you would do if you knew there were no consequences?",
    "What is the worst physical pain you've ever been in?",
    "Personality-wise, are you more like your mom or your dad?",
    "When is the last time you apologized (and what did you do)?",
    "Have you ever reported someone for doing something wrong (either to the police or at work/school)?",
    "If your house caught on fire and you could only save three things (besides people), what would they be?",
    "If you could pick one other player to take with you to a deserted island, who would it be?",
    "What sport or hobby do you wish you would've picked up as a child?",
    "Have you ever stolen anything?"
];



const dareChallenges = [
    "Dance like nobody's watching for 1 minute.",
    "Call a random contact from your phone and sing them a song.",
    "Do your best impersonation of a celebrity.",
    "Read the last text message you sent out loud.",
    "Show the weirdest item you have in your purse/pockets.",
    "Call the first person in your contacts list and sing them 'Happy Birthday.'",
    "Do your best impression of a fish out of water.",
    "Give another player your phone and let them send a social media DM to anyone they want.",
    "Do as many push-ups as you can in one minute.",
    "Give a one-word 'roast' to each other player.",
    "Speak in an Australian accent until your next turn.",
    "Let another player tickle you but don't laugh!",
    "Spin in a swivel chair for 30 seconds and then try to walk a straight line.",
    "Go outside and sing 'You are My Sunshine' at full volume.",
    "Let another player draw a tattoo on your arm in permanent marker.",
    "Hold the plank position until it's your turn again.",
    "Tell each player who you think their celebrity look alike is.",
    "Show off your best dance moves for the full duration of a song.",
    "Narrate the game in a newscaster voice for three turns.",
    "Walk next door with a measuring cup and ask for a cup of sugar.",
    "Switch clothes with another player for the rest of the game.",
    "Put on a blindfold and touch each player's face until you can guess who each player is.",
    "Let another player pour a glass of water on your head.",
    "Coordinate a birthday party with an online sign up.",
    "Give a shoulder rub to the player to your right (if they are comfortable).",
    "Attempt to juggle two or three items of the asker's choosing.",
    "Perform a dramatic version of a monologue from a favorite TV show or movie.",
    "Show the most embarrassing photo on your phone.",
    "Comment a fire emoji on the first five pictures on your Instagram feed.",
    "Do an impression of another player until your next turn.",
    "Try to drink a glass of water without using your hands.",
    "Allow the other players to blindfold you and try to guess three food items from the pantry just by smell.",
    "Do your best interpretive dance/gymnastics floor routine.",
    "Go outside and do your best wolf howl at the moon.",
    "Post an unflattering selfie to your favorite social media account.",
    "Talk and act like a celebrity until the group can guess who you are (this could go multiple turns!)",
    "If you have to get up for the rest of the game, no walking allowed. You can crawl on all fours, roll, somersault, hop on one foot etc., but no walking!",
    "Remove your socks with your teeth.",
    "Go outside and pretend to mow grass with an invisible mower – sounds and all.",
    "Act out a commercial for a product chosen by the other players.",
    "Sing instead of speaking any time you talk for three turns.",
    "Make a silly face and keep it that way until someone in the group laughs.",
    "Do a freestyle rap about the other players for one minute.",
    "Show the group your internet search history.",
    "Let another player style your hair and leave it that way for the rest of the game.",
    "Video chat the person of your choice but pick your nose through the entire conversation.",
    "Put your shoes on the wrong feet and keep them there for the rest of the game.",
    "Call a random acquaintance and tell them you want to break up.",
    "Let the other players pose you and remain in that position until your next turn.",
    "Allow someone else in the group to blindfold you and feed you one item out of the fridge.",
    "Lead the group in a mini yoga class for one minute.",
    "How old are you? Whatever your age is, do that many squats.",
    "Perform a dance routine to a boy band song of the group's choice.",
    "Let another player draw a washable marker mustache on you."
];

truthButton.addEventListener('click', () => {
    const randomTruthIndex = Math.floor(Math.random() * truthChallenges.length);
    challengeText.textContent = truthChallenges[randomTruthIndex];
});

dareButton.addEventListener('click', () => {
    const randomDareIndex = Math.floor(Math.random() * dareChallenges.length);
    challengeText.textContent = dareChallenges[randomDareIndex];
});
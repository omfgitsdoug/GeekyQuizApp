const quizQuestions = [
  {
    number: 1,
    text: "What does TARDIS stand for in the hit show 'Doctor Who'?",
    ans1: 'Total Area Requires Disquise in Space',
    ans2: 'Time and Relative Distance in Space',
    ans3: 'Technological Alien Risks Disquise in Ship',
    ans4: 'Time And Relative Dimension In Space'
  },

  {
    number: 2,
    text: "When is Harry Potter's Birthday?",
    ans1: 'September 1st',
    ans2: 'July 31st',
    ans3: 'October 31st',
    ans4: 'December 25th'
  },

  {
    number: 3,
    text: "Which one of these things wasn't Ned Stark?",
    ans1: 'The head of Winterfell',
    ans2: 'The Hand of the King',
    ans3: 'King of the North',
    ans4: 'Father to Arya'
  },

  {
    number: 4,
    text: 'What is that last name of famous videogame character, Mario?',
    ans1: 'Mario',
    ans2: 'Plumber',
    ans3: 'Luigi',
    ans4: 'Lopez'
  },

  {
    number: 5,
    text: 'Darth Vader grew up on which planet?',
    ans1: 'Alderaan',
    ans2: 'Dantooine',
    ans3: 'Coruscant',
    ans4: 'Tatooine'
  },

  {
    number: 6,
    text: "Which one of these wasn't one of the starter Pokemon in the original Red/Blue versions of the game?",
    ans1: 'Bulbasaur',
    ans2: 'Pikachu',
    ans3: 'Charmander',
    ans4: 'Squirtle'
  },

  {
    number: 7,
    text: "Who did Elijah Wood play in the movie adaptation of 'The Lord of the Rings'?",
    ans1: 'Froyo Baggins',
    ans2: 'Samwise Gamgee',
    ans3: 'Bilbo Baggins',
    ans4: 'Frodo Baggins'
  },

  {
    number: 8,
    text: "What was the real name of Batman's original Robin?",
    ans1: 'Jason Todd',
    ans2: 'Dick Grayson',
    ans3: 'Damian Wayne',
    ans4: 'Timmothy Drake'
  },

  {
    number: 9,
    text: 'Which one of these was not a villain in Teenage Mutant Ninja Turtles?',
    ans1: 'Beebop',
    ans2: 'Rocksteady',
    ans3: 'Splinter',
    ans4: 'Shredder'
  },

  {
    number: 10,
    text: 'If you answer all 10 questions correctly, your score will be 42. Why is the number "42" important?',
    ans1: 'Because 42 is the answer to the Ultimate Question of Life, the Universe, and Everything.',
    ans2: 'Because math is hard',
    ans3: "Because the points don't matter",
    ans4: 'Because Jackie Robinson was number 42 throughout his baseball career '
  }

];

const correctAnswer = [
  'Time And Relative Dimension In Space',
  'July 31st',
  'King of the North',
  'Mario',
  'Tatooine',
  'Pikachu',
  'Frodo Baggins',
  'Dick Grayson',
  'Splinter',
  'Because 42 is the answer to the Ultimate Question of Life, the Universe, and Everything.',
];

const correctImage = [
  'https://media.giphy.com/media/KsqVfMOSFZNV6/giphy.gif',
  'https://media.giphy.com/media/12xjOMTDKk125a/giphy.gif',
  'https://i.amz.mshcdn.com/xjzsIo9S6qs2lkOaV0VdTUeuNqw=/fit-in/1200x9600/http%3A%2F%2Fmashable.com%2Fwp-content%2Fuploads%2F2014%2F08%2Flittlefinger.gif',
  'https://www.mariowiki.com/images/d/d1/SMRL-Line-Bowser-Mario.gif',
  'https://pa1.narvii.com/6587/ed1a5d643ece7eac79c1e04a8822a891014b26e4_hq.gif',
  'https://media.giphy.com/media/10LKovKon8DENq/giphy.gif',
  'https://78.media.tumblr.com/8cbe79c6197f4ed47d0dac890039c048/tumblr_o0dludYLJu1r6w4h8o1_r2_500.gif',
  'https://media.giphy.com/media/26xBABFAnPoa4BZMk/giphy.gif',
  'https://media.giphy.com/media/NXvbWznxGifYc/giphy.gif',
  'https://78.media.tumblr.com/433640fb63c05bdaf54ab8617dc1e284/tumblr_inline_p6hi4sTv3a1rfxdy9_500.gif'
];

const wrongImage = [
  'https://media.giphy.com/media/a9xhxAxaqOfQs/giphy.gif',
  'https://media.giphy.com/media/5hCtXCOKa1y4E/giphy.gif',
  'http://gifimage.net/wp-content/uploads/2017/10/ned-stark-gif-1.gif',
  'https://i.gifer.com/D3mJ.gif',
  'https://media.giphy.com/media/LSmULmByAQHQs/giphy.gif',
  'https://i.pinimg.com/originals/99/49/12/99491215ce7f9983284ebddedcdcdbfa.gif',
  'https://i.gifer.com/W0oK.gif',
  'https://media.giphy.com/media/rR29jBsTB3lZe/giphy.gif',
  'https://i.pinimg.com/originals/d1/32/e3/d132e358ec2cc5d1d2a230adf1aa4fdc.gif',
  'https://media.giphy.com/media/dAmuWIrnrf07S/giphy.gif'
];

const correctImageAlt = [
  'The Doctor and Clara high-fiving',
  'Harry Potter and Ron Weasley high-fiving',
  'Littlefinger making silly faces',
  'Mario and Bowser high-fiving',
  'Darth Vader and some Stormtroopers dancing',
  'Pikachu and Eevee high-fiving',
  'Frodo and his Hobbit friends toasting their mugs',
  'Lego Batman and Robin high-fiving',
  'The Teenage Mutant Ninja Turtles high-fiving',
  `Arthur Dent laughing saying "You can't have my brain! I'm using it!"`,
];

const wrongImageAlt = [
  'The 10th Doctor crying in the rain',
  'Harry Potter screaming as Remus Lupin holds him back',
  'Ned Stark looking very sad',
  `The 10th Doctor with Mario's hat and mustache crying in the rain`,
  'Darth Vader yelling No!',
  'Squirtle laying on the ground crying',
  'Frodo Baggins crying',
  'Batman looking sad in the rain',
  'The Teenage Mutant Ninja Turtles standing in the rain',
  `Marvin from "Hitchhiker's Guide to the Galaxy" saying, 'It's even worse that I thought it would be'`,
];
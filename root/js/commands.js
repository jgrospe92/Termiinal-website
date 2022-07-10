var today = new Date();
const dayOfTheWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

var twitter = "https://twitter.com/jeffrey_grospe";
var password = dayOfTheWeek[today.getDay()];
var linkedin = "https://www.linkedin.com/in/jeffreygrospe/";
var github = "https://github.com/jgrospe92";
var instagram = "https://www.instagram.com/jeffrey_grospe/";
var email = "mailto:jeffreygrospe@yahoo.com";

var githubProject = "https://github.com/jgrospe92";

const whois = [
    "<br>",
    "Hi welcome to website, My name is Jeffrey!✋ Nice to meet you",
    "I'm a computer science student, a photographer, a musician, snowboarder and a gamer 🎮",
    "I completed a 2 years program of computer technician which provided me a solid computer background",
    "I love technology, I'm motivated to learn more and I dreamed of becoming an awesome software engineer one day",
    "I started my programming journey as a self-taught. Then I fell in-love, so I decided to take a computer science program",
    "I've built several projects and collaboration with other students",
    "Fun fact about me, every year I aim to learn something new. For the year 2022, I'm trying my best to learn long-board",
    "Oh! and I like to build customize keyboard.",
    "If you're interested to know me better, feel free to contact. I'm thrilled to tell you my story."

];

const whoami = [
    "<br>",
    '"who am i?" I don\'t know who you are but I\'m interested to hear your story.'
];

const social = [
    "<br>",
    'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/jeffreygrospe' + "</a>",
    'github         <a href="' + github + '" target="_blank">github/jgrospe92' + "</a>",
    'instagram      <a href="' + instagram + '" target="_blank">instagram/jeffrey_grospe' + '</a>',
    'twitter        <a href="' + twitter + '" target="_blank">twitter/jeffrey_grospe' + '</a>',
    "<br>"
];

secret = [
    "<br>",
    "<span class-'command'>sudo</span>        Only use if you're admin",
    "<br>"
];


const projects= [
    "<br>",
    'Blind Dating App         <a href="' + github + '" target="_blank">github/jgrospe92' + "</a>",
    "<br>"

]

const help = [
    "<br>",
    '<span class="command">whois</span>          Who is Jeffrey Grospe?',
    '<span class="command">whoami</span>         Who are you?',
    '<span class="command">social</span>         Display social networks',
    '<span class="command">secret</span>         Find the password',
    '<span class="command">projects</span>       View coding projects',
    '<span class="command">history</span>        View command history',
    '<span class="command">help</span>           List available commands',
    '<span class="command">clear</span>          Clear terminal',
    '<span class="command">banner</span>         Display the header',
    "<br>",
]

const banner = [
    '<span class="index">Jeffrey Grospe <span id="time"></span></span>',
    "         ___   ____",
    "       /' --;^/ ,-_\\     \\ | /       ",
    "      / / --o\\ o-\\ \\\\   --(_)--   ",
    "     /-/-/|o|-|\\-\\\\|\\\\   / | \\   ______                          __     __ __       _       __    __   ",
    "      '`  ` |-|   `` '          / ____/___  _____________  _____/ /_   / //_/____  (_)___ _/ /_  / /_ ",
    "            |-|                / /_  / __ \\/ ___/ ___/ _ \\/ ___/ __/  / ,<  / __ \\/ / __ `/ __ \\/ __/ ",
    "            |-|O              / __/ / /_/ / /  / /  /  __(__  ) /_   / /| |/ / / / / /_/ / / / / /_  ",
    "            |-(\\,__          /_/    \\____/_/  /_/   \\___/____/\\__/  /_/ |_/_/ /_/_/\\__, /_/ /_/\\__/ ",
    "         ...|-|\\--,\\_....                                                         /____/    Â© 2022",
    "      ,;;;;;;;;;;;;;;;;;;;;;;;;,.   ",
    "~~,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
    '<span class="color2">Welcome to my interactive web terminal.</span>',
    "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
]

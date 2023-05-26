var youtube = "https://www.youtube.com/fknight/";
var twitter = "https://www.twitter.com/forrestpknight/";
var password = "fkcodes";
var linkedin = "https://www.linkedin.com/in/forrestpknight/";
var instagram = "https://www.instagram.com/forrestpknight/";
var github = "https://github.com/forrestknight/";
var email = "mailto:forrest@fkcodes.com";

whois = [
  "<br>",
  "Hi, my name is Jeffrey, and I'm a curious and ambitious programmer.👋",
  "My fascination with technology began at a young age when I would spend hours playing games like Mortal Kombat,",
  " Metal Slug, and Super Mario at the nearest arcade in my home country.",
  "These experiences ignited my passion for video games and sparked my desire to explore the world of technology.",
  "Fast forward to today, and I've already developed several games on my own. In addition to game development,",
  "I have built numerous applications for IoT, mobile, desktop, websites, and web services.",
  " Programming challenges excite me, and I enjoy diving into different tech stacks to expand my knowledge and skills.",
  "My ultimate goal is to become a great software engineer.",
  "I'm always eager to learn and grow, and I believe that the possibilities in this field are endless.",
  "Thank you for visiting my website, and please feel free to explore my projects.",
  "<br>",
];

quote = [
  "<br>",
  "Learn as if you will live forever, live like you will die tomorrow.",
  "-Mahatma Gandhi",
  "<br>",
];

social = [
  "<br>",
  'youtube        <a href="' +
    youtube +
    '" target="_blank">youtube/fknight' +
    "</a>",
  'twitter        <a href="' +
    twitter +
    '" target="_blank">twitter/forrestpknight' +
    "</a>",
  'linkedin       <a href="' +
    linkedin +
    '" target="_blank">linkedin/forrestpknight' +
    "</a>",
  'instagram      <a href="' +
    instagram +
    '" target="_blank">instagram/forrestpknight' +
    "</a>",
  'github         <a href="' +
    github +
    '" target="_blank">github/forrestknight' +
    "</a>",
  "<br>",
];

secret = [
  "<br>",
  '<span class="command">sudo</span>           Only use if you\'re admin',
  "<br>",
];

projects = [
  "<br>",
  "Still curating... most projects are offline, on GitHub, or confidential.",
  "<br>",
];

help = [
  "<br>",
  '<span class="command">whois</span>          About me',
  '<span class="command">quoteme</span>        Shows random quotes?',
  '<span class="command">video</span>          View YouTube videos',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">secret</span>         Find the password',
  '<span class="command">projects</span>       View coding projects',
  '<span class="command">history</span>        View command history',
  '<span class="command">help</span>           You obviously already know what this does',
  '<span class="command">email</span>          Do not email me',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">banner</span>         Display the header',
  "<br>",
];



function checkScreenSize() {

  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  console.log(screenWidth);
  if (screenWidth <= 890){

    let mobileBanner = [
      `                    \\      /             _\\/_`,
      "                     .-'-.              //o\\ _\\/_",
      "  _  ___  __  _ --_ /     \\ _--_ __  __ _ | __/o\\ ",
      `=-=-_=-=-_=-=_=-_= -=======- = =-=_=-=_,-'|"'""-|-,_ `,
      ` =- _=-=-_=- _=-= _--=====- _=-=_-_,-"          |`,
      `=- =- =-= =- = -  -===- -= - .`,
      '<span class="color2 headerLine">Welcome to my interactive web terminal.</span>',
      '<span class="color2 headerLine">For a list of available commands, type</span> <span class="command cmdLine">\'help\'',
    ];
    return mobileBanner;
  } else {
    let DesktopBanner = [
      `    _____________   `,  
      `   /             /|`,
      `  /             / |`,
      ` /____________ /  |`,
      ` | ___________ |   |`,
      ` ||           ||   |`,
      ` || Hello     ||   |`,
      ` ||   world   ||   |`,
      ` ||___________||   |`,
      ` ||   _______  |  /`,
      ` /|  (_______) | /`,
      `( |_____________|/`,
      ` \\`,
      `  .=======================.`,
      `  | ::::::::::::::::  ::: |`,
      `  | ::::::::::::::[]  ::: |`,
      `  |   -----------     ::: |`,
      `  '-----------------------'`,
        '<span class="color2 text-wrap headerLine">Welcome to my interactive web terminal.</span>',
        '<span class="color2 text-wrap headerLine">For a list of available commands, type</span> <span class="command cmdLine">\'help\'',
      
      ];
      return DesktopBanner;
  }
}

// run the function on page load and when the window is resized
window.addEventListener('load', () => {
  banner = checkScreenSize();
});

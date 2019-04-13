import { Project } from './project';

export const PROJECTS: Project[] = [


  // Blank

  // {
  //   id: 15,
  //   name: "",
  //   imgs: {
  //     heroImg: "",
  //   },
  //   tile: {
  //     cols: 2,
  //     rows: 1,
  //     color: ''
  //   },
  //   details: {
  // buttonText:'',

  //     client: "",
  // role client: "",
  //     brief: "",
  //     elaborate: ["","",""]
  //   },
  // },


  // Google Search

  {
    id: 14,
    name: 'Doodle Space',
    imgs: {
      heroImg: './assets/hp.png',
      supportingImgs: ['./assets/hp-1.png'],
    },
    prototype: null,
    tile: {
      cols: 2,
      rows: 2,
      color: '#C3002F'
    },
    details: {
      buttonText: null,
      client: 'Google Doodle',
      role: 'Creative Technologist',
      brief: 'Prototyping for the Google Doodle team',
      elaborate: [
        "This project is too early to share the details. But what I can share:",
        "While working for Google on the Doodle team as a creative technologist I built a prototype of the Google ecosystem. Including but not limited too the homepage, the search results page and gmail.",
      ]
    },
  },

  // Windshield Wipers

  {
    id: 13,
    name: 'Windshield Wipers',
    imgs: {
      heroImg: './assets/windshield-wipers-hero.png',
      supportingImgs: [
        './assets/windshield-wiper-1.png',
        './assets/windshield-wiper-2.png',
        './assets/windshield-wiper-3.png',
      ],
    },
    prototype: null,
    tile: {
      cols: 2,
      rows: 2,
      color: '#DD0031'
    },
    details: {
      buttonText:'Play game',
      url: 'http://clifford.codes/windshield-wipers/',
      client: 'Google Doodle game concept',
      role: 'Creative Technologist',
      brief: 'This was an exercise of prototyping for playability, several iterations were iterated through to create this playable version of this windshield wiper emulation game.',
      elaborate: [
        'One of the key requirements was to make the game playable while encouraging the user to not just blast the spacebar. This is how the power indicator was conceptualized. Too many swipe of the wipers will quickly drain the power and leave one defenseless again the oncoming rain particles.',
        'Another motivator is the point system. The goal is to motivate the player to wait to swipe till the last moment, to increase excitement, the longer the spot is on screen the more the spot is worth.'
      ],
    },
  },

  // TurboTax

  {
    id: 12,
    name: 'Intuit TurboTax',
    imgs: {
      heroImg: './assets/turbotax__hero.png',
      supportingImgs: [
        './assets/turbotax__sup-1.png',
      ],
    },
    prototype: null,
    tile: {
      cols: 3,
      rows: 2,
      color: '#C3002F'
    },
    details: {
      buttonText:'',

      client: "TurboTax",
      role: "Front-End Development & XD Prototyping",
      brief: 'While contracting with Intuit from 2014-2016 I was on a team responsible for the TurboTax homepage and then on the Design Studio Team as a Prototyper.',
      elaborate: [
        "While contributing as a developer to the marketing team for TurboTax.com I learned a lot about large team agile development and how to use GitFlow on a large scale",
        "Be sure to ask me about my contributions to the navigation menu in this design.",
        "Having a natural thirst for design I helped with the UI/UX of a in-house tool called Starboard that took data from our Jira board and our GitHub and presented info about project status and risk from team and individual perspectives.",
        "But that thirst for design lead to to apply to transfer to the Design Studio at Intuit. In the Design Studio I got to help bring ideas to life in several projects, especially in the 'self employed', 'humanizing', 20 year vision projects.",
        "Most of my focus went to the Prototyping frame work appropriately dubbed TurboTax Prototyping Platform or TTPF. This was setup with an Angular framework and simulated the entire TurboTax experience end to end. It had an emulated homepage and a Hi-fidelity click though of the app with no real data - just inputs passed between screens.",
        "Most of this code was considered scrappy, and that was celebrated because scrappy meant quick iterations. The only code in TTPF that was typically strait copy/pasted into production was the animation code written in GSAP. A lot of effort was put into the motion of those animations and our GSAP was robust enough to translate directly to product in most cases.",
        "It wasnt all code. One story telling exercise quickly became to big for our TTPF. So we used Apple's Keynote to do some really neat animations that emulated things like talking to your car and TV about your finances.",
      ],
    },

  },

  // UberEats

  {
    id: 11,
    name: 'Image Automator',
    imgs: {
      heroImg: './assets/uber-eats__hero.jpg',
    },
    prototype: null,
    tile: {
      cols: 1,
      rows: 2,
      color: '#C3002F'
    },
    details: {
      buttonText:'',

      client: "Uber Eats",
      role: "Design Engineer",
      brief: 'A front-end image editor for anyone to use.',
      elaborate: [
        "The goal of this project was to create a solution for restaurant marketers to brand their marketing content a.k.a. 'food pics'",
        "The solution is a front end tool, built as a widget for the content management system (CMS). A user can upload a single food pic and the system will automatically process 7 images in specific formats of size width and logo/assets overlay.",
        "The system automatically centered and zoomed the images based on common needs, but the user was also empowered to customize the pan/zoom: similar to, but different from, a FaceBook avatar editor when an overlay is applied. Once the solution was adapted to a CMS the output configuration could be fully customized with new assets and sizes. The output of the system was downloadable as a group zip file or individual JPG/PNG"
      ],
    },

  },

  // Simon Says

  {
    id: 10,
    name: 'Simon Says',
    imgs: {
      heroImg: './assets/simon-says__hero.gif',
      supportingImgs: [
        './assets/simon-says__hero.gif',
      ]
    },
    prototype: {
      url: 'http://clifford.codes/simon-says/',
      width: 320,
      height: 500,
    },
    details: {
      buttonText:'',

      client: "Game emulation exercise",
      role: null,
      url: 'http://clifford.codes/simon-says/',
      brief: 'This, for fun, project\'s goal was to emulate a classic electronic game that would be easily recognizable and easy to play. This game was mostly built in 2015 while passing the time donating blood and platelets.',
      elaborate: [
        'The majority of this project is vanilla Javascript and jQuery with some CSS3 visuals.',
        'Like most of my side projects: no image pixels were used to create these visuals.',
      ],
    },
    tile: {
      cols: 1,
      rows: 3,
      color: '#DD0031'
    },

  },

  // Fundraisr

  {
    id: 9,
    name: 'Fundraisr',
    imgs: {
      heroImg: './assets/fundraisr__hero.jpg',
      supportingImgs: [
        './assets/fundraisr__sup-1.png',
        './assets/fundraisr__sup-2.png',
      ],
    },
    prototype: null,
    tile: {
      cols: 3,
      rows: 3,
      color: '#DD0031'
    },
    details: {
      buttonText:'',

      client: "CMSCODE INC.",
      role: "Web Dev",
      brief: "Fundraisr, or 'Fund Raiser',",
      elaborate: [
        "Fundraisr is a product of a small start up company, CMSCODE, aimed at revolutionizing the non-profit donations industry from with-in. ",
        "My role in this project has been creating a marketing front door for the product, the product administrator's user work-flow, and a template system for device responsive and user friendly donation forms."
      ],
    },

  },

  // Responsive Forms

  {
    id: 8,
    name: 'Responsive Forms',
    imgs: {
      heroImg: './assets/donationform__hero.png',
    },
    prototype: null,

    details: {
      buttonText:'',

      client: "CMSCODE INC.",
      role: "Web Design & Dev.",
      brief: "Retrofitting donation forms to fit on mobile screens.",
      elaborate: [],
    },
    tile: {
      cols: 2,
      rows: 3,
      color: '#DD0031'



    }
  },

  // Parallax Portfolio

  {
    id: 7,
    name: 'Parallax Microsite',
    imgs: {
      heroImg: './assets/parallax__hero.png',
    },
    prototype: null,
    tile: {
      cols: 1,
      rows: 3,
      color: '#DD0031'
    },
    details: {
      buttonText:'Visit live site',
      url: "http://clifford.codes/microsite/",
      client: "Self Project",
      role: null,
      brief: 'A Web Design Template with parallax backgrounds, custom photography, and some use of cool CSS',
      elaborate: [
        "This was a fun project I did on the side in school. I was really excited about parallax when I learned how to make it work, I think this was my best mix of using it very heavily without totally over doing it.",
        "This project is mostly jQuery/CSS3/HTML5",
      ],
    },

  },

  // Lights Out

  {
    id: 6,
    name: 'Lights Out',
    imgs: {
      heroImg: './assets/lightsout__hero.png',
      supportingImgs: [
        './assets/lightsout__sup-1.jpg',
        './assets/lightsout__sup-2.jpg',
        './assets/lightsout__sup-3.png',
      ]
    },
    prototype: {
      url: 'http://clifford.codes/lights-out/',
      width: '320',
      height: '480',
    },
    tile: {
      cols: 1,
      rows: 3,
      color: '#C3002F'
    },
    details: {
      buttonText:'',

      client: "School Project",
      role: null,
      brief: 'The final project in intro to Javascript for Designers',
      elaborate: [
        "Press the start button and try to turn off all the lights - every tap toggles itself and those adjacent.",
        "Almost the entire class was focused on the final project: which was to create a game using Javascript. I choose to emulate a classic electronic game. I tried to stay true to the original design - hence the power button - but added a few improvements.",
        "This was my very first javascript endeavor, but the use of CSS3 really steal the show. The visuals are 100% CSS3 gradients, shadows, and other tricks."
      ],
    },

  },

  // Starboard

  {
    id: 5,
    name: 'Starboard',
    imgs: {
      heroImg: './assets/starboard__hero.png',
    },
    prototype: null,
    tile: {
      cols: 2,
      rows: 2,
      color: '#C3002F'
    },
    details: {
      buttonText:'',

      client: "Intuit",
      role: "UI/UX Design",
      brief: "in-house developer tool",
      elaborate: [
        "By developers for developers is the common theme amongst in-house developer tools. With this project I worked with the Source Control Manager on out team to layout user workflows and theme.",
      ],
    },

  },

  // Bike Genre Illustrations

  {
    id: 4,
    name: 'Bike Genre Illustrations',
    imgs: {
      heroImg: './assets/bike_bmx.png',
      supportingImgs: [
        './assets/bike_am.png',
        './assets/bike_bmx.png',
        './assets/bike_dh.png',
        './assets/bike_fr.png',
        './assets/bike_xc.png',
      ]
    },
    prototype: null,
    tile: {
      cols: 1,
      rows: 2,
      color: '#DD0031'
    },
    details: {
      buttonText:'',

      client: "Self Project",
      role: 'Illustrator',
      brief: 'Illustrations of the different Mountain Bike Genres',
      elaborate: [
        "I love working in illustrator, especially abstracting objects into their simplest form. In this project I blended my love of mountain biking with my love of vector art and made these illustrations to suggest the differences between the genres.",
        "Each bike has it's own unique characteristics to set it apart from it's very similar neighbor. 'All Mountain', 'Bicycle MotoCross', 'Down Hill', 'Free Ride' and 'Cross Country' are all very similar disciplines from afar - but up close they are quite different"
      ],
    },

  },

  // Morphing Icons

  {
    id: 3,
    name: 'Morphing Icons',
    imgs: {
      heroImg: './assets/morph__hero.png',
    },
    prototype: {
      url: '//codepen.io/commander-clifford/embed/XXXGWB/?height=400&theme-id=29267&default-tab=result"',
      width: 480,
      height: 400,
    },
    details: {
      buttonText:'',

      client: "Self Project",
      role: null,
      brief: 'Just how far can we go with CSS3?',
      elaborate: [
        "I love changing something simple and boring into something simple and delightful! This is the inspiration that lead to the 2016 TurboTax website menu solution",
        "Click at your hearts desire 😇",
        "Check out more on my CSS3 collection at <a href='https://codepen.io/collection/AYygQO/' target='_blank'>Codepen.io</>",
      ],
    },
    tile: {
      cols: 1,
      rows: 2,
      color: '#DD0031'
    }
  },

  // Style Tile

  {
    id: 0,
    name: 'Style Tile',
    imgs: {
      heroImg: './assets/styletile__hero.jpg',
    },
    prototype: null,
    tile: {
      cols: 2,
      rows: 2,
      color: '#DD0031'
    },
    details: {
      buttonText:'Visit archived site',
      url: 'http://clifford.codes/style-tile/',
      client: "Freelance",
      role: "Media Shop",
      brief: 'Web design and dev for a tile company',
      elaborate: [
        "To help support a tile installation company I created a website and shot a video.",
        "The owner only wanted the ability to update photos - nothing more or less. The simplified solution was accomplished with PHP to mirror a directory and search for valid image files to load into the experience.",
        "Note the large amount of slide show images on the home page carousel. It was by request that this not be limited."
      ],
    },

  },

  // Loading Indicators

  {
    id: 1,
    name: 'Loading Indicators',
    imgs: {
      heroImg: './assets/loading-indicators__hero.png',
    },
    prototype: {
      url: '//codepen.io/commander-clifford/embed/yJKRJz/?height=480&theme-id=29267&default-tab=result',
      width: 480,
      height: 400,
    },

    details: {
      buttonText:'',
      client: "Self Project",
      role: null,
      brief: 'So much fun with CSS3',
      elaborate: [
        "These lightweight CSS loaders are as delightful to make as they are to watch.",
        "Check out more on my CSS3 collection at <a href='https://codepen.io/collection/AYygQO/' target='_blank'>Codepen.io</>"
      ],
    },
    tile: {
      cols: 2,
      rows: 3,
      color: '#DD0031'
    }
  },

  // IBM

  {
    id: 2,
    name: 'Army Logistics Prototyping',
    imgs: {
      heroImg: './assets/logistics__hero.png',
      supportingImgs: [
        './assets/logistics__sup-1.png',
      ],
    },
    prototype: null,

    details: {
      buttonText:'',

      client: "IBM",
      role: "UI/UX Engineer",
      brief: 'a landing page for Military logistics tools and a simple low-fi prototype built from a projects functional requirements',
      elaborate: [
        "This is a prototype built for a logistics widget",
        "While working with IBM on two Military logistics projects I had influence on several aspects of design and development. In this project I took a page that had one row of visually identical buttons and made it more intuitive. The first and most obvious modification was to break the utility functions out into their own utility navigation bar to symbolize their difference from the application navigation options."
      ],
    },
    tile: {
      cols: 2,
      rows: 2,
      color: '#DD0031'
    }
  },


];

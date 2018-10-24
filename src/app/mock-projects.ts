import { Project } from './project';

export const PROJECTS: Project[] = [

  // Google Search

  {
    id: 14,
    name: 'Google Search',
    imgs: {
      heroImg: './assets/hero-image-2.png',
    },
    tile: {
      cols: 2,
      rows: 1,
      color: '#C3002F'
    },
    details: {
      client: 'Google',
      brief: 'Prototyping',
      elaborate: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',]
    },
  },

  // Windshield Wipers

  {
    id: 13,
    name: 'Windshield Wipers',
    imgs: {
      heroImg: './assets/hero-image.png',
    },
    tile: {
      cols: 2,
      rows: 1,
      color: '#DD0031'
    },
    details: {
      client: 'Google',
      brief: 'Prototyping playability',
      elaborate: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',]
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
        './assets/turbotax__sup-1.png',
        './assets/turbotax__sup-1.png',
        './assets/turbotax__sup-1.png',
        './assets/turbotax__sup-1.png',
      ],
    },
    tile: {
      cols: 3,
      rows: 2,
      color: '#C3002F'
    },
    details: {
      brief: 'Front-End Development & Prototyping',
      elaborate: [
        "While contracting with Intuit from 2014-2016 I was on a team responsible for the TurboTax homepage and then on the Design Studio Team as a Prototyper.",
        "With the Design Studio at Intuit I got to help bring ideas to life in several projects, especially in the 'self employed', 'humanizing', 20 year vision projects.",
        "Most of my focus went to the Prototyping frame work appropriately dubbed TurboTax Prototyping Platform or TTPF. This was setup with an Angular framework and simulated the entire TurboTax experience end to end. It had an emulated homepage and a Hi-fidelity click though of the app with no real data - just inputs passed between screens.",
        "Most of this code was considered scrappy, and that was celebrated because scrappy meant quick iterations. The only code in TTPF that was typically strait copy/pasted into production was the animation code written in GSAP. A lot of effort was put into the motion of those animations and our GSAP was robust enough to translate directly to product in most cases.",
        "It wasnt all code. One story telling exercise quickly became to big for our TTPF. So we used Apple's Keynote to do some really neat animations that emulated things like talking to your car and TV about your finances.",
      ],
    },

  },

  // UberEats

  {
    id: 11,
    name: 'Uber Eats Image Automator',
    imgs: {
      heroImg: './assets/uber-eats__hero.jpg',
    },
    tile: {
      cols: 1,
      rows: 2,
      color: '#C3002F'
    },
    details: {
      brief: 'front end image making tool',
      elaborate: [
        "front end image making tool",
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
        './assets/simon-says__sup-1.png',
        './assets/simon-says__sup-1.png',
        './assets/simon-says__sup-1.png',
        './assets/simon-says__sup-1.png',
        './assets/simon-says__sup-1.png',
      ]
    },

    details: {
      brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      elaborate: [
        '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        '2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ],
    },
    tile: {
      cols: 1,
      rows: 3,
      color: '#DD0031'
    }
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
    tile: {
      cols: 3,
      rows: 3,
      color: '#DD0031'
    },
    details: {
      brief: 'Web Design and Development',
      elaborate: [
        "Fundraisr, or 'Fund Raiser', is a product of small start up company, CMSCODE, aimed at revolutionizing the non-profit donations industry from with-in. My role in this project has been creating a marketing front door for the product, the product administrator's user work-flow, and a template system for device responsive and user friendly donation forms."
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

    details: {
      brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      elaborate: [
        '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        '2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ],
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
    name: 'Parallax',
    imgs: {
      heroImg: './assets/parallax__hero.png',
    },
    tile: {
      cols: 1,
      rows: 3,
      color: '#DD0031'
    },
    details: {
      brief: 'Web Design with heavy Parallax and custom photography',
      elaborate: [
        '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        '2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
    tile: {
      cols: 1,
      rows: 3,
      color: '#C3002F'
    },
    details: {
      brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      elaborate: [
        '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        '2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
    tile: {
      cols: 2,
      rows: 2,
      color: '#C3002F'
    },
    details: {
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
    tile: {
      cols: 1,
      rows: 2,
      color: '#DD0031'
    },
    details: {
      brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      elaborate: [
        '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        '2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
    details: {
      brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      elaborate: [
        '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        '2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
    tile: {
      cols: 2,
      rows: 2,
      color: '#DD0031'
    },
    details: {
      brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      elaborate: [
        '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        '2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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

    details: {
      brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      elaborate: [
        '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        '2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
        './assets/logistics__sup-1.png',
      ],
    },

    details: {
      brief: 'a landing page for Military logistics tools a simple low-fi prototype built from project requirments',
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

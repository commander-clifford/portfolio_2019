import { Project } from './project';

export const PROJECTS: Project[] = [
  {
    id: 0,
    name: 'Intuit TurboTax',
    heroImgUrl: './assets/hero-image.png',
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
    tile: {
      cols: 3,
      rows: 4,
      color: '#C3002F'
    }
  },
  {
    id: 1,
    name: 'Fundraisr',
    heroImgUrl: './assets/hero-image-2.png',
    details: {
      brief: 'Web Design and Development',
      elaborate: [
        "Fundraisr, or 'Fund Raiser', is a product of small start up company, CMSCODE, aimed at revolutionizing the non-profit donations industry from with-in. My role in this project has been creating a marketing front door for the product, the product administrator's user work-flow, and a template system for device responsive and user friendly donation forms."
      ],
    },
    tile: {
      cols: 1,
      rows: 2,
      color: '#DD0031'
    }
  },
  {
    id: 2,
    name: 'Starboard',
    heroImgUrl: './assets/hero-image.png',
    details: {
      brief: "in-house developer tool",
      elaborate: [
        "By developers for developers is the common theme amongst in-house developer tools. With this project I worked with the Source Control Manager on out team to layout user workflows and theme.",
      ],
    },
    tile: {
      cols: 1,
      rows: 2,
      color: '#C3002F'
    }
  },
  {
    id: 3,
    name: 'Parallax',
    heroImgUrl: './assets/hero-image-2.png',
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
  {
    id: 4,
    name: 'Logistic Data Tools',
    heroImgUrl: './assets/hero-image-2.png',
    details: {
      brief: "a simple low-fi prototype built from project requirments",
      elaborate: [
        "This is a prototype built for a logistics widget"
      ],
    },
    tile: {
      cols: 3,
      rows: 2,
      color: '#C3002F'
    }
  },
  {
    id: 5,
    name: 'Logistics Portal',
    heroImgUrl: './assets/hero-image.png',
    details: {
      brief: 'a landing page for Military logistics tools',
      elaborate: [
        "While working with IBM on two Military logistics projects I had influence on several aspects of design and development. In this project I took a page that had one row of visually identical buttons and made it more intuitive. The first and most obvious modification was to break the utility functions out into their own utility navigation bar to symbolize their difference from the application navigation options."
      ],
    },
    tile: {
      cols: 2,
      rows: 4,
      color: '#DD0031'
    }
  },
  {
    id: 6,
    name: 'MOR Furniture',
    heroImgUrl: './assets/hero-image-2.png',
    details: {
      brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      elaborate: [
        '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        '2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ],
    },
    tile: {
      cols: 2,
      rows: 2,
      color: '#C3002F'
    }
  },
  {
    id: 7,
    name: 'Loading Indicators',
    heroImgUrl: './assets/hero-image.png',
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
  {
    id: 8,
    name: 'Lights Out',
    heroImgUrl: './assets/hero-image-2.png',
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
      color: '#C3002F'
    }
  },
  {
    id: 9,
    name: 'Morphing Icons',
    heroImgUrl: './assets/hero-image.png',
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
  {
    id: 10,
    name: 'Style Tile',
    heroImgUrl: './assets/hero-image.png',
    details: {
      brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      elaborate: [
        '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        '2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ],
    },
    tile: {
      cols: 2,
      rows: 2,
      color: '#DD0031'
    }
  },
  {
    id: 11,
    name: 'Responsive Forms',
    heroImgUrl: './assets/hero-image.png',
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
  {
    id: 12,
    name: 'Simon Says',
    heroImgUrl: './assets/hero-image.png',
    details: {
      brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      elaborate: [
        '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        '2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ],
    },
    tile: {
      cols: 2,
      rows: 2,
      color: '#DD0031'
    }
  },






];

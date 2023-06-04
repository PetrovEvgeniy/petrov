import {
    mobile,
    backend,
    creator,
    frontend,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    bootstrap,
    firebase,
    threejs,
    git,
    figma,
    pmg,
    thu,
    softuni,
    tshirtbuilder,
    skydata,
    housenet,
    burgerbuilder,
    nationallottery,
    vanesatrans,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
  ];
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "ReactJS",
      icon: reactjs,
    },
    {
      name: "NodeJS",
      icon: nodejs,
    },
     {
      name: "Redux",
      icon: redux,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    
    {
      name: "TailwindCSS",
      icon: tailwind,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "ThreeJS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },

  ];
  
  const education = [
    {
      title: "Bachelor of Computer Science",
      institution: "Technische Hochshule Ulm", 
      icon: thu,
      iconBg: "#383E56",
      date: "Oct 2020 - Oct 2024",
      points: [
        "Acquiring theoretical and practical knowladge of mathematical principles and core subjects of Computer Science.",
        "Collaborating with cross-functional teams in Agile Scrum environment to create multiple high quality software projects.",
        "Specializing in Web Engineering, Internet of Things and Mobile Developlent for both Android and iOS Applications.",
      ],
    },
    {
      title: "Professional qualification: JavaScript Web Developer",
      institution: "Software University (SoftUni)",
      icon: softuni,
      iconBg: "#E6DEDD",
      date: "Oct 2017 - July 2020",
      points: [
        "Acquiring deep knowledge and practical skills in both client (Front-end) programming and server (Back-end) JavaScript technologies.",
        "Solid skills in functional programming, working with arrays and objects, classes, DOM, object composition, prototype programming (inheritance), asynchronous programming, component testing, building SPA (Single-Page Application) and other basic JS concepts",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Specializing in full-stack JavaScript development of modern web applications using technologies such as HTML, CSS, Node.js, Express.js, MongoDB, React.js, Bootstrap and others",
      ],
    },
    {
      title: "High School Diploma",
      institution: "High School of Natural Sciences and Mathematics \"Sergey Korolyov\"",
      icon: pmg,
      iconBg: "#383E56",
      date: "Sep 2015 - June 2020",
      points: [
        "Establishing algorithmic thinking and problem-solving skills.",
        "Imporoving English language skills and acquirering a C1 level certificate.",
        "Displaying outstanding performance in various Computer Science subjects.",
        "Created two professional websites for established businesses.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Working with Evgeniy was a collaborative and enjoyable experience; he patiently listened to our ideas and incorporated them seamlessly into the website design.",
      name: "Rosen Kolev",
      designation: "CEO",
      company: "TD Uteha",
      image: "https://i.ibb.co/LSFHQXW/122612411-270617774290671-1781624060619717031-n.jpg",
    },
    {
      testimonial:
        "I had the joy of working with Evgeniy during multiple projects during our time together at the THU. His problem-solving and collaborative skills were exceptional during our team projects.",
      name: "Mirko Mannigel",
      designation: "CTS Grad Student",
      company: "THU",
      image: "https://i.ibb.co/fkfL8pK/discordred-734882427.png",
    },
    {
      testimonial:
        "We were impressed by Evgeniy's ability to balance creativity with practicality, resulting in a website that not only looks fantastic but also performs flawlessly across different devices.",
      name: "Vasil Katsarski",
      designation: "CEO",
      company: "Vanesa Trans",
      image: "https://i.ibb.co/kMBKs4z/vasil.png",
    },
  ];
  
  const projects = [
    {
      name: "T-Shirt Builder",
      description:
        "T-Shirt-Builder is a full-stack web application that allows the users to create their own 3D model of a T-shirt. The user can customize the color of the T-shirt and also upload their own file to apply as a T-shirt logo or overall texture. Additionally, the app has an option to generate a custom logo or texture using the DALL-E AI picker tool.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "white-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "openai",
          color: "green-text-gradient",
        },
      ],
      image: tshirtbuilder,
      deployment_link: "https://d-t-shirt-builder.web.app/",
      source_code_link: "https://github.com/PetrovEvgeniy/T-Shirt-Builder",
    },
    {
      name: "Skydata",
      description:
        "Skydata is a full-stack web application, that provides users the opportunity to share and learn interesting facts about different types of aircraft.  It is my final project of the React.js course, held in the Software University (SoftUni) . It was rated with the highest possible grade. 6/6",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "rest-api",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "orange-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "jwt-auth",
          color: "blue-text-gradient",
        },
      ],
      image: skydata,
      deployment_link: "https://skydata-app.web.app/",
      source_code_link: "https://github.com/PetrovEvgeniy/Skydata",
    },
    {
      name: "HouseNet",
      description:
        "HouseNet is an Android application, which gives the opportunity to the user to see available listed real estate properties in the United Arab Emirates. Additionally, filter them out (search) by their property type and city, in which they are located. It is my personal university project and it was rated with 11/12 points by Prof. Philip Graf.",
      tags: [
        {
          name: "android",
          color: "green-text-gradient",
        },
        {
          name: "bayut-api",
          color: "blue-text-gradient",
        },
        {
          name: "java",
          color: "orange-text-gradient",
        },
      ],
      image: housenet,
      deployment_link: "",
      source_code_link: "https://github.com/PetrovEvgeniy/HouseNet",
    }
  ];
  
  const moreProjects = [
    {
      name: "Burger Builder",
      description:
        "The Burger Builder app is a web platform that allows individuals to create their perfect burger. With a wide range of supported ingredients, users can build their burger to their exact preferences, with a convenient preview feature. Ordering is made easy through a contact data form, streamlining the process.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
      ],
      image: burgerbuilder,
      deployment_link: "https://react-burger-king-5c64d.web.app/",
      source_code_link: "https://github.com/PetrovEvgeniy/BurgerBuilder",
    },
    {
      name: "National Lottery",
      description:
        "The National Lottery project is an offline number-guessing game that offers players the opportunity to win prizes. The game consists of 10 spheres, each generating a random number between 1 and 50. Players make guesses, and if they correctly guess the number, the total prize increases.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "offline-game",
          color: "orange-text-gradient",
        },
      ],
      image: nationallottery,
      deployment_link: "https://national-lottery-game.web.app/",
      source_code_link: "https://github.com/PetrovEvgeniy/NationalLottery",
    },
    {
      name: "Vanesa Trans",
      description:
        "In 2020, I developed Vanesa Trans - a website for a popular towing service business in Sofia. The web app effectively showcases all the services provided by the company including pricing, gallery and interactive contact page. It is currently only available in Bulgarian language.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-md",
          color: "pink-text-gradient",
        },
        {
          name: "professional",
          color: "green-text-gradient",
        },
      ],
      image: vanesatrans,
      deployment_link: "https://vanesa-trans.web.app/",
      source_code_link: "",
    },
  ];


  export { services, technologies, education, testimonials, projects, moreProjects };
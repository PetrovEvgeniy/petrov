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
    carrent,
    
    
   //TODO: Import projects...
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
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
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
        "I thought it was impossible to make a website as beautiful as our product, but Evgeniy proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Evgeniy does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Evgeniy optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, education, testimonials, projects };
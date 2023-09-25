import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  MovieBox,
} from "../assets";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    index: 1,
    name: "HTML 5",
    icon: html,
  },
  {
    index: 2,
    name: "CSS 3",
    icon: css,
  },
  {
    index: 3,
    name: "JavaScript",
    icon: javascript,
  },
  {
    index: 4,
    name: "React JS",
    icon: reactjs,
  },
  {
    index: 5,
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    index: 6,
    name: "Node JS",
    icon: nodejs,
  },
  {
    index: 7,
    name: "MongoDB",
    icon: mongodb,
  },

  {
    index: 8,
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "MovieBox",
    description: `Developed a React-based website, akin to the Netflix UI, to present
      comprehensive details on recently launched, popular, upcoming,
      and genre-specific movies.Designed with user-friendliness in mind, the platform serves as an
      effective hub for users seeking streamlined access to diverse movie
      information.`,
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
    image: MovieBox,
    source_code_link: "https://github.com/",
  },
  {
    name: "Demo",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, projects };

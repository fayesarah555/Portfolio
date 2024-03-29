import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
// import portfolio from "./assets/portfolio.jpg"
import veille1 from "./assets/veille1.png";
// import openAI from '.assets/openAI.png'
// import work2 from "./assets/work2.png";
// import work3 from "./assets/work3.png";
// import work4 from "./assets/work4.png";
// import work5 from "./assets/work5.png";
// import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]
export const veille_navLinks = ["home", "about", "skills", "portfolio", "contact"]
export const socialIcons = [
  <FaDribbble />,
  <FaInstagram />,
  <FaLinkedin />,
  <BsMedium />
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Sarah"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "fayesarah98@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma />]

export const experiences = [
  {
    id: 1,
    year: "2023 - Maintenant",
    position: "Web Developer",
    company: "OKAYO"
  },
]
export const finishes = [
  {
    id: 1,
    number: 'less than 1',
    itemName: "Years Of Experience"
  }
  // {
  //   id: 2,
  //   number: "150+",
  //   itemName: "Satisfied Customers"
  // },
  // {
  //   id: 3,
  //   number: "669+",
  //   itemName: "Designed Items"
  // },
  // {
  //   id: 4,
  //   number: "117+",
  //   itemName: "Clients Served"
  // }
]
export const workImages = [
  {
    id: 1,
    img: veille1,
    name: "project 1",
    category: "web"
  }
  // {
  //   id: 2,
  //   img: work2,
  //   name: "project 2",
  //   category: "web"
  // },
  // {
  //   id: 3,
  //   img: work3,
  //   name: "project 3",
  //   category: "web"
  // }
  // {
  //   id: 4,
  //   img: work4,
  //   name: "project 4",
  //   category: "app"
  // },
  // {
  //   id: 5,
  //   img: work5,
  //   name: "project 5",
  //   category: 'app'
  // },
  // {
  //   id: 6,
  //   img: work6,
  //   name: "project 6",
  //   category: "design"
  // }
]


export const workNavs = [
  "All", "Web", "App", "Design"
]
export const veilleNavs = [
  "All", "AI", "TECH WEB", "NUMERIQUE"
]
export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Paris , France"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "fayesarah98@gmail.com"
  },
 
]

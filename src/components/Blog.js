import React from "react";
import NavBar from "./NavBar";
import Cards from "./Cards";
import { useState } from "react";

const DataCard = [
  {
    id: '01',
    title: 'Why did people lose confidence in Science?',
    img: require("../Assets/img1.png"),
    desc: "teste teste teste teste teste teste teste teste teste teste teste teste"
  },
  {
    id: '02',
    title: 'Are science and religion compatible?',
    img: require("../Assets/img2.png"),
    desc: "teste teste teste teste teste teste teste teste teste teste teste teste"
  },
  {
    id: '03',
    title: 'What is React?',
    img: require("../Assets/img3.png"),
    desc: "teste teste teste teste teste teste teste teste teste teste teste teste"
  },
  {
    id: '04',
    title: 'what is inquiry based learning?',
    img: require("../Assets/img4.png"),
    desc: "teste teste teste teste teste teste teste teste teste teste teste teste"
  },
  {
    id: '05',
    title: 'Curricular autonomy as a factor associated with science performance in PISA',
    img: require("../Assets/img5.png"),
    desc: "teste teste teste teste teste teste teste teste teste teste teste teste"
  },
  {
    id: '06',
    title: 'Rome',
    img:require("../Assets/img6.png"),
    desc: "teste teste teste teste teste teste teste teste teste teste teste teste"
  }
]

const Blogs = (props) => {

  const infoCards = DataCard;

  const [theme, setTheme] = useState('tech');

  console.log(theme);

  return (
    <div>
      <NavBar changeTheme={setTheme} />
      <Cards infoCards={infoCards} theme={theme} img={infoCards.img} />
    </div>
  );
}



export default Blogs;



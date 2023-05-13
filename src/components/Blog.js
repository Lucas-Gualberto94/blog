import React from "react";
import NavBar from "./NavBar";
import Cards from "./Cards";
import { useState } from "react";
import image from "../Assets/img1.png";
import image2 from "../Assets/teacher.jpeg";

const DataCard = [
  {
    id: 'science',
    title: 'Why did people lose confidence in Science?',
    img: {image}
  },
  {
    id: 'science',
    title: 'Are science and religion compatible?',
    img: {image2}
  },
  {
    id: 'tech',
    title: 'What is React?',
    img: "../Assets/img1.png"
  },
  {
    id: 'education',
    title: 'what is inquiry based techer?',
    img: "../Assets/img1.png"
  },
  {
    id: 'articles',
    title: 'Curricular autonomy as a factor associated with science performance in PISA',
    img: "../Assets/img1.png"
  },
  {
    id: 'travel',
    title: 'Rome  ',
    img: "../Assets/img1.png"
  }
]

const Blogs = (props) => {

  const infoCards = DataCard;

  const [theme, setTheme] = useState('tech');


  console.log(theme);
  return (
    <div>
      <NavBar changeTheme={setTheme} />
      <Cards infoCards={infoCards} theme={theme} />
    </div>
  );
}

export default Blogs;



import React from "react";
import NavBar from "./NavBar";
import Cards from "./Cards";
import { useState } from "react";
import Data from "./Data";

const Blogs = (props) => {

  const infoCards = Data;

  const [theme, setTheme] = useState('tech');

  const filteredData = infoCards.filter((selectCards) => {
    if(theme === "tech"){
      return selectCards.category === "tech";
    } else if (theme === "science") {
      return selectCards.category === "science";
    } else if (theme === "article") {
      return selectCards.category === "article";
    } else if (theme === "education") {
      return selectCards.category === "education";
    } else {
      return selectCards.category === "travel"; 
    }
  })

  return (
    <div className="card">
      <NavBar changeTheme={setTheme} />
      <Cards filteredData={filteredData} />
    </div>
  );
}



export default Blogs;



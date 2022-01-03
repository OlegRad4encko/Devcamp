import React from "react";
//import { NewsTitle } from "../components/news/newsTitle";
//import { NewsText } from "../components/news/newsText";
// import { useState } from "react";

export function Header({changeBody, viewArr}) {
  //console.log(React.Children.map(children, (child) => child));
  return (
    <header>
      <button onClick={() => changeBody(viewArr[0])}>Articles</button>
      <button onClick={() => changeBody(viewArr[1])}>Add article</button>
      <button onClick={() => changeBody(viewArr[2])}>Profile</button>
    </header>
  );
}

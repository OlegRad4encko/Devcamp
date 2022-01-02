import React from "react";
//import { NewsTitle } from "../components/news/newsTitle";
//import { NewsText } from "../components/news/newsText";
// import { useState } from "react";

export function Header(showArticles, showAddArticleForm, showProfile) {
  //console.log(React.Children.map(children, (child) => child));
  return (
    <header>
      <button onClick={showArticles}>Articles</button>
      <button onClick={showAddArticleForm}>Add article</button>
      <button onClick={showProfile}>Profile</button>
    </header>
  );
}

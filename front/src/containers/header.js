import React from "react";
import {Link} from "react-router-dom";

export function Header() {

  return (
    <header>
      <Link className="button" to="/articles">Articles</Link>
      <Link className="button" to="/add_article">Add article</Link>
      <Link className="button" to="/profile">Profile</Link>
    </header>
  );
}

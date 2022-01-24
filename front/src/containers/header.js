import React from "react";
import {Link} from "react-router-dom";

export function Header() {

  return (
    <header>
      <Link className="button" to="/post">Posts</Link>
      <Link className="button" to="/add_article">Add article</Link>
      <Link className="button" to="/users">Users</Link>
    </header>
  );
}

import React, {useState} from "react";

import "./App.css";
import { Header } from "./containers/header";
import { Body } from "./containers/body";

function App() {
    const viewArr = ['posts', 'addPost', 'profile'];
    const [viewPage, changeView] = useState(viewArr[0]);

    const changeBody = (block) => {
        changeView(block);
    }

  return (
    <div className="App">
      <Header changeBody={changeBody} viewArr={viewArr}></Header>
      <Body viewPage={viewPage}></Body>
    </div>
  );
}

export default App;

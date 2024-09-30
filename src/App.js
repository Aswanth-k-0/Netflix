import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {action,comedy,documentry,horor,originals} from "./urls"
function App(){
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        <RowPost url={originals} title="Netflix Originals" />
        <RowPost url={action} title="Action" isSmall />
        <RowPost url={comedy} title="Comady" isSmall />
        <RowPost url={horor} title="Horror" isSmall />
        <RowPost url={documentry} title="Documentry" isSmall />
    </div>

  );
  }
export default App
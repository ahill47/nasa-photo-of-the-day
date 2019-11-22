import React  from "react";
import "./App.css";
//import axios from 'axios';
import Header from "./header";
import Footer from "./footer";
import Picture from "./body";

function App() {
  return (
    <div className="App">
    <Header />
     <Picture />
      <Footer/>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Category from "./components/Category/Category";
import Header from "./components/Header/Header";
import Result from "./components/Result/Result";

function App() {

  const [logoImg, setLogoImg] = useState("");
  const [randomJoke, setRandomJoke] = useState("");

  useEffect(() => {
    axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
      setLogoImg(response.data.icon_url);
      setRandomJoke(response.data.value);
     
    });
  }, []);

  const chooseCategory = (category) => {
    axios
    .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((response)=>{
      setRandomJoke(response.data.value);
    })
    
  };
  
  return (
    <div className="App">
      <Header logoImg={logoImg} />
      <Category chooseCategory={chooseCategory} />
      <Result randomJoke={randomJoke} />
    </div>
  );
}

export default App;

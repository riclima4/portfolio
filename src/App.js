import React from "react";
import "./App.css";
import Header from './components/header/Header'
import Home from './components/home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pokeapi from './pages/pokeapi/Pokeapi'
import Joke from './pages/joke/Joke'

function App() {
  return (
    <>
    <Router>
      <Header/>
      <main className="main">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/pokeapi" element={<Pokeapi/>} />
          <Route path="/joke" element={<Joke/>} />
        </Routes>
      </main>
      </Router>
    </>
  );
}

export default App;

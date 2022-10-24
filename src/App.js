import React from "react";
import "./App.css";
import Header from './components/header/Header'
import Home from './components/home/Home'
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
    <Header/>
    <main className="main">
      <Home/>
      <Contact/>
      <Footer/>
    </main>
    
    </>
  );
}

export default App;

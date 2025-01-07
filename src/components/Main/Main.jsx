import { useState } from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import './Main.css';

function Main({ isLoggedIn }) {
    return (
        <div className="main">
          <Header isLoggedIn={isLoggedIn} />
          <About />
          <Footer />
        </div>
    )
};

export default Main;
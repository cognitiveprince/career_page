import React, { Component } from "react";
import "./App.css";
import "./app.scss";
import TopSection from "./components/Top/index";
import BottomSection from "./components/Bottom/index";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavbarComponents/NavBar";
import { createContext } from "react";
import { useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("Light");

  // theme conditon
  const toggleTheme = () => {
    setTheme((curr) => (curr === "Light" ? "Dark" : "Light"));
  };
  return (
    <ThemeContext.Provider>
      <div className="app-container" id={theme}>
        <NavBar />
        <div className="top-section" id={theme}>
          <TopSection />
        </div>
        <div className="bottom-section" id={theme}>
          <BottomSection />
        </div>
        {/* switch for the theme control */}
        <div className="switch">
          <label>{theme === "Light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "Dark"} />
        </div>

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
export default App;

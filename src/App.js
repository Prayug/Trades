import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Stocks/Dashboard";
import StockContext from "./context/StockContext";
import ThemeContext from "./context/ThemeContext";
import Signup from "./components/signUp/Signup";
import { Container } from "react-bootstrap";

function App() {
  const [showSignup, setShowSignup] = useState(true); // State to control Signup visibility
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("MSFT");

  const handleSignupButtonClick = () => {
    // You can add more logic here if needed
    // For simplicity, let's just hide the Signup component on button click
    setShowSignup(false);
  };

  return (
    <Container>
      <Signup onSignupButtonClick={handleSignupButtonClick} />
    </Container>
  );
}

export default App;

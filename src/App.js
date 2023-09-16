import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Stocks/Dashboard";
import StockContext from "./context/StockContext";
import ThemeContext from "./context/ThemeContext";
import Signup from "./components/signUp/Signup";
import { Container } from "react-bootstrap";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("MSFT");
  const [showDashboard, setShowDashboard] = useState(false);

  const handleSignupButtonClick = () => {
    setShowDashboard(true);
  };

  return (
    <Container>
      {showDashboard ? (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
            <Dashboard />
          </StockContext.Provider>
        </ThemeContext.Provider>
      ) : (
        <Signup onSignupButtonClick={handleSignupButtonClick} />
      )}
    </Container>
  );
}

export default App;

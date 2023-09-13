import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Stocks/Dashboard";
import StockContext from "./context/StockContext";
import ThemeContext from "./context/ThemeContext";
import Signup from "./components/signUp/Signup";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("MSFT");

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Signup />

      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
        <Dashboard />
      </StockContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

import React, { useContext } from "react";
import Card from "./Card";
import ThemeContext from "/Users/prayugsigdel/Coding/Trades/src/context/ThemeContext.js";

const Details = ({ details }) => {
  const { darkMode } = useContext(ThemeContext);

  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };

  const convertNumberToUnit = (number) => {
    if (number >= 1e6) {
      // Convert to trillions
      return (number / 1e6).toFixed(2) + "T";
    } else if (number >= 1e3) {
      // Convert to billions
      return (number / 1e3).toFixed(2) + "B";
    } else {
      // Convert to millions
      return number.toFixed(2) + "M";
    }
  };

  return (
    <Card>
      <ul
        className={`w-full h-full flex flex-col justify-between divide-y-1 ${
          darkMode ? "divide-gray-800" : null
        }`}
      >
        {Object.keys(detailsList).map((item) => {
          return (
            <li key={item} className="flex-1 flex justify-between items-center">
              <span>{detailsList[item]}</span>
              <span className="font-bold">
                {item === "marketCapitalization"
                  ? convertNumberToUnit(details[item])
                  : details[item]}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Details;

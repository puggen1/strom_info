import { useState, createContext } from "react";
const CurrencyFormatterContext = createContext();
const currencyFormatter = ({children})=>{
    const radioButtons = [
        { id: 1, label: "Krone", value: "krone" },
        { id: 2, label: "Øre", value: "øre" },
      ];
      const [currencyFormat, setCurrencyFormat] = useState(2);
      //changes the currency
      const changeCurrency = (average, highest, lowest) => {
        if (currencyFormat === 1) {
          return {
            average: average,
            highest: highest,
            lowest: lowest,
          };
        } else {
          average = average * 100;
          highest.newPrice
            ? (highest.newPrice = highest.newPrice * 100)
            : (highest.NOK_per_kWh = highest.NOK_per_kWh * 100);
          lowest.newPrice
            ? (lowest.newPrice = lowest.newPrice * 100)
            : (lowest.NOK_per_kWh = lowest.NOK_per_kWh * 100);
          return {
            average: average,
            highest: highest,
            lowest: lowest,
          };
        }
      };
      return (
        <CurrencyFormatterContext.Provider value={{currencyFormat, setCurrencyFormat, radioButtons, changeCurrency}}>
          {children}
        </CurrencyFormatterContext.Provider>
      )
}

export default currencyFormatter
export {CurrencyFormatterContext}
import { useState, createContext } from "react";
import colors from "../../assets/style/colors";
const CurrencyFormatterContext = createContext();
const currencyFormatter = ({children})=>{
    const radioButtons = [
        { id: 1, label: "Krone", value: "kr", color:colors.primary, borderColor:colors.primaryc },
        { id: 2, label: "Øre", value: "øre", color:colors.primary, borderColor:colors.primary },
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
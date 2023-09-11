import { useEffect, useState, useContext } from "react";
import { topHour } from "../utils/calculations/highest";
import { lowestHour } from "../utils/calculations/lowest";
import { averageHour } from "../utils/calculations/average";

import { SearchContext } from "../context/searchContext/index";
import mvaCalc from "../utils/calculations/mvaCalc";
import addFee from "../utils/calculations/addFee";
import numberFormater from "../utils/numberFormater";
import { CurrencyFormatterContext } from "../context/currencyFormattContext";
const useCalculateStatistic = (data) => {
  const { currencyFormat, changeCurrency } = useContext(
    CurrencyFormatterContext
  );
  const { area, isLoading } = useContext(SearchContext);
  const [highest, setHighest] = useState();
  const [lowest, setLowest] = useState();
  const [average, setAverage] = useState();
  useEffect(() => {
    if (isLoading && Object.keys(data).length === 0) {
      return;
    }
    //fixes price
    let fixedData = data;
    if (area != "NO4") {
      fixedData = mvaCalc(data);
    }

    fixedData = addFee(fixedData);
    //the highest hour
    let highestHourTemp = topHour(fixedData);
    let lowestHourTemp = lowestHour(fixedData);
    let averageHourTemp = averageHour(fixedData);
    const {
      average: newAverage,
      highest: newHighest,
      lowest: newLowest,
    } = changeCurrency(averageHourTemp, highestHourTemp, lowestHourTemp);
    setHighest(newHighest);
    //the lowest our
    setLowest(newLowest);
    //average
    setAverage(numberFormater(newAverage, currencyFormat));
  }, [data, currencyFormat, area, isLoading]);
  return { highest, lowest, average };
};

export default useCalculateStatistic;

/*

  */

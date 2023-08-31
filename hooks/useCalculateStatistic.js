import { useState } from "react";
import { topHour } from "../utils/calculations/highest";
import { lowestHour } from "../utils/calculations/lowest";
import { averageHour } from "../utils/calculations/average";
import { useEffect, useContext } from "react";
import {SearchContext} from "../context/searchContext/index"
import mvaCalc from "../utils/calculations/mvaCalc"
import addFee from "../utils/calculations/addFee";
const useCalculateStatistic = (data) => {
  const {area} = useContext(SearchContext)
  const [highest, setHighest] = useState();
  const [lowest, setLowest] = useState();
  const [average, setAverage] = useState();
  useEffect(() => {
    //fixes price
    let fidexData = data
    if(area != "NO4"){
       fidexData = mvaCalc(data)
    }
    fidexData = addFee(fidexData);
    //the highest hour
    setHighest(topHour(fidexData));
    //the lowest our
    setLowest(lowestHour(fidexData));
    //average
    setAverage(averageHour(fidexData));
  }, [data]);
  return { highest, lowest, average };
};

export default useCalculateStatistic;

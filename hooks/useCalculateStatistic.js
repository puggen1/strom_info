import { useState } from "react";
import { topHour } from "../utils/calculations/highest";
import { lowestHour } from "../utils/calculations/lowest";
import { averageHour } from "../utils/calculations/average";
import { useEffect } from "react";
const useCalculateStatistic = (data, isLoading) => {
  const [highest, setHighest] = useState();
  const [lowest, setLowest] = useState();
  const [average, setAverage] = useState();
  useEffect(() => {
    //the highest hour
    setHighest(topHour(data));
    //the lowest our
    setLowest(lowestHour(data));
    //average
    setAverage(averageHour(data));
  }, [data]);
  return { highest, lowest, average };
};

export default useCalculateStatistic;

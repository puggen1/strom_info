import { useContext } from "react";
import { SearchContext } from "../context/searchContext";
const useHandleDatePicker = () => {
  const { setDate } = useContext(SearchContext);
  //global function that changes the date
  const handleDate = (event, selectedDate) => {
    const { type } = event;
    if (type === "dismissed") {
      return;
    }
    if (type === "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
    }
  };
  return { handleDate };
};

export default useHandleDatePicker;

import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const fetcher = async () => {
    if (!url) return;
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
    } catch (error) {
      setIsError(true);
      console.log("error");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetcher(url);
  }, [url]);
  const resetter = () => {
    setData({});
    setIsError(false);
  };
  return { data, isLoading, isError, trigger: fetcher, resetter };
};

export default useFetch;

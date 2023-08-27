import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const auth = "test123321";
  const options = {
    method: "GET",
    headers: {
      Authorization: auth,
      "Content-Type": "application/json",
    },
  };
  const fetcher = async () => {
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

  return { data, isLoading, isError };
};

export default useFetch;

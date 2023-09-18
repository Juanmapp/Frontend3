import { useCallback, useEffect, useState } from "react";

export const statuses = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  LOADING: "LOADING",
};

export const useFetch = (url) => {
  const [status, setStatus] = useState(statuses.LOADING);
  const [data, setData] = useState();

  const fetchData = useCallback(async () => {
    setStatus(statuses.LOADING);
    try {
      const response = await fetch(url);

      if (!response.ok) throw new Error("Request Error");

      const json = await response.json();

      setData(json);
      setStatus(statuses.SUCCESS);
    } catch (error) {
      setStatus(statuses.ERROR);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, status };
};

import { useEffect, useState } from "react";

function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);

    async function fetchResults() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (errror) {
        setError(errror);
      } finally {
        setLoading(false);
      }
    }
    fetchResults();
  }, [url]);

  return [data, loading, error];
}

export default useFetch;

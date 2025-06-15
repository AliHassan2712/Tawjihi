//react
import { useEffect, useState } from "react";

//axios
import axios from "axios";
export const useApi = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // GET request
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(url);
        console.log(res.data.data.docs, 'form Api');
        setData(res.data.data.docs);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  // POST request
  const postData = async (payload) => {
    try {
      setIsLoading(true);
      const res = await axios.post(url, payload);
      console.log("POST success:", res.data);
      return res.data;
    } catch (e) {
      setError(e.message);
      console.error("POST error:", e);
      throw e; // rethrow for handling in component
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, postData };
};

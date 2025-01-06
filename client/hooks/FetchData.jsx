import React, {useState, useEffect} from 'react';

export const FetchData = (selectedDate, selectedSpecies, selectedReqData) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const url = 'https://degreedayapp.onrender.com/get';
  // const url = 'http://loacalhost:8080/get';
  const info = {
    date: selectedDate,
    species: selectedSpecies,
    reqData: selectedReqData,
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(info),
        });
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

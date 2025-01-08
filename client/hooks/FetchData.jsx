import React, {useState, useEffect} from 'react';

export const FetchData = (selectedDate, selectedSpecies, selectedReqData) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  const url = 'https://degreeday.onrender.com/get';
  // const url = 'http://loacalhost:8080/get';
  const info = {
    date: selectedDate,
    species: selectedSpecies,
    reqData: selectedReqData,
  };

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
      if (!response.ok) {
        // Handle HTTP errors
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json(); // Parse the response as JSON
      console.log(json);
      setData(json); // Update the state with the fetched data
    } catch (err) {
      console.error('Error occurred:', err.message);
      setIsError(true); // Set error state if there's an issue
      setError(err.message); // Store the error message for debugging
    } finally {
      setIsLoading(false); // Stop loading indicator
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [selectedDate]);

  return {data, isLoading, error, isError};
};

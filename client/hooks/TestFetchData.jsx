import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequest, fetchSuccess, fetchFailure } from '../redux/dataSlice';

export const TestFetchData = (selectedDate, selectedSpecies, selectedReqData) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state); // Access the Redux state

  const url = 'https://degreeday.onrender.com/post';
  const info = {
    date: selectedDate,
    species: selectedSpecies,
    reqData: selectedReqData,
  };

  const fetchData = async () => {
    dispatch(fetchRequest());
    console.log(selectedDate);
    console.log(selectedSpecies);
    console.log(selectedReqData);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // To check the data recieved
      dispatch(fetchSuccess(data)); // Dispatch all data points as one object
    } catch (err) {
      console.error('Error occurred:', err.message);
      dispatch(fetchFailure(err.message));
    }
  };

  React.useEffect(() => {
    if (selectedDate && selectedSpecies && selectedReqData) {
      fetchData();
    }
  }, [selectedDate, selectedSpecies, selectedReqData]);

  return state; // Return the Redux state for use in the component
};
import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {TestFetchData} from '../hooks/TestFetchData';

export const WeatherComponent = () => {
  const [selectedDate, setSelectedDate] = useState(date);
  const [selectedSpecies, setSelectedSpecies] = useState('AppleScab');
  const [selectedReqData, setSelectedReqData] = useState('dayDegreeDay');
  const {name, highTemp, lowTemp, humidity, rain, date, loading, error} =
    TestFetchData(selectedDate, selectedSpecies, selectedReqData);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <>
      <Text style={{color: 'white'}}>Weather Data</Text>
      <Text style={{color: 'white'}}>Date: {date}</Text>
      <Text style={{color: 'white'}}>Location: {name}</Text>
      <Text style={{color: 'white'}}>High Temp: {highTemp}°</Text>
      <Text style={{color: 'white'}}>Low Temp: {lowTemp}°</Text>
      <Text style={{color: 'white'}}>Humidity: {humidity}%</Text>
      <Text style={{color: 'white'}}>Rain: {rain} mm</Text>
    </>
  );
};

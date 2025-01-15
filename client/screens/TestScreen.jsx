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
import WeatherComponent from '../ components/WeatherComponent';
import {SelectDate} from '../ components/SelectDate';

export const TestScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSpecies, setSelectedSpecies] = useState('AppleScab');
  const [selectedReqData, setSelectedReqData] = useState('dayDegreeDay');

  return (
    <>
      <WeatherComponent />
      <SelectDate date={selectedDate} setDate={setSelectedDate}>
        <Text>
          <Text>Tests</Text>
        </Text>
      </SelectDate>
      <Text>Test Screen</Text>
    </>
  );
};

import React from 'react'
import { FetchData } from '../hooks/FetchData';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import { spotifyGreen } from '../constants/constants';

export const DisplayData = (date, species, reqData) => {
    const {data, isLoading, error, isError} = FetchData(date, species, reqData);

    if (isLoading) return <Text>Loading...</Text>;
    if (isError) return <Text>No data{console.log(error)}</Text>;

    if (data != null && !isNaN(data)) {
      if (species === 'Rain') {
        return <Text>{data.toFixed(2)} in.</Text>;
      }else if (species === 'Temperature') {
        return <Text>{Math.round(data)}<Text style={styles.degreeSign}>&#x00B0;</Text></Text>;
      }else if (species === 'Humidity') {
        return <Text>{Math.round(data)}%</Text>;
      }
      return <Text>{Math.round(data)}</Text>;
    }
}

const styles = StyleSheet.create({
  degreeSign: {
    color: spotifyGreen,
  }
});

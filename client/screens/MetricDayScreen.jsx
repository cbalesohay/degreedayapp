import React, {Children} from 'react';
import {FetchData} from '../hooks/FetchData';
import {Header} from '../ components/Header';
import SelectDate from '../ components/SelectDate';
import {PropsWithChildren} from 'react';
import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ActivityIndicator,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export const MetricDayScreen = () => {
  const [date, setDate] = useState(new Date());
  const [rainAmount, setRainAmount] = useState();
  const [tempature, setTempature] = useState();
  const [humidity, setHumidity] = useState();
  const [dateParsed, setDateParsed] = useState();
  const parseDate = data => {
    const today = data;
    const formattedDate = today.toISOString().slice(0, 10);
    return formattedDate;
  };

  useEffect(() => {
    setDateParsed(parseDate(date));
    return () => {};
  }, [date]);

  function MyComponent(date, species, reqData) {
    const {data, isLoading, error} = FetchData(date, species, reqData);

    if (isLoading) return <Text>{<ActivityIndicator />}</Text>;
    if (!error) return <Text>No Data</Text>;

    return <>{data}</>;
  }

  return (
    <>
      <Header />
      <SelectDate date={date} setDate={setDate}>
        <Text style={styles.date}>{dateParsed}</Text>
      </SelectDate>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Day Numbers</Text>
        {/* <Text style={styles.degreeDays}>
          Tempature: <Text>{MyComponent(dateParsed, 'Temperature', 'current')}</Text>
        </Text> */}
        <Text style={styles.degreeDays}>
          RainFall:{' '}
          <Text>{MyComponent(dateParsed, 'Rain', 'dayRainfall')}</Text>
        </Text>
        {/* <Text style={styles.degreeDays}>
          Total RainFall (YTD):{' '}
          <Text>{MyComponent(dateParsed, 'Rain', 'totalRainfall')}</Text>
        </Text>
        <Text style={styles.degreeDays}>
          Humidity:{' '}
          <Text>{MyComponent(dateParsed, 'Humidity', 'dayHumidity')}</Text>
        </Text> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  date: {
    fontSize: 25,
    textAlign: 'center',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
  degreeDays: {
    fontSize: 25,
    textAlign: 'left',
  },
  numbers: {
    fontSize: 25,
  },
});

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

function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

export const DegreeDayScreen = () => {
  const [date, setDate] = useState(new Date());
  const [westernCherry, setWesternCherry] = useState();
  const [leafRollers, setLeafRollers] = useState();
  const [codlingMoth, setCodlingMoth] = useState();
  const [appleScab, setAppleScab] = useState();
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
      <View style={styles.titleContainer}>
        <Text style={styles.sectionTitle}>Degree Day Screen</Text>
      </View>
      <SelectDate date={date} setDate={setDate}>
        <Text style={styles.date}>{dateParsed}</Text>
      </SelectDate>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Degree Days</Text>
        <Text style={styles.degreeDays}>
          Western Cherry:{' '}
          <Text>
            {MyComponent(dateParsed, 'WesternCherry', 'dayDegreeDay')}
          </Text>
        </Text>
        <Text style={styles.degreeDays}>
          Leaf Rollers:{' '}
          <Text>{MyComponent(dateParsed, 'LeafRollers', 'dayDegreeDay')}</Text>
        </Text>
        <Text style={styles.degreeDays}>
          Codling Moth:{' '}
          <Text>{MyComponent(dateParsed, 'CodlingMoth', 'dayDegreeDay')}</Text>
        </Text>
        <Text style={styles.degreeDays}>
          Apple Scab:{' '}
          <Text>{MyComponent(dateParsed, 'AppleScab', 'dayDegreeDay')}</Text>
        </Text>
        <Text style={styles.degreeDays}>
          RainFall:{' '}
          <Text>{MyComponent(dateParsed, 'Rain', 'dayRainfall')} in.</Text>
        </Text>
        <Text style={styles.degreeDays}>
          Humidity:{' '}
          <Text>{MyComponent(dateParsed, 'Humidity', 'dayAverage')} %</Text>
        </Text>
        <Text style={styles.degreeDays}>
          Day Low:{' '}
          <Text>{MyComponent(dateParsed, 'Temperature', 'dayLow')} F</Text>
        </Text>
        <Text style={styles.degreeDays}>
          Day High:{' '}
          <Text>{MyComponent(dateParsed, 'Temperature', 'dayHigh')} F</Text>
        </Text>
        <Text style={styles.degreeDays}>
          Tempature:{' '}
          <Text>{MyComponent(dateParsed, 'Temperature', 'dayAverage')} F</Text>
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  titleContainer: {
    textAlign: 'center',
    backgroundColor: '#45474a',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
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

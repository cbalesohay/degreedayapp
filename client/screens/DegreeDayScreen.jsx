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
    const {data, isLoading, error, isError} = FetchData(date, species, reqData);

    if (isLoading) return <Text>{<ActivityIndicator />}</Text>;
    if (isError)
      return (
        <>
          {console.log(error + ' No data recieved')}
          <Text>No data</Text>
        </>
      );
    if (species == 'Temperature') {
      return <>{data} F</>;
    } else if (species == 'Rain') {
      return <>{data} in.</>;
    } else if (species == 'Humidity') {
      return <>{data} %</>;
    }

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
      <Text style={styles.title}>Degree Days Accumulated</Text>
      <View style={styles.sectionContainer}>
        <View style={styles.column}>
          // Western Cherry
          <View style={styles.degreeDayTilePink}>
            <Text style={styles.tileTextBlack}>Western Cherry:{'\n'}</Text>
            <Text style={styles.numbersBlack}>
              {MyComponent(dateParsed, 'WesternCherry', 'dayDegreeDay')}
            </Text>
          </View>
          // Leaf Rollers
          <View style={styles.degreeDayTileGreen}>
            <Text style={styles.tileTextWhite}>Leaf Rollers:{'\n'}</Text>
            <Text style={styles.numbersWhite}>
              {MyComponent(dateParsed, 'LeafRollers', 'dayDegreeDay')}
            </Text>
          </View>
          // Codling Moth
          <View style={styles.degreeDayTileBlue}>
            <Text style={styles.tileTextWhite}>Codling Moth:{'\n'}</Text>
            <Text style={styles.numbersWhite}>
              {MyComponent(dateParsed, 'CodlingMoth', 'dayDegreeDay')}
            </Text>
          </View>
          // Apple Scab
          <View style={styles.degreeDayTileYellow}>
            <Text style={styles.tileTextBlack}>Apple Scab:{'\n'}</Text>
            <Text style={styles.numbersBlack}>
              {MyComponent(dateParsed, 'AppleScab', 'dayDegreeDay')}
            </Text>
          </View>
          // Rainfall
          <View style={styles.degreeDayTilePink}>
            <Text style={styles.tileTextBlack}>RainFall:{'\n'}</Text>
            <Text style={styles.numbersBlack}>
              {MyComponent(dateParsed, 'Rain', 'dayRainfall')}
            </Text>
          </View>
        </View>
        <View style={styles.column}>
          // Humidity
          <View style={styles.degreeDayTileGreen}>
            <Text style={styles.tileTextWhite}>Humidity:{'\n'}</Text>
            <Text style={styles.numbersWhite}>
              {MyComponent(dateParsed, 'Humidity', 'dayAverage')}
            </Text>
          </View>
          // Day low tempature
          <View style={styles.degreeDayTileBlue}>
            <Text style={styles.tileTextWhite}>Day Low:{'\n'}</Text>
            <Text style={styles.numbersWhite}>
              {MyComponent(dateParsed, 'Temperature', 'dayLow')}
            </Text>
          </View>
          // Day high tempature
          <View style={styles.degreeDayTileYellow}>
            <Text style={styles.tileTextBlack}>Day High:{'\n'}</Text>
            <Text style={styles.numbersBlack}>
              {MyComponent(dateParsed, 'Temperature', 'dayHigh')}
            </Text>
          </View>
          // Day average tempature
          <View style={styles.degreeDayTilePink}>
            <Text style={styles.tileTextBlack}>Tempature:{'\n'}</Text>
            <Text style={styles.numbersBlack}>
              {MyComponent(dateParsed, 'Temperature', 'dayAverage')}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  column: {
    flex: 1, // Each column takes up equal space
    marginHorizontal: 5, // Space between the columns
  },
  sectionContainer: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Space out the columns
    padding: 10,
  },
  titleContainer: {
    textAlign: 'center',
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
    color: 'white',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  degreeDays: {
    fontSize: 25,
    textAlign: 'left',
  },
  degreeDayTilePink: {
    backgroundColor: 'pink',
    fontSize: 20,
    width: 150,
    height: 100,
    margin: 5,
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', //Centered horizontally
  },
  degreeDayTileGreen: {
    backgroundColor: 'green',
    fontSize: 20,
    width: 150,
    height: 100,
    margin: 5,
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', //Centered horizontally
  },
  degreeDayTileBlue: {
    backgroundColor: 'blue',
    fontSize: 20,
    width: 150,
    height: 100,
    margin: 5,
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', //Centered horizontally
  },
  degreeDayTileYellow: {
    backgroundColor: 'yellow',
    fontSize: 20,
    width: 150,
    height: 100,
    margin: 5,
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', //Centered horizontally
  },
  tileTextWhite: {
    fontSize: 20,
    color: 'white',
  },
  tileTextBlack: {
    fontSize: 20,
    color: 'black',
  },
  numbersWhite: {
    fontSize: 25,
    color: 'white',
  },
  numbersBlack: {
    fontSize: 25,
    color: 'black',
  },
});

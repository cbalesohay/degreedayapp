import React, {Children} from 'react';
import SelectDate from '../ components/SelectDate';
import {DegreeTiles} from '../ components/DegreeTiles';
import {MetricTile} from '../ components/MetricTile';
import { tileColorPrimary, tileTextColorPrimary } from '../constants/constants';
import {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { DisplayData } from '../ components/DisplayData';

export const DegreeDayScreen = () => {
  const [date, setDate] = useState(new Date());
  const [dateParsed, setDateParsed] = useState(() =>
    new Date().toISOString().slice(0, 10),
  );
  const parseDate = data => {
    const today = data;
    const formattedDate = today.toISOString().slice(0, 10);
    return formattedDate;
  };

  useEffect(() => {
    setDateParsed(parseDate(date));
    return () => {};
  }, [date]);

  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.sectionTitle}>Degree Day's</Text>
      </View>
      <SelectDate date={date} setDate={setDate}>
        <Text style={styles.date}><Text>{dateParsed}</Text></Text>
      </SelectDate>
      <View style={styles.sectionContainer}>
        <View style={styles.column}>
          // Western Cherry
          <DegreeTiles
            backgroundColor={tileColorPrimary}
            // backgroundColor={'#e7dac9'} // Option #2
            textColor={tileTextColorPrimary}
            text={'Western Cherry:'}>
            {DisplayData(dateParsed, 'WesternCherry', 'dayDegreeDay')}
          </DegreeTiles>
          // Leaf Rollers
          <DegreeTiles
            backgroundColor={tileColorPrimary}
            textColor={tileTextColorPrimary}
            text={'Leaf Rollers:'}>
            {DisplayData(dateParsed, 'LeafRollers', 'dayDegreeDay')}
          </DegreeTiles>
        </View>
        <View style={styles.column}>
          // Codling Moth
          <DegreeTiles
            backgroundColor={tileColorPrimary}
            textColor={tileTextColorPrimary}
            text={'Codling Moth:'}>
            {DisplayData(dateParsed, 'CodlingMoth', 'dayDegreeDay')}
          </DegreeTiles>
          // Apple Scab
          <DegreeTiles
            backgroundColor={tileColorPrimary}
            textColor={tileTextColorPrimary}
            text={'Apple Scab:'}>
            {DisplayData(dateParsed, 'AppleScab', 'dayDegreeDay')}
          </DegreeTiles>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <MetricTile
          humidity={DisplayData(dateParsed, 'Humidity', 'dayAverage')}
          rain={DisplayData(dateParsed, 'Rain', 'dayRainfall')}
          highTemp={DisplayData(dateParsed, 'Temperature', 'dayHigh')}
          lowTemp={DisplayData(dateParsed, 'Temperature', 'dayLow')}
        />
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
  date: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
});

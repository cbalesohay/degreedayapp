import React, {Children} from 'react';
import Fetch from '../ components/Fetch';
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

  return (
    <>
      <Header />
      <Section title="Step One">
        Select the <Text style={styles.highlight}>DATE</Text>.
      </Section>
      <SelectDate date={date} setDate={setDate}>
        <Text style={styles.date}>{dateParsed}</Text>
      </SelectDate>
      <Section title="Step Two">
        Select the <Text style={styles.highlight}>SPECIES</Text>.
      </Section>
      <View>
        <Text style={styles.degreeDays}>Degree Days</Text>
      </View>
      <Fetch
        selectedDate={dateParsed}
        selectedSpecies={"WesternCherry"}
        title={"WC"}
      />
      <Fetch
        selectedDate={dateParsed}
        selectedSpecies={"LeafRollers"}
        title={"LR"}
      />
      <Fetch
        selectedDate={dateParsed}
        selectedSpecies={"CodlingMoth"}
        title={"CM"}
      />
      <Fetch
        selectedDate={dateParsed}
        selectedSpecies={"AppleScab"}
        title={"AC"}
      />
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
  degreeDays: {
    fontSize: 25,
    textAlign: 'center',
  },
});

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
        Select the <Text style={styles.highlight}>SPECIES</Text> from drop down.
      </Section>
      <Fetch selectedDate={dateParsed} />
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
});

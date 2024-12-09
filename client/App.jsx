/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useEffect, useState} from 'react';
import {PropsWithChildren} from 'react';
import Fetch from './Fetch';
// import { GetData } from './api';
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
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';
// const axios = require('axios').default;

// async function GetData(): Promise<any>{
//   const [data, setData] = useState({});
//   const info = {
//     date: '2024-10-16',
//     species: 'WesternCherry',
//     reqData: 'dayDegreeDay',
//   };
//   try {
//     await useEffect(() => {
//       fetch('http://localhost:8080/get', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(info),
//       })
//         .then(res => res.json())
//         .then(data => setData(data));
//     }, []);
//     return data;
//   } catch (error) {
//     console.error('Error fetching data: ', error);
//     throw error;
//   }
// };

// function GetData() {
//   const [data, setData] = useState({});
//   const info = {
//     date: "2024-10-16",
//     species: "WesternCherry",
//     reqData: "dayDegreeDay",
//   };

//   useEffect(() => {
//     fetch("http://localhost:8080/get", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(info),
//     })
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);
//   return data;
// }

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

function GetData(date, species, reqData) {
  const [data, setData] = useState(0);

  const info = {
    date: date,
    species: species,
    reqData: reqData,
  };

  // get rid of useEffect and make async function
  useEffect(() => {
    fetch('http://localhost:8080/get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    })
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  return (
    <Text>
      {Number(data)}
    </Text>
    
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState(GetData("2024-10-16", "WesternCherry", "dayDegreeDay"));
  // setNumber(GetData("2024-10-16", "WesternCherry", "dayDegreeDay"))

  const isDarkMode = useColorScheme() === 'dark';
  // if (loading) return <Text>Loading...</Text>;
  // if (error) return <Text>Error!</Text>;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Select the <Text style={styles.highlight}>button</Text> to get the
            Degree Day from the server.
          </Section>
          <Fetch/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
});

export default App;

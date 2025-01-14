/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useEffect, useState} from 'react';
import {DegreeDayScreen} from './screens/DegreeDayScreen';
import {backgroundColorPrimary, spotifyBlack} from './constants/constants';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IndividualInfoScreen} from './screens/IndividualInfoScreen';
import store from './app/store'
import { Provider } from 'react-redux'


function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error!</Text>;

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // backgroundColor: '#45474a',
    // backgroundColor: backgroundColorPrimary,\
    backgroundColor: spotifyBlack,
    flex: 1,
  };

  const Stack = createNativeStackNavigator();
  function RootStack() {
    return (
      <Stack.Navigator initialRouteName="Degree">
        <Stack.Screen name="Degree" component={DegreeDayScreen} />
        <Stack.Screen name="Individual" component={IndividualInfoScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>
        <StatusBar
          // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View
            style={{
              flex: 1, // This will make the view take up 100% of the available space
            }}>
            <DegreeDayScreen />
            {/* <RootStack/> */}
          </View>
        </ScrollView>
      </NavigationContainer>

      {/* <View style={{flex: 1}}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </View> */}
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

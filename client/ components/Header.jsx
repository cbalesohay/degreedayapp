import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { spotifyWhite } from '../constants/constants';

export const Header = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}>Degree Day App</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: 50,
  },
  title: {
    fontSize: 15,
    textAlign: 'start',
    margin: 10,
    color: spotifyWhite,
  },
});

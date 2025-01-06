import React from 'react';
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
    backgroundColor: '#45474a',
    height: 50,
  },
  title: {
    fontSize: 15,
    textAlign: 'start',
    margin: 10,
    color: 'white',
  },
});

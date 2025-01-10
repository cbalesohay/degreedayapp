import React, {Children} from 'react';
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
import { tileTextColorPrimary } from '../constants/constants';

export const DegreeTiles = ({backgroundColor, textColor, text, children}) => {
  return (
    <>
      <View style={[styles.tile, { backgroundColor: backgroundColor || '#fff' }]}>
        <Text style={[styles.name, { color: textColor}]}>{text}</Text>
        <Text style={[styles.metric, { color: textColor}]}>
          {children}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tile: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150, // Adjust width as needed
    height: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: tileTextColorPrimary,
    textAlign: 'center'
  },
  metric: {
    fontSize: 20,
    fontWeight: 700,
    color: tileTextColorPrimary,
    marginTop: 4,
    textAlign: 'center'
  },
});

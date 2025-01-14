import React, {Children} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {width} = Dimensions.get('window');
import {
  tileTextColorPrimary,
  spotifyDarkGrey,
  spotifyLightGrey,
  spotifyWhite,
  spotifyGreen,
} from '../constants/constants';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';

export const DegreeTiles = ({
  name,
  nameData,
  degreeDays,
  tempLow,
  tempHigh,
}) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={styles.tile}
        onPress={() => {
          // After Global State is implemented, this will be replaced with a global state call
          navigation.navigate('Individual', {
            name: name,
            nameData: nameData,
            degreeDays: degreeDays,
            tempLow: tempLow,
            tempHigh: tempHigh,
          });
        }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.degreeDayMetric}>{degreeDays}</Text>
        <View style={styles.tempContainer}>
          <Text style={styles.tempMetric}>
            L<Text style={styles.colon}>:</Text>
            {tempLow}
          </Text>
          <Text style={styles.tempMetric}>
            H<Text style={styles.colon}>:</Text>
            {tempHigh}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  tile: {
    marginTop: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    flex: 1,
    height: 100,
    backgroundColor: spotifyDarkGrey || '#fff',
  },
  tempContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 20,
    fontWeight: 800,
    color: spotifyWhite,
    textAlign: 'left',
    paddingTop: 10,
    paddingLeft: 15,
  },
  degreeDayMetric: {
    fontSize: 30,
    fontWeight: 400,
    color: spotifyWhite,
    textAlign: 'right',
    paddingRight: 12,
  },
  tempMetric: {
    fontSize: 15,
    fontWeight: 400,
    color: spotifyWhite,
    textAlign: 'center',
    paddingLeft: 10,
  },
  colon: {
    color: spotifyGreen,
  },
});

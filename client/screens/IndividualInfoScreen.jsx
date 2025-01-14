import React, {Children} from 'react';
import SelectDate from '../ components/SelectDate';
import {DegreeTiles} from '../ components/DegreeTiles';
import {MetricTile} from '../ components/MetricTile';
import {
  tileTextColorPrimary,
  spotifyDarkGrey,
  spotifyLightGrey,
  spotifyWhite,
  spotifyGreen,
} from '../constants/constants';
import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DisplayData} from '../ components/DisplayData';

export const IndividualInfoScreen = ({
  navigation,
  route,
}) => {
  return (
    <>
      <View style={styles.tile}>
        <Text style={styles.name}>{route.params.name}</Text>
        <Text style={styles.degreeDayMetric}>{route.params.degreeDays}</Text>
        <View style={styles.tempContainer}>
          <Text style={styles.tempMetric}>
            L<Text style={styles.colon}>:</Text>
            {route.params.tempLow}
          </Text>
          <Text style={styles.tempMetric}>
            H<Text style={styles.colon}>:</Text>
            {route.params.tempHigh}
          </Text>
        </View>
        <Text>This is {route.params.name}'s profile</Text>
        <Text>This is {route.params.nameData}'s profile</Text>
        <Text>This is {route.params.degreeDays}'s profile</Text>
        <Text>This is {route.params.tempLow}'s profile</Text>
        <Text>This is {route.params.tempHigh}'s profile</Text>
      </View>
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

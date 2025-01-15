import React, {Children, useState, useEffect} from 'react';
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
import BouncingLoader from './BouncingLoader';

export const DegreeTiles = ({
  name,
  nameData,
  degreeDays,
  tempLow,
  tempHigh,
}) => {
  const [degreeDaysLoading, setDegreeDaysLoading] = useState(true);
  const [tempLowLoading, setTempLowLoading] = useState(true);
  const [tempHighLoading, setTempHighLoading] = useState(true);

  useEffect(() => {
    if (degreeDays !== true) setDegreeDaysLoading(false);
    if (tempLow !== true) setTempLowLoading(false);
    if (tempHigh !== true) setTempHighLoading(false);
  }, [degreeDays, tempLow, tempHigh]);
  if (degreeDays == true){
    console.log('Degree Days is true');
  }
  if (degreeDays == false){
    console.log('Degree Days is false');
  }
  // Check if all the data is loaded
  const allDataLoaded =
    !degreeDaysLoading && !tempLowLoading && !tempHighLoading;
    if (allDataLoaded){
      console.log('All data loaded');
    }

  return (
    <TouchableOpacity
      style={[styles.tile, !allDataLoaded && styles.loadingTile]} // Apply loading style if not loaded
      onPress={() => {
        if (allDataLoaded) {
          navigation.navigate('Individual', {
            name: name,
            nameData: nameData,
            degreeDays: degreeDays,
            tempLow: tempLow,
            tempHigh: tempHigh,
          });
        }
      }}
      disabled={!allDataLoaded} // Disable button when data is loading
    >
      {/* Left side: Display the name, location, and temperature */}
      <View style={styles.leftSide}>
        <Text style={styles.name}>{allDataLoaded ? name : 'Loading...'}</Text>
        <Text style={styles.location}>Sandpoint, ID</Text>
        <View style={styles.tempContainer}>
          <Text style={styles.tempMetric}>
            {allDataLoaded ? (
              <>
                {'L'}
                <Text style={styles.colon}>:</Text>
                {tempLow}
              </>
            ) : (
              'Loading...'
            )}
          </Text>
          <Text style={styles.tempMetric}>
            {allDataLoaded ? (
              <>
                {' H'}
                <Text style={styles.colon}>:</Text>
                {tempHigh}
              </>
            ) : (
              'Loading...'
            )}
          </Text>
        </View>
      </View>

      {/* Right side: Display only the degreeDays */}
      <View style={styles.rightSide}>
        <Text>
          {allDataLoaded ? (
            <>
              <Text style={styles.degreeDayMetric}>
                {degreeDays}
                <Text style={{fontSize: 10}}> DDA</Text>
              </Text>
            </>
          ) : (
            <Text>Hello</Text>
            // 'Loading...'
          )}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tile: {
    flexDirection: 'row', // Display tiles in a row (left side and right side)
    marginTop: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    flex: 1,
    height: 100,
    backgroundColor: spotifyDarkGrey || '#fff',
  },
  loadingTile: {
    // Apply transparent grey overlay when loading
    backgroundColor: '#f0f0f0',
    opacity: 0.6, // Grey out the tile during loading
  },
  leftSide: {
    flex: 2, // Take 2/3 of the tile width
    paddingLeft: 15,
  },
  rightSide: {
    flex: 1, // Take 1/3 of the tile width
    alignItems: 'flex-end',
    paddingTop: 10,
    paddingRight: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 800,
    color: spotifyWhite,
    textAlign: 'left',
    paddingTop: 10,
  },
  location: {
    fontSize: 12,
    fontWeight: 300,
    color: spotifyWhite,
    textAlign: 'left',
  },
  degreeDayMetric: {
    fontSize: 40,
    fontWeight: 400,
    color: spotifyWhite,
    textAlign: 'right',
  },
  tempContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 15,
  },
  tempMetric: {
    fontSize: 15,
    fontWeight: 400,
    color: spotifyWhite,
    textAlign: 'center',
  },
  colon: {
    color: spotifyGreen,
  },
});

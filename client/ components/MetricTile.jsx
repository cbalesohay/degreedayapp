import React from 'react'
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import { tileColorSecondary, tileTextColorPrimary } from '../constants/constants';

// Get screen width for full-width tile
const screenWidth = Dimensions.get('window').width;

export const MetricTile = ({ humidity, rain, highTemp, lowTemp }) => {
  return (
    <View style={styles.tile}>
      <View style={styles.metricRow}>
        <View style={styles.metric}>
          <Text style={styles.label}>Humidity</Text>
          <Text style={styles.value}>{humidity}</Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.label}>Rain</Text>
          <Text style={styles.value}>{rain}</Text>
        </View>
      </View>
      <View style={styles.metricRow}>
        <View style={styles.metric}>
          <Text style={styles.label}>High Temp</Text>
          <Text style={styles.value}>{highTemp}</Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.label}>Low Temp</Text>
          <Text style={styles.value}>{lowTemp}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    width: screenWidth - 60, // Full width with some padding to match other tiles
    height: 150,
    backgroundColor: tileColorSecondary,
    borderRadius: 8,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    justifyContent: 'center',
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  metric: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: tileTextColorPrimary,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: tileTextColorPrimary,
    marginTop: 4,
  },
});
import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const BouncingLoader = () => {
  // Create refs for each bubble
  const bounce1 = useRef(new Animated.Value(0)).current;
  const bounce2 = useRef(new Animated.Value(0)).current;
  const bounce3 = useRef(new Animated.Value(0)).current;

  // Create the bouncing animation
  const animateBubbles = (bubble1, bubble2, bubble3) => {
    Animated.sequence([
      // Bubble 1 bounce animation
      Animated.loop(
        Animated.sequence([
          Animated.timing(bubble1, {
            toValue: -15,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(bubble1, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      ),
      // Bubble 2 bounce animation
      Animated.loop(
        Animated.sequence([
          Animated.timing(bubble2, {
            toValue: -15,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(bubble2, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      ),
      // Bubble 3 bounce animation
      Animated.loop(
        Animated.sequence([
          Animated.timing(bubble3, {
            toValue: -15,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(bubble3, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      ),
    ]).start();
  };

  useEffect(() => {
    animateBubbles(bounce1, bounce2, bounce3); // Start the animation when the component mounts
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.bubble, { transform: [{ translateY: bounce1 }] }]}
      />
      <Animated.View
        style={[styles.bubble, { transform: [{ translateY: bounce2 }] }]}
      />
      <Animated.View
        style={[styles.bubble, { transform: [{ translateY: bounce3 }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100, // Adjust height to control the bounce
  },
  bubble: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'blue',
    margin: 5,
  },
});

export default BouncingLoader;
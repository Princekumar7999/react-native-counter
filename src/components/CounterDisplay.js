import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

const CounterDisplay = ({ count }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Trigger animation sequence when count changes
    Animated.sequence([
      // Scale up and fade out slightly
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1.3,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.5,
          duration: 150,
          useNativeDriver: true,
        }),
      ]),
      // Scale back to normal and fade in
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 3,
          tension: 40,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [count]);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.counterText,
          {
            transform: [{ scale: scaleAnim }],
            opacity: fadeAnim,
          },
        ]}
      >
        {count}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  counterText: {
    fontSize: 120,
    fontWeight: 'bold',
    color: '#2563eb',
  },
});

export default CounterDisplay;
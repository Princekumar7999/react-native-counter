import React, { useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import CounterDisplay from '../components/CounterDisplay';

const Home = () => {
  const [count, setCount] = useState(0);
  const debounceTimer = useRef(null);
  const isAnimating = useRef(false);

  const handleIncrement = () => {
    // Optional: Debounce to prevent rapid taps during animation
    if (isAnimating.current) return;
    
    isAnimating.current = true;
    setCount(prevCount => prevCount + 1);
    
    // Reset animation flag after animation completes
    setTimeout(() => {
      isAnimating.current = false;
    }, 300);
  };

  const handleDecrement = () => {
    if (isAnimating.current) return;
    
    isAnimating.current = true;
    setCount(prevCount => prevCount - 1);
    
    setTimeout(() => {
      isAnimating.current = false;
    }, 300);
  };

  const handleReset = () => {
    if (isAnimating.current) return;
    
    isAnimating.current = true;
    setCount(0);
    
    setTimeout(() => {
      isAnimating.current = false;
    }, 300);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      
      <CounterDisplay count={count} />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.decrementButton]}
          onPress={handleDecrement}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>−</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={handleReset}
          activeOpacity={0.7}
        >
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.button, styles.incrementButton]}
          onPress={handleIncrement}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    marginTop: 40,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  incrementButton: {
    backgroundColor: '#10b981',
  },
  decrementButton: {
    backgroundColor: '#ef4444',
  },
  resetButton: {
    backgroundColor: '#6b7280',
    width: 100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
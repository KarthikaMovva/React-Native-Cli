import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Redux/CounterActions';
import { RootState } from '../Redux/CounterStore';

const Counter = () => {
  const count = useSelector((state: RootState) => state.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.counterText}>Current Count: {count}</Text>
      <View style={styles.buttonGroup}>
        <View style={styles.buttonWrapper}>
          <Button title="➕ Increment" onPress={() => dispatch(increment())} color="#4CAF50" />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="➖ Decrement" onPress={() => dispatch(decrement())} color="#F44336" />
        </View>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  counterText: {
    fontSize: 22,
    marginBottom: 30,
    color: '#555',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 20,
  },
  buttonWrapper: {
    minWidth: 140,
    marginHorizontal: 10,
  },
});










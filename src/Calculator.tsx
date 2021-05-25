import React, { useRef, useState } from 'react';
import {
  Button,
  Picker,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import { calculate, Operation } from './helper';

function Calculator() {
  const firstRef = useRef<TextInput>(null);

  const [first, setFirst] = useState<string>('');
  const [second, setSecond] = useState<string>('');
  const [operation, setOperation] = useState<Operation>('ADD');
  const [result, setResult] = useState<string | number | null>('');

  function clearInputs() {
    setFirst('');
    setSecond('');
    firstRef.current?.focus();
  }

  function onCalculate() {
    const res = calculate(+first, +second, operation);
    if (res === null) {
      ToastAndroid.show('Please enter valid numbers', ToastAndroid.BOTTOM);
    }
    setResult(res);
    clearInputs();
  }

  function onChangeOperation(itemValue: Operation) {
    setOperation(itemValue);
  }

  return (
    <View style={styles.container}>
      <TextInput
        ref={firstRef}
        placeholder="Enter first number"
        placeholderTextColor="#333"
        keyboardType="numeric"
        value={first}
        style={styles.input}
        onChangeText={setFirst}
      />
      <TextInput
        value={second}
        placeholder="Enter Second number"
        keyboardType="numeric"
        onChangeText={setSecond}
        placeholderTextColor="#333"
        style={styles.input}
      />
      <View style={styles.picker}>
        <Picker mode="dropdown" onValueChange={onChangeOperation}>
          <Picker.Item color="#eee" label="+" value="ADD" />
          <Picker.Item color="#eee" label="-" value="SUBTRACT" />
          <Picker.Item color="#eee" label="x" value="MULTIPLY" />
          <Picker.Item color="#eee" label="/" value="DIVISION" />
        </Picker>
      </View>
      <Button title="Evaluate" onPress={onCalculate} />
      {result && result !== '' ? (
        <View style={styles.result}>
          <Text>Result: {result}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 10 },
  input: {
    borderColor: '#aaa',
    borderWidth: 1,
    marginBottom: 10,
    paddingStart: 15,
    color: '#333',
  },
  picker: { backgroundColor: '#333', marginBottom: 20 },
  result: {
    padding: 20,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Calculator;

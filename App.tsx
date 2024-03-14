import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LinearEquationSolver: React.FC = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');

  const solveEquation = () => {
    const aVal = parseFloat(a);
    const bVal = parseFloat(b);

    if (isNaN(aVal) || isNaN(bVal)) {
      Alert.alert('Lỗi', 'Vui lòng nhập số hợp lệ cho a và b.');
      return;
    }

    if (aVal === 0) {
      setResult('Phương trình không phải là phương trình bậc nhất.');
      return;
    }

    const x = -bVal / aVal;
    setResult(`Nghiệm của phương trình là: x = ${x}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giải Phương Trình Bậc Nhất</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số a"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số b"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      />
      <Button title="Giải" onPress={solveEquation} />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '80%',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
  },
  title:{
    fontSize: 20,
    margin: 30,
    color: 'black',
  }
});

export default LinearEquationSolver;
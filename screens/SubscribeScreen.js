import * as React from 'react';
import { View, Image, StyleSheet, Text, Button, TextInput, Alert, TouchableOpacity } from 'react-native';

import myImage from '../assets/little-lemon-logo-grey.png';
import { validateEmail } from '../utils/index';

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = () => {
    if (validateEmail(email)) {
      Alert.alert('Email Submitted', `You have submitted`);
    } else {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
    }
  };
  // Add subscribe screen code here
  return <View style={styles.container}>
    <Image source={myImage} style={styles.image} />
    <Text style={styles.text}>Subscribe to our Newsletter for our </Text>
    <Text style={styles.text}>latest delicious recipe!! </Text>
    <TextInput
      value={email}
      onChangeText={setEmail}
      style={styles.input}
      placeholder="Email"
      keyboardType="email-address"
    />
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  </View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  text: {
    fontSize: 20
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  button: {
    backgroundColor: '#32a852',
    width: '100%',
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
export default SubscribeScreen;

import * as React from 'react';
import { View, Image, StyleSheet, Text, Button } from 'react-native';

import myImage from '../assets/little-lemon-logo.png';
const WelcomeScreen = ({ navigation }) => {



  return <View style={styles.container}>
    <Image source={myImage} style={styles.image} />
    <Text style={styles.text}>Little Lemon!!!</Text>
    <Text style={styles.text}>your local food is here</Text>
    <View style={styles.buttonContainer}>
      <Button title="Newsletter" color="#32a852" onPress={() => navigation.navigate('Subscribe')} />
    </View>
  </View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    marginTop: 20,
    fontSize: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
export default WelcomeScreen;

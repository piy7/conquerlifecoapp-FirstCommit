// LaunchScreen.js

import React from 'react';
import { View, Text, Image,Button, StyleSheet, TouchableOpacity } from 'react-native';
import logo from './img/logo.png';


const LaunchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <View style={styles.content}>

      <Image
          source={logo}
          style={styles.image}
        />
       <Text style={styles.text}>CONQUER LIFE</Text>
      

<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Email')}>
          <Text style={styles.buttonText}>Join The Climb</Text>
        </TouchableOpacity>
    </View>
      </View>
   
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
  }, content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150, // Adjust the image size as needed
    height: 150, // Adjust the image size as needed
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 24,
    marginBottom: 100,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white', // Button background color
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 8,
  },
  buttonText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
  

export default LaunchScreen;

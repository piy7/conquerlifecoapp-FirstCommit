// EmailScreen.js

import React, { useState }  from 'react';

import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity  } from 'react-native';

import { CheckBox } from 'react-native-elements';

const EmailScreen = ({ navigation }) => {

  const [text, setText] = useState('');

  const handleChangeText = (inputText) => {
    setText(inputText);
  };


  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
    <View style={styles.background} />
    <View style={styles.content}>

  
     <Text style={styles.text}>What's a good email to use?</Text>

     <TextInput
        style={styles.input}
        onChangeText={handleChangeText}
        value={text}
        placeholder="abcd@gmail.com"
        placeholderTextColor="lightgray"

        
      />

      <Text style={styles.termtext}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore (blurb on how their email is used)
      </Text>

      <View style={styles.checkboxContainer}>
      <CheckBox
        checked={isChecked}
        onPress={handleCheck}
      />
      <Text style={styles.label}>I would like emails about updates and newsletters.</Text>
        </View>
   
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contact')} >
        <Text style={styles.buttonText}>Next</Text>
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
    justifyContent: 'flex-start',
    padding: 60,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
  }, 
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginLeft: 1, // Add some space between the checkbox and the text
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    color: '#5ea5ed',
    fontSize: 24,
    marginBottom: 100,
    fontWeight: 'bold',
  },
  termtext: {
    color: '#black',
    fontSize: 14,
    fontWeight: '300',
    paddingTop:40,
    width: 400,
    
  },
  input: {
    borderBottomWidth: 2, // Add a bottom border
    borderColor: 'black', // Border color
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 18, // Adjust vertical padding as needed
    paddingLeft: 10,
    width: 400,

  },
  button: {
    backgroundColor: 'transparent',// Button background color
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 8,
    borderWidth: 2, // Set the border width
    borderColor: '#5ea5ed', // Set the border color
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300,
  },
  buttonText: {
    color: '#5ea5ed',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
export default EmailScreen;

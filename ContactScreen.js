// ContactScreen.js

import React, { useState }  from 'react';

import { View, Text,  TextInput, StyleSheet, TouchableOpacity  } from 'react-native';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/bootstrap.css";


const ContactScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");

  
  const [text, setText] = useState('');

  const handleChangeText = (inputText) => {
    setText(inputText);
  };


  return (
    <View style={styles.container}>
    <View style={styles.background} />
    <View style={styles.content}>

  
     <Text style={styles.text}>And what's a good number?</Text>

<View style={styles.phonecontainer}>
      <View style={styles.phoneinputContainer}>
     <PhoneInput
      country={"eg"}
      enableSearch={true}
      value={phone}
      onChange={(phone) => setPhone(phone)}
      
    />
 </View>
 <View style={styles.phoneinputContainer}>

 <TextInput
        style={styles.input}
        onChangeText={handleChangeText}
        value={text}
      />
 </View>
     
 </View>



      <Text style={styles.termtext}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore (blurb on how their email is used)
      
      <a
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        example.com
      </a>
      </Text>

     
   
<TouchableOpacity style={styles.button} >
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
  phonecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjust as needed
  },
  phoneinputContainer: {
    flex: 1,
    marginRight: 10, // Adjust spacing between components
  },
  link: {
    fontSize: 16,
    color: '#ff9d8a', 
    textDecoration: 'underline', 
    marginLeft: 3,
  },
  text: {
    color: '#ff9d8a',
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
    borderColor: '#ff9d8a', // Set the border color
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300,
  },
  buttonText: {
    color: '#ff9d8a',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
export default ContactScreen;

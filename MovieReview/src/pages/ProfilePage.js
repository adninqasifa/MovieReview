import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Image } from 'react-native';

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.foto}
        source={require("../assets/adninqasifa.jpg")}/>
      <TextInput style={styles.inputText} placeholder={'  Name'}  />
      <TextInput style={styles.inputText} placeholder={'  Username'}  />
      <TextInput style={styles.inputText} placeholder={'  Email'}  />
      <TextInput style={styles.inputText} placeholder={'  Password'} />
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    marginTop: 5,
    marginBottom: 5,
    width: 300,
    height: 50,
    borderWidth: 5,
    borderRadius: 5,
    color: '#000000',
    backgroundColor: '#E5E5E5',
    padding: 10
  },
  button: {
    width: 300,
    backgroundColor: '#FCA311',
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 12
  },
  buttonText: {
    fontSize: 16,
    color: '#E5E5E5',
    textAlign: 'center',
  },
  foto: {
    width: 170,
    height: 170,
    borderRadius: 100,
  }
});

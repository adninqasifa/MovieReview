import React from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Logo from '../../src/assets/Team-G.svg';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Logo width={200} height={200}/>
      <TextInput style={styles.inputText} placeholder={'  Name'}  />
      <TextInput style={styles.inputText} placeholder={'  Username'}  />
      <TextInput style={styles.inputText} placeholder={'  Email'}  />
      <TextInput style={styles.inputText} placeholder={'  Password'} />
      <TouchableOpacity style={styles.button} onPress={() => {navigation.push('MyTab')}} >
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      <View style={styles.bawah}>
        <Text style={{color: '#E5E5E5'}}>Already have an account?</Text>
        <Text style={{color: '#FCA311'}} onPress={() => navigation.push('Login Page')}> Sign In</Text>
      </View>
    </View>
  );
};

export default Register;

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
  bawah: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
});

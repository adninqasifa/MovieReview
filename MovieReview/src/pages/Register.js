import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux'

import Logo from '../../src/assets/Team-G.svg';
import {registrationForm} from '../store/action';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
	const checking = useSelector(state=>state.user)
	useEffect(()=>{
    if (checking.redirect == true ){
			navigation.navigate('MyTab')
    }
	}, [checking])
  return (
    <View style={styles.container}>
      <Logo width={200} height={200}/>
      <TextInput style={styles.inputText} placeholder={'  Email'} value={email}
        onChangeText = {(value)=> setEmail(value)} />
      <TextInput style={styles.inputText} placeholder={'  Password'} value={password}
        onChangeText = {(value)=> setPassword(value)} secureTextEntry={true} />
      <TextInput style={styles.inputText} placeholder={'  Confirm Password'} value={confirmPassword}
        onChangeText = {(value)=> setConfirmPassword(value)} secureTextEntry={true} />
      <TextInput style={styles.inputText} placeholder={'  Name'}  value={name}
        onChangeText = {(value)=> setName(value)} />
      <TextInput style={styles.inputText} placeholder={'  Username'} value={username}
        onChangeText = {(value)=> setUsername(value)} />
      <TouchableOpacity style={styles.button}
        onPress={() => {navigation.push('MyTab')}}>
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

//onPress={() => {navigation.push('MyTab')}}>
// onPress={()=>{
// dispatch(registrationForm({email, password, confirmPassword, name, username}))
// }}>






// import React from 'react';
// import {StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';
//
// import Logo from '../../src/assets/Team-G.svg';
//
// const Register = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <Logo width={200} height={200}/>
//       <TextInput style={styles.inputText} placeholder={'  Name'}  />
//       <TextInput style={styles.inputText} placeholder={'  Username'}  />
//       <TextInput style={styles.inputText} placeholder={'  Email'}  />
//       <TextInput style={styles.inputText} placeholder={'  Password'} />
//       <TouchableOpacity style={styles.button} onPress={() => {navigation.push('MyTab')}} >
//         <Text style={styles.buttonText}>SIGN UP</Text>
//       </TouchableOpacity>
//       <View style={styles.bawah}>
//         <Text style={{color: '#E5E5E5'}}>Already have an account?</Text>
//         <Text style={{color: '#FCA311'}} onPress={() => navigation.push('Login Page')}> Sign In</Text>
//       </View>
//     </View>
//   );
// };
//
// export default Register;
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#343434',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputText: {
//     marginTop: 5,
//     marginBottom: 5,
//     width: 300,
//     height: 50,
//     borderWidth: 5,
//     borderRadius: 5,
//     color: '#000000',
//     backgroundColor: '#E5E5E5',
//     padding: 10
//   },
//   button: {
//     width: 300,
//     backgroundColor: '#FCA311',
//     borderRadius: 5,
//     marginVertical: 10,
//     paddingVertical: 12
//   },
//   buttonText: {
//     fontSize: 16,
//     color: '#E5E5E5',
//     textAlign: 'center',
//   },
//   bawah: {
//     //flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//   }
// });

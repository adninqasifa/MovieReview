import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {loginForm} from '../store/action';

import Logo from '../../src/assets/Team-G.svg';

import qs from 'qs';
import axios from 'axios';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const checking = useSelector(state => state.user);
  useEffect(()=>{
    if(checking.redirect == true){
      navigation.navigate('MyTab');
    }
	}, [checking])
  // navigation.navigate('Profile')}

  // onPress={() => handleLogin()}
  // onPress={() => {navigation.push('Home Page')}}
  // onChangeText={email => setEmail(email)} value={email}
  // onChangeText={password => setPassword(password)} value={password}
  return (
    <View style={styles.container}>
      <Logo width={200} height={200} />
      <TextInput
        style={styles.inputText}
        placeholder={'  Email'}
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
      <TextInput
        style={styles.inputText}
        placeholder={'  Password'}
        onChangeText={(password) => setPassword(password)}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(loginForm({email, password}));
        }}>
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
      <View style={styles.bawah}>
        <Text style={{color: '#E5E5E5'}}>Don't have an account?</Text>
        <Text style={{color: '#FCA311'}} onPress={() => navigation.push('Register Page')}> Sign Up</Text>
      </View>
    </View>
  );
};

export default Login;

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
    color: '#343434',
    backgroundColor: '#E5E5E5',
    padding: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#FCA311',
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    color: '#E5E5E5',
    textAlign: 'center',
  },
  bawah: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});




// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   View,
//   TextInput,
//   Text,
//   TouchableOpacity,
// } from 'react-native';
//
// import Logo from '../../src/assets/Team-G.svg';
//
// import qs from 'qs';
// import axios from 'axios';
//
// const Login = ({navigation}) => {
//   const [email, setEmail] = useState(null);
//   const [password, setPassword] = useState(null);
//
//   const handleLogin = async () => {
//     console.log(email);
//     console.log(password);
//     let url = 'https://poster-movies.herokuapp.com/login';
//     try {
//       const res = await axios({
//         method: 'POST',
//         url,
//         data: qs.stringify({
//           email: 'aaaabbbb@gmail.com',
//           password: '12345',
//         }),
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
//         },
//       });
//       console.log('res', res);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   // navigation.navigate('Profile')}
//
//   // onPress={() => handleLogin()}
//   // onPress={() => {navigation.push('Home Page')}}
//   // onChangeText={email => setEmail(email)} value={email}
//   // onChangeText={password => setPassword(password)} value={password}
//   return (
//     <View style={styles.container}>
//       <Logo width={200} height={200} />
//       <TextInput
//         style={styles.inputText}
//         placeholder={'  Email'}
//         onChangeText={(email) => setEmail(email)}
//         value={email}
//       />
//       <TextInput
//         style={styles.inputText}
//         placeholder={'  Password'}
//         onChangeText={(password) => setPassword(password)}
//         value={password}
//       />
//       <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
//         <Text style={styles.buttonText}>LOG IN</Text>
//       </TouchableOpacity>
//       <View style={styles.bawah}>
//         <Text style={{color: '#E5E5E5'}}>Don't have an account?</Text>
//         <Text style={{color: '#FCA311'}} onPress={() => navigation.push('Register Page')}> Sign Up</Text>
//       </View>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.push('Testing')}>
//         <Text style={styles.buttonText}>TESTING</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
//
// export default Login;
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
//     color: '#343434',
//     backgroundColor: '#E5E5E5',
//     padding: 10,
//   },
//   button: {
//     width: 300,
//     backgroundColor: '#FCA311',
//     borderRadius: 5,
//     marginVertical: 10,
//     paddingVertical: 12,
//   },
//   buttonText: {
//     fontSize: 16,
//     color: '#E5E5E5',
//     textAlign: 'center',
//   },
//   bawah: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },
// });

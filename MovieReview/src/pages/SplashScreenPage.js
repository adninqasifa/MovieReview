import React, {useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Logo from '../../src/assets/Team-G.svg';

function SplashScreenPage({ navigation }) {
  useEffect(() =>{
    setTimeout(()=> {
        navigation.replace('Login Page')
    }, 3000); // 3 Detik
  }, [navigation])
  return (
    <View style={styles.container}>
      <Logo width={200} height={200}/>
      <Text style={{color: '#E5E5E5', fontSize:20}}>MOVIE REVIEW</Text>
      <Text style={{color: '#E5E5E5', fontSize:20}}>Created with Love by Team-G</Text>
    </View>

  )
};

export default SplashScreenPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

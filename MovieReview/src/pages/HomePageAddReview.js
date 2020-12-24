import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HelloWorldApp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#E5E5E5'}}>Home Page Detail</Text>
      <Text style={{color: '#E5E5E5'}}>Review Stars</Text>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={{color: '#E5E5E5', textAlign: 'center'}}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HelloWorldApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 300,
    backgroundColor: '#FCA311',
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 12,
  },
});

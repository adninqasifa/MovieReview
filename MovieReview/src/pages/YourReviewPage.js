import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const YourReview = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#E5E5E5'}}> Your Review </Text>
      <Text style={{color: '#E5E5E5'}}> Card </Text>
    </View>
  );
};

export default YourReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

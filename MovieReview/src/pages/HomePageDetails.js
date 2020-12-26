import React from 'react';
import {
  Text,
  View,
  Modal,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

import {chVisibility} from '../store/action';

const HomePageDetails = ({params}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const modalDetails = useSelector(state => state.details);
  //console.log(modalDetails.backdrop_path);
  return (
    <View
      style={styles.container}
      //animationType="slide"
      //transparent={true}
      //visible={item.visible}
      //onRequestClose={() => {
        //dispatch(chVisibility(false));
      >
      <Text style={{color: '#E5E5E5'}}> Home Page Details </Text>
      <Text style={{color: '#E5E5E5'}}> Modal Star </Text>
      <Text style={{color: '#E5E5E5'}}> Mirip Modal Details </Text>
      <Image
        source={{uri:`https://image.tmdb.org/t/p/w500/${modalDetails.backdrop_path}`}}
          style={{width:Dimensions.get('window').width * 0.80, height: Dimensions.get('window').height*0.3}}/>
      <Image
        source={{uri:`https://image.tmdb.org/t/p/w500/${modalDetails.poster_path}`}}/>
      <Image style={styles.foto}
        source={require("../assets/adninqasifa.jpg")}/>
    </View>
  );
}

export default HomePageDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#343434',
  },
  foto: {
    width: 100,
    height: 100,
  },
});

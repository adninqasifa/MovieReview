import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {chDetail} from '../store/action';
import {useNavigation} from '@react-navigation/native';

const Card = ({
  title,
  synopsis,
  imageSource,
  backDrop,
  average_rating,
  releaseDate,
  genre,
  idOfMovie,
  rating_count,
}) => {
  const navigation = useNavigation();
  const year = releaseDate;
  const dispatch = useDispatch();
  return (
    <View style={styles.cardMovie}>
      <View style={{flex: 1, alignItems: 'center', margin: 10}}>
        <TouchableOpacity
          onPress={() => navigation.push('Home Page Details', {imageSource, title, synopsis, backDrop})}>
          <Image source={{uri: imageSource}} style={styles.imageMovie} />
          <Text style={styles.title}>
            {title} ({year})
          </Text>
          <Text numberOfLines={2} style={styles.synopsis}>
            {synopsis}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardMovie: {
    flex: 1,
    padding: 10,
    borderRadius: 25,
    borderWidth: 5,
    backgroundColor: '#FCA311',
    width: Dimensions.get('screen').width * 0.9,
    height: Dimensions.get('screen').height * 0.5,
  },
  imageMovie: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  synopsis: {
    marginTop: 10,
    fontSize: 16,
    color: '#343434',
  },
});

// onPress={() => navigation.push('Home Page Details', {id: idOfMovie})}>
// onPress={() => {
//   dispatch(chDetail(idOfMovie));
// }}>

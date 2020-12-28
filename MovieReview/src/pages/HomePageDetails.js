import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import ModalStar from '../components/ModalStar';
import {chVisibility, showForm} from '../store/action';

const ModalDetail = ({params, route}) => {
  const imageURL = route.params.imageSource;
  const originalTitle = route.params.title;
  const sinopsis = route.params.synopsis;
  const poster = route.params.backDrop;
  //const genres = route.params.genre;
  //const rating = route.params.average_rating;

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const modalDetails = useSelector((state) => state.details);
  //console.log(modalDetails);
  return (
    <View style={styles.container}
      animationType="slide"
      transparent={true}
      visible={modalDetails.visible}
      onRequestClose={() => {
        dispatch(chVisibility(false));
      }}>
        <ModalStar />
        <Text style={{color: '#E5E5E5'}}> Home Page Details </Text>
        <View style={styles.cardMovie}>
          <View style={{flexDirection: 'column', alignItems:"center"}}>
            <Image
              source={{uri:imageURL}}
              style={{width:Dimensions.get('window').width * 0.7, height: Dimensions.get('window').height*0.3}}/>
            <Text numberOfLines={2} style={{color:'#343434', fontSize: 18, fontWeight:"bold", margin: 5}}>{originalTitle} ({modalDetails.released}) - {modalDetails.genres[0].name}</Text>
            <View style={{flexDirection:"row"}}>
              <View style={{flex: 1, alignItems:"flex-end", flexDirection:"column"}}>
                <View style={{flexDirection:"row"}}>
                  <View style={{flexDirection: "column", alignItems: "center", right: 15}}>
                    <Entypo name="star" size={25} color='#E5E5E5' />
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{color:'#343434', fontWeight: "bold"}}>{modalDetails.vote_average}</Text><Text style={{color:'#343434'}}>/10</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={{alignItems: "center"}} onPress={()=>{dispatch(showForm(true))}}>
                    <Entypo name="star" size={25} color='#343434' />
                    <Text style={{color:'#343434'}}>Rate This</Text>
                  </TouchableOpacity>
                </View>
                <Text numberOfLines={7} style={{color:'#343434', fontSize: 17, left:5, textAlign:"justify"}}>{sinopsis}</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={()=>{
                navigation.navigate("Review Page", {movie_id: `${modalDetails.id}`, name: `Reviews' of ${originalTitle}`})
                dispatch(chVisibility(false))
              }}>
              <Entypo name="message" size={30} color='#343434' />
              <Text style={{fontSize: 18}}> {modalDetails.vote_count}</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
};

export default ModalDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardMovie: {
    flex: 1,
    padding: 10,
    borderRadius: 25,
    borderWidth: 5,
    marginTop: 80,
    marginBottom: 90,
    backgroundColor: '#FCA311',
    width: Dimensions.get('screen').width * 0.9,
  },
});

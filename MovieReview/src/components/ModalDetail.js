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
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

import {chVisibility, showForm} from '../store/action';

const ModalDetail = ({params}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const modalDetails = useSelector((state) => state.details);
  //console.log(modalDetails);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalDetails.visible}
      onRequestClose={() => {
        dispatch(chVisibility(false));
      }}>
      <View style={styles.container}>
        <View style={styles.cardMovie}>
          <View style={{flexDirection: 'column', alignItems:"center"}}>
            <Image
              source={{uri:`https://image.tmdb.org/t/p/w500/${modalDetails.backdrop_path}`}}
              style={{width:Dimensions.get('window').width * 0.80, height: Dimensions.get('window').height*0.3}}/>
            <Text numberOfLines={2} style={{fontSize: 18, fontWeight:"bold", margin: 5}}>{modalDetails.original_title} ({modalDetails.released}) - {modalDetails.genres[0].name}</Text>
            <View style={{flexDirection:"row"}}>
              <Image
                source={{uri:`https://image.tmdb.org/t/p/w500/${modalDetails.poster_path}`}}
                style={{width:Dimensions.get('window').width * 0.25, height: Dimensions.get('window').height*0.28}}/>
              <View style={{flex: 1, alignItems:"flex-end", flexDirection:"column"}}>
                <View style={{flexDirection:"row"}}>
                  <View style={{flexDirection: "column", alignItems: "center", right: 15}}>
                    <Entypo name="star" size={25} color='#E5E5E5' />
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontWeight: "bold"}}>{modalDetails.vote_average}</Text><Text>/10</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={{alignItems: "center"}} onPress={()=>{dispatch(showForm(true))}}>
                    <Entypo name="star" size={25} color="#343434" />
                    <Text>Rate This</Text>
                  </TouchableOpacity>
                </View>
                <Text numberOfLines={7} style={{fontSize: 17, left:5, textAlign:"justify"}}>{modalDetails.overview}</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={()=>{
                navigation.navigate("Review Page", {movie_id: `${modalDetails.id}`, name: `Reviews' of ${modalDetails.original_title}`})
                dispatch(chVisibility(false))
              }}>
              <Entypo name="message" size={30} color="#343434" />
              <Text style={{fontSize: 18}}> {modalDetails.vote_count}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

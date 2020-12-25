import React from 'react';
import { Text, View, Modal, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import { chVisibility } from '../store/action';
import STYLES from '../../asset/styles/style';
import COLOR from '../../asset/color/color';

const ModalDetail = ({
  params,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const modalDetails = useSelector(state=>state.details);
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalDetails.visible}
    onRequestClose={()=>{
      dispatch(chVisibility(false))
    }}
  >
    <View style={{flex: 1,justifyContent: "center",alignItems: "center"}}>
      <View style={{...STYLES.cardMovie, marginTop: 80, marginBottom: 90,}}>
        <View style={{flexDirection: 'column', alignItems:"center"}}>
          <Image
            source={{uri:`https://image.tmdb.org/t/p/w500/${modalDetails.backdrop_path}`}}
            style={{width:Dimensions.get('window').width * 0.80, height: Dimensions.get('window').height*0.3}}/>
          <View style={{flexDirection:"row"}}>
            <View style={{flex: 1, alignItems:"flex-start"}}>
              <Text numberOfLines={2} style={{fontSize: 18, fontWeight:"bold", margin: 5}}>{modalDetails.original_title}</Text>
            </View>
            <View style={{flex: 1, alignItems:"flex-end", justifyContent: "center"}}>
              <Text style={{fontSize: 18, fontWeight:"bold"}}>{modalDetails.release_date.substring(0,4)} | {modalDetails.genres[0].name}</Text>
            </View>
          </View>
          <View style={{...STYLES.line, width: Dimensions.get("screen").width * 0.85, marginBottom: 15, marginTop: 15, color: COLOR.black, height: 2}}></View>
          <View style={{flexDirection:"row",}}>
            <View style={{alignItems:"flex-start"}}>
              <Image
                //source={{uri:`https://image.tmdb.org/t/p/w500/${modalDetails.poster_path}`}}
                style={{width:Dimensions.get('window').width * 0.25, height: Dimensions.get('window').height*0.28}}/>
            </View>
            <View style={{flex: 1, alignItems:"flex-end", flexDirection:"column"}}>
              <View style={{flexDirection:"row"}}>
                <View style={{flexDirection: "column", alignItems: "center", right: 15}}>
                  <FontAwesomeIcon icon={faStar} size={25} color={COLOR.gold} />
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: "bold"}}>{modalDetails.vote_average}</Text><Text>/10</Text>
                  </View>
                </View>
                <View style={{flexDirection: "column"}}>
                  <TouchableOpacity style={{alignItems: "center"}} onPress={()=>{dispatch(showForm(true))}}>
                    <FontAwesomeIcon icon={faStar} size={25} color={COLOR.light} />
                    <Text>Rate This</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text numberOfLines={7} style={{fontSize: 17, left:5, textAlign:"justify"}}>{modalDetails.overview}</Text>
            </View>
          </View>
          <View style={{...STYLES.line, width: Dimensions.get("screen").width * 0.85, color: COLOR.black, height: 2, marginTop: 5}}></View>
        </View>
        <View style={{flex:1, flexDirection: "row", justifyContent: "space-between"}}>
          <View>
            <TouchableOpacity style={{flexDirection: "row", alignItems: "center"}}
              onPress={()=>{
                navigation.navigate("ReviewAll", {movie_id: `${modalDetails.id}`, name: `Reviews' of ${modalDetails.original_title}`})
                dispatch(chVisibility(false))
              }}>
              <MaterialCommunityIcons name="comment-outline" size={30} color={COLOR.black}/>
              <Text style={{fontSize: 18}}> {modalDetails.vote_count}</Text>
            </TouchableOpacity>
          </View>
        <View>
          <FontAwesomeIcon icon={faShareAlt} size={30} /></View>
        </View>
      </View>
    </View>
  </Modal>
);
}
export default ModalDetail;





// import React from 'react';
// import { Text, View, Modal, Image, Dimensions, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faStar, faShareAlt } from '@fortawesome/free-solid-svg-icons';
// import Entypo from 'react-native-vector-icons/Entypo';
// import { useNavigation } from '@react-navigation/native';
//
// import { chVisibility } from '../store/action';
// import STYLES from '../../asset/styles/style';
// import COLOR from '../../asset/color/color';
// import Card from '../components/MovieCard';
//
// const ModalDetail = ({params}) => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const modalDetails = useSelector(state=>state.details);
//   return (
//     <Modal
//     animationType="slide"
//     transparent={true}
//     visible={modalDetails.visible}
//     onRequestClose={()=>{
//       dispatch(chVisibility(false))
//     }}
//   >
//     <View style={{flex: 1,justifyContent: "center",alignItems: "center"}}>
//       <View style={styles.cardMovie}>
//         <View style={{flexDirection: 'column', alignItems:"center"}}>
//           <Image
//             source={{uri:`https://image.tmdb.org/t/p/w500/${modalDetails.backdrop_path}`}}
//             style={{width:Dimensions.get('window').width * 0.80, height: Dimensions.get('window').height*0.3}}/>
//           <View style={{flexDirection:"row"}}>
//             <View style={{flex: 1, alignItems:"flex-start"}}>
//               <Text numberOfLines={2} style={{fontSize: 18, fontWeight:"bold", margin: 5}}>{modalDetails.original_title}</Text>
//             </View>
//             <View style={{flex: 1, alignItems:"flex-end", justifyContent: "center"}}>
//               <Text style={{fontSize: 18, fontWeight:"bold"}}>{modalDetails.release_date.substring(0,4)} | {modalDetails.genres[0].name}</Text>
//             </View>
//           </View>
//           <View style={{...STYLES.line, width: Dimensions.get("screen").width * 0.85, marginBottom: 15, marginTop: 15, color: COLOR.black, height: 2}}></View>
//           <View style={{flexDirection:"row",}}>
//             <View style={{alignItems:"flex-start"}}>
//               <Image
//                 source={{uri:`https://image.tmdb.org/t/p/w500/${modalDetails.poster_path}`}}
//                 style={{width:Dimensions.get('window').width * 0.25, height: Dimensions.get('window').height*0.28}}/>
//             </View>
//             <View style={{flex: 1, alignItems:"flex-end", flexDirection:"column"}}>
//               <View style={{flexDirection:"row"}}>
//                 <View style={{flexDirection: "column", alignItems: "center", right: 15}}>
//                   <FontAwesomeIcon icon={faStar} size={25} color={COLOR.gold} />
//                   <View style={{flexDirection: 'row'}}>
//                     <Text style={{fontWeight: "bold"}}>{modalDetails.vote_average}</Text><Text>/10</Text>
//                   </View>
//                 </View>
//                 <View style={{flexDirection: "column"}}>
//                   <TouchableOpacity style={{alignItems: "center"}}>
//                     <FontAwesomeIcon icon={faStar} size={25} color={COLOR.light} />
//                     <Text>Rate This</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//               <Text numberOfLines={7} style={{fontSize: 16, left:5, textAlign:"justify"}}>{modalDetails.overview}</Text>
//             </View>
//           </View>
//           <View style={{width: Dimensions.get("screen").width * 0.85, height: 2, marginTop: 5}}></View>
//         </View>
//         <View style={{flex:1, flexDirection: "row", justifyContent: "space-between"}}>
//           <View>
//             <TouchableOpacity style={{flexDirection: "row", alignItems: "center"}}
//               onPress={()=>{
//                 navigation.navigate("ReviewAll", {movie_id: `${modalDetails.id}`, name: `Reviews' of ${modalDetails.original_title}`})
//                 dispatch(chVisibility(false))
//               }}>
//               <Entypo name="message" size={30}/>
//               <Text style={{fontSize: 18}}> {modalDetails.vote_count}</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   </Modal>
// );
// }
//
// export default ModalDetail;
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#343434',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   cardMovie: {
//     flex: 1,
//     padding: 10,
//     borderRadius: 25,
//     borderWidth: 5,
//     marginTop: 80,
//     marginBottom: 90,
//     backgroundColor: '#FCA311',
//     width: Dimensions.get("screen").width * 0.9,
//     height: Dimensions.get("screen").height * 0.49,
//   },
// });

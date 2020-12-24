import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: "#FFFFFF"}}>Hello world!</Text>
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
  }
});







// import React, {useState, useEffect} from 'react';
// import { StyleSheet, Text, View, Modal, Image, TouchableOpacity, Dimensions} from 'react-native';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {useSelector, useDispatch} from 'react-redux';
// import { faSearch,faFilm, faStar, faShareAlt } from '@fortawesome/free-solid-svg-icons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//
// import STYLES from '../assets/styles/style';
// import COLOR from '../assets/color/color';
//
// const HelloWorldApp = () => {
//   const [formStar, setFormStar] = useState(false);
//   const renderItem = ({item})=> {
//
//   return (
//     <View >
//       <Image source={{uri:`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}} />
//       <Text numberOfLines={2} style={{fontSize: 18, fontWeight:"bold", margin: 5}}>{item.original_title}</Text>
//       <Text style={{fontSize: 18, fontWeight:"bold"}}>{item.release_date.substring(0,4)} | {item.genres[0].name}</Text>
//       <Image source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}} />
//       <Text style={{fontWeight: "bold"}}>{item.vote_average}</Text><Text>/10</Text>
//       <TouchableOpacity style={{alignItems: "center"}} onPress={()=>
//         {
//           setFormStar(true);
//         }
//       }>
//         <Text>Rate This</Text>
//       </TouchableOpacity>
//       <Text numberOfLines={7} style={{fontSize: 16, left:5}}>{modalDetails.overview}</Text>
//       <TouchableOpacity style={{flexDirection: "row", alignItems: "center"}}
//         onPress={()=>{
//           navigation.navigate("ReviewAll", {movie_id: `${modalDetails.id}`, name: `Reviews' of ${modalDetails.original_title}`})
//           dispatch(chVisibility(false))
//         }}>
//         <Text style={{fontSize: 18}}> {modalDetails.vote_count}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
//
// export default HelloWorldApp;
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#343434',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });

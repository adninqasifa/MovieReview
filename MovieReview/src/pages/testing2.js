import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, TextInput, FlatList, Dimensions, Image, Modal, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch,faFilm, faStar, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import STYLES from '../assets/styles/style';
import COLOR from '../assets/color/color';
import {Categories} from '../assets/data/categoryData';
import {chList} from '../store/action'
import Card from '../components/Card';

const HomePage = ({navigation}) => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState('');
  const [categories, setCategories] = useState('All');
  const [idMovie, setIdMovie] = useState(0);
  const movieListHomePage = useSelector(state=>state.listed);
  const modalDetails = useSelector(state=>state.details);
  const [formStar, setFormStar] = useState(false);

  useEffect(() => {
    dispatch(chList(idMovie))
  },[idMovie]);

  function renderHeader() {
    return (
      <View style={{marginTop: 20, marginLeft: 20, marginRight: 20, marginBottom: 10, position: "relative"}}>
        <TextInput placeholder="Search Movies" style={STYLES.searchBar}
          onChangeText={(value)=>setMovies(value)}
          value={movies}
        />
        <FontAwesomeIcon icon={faSearch} style={{position: 'absolute', top: 12, left: 15}} size={24}/>
      </View>
    )
  }

  function renderGenre() {
    const renderItem = ({item})=> {
      return (
        <TouchableOpacity
          style={{...STYLES.genreList, backgroundColor: categories == item.category ? COLOR.primary: COLOR.secondary,}}
          onPress={() =>{
            setIdMovie(item.id)
            setCategories(item.category)
            }
          }
        >
          <FontAwesomeIcon icon={faFilm} size={17} style={{color: categories == item.category ? COLOR.secondary: COLOR.black}}/>
          <Text style={{fontSize: 17, color: categories == item.category ? COLOR.secondary: COLOR.black}}> {item.category}</Text>
        </TouchableOpacity>
      )
    }
    return (
      <FlatList
        data={Categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item=>item.id}
        renderItem={renderItem}
      />
    )
  }
  function renderMovieList(){
    const renderItem = ({item}) => {
      return(
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Card
            title={item.original_title}
            synopsis={item.overview}
            imageSource={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            backDrop={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
            average_rating={item.vote_average}
            releaseDate = {item.release_date}
            genre = {categories}
            idOfMovie = {item.id}
            rating_count = {item.vote_count}
          />
        </View>
      )
    }
    return (
      <FlatList
        data={movieListHomePage.listMovies}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    )
  }
  return (
    <SafeAreaView style={STYLES.container}>
      <View style={{flex: 1,}}>
        {renderHeader()}
        <Text style={{fontSize: 18, fontWeight: "bold", margin: 10, color:COLOR.secondary}}>Best Genres</Text>
        <View>
          {renderGenre()}
        </View>
        <Text style={{fontSize: 18, fontWeight: "bold", margin: 10, color:COLOR.secondary}}>Popular {categories} Movies</Text>
        <View style={{flex: 1,}}>
          {renderMovieList()}
        </View>
      </View>
      <TouchableOpacity style={{alignItems: "center"}} onPress={()=>{navigation.replace("Login")}}>
        <View style={STYLES.btnPrimary}>
          <Text style={{color: COLOR.primary, fontWeight: "bold", fontSize: 18,}}>GoBack</Text>
        </View>
      </TouchableOpacity>
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
                    source={{uri:`https://image.tmdb.org/t/p/w500/${modalDetails.poster_path}`}}
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
                      <TouchableOpacity style={{alignItems: "center"}} onPress={()=>
                        {
                          setFormStar(true);
                        }
                      }>
                        <FontAwesomeIcon icon={faStar} size={25} color={COLOR.light} />
                        <Text>Rate This</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <Text numberOfLines={7} style={{fontSize: 16, left:5}}>{modalDetails.overview}</Text>
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={formStar}
        onRequestClose={()=>{
          setFormStar(false)
        }}
      >
        <View style={{flex: 1,alignItems: "center"}}>
          <View style={{...STYLES.cardMovie, marginTop: 160, marginBottom: 160, backgroundColor: COLOR.primary, alignItems: "center"}}>
            <Text style={{color: COLOR.secondary, fontSize: 18, fontWeight: "bold"}}>How do you think about this movie?</Text>
            <Text style={{color: COLOR.secondary, fontSize: 18, fontWeight: "bold"}}>Your Rating: </Text>
            <TextInput
              style={{backgroundColor: COLOR.secondary, borderRadius: 12, width: Dimensions.get("screen").width * 0.7, margin: 15}}
              placeholder="Write a headline for your review"
            />
            <TextInput
              style={{backgroundColor: COLOR.secondary, borderRadius: 12, width: Dimensions.get("screen").width * 0.7, marginBottom: 20, height: Dimensions.get("screen").height * 0.1}}
              placeholder="Write a headline for your review"
            />
            <Button
              title="Press Me"
              style={{padding: 10,}}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
};

export default HomePage

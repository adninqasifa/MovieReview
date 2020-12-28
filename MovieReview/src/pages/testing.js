import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import {Categories} from '../assets/genre';
import {chList} from '../store/action';
import Card from '../components/MovieCard';
import ModalDetail from '../components/ModalDetail';
import ModalStar from '../components/ModalStar';

const HomePage = ({navigation}) => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState('');
  const [categories, setCategories] = useState('All');
  const [idMovie, setIdMovie] = useState(0);
  const movieListHomePage = useSelector((state) => state.listed);

  useEffect(() => {
    dispatch(chList(idMovie));
  },[idMovie]);

  function search() {
    return (
      <View>
        <TextInput
          style={styles.inputText}
          placeholder="Search movies"
          onChangeText={(value) => setMovies(value)}
          value={movies}
        />
      </View>
    );
  }

  function genre() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setIdMovie(item.id);
            setCategories(item.category);
          }}>
          <Text style={{fontSize: 17, color: categories == item.category}}> {item.category}</Text>
        </TouchableOpacity>
      );
    };
    return (
      <FlatList
        data={Categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    );
  }

  function movie() {
    const renderItem = ({item}) => {
      return (
        <View style={{alignItems: 'center'}}>
          <Card
            title={item.original_title}
            synopsis={item.overview}
            imageSource={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            backDrop={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
            average_rating={item.vote_average}
            releaseDate={item.release_date}
            genre={categories}
            idOfMovie={item.id}
            rating_count={item.vote_count}
          />
        </View>
      );
    };
    return (
      <FlatList
        data={movieListHomePage.listMovies}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ModalDetail />
      <ModalStar />
      <View style={{alignItems: 'center'}}>{search()}</View>
      <Text style={{color: '#E5E5E5', fontSize: 25}}>Best Genres</Text>
      {genre()}
      <Text style={{color: '#E5E5E5', fontSize: 25}}>
        Hot {categories} Movies
      </Text>
      {movie()}
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.push('Login Page')}>
          <Text style={{color: '#E5E5E5', textAlign: 'center'}}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
  },
  button: {
    flexDirection: 'row',
    width: 130,
    height: 30,
    backgroundColor: '#FCA311',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 2,
    marginBottom: 30,
  },
  inputText: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    width: 300,
    height: 50,
    borderWidth: 5,
    borderRadius: 5,
    color: '#000000',
    backgroundColor: '#E5E5E5',
    padding: 10,
  },
});

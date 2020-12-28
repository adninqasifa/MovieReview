import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Card from '../components/ReviewCard';

export default function Home({ navigation }) {
  const [reviews] = useState([
    { title: '1. Unbelievable! Great movie! I’m lovin it! Maybe, I think, someday another country will remake this movie.', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: '2. Unbelievable! Great movie! I’m lovin it! Maybe, I think, someday another country will remake this movie.', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: '3. Unbelievable! Great movie! I’m lovin it! Maybe, I think, someday another country will remake this movie.', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: '4. Unbelievable! Great movie! I’m lovin it! Maybe, I think, someday another country will remake this movie.', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: '5. Unbelievable! Great movie! I’m lovin it! Maybe, I think, someday another country will remake this movie.', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: '6. Unbelievable! Great movie! I’m lovin it! Maybe, I think, someday another country will remake this movie.', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: '7. Unbelievable! Great movie! I’m lovin it! Maybe, I think, someday another country will remake this movie.', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: '8. Unbelievable! Great movie! I’m lovin it! Maybe, I think, someday another country will remake this movie.', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: '9. Unbelievable! Great movie! I’m lovin it! Maybe, I think, someday another country will remake this movie.', rating: 5, body: 'lorem ipsum', key: '1' },
  ]);
  return (
    <View style={styles.container}>
      <Text style={{color: '#E5E5E5'}}> All Reviews </Text>
      <FlatList data={reviews} renderItem={({ item }) => (
        <Card>
          <Text>{ item.title }</Text>
        </Card>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
  }
});

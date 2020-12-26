import React, {useState} from 'react';
import {
  Text,
  View,
  Modal,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Stars from 'react-native-stars';
import Entypo from 'react-native-vector-icons/Entypo';

import {showForm} from '../store/action';

const ModalStar = () => {
  const showingForm = useSelector((state) => state.formStar);
  const dispatch = useDispatch();
  const [counting, setCounting] = useState(0);
  const [headline, setHeadline] = useState('');
  const [reviews, setReviews] = useState('');
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showingForm.visible}
      onRequestClose={() => {
        dispatch(showForm(false));
        setCounting(0);
        setHeadline('');
        setReviews('');
      }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={styles.cardMovie}>
            <Text style={styles.kalimat}>
              How do you think about this movie?
            </Text>
            <Stars
              default={counting}
              count={5}
              starSize={20}
              spacing={6}
              update={(val) => setCounting(val)}
              fullStar={<Entypo name="star" size={25} color="#343434" />}
              emptyStar={<Entypo name="star" size={25} color="#E5E5E5" />}
            />
            <Text style={styles.kalimat}>Your Rating: {counting}</Text>
            <TextInput
              style={styles.inputHeadline}
              placeholder="Write a headline for your review"
              value={headline}
              onChangeText={(val) => setHeadline(val)}
            />
            <TextInput
              style={styles.inputReview}
              multiline
              placeholder="Write your review here"
              value={reviews}
              onChangeText={(val) => setReviews(val)}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalStar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kalimat: {
    marginBottom: 10,
    color: '#343434',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardMovie: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 25,
    borderWidth: 5,
    marginTop: 160,
    marginBottom: 160,
    backgroundColor: '#FCA311',
    width: Dimensions.get('screen').width * 0.9,
  },
  inputHeadline: {
    marginTop: 5,
    marginBottom: 5,
    width: 300,
    height: 50,
    borderWidth: 5,
    borderRadius: 5,
    color: '#343434',
    backgroundColor: '#E5E5E5',
    padding: 10,
    textAlignVertical: 'top',
  },
  inputReview: {
    marginTop: 5,
    marginBottom: 5,
    width: 300,
    height: 100,
    borderWidth: 5,
    borderRadius: 5,
    color: '#343434',
    backgroundColor: '#E5E5E5',
    padding: 10,
    textAlignVertical: 'top',
  },
  button: {
    width: 300,
    backgroundColor: '#343434',
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    color: '#E5E5E5',
    textAlign: 'center',
  },
});

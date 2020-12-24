import { StyleSheet, Dimensions } from 'react-native';
import COLOR from '../color/color';
const STYLES = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: COLOR.black,
  },
  header: {
      flex: 1,
      alignItems: "center",
      justifyContent: 'center',
  },
  footer: {
      flex: 3,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      overflow: "hidden",
      padding: 20,
      backgroundColor: COLOR.primary,
  },
  btnPrimary:{
    backgroundColor: COLOR.secondary,
    height: 50,
    width: Dimensions.get("screen").width * 0.4,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  line:{
    height: 1,
    width: Dimensions.get("screen").width * 0.35,
    backgroundColor: COLOR.light,
  },
  searchBar: {
    borderWidth: 1,
    backgroundColor: COLOR.secondary,
    borderColor: COLOR.primary,
    borderRadius: 25,
    height: 50,
    fontSize: 20,
    paddingLeft:45,
    paddingRight: 20,
  },
  genreList: {
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLOR.primary,
    justifyContent: "center",
    width: 100,
    marginRight: 6,
    marginLeft: 6,
    flexDirection: "row",
    height: 40,
  },
  cardMovie: {
    flex: 1,
    padding: 10,
    borderRadius: 25,
    borderWidth: 5,
    backgroundColor: COLOR.secondary,
    borderColor: COLOR.primary,
    width: Dimensions.get("screen").width * 0.9,
    height: Dimensions.get("screen").height * 0.49,
  },
  cardReview: {
    flex: 1,
    padding: 10,
    borderRadius: 12,
    borderWidth: 5,
    backgroundColor: COLOR.secondary,
    borderColor: COLOR.primary,
    width: Dimensions.get("screen").width * 0.9,
    height: Dimensions.get("screen").height * 0.15,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
  }
})

export default STYLES;
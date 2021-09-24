import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
// const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: screenWidth * 0.5,
    height: screenWidth * 0.5,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import FontSize from '../../theme/FontSize';
import space from '../../utils/spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    padding: space.hd10,
  },
  item: {
    backgroundColor: Colors.white,
    paddingHorizontal: space.hd20,
    paddingVertical: space.hd20,
    borderRadius: space.hd10,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    margin: space.hd10,
  },
});

export default styles;

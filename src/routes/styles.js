import {StyleSheet} from 'react-native';
import Colors from '../theme/Colors';
import FontSize from '../theme/FontSize';

const styles = StyleSheet.create({
  titleStack: {
    fontFamily: 'DancingScript-Bold',
    fontSize: FontSize.font22,
    color: Colors.black,
  },
  badgeIcon: {position: 'absolute', top: -3, right: -5},
});
export default styles;

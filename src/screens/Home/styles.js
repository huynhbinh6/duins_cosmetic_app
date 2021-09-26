import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import FontSize from '../../theme/FontSize';
import {
  widthPercentageToDP as wd,
  heightPercentageToDP as hd,
} from 'react-native-responsive-screen';
import space from '../../utils/spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerText: {
    fontFamily: 'DancingScript-Bold',
    fontSize: FontSize.font28,
    color: Colors.black,
  },
  // cartLogo: {
  //   width: wd('5%'),
  //   height: wd('5%'),
  // },
});

export default styles;

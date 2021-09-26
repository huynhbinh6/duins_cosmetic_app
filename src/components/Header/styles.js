import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import FontSize from '../../theme/FontSize';
import space from '../../utils/spacing';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: space.hd55,
    alignItems: 'center',
    paddingHorizontal: space.wd20,
  },
  logoStyle: {
    width: space.hd45,
    height: space.hd45,
    borderRadius: space.hd45 / 2,
  },
  headerText: {
    fontFamily: 'DancingScript-Bold',
    fontSize: FontSize.font28,
    color: Colors.black,
  },
  badgeIcon: {position: 'absolute', top: -3, right: -4},
});

export default styles;

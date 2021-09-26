import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import FontSize from '../../theme/FontSize';
import space from '../../utils/spacing';

const styles = StyleSheet.create({
  richText: {
    fontFamily: 'SFProText-Semibold',
    fontSize: FontSize.font14,
    color: Colors.blueTextBg,
    textAlign: 'right',
    paddingBottom: space.hd30,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  bottomText: {
    fontSize: FontSize.font14,
    fontFamily: 'SFProText-Semibold',
    paddingBottom: space.hd30,
  },
});

export default styles;

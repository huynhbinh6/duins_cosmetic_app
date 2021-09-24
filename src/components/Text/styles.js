import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import FontSize from '../../theme/FontSize';

const styles = StyleSheet.create({
  richText: {
    fontFamily: 'SFProText-Semibold',
    fontSize: FontSize.font14,
    color: Colors.blueTextBg,
    textAlign: 'right',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    fontSize: FontSize.font14,
    fontFamily: 'SFProText-Semibold',
  },
});

export default styles;

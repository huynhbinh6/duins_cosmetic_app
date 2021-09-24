import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import FontSize from '../../theme/FontSize';
import space from '../../utils/spacing';

const styles = StyleSheet.create({
  customBtn: {
    paddingVertical: space.hd20,
    backgroundColor: Colors.blueTextBg,
    alignItems: 'center',
    borderRadius: space.borderBtn,
    marginVertical: space.hd55,
  },
  textBtn: {
    color: Colors.white,
    fontFamily: 'SFProText-Semibold',
    fontSize: FontSize.font16,
  },
});

export default styles;

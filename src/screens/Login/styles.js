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
    backgroundColor: 'black',
  },
  logo: {
    width: wd('42%'),
    height: wd('42%'),
  },
  logoContainer: {paddingVertical: hd('8%'), alignItems: 'center'},
  formLoginContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    borderTopLeftRadius: wd('6%'),
    borderTopRightRadius: wd('6%'),
    paddingHorizontal: space.wd20,
    paddingVertical: space.hd30,
  },
  staticText: {
    fontSize: FontSize.font26,
    color: Colors.textColor,
    fontFamily: 'SFCompactText-Semibold',
  },
  subContainer: {
    marginTop: space.hd10,
  },
  inputText: {
    borderRadius: space.borderBtn,
    borderColor: Colors.borderInput,
    borderWidth: 1,
    paddingVertical: space.inputVer,
    paddingHorizontal: space.inputHor,
    backgroundColor: Colors.bgInput,
    fontFamily: 'SFProText-Medium',
    fontSize: FontSize.font12,
    marginTop: space.hd30,
  },
  rightText: {
    fontFamily: 'SFProText-Semibold',
    fontSize: FontSize.font14,
    color: Colors.blueTextBg,
    textAlign: 'right',
    marginTop: space.hd20,
    flex: 1,
  },
});

export default styles;

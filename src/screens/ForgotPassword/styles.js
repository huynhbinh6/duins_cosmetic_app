import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wd,
  heightPercentageToDP as hd,
} from 'react-native-responsive-screen';
import Colors from '../../theme/Colors';
import FontSize from '../../theme/FontSize';
import {SFProTextLight, SFProTextSemibold} from '../../utils/BaseValues';
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
  logoContainer: {paddingVertical: hd('2.5%'), alignItems: 'center'},
  formRegisterContainer: {
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
  logoOTPConfirm: {paddingVertical: hd('13%'), alignItems: 'center'},
  msgOTP: {
    marginTop: hd('1.5%'),
    fontFamily: SFProTextLight,
    fontSize: FontSize.font12,
    color: Colors.textColor,
  },
  rightText: {
    fontFamily: SFProTextSemibold,
    fontSize: FontSize.font14,
    color: Colors.blueTextBg,
    textAlign: 'right',
    marginTop: space.hd10,
    flex: 1,
  },
});

export default styles;

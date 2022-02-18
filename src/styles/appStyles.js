// App styles
import {StyleSheet} from 'react-native';
import {colors, fonts} from '../utils';
import {
  scale,
  moderateVerticalScale,
  moderateScale,
} from 'react-native-size-matters';

export default AppStyles = StyleSheet.create({
  mainRender: {
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  nestedView: {
    height: moderateVerticalScale(170),
    width: '90%',
    zIndex: 1,
    backgroundColor: colors.primary,
    borderRadius: 12,
  },
  cardStyle: {
    height: '100%',
    width: '100%',
    marginTop: moderateVerticalScale(-110),
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  mainContainert: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  debit: {
    fontFamily: fonts.primaryMedium,
    fontSize: fonts.FONT_SIZE_22,
    color: colors.white,
    fontWeight: fonts.fontWeightBold,
    marginVertical: moderateVerticalScale(16),
  },
  available: {
    fontSize: fonts.FONT_SIZE_16,
    fontFamily: fonts.primaryRegular,
    color: colors.white,
  },
  balanceView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyStyle: {
    height: scale(25),
    width: scale(40),
    borderRadius: scale(8),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  heightView: {
    height: moderateVerticalScale(110),
  },
  staticView: {
    height: moderateVerticalScale(30),
  },
  flatListContent: {
    paddingBottom: moderateVerticalScale(50),
  },
  spending: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: moderateScale(12),
    borderTopLeftRadius: moderateScale(12),
  },
  button: {
    height: moderateVerticalScale(50),
    marginHorizontal: moderateScale(16),
    backgroundColor: colors.primary,
    borderRadius: moderateScale(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    fontFamily: fonts.primaryMedium,
    fontSize: fonts.FONT_SIZE_18,
    color: colors.white,
    fontWeight: fonts.fontWeightBold,
  },
  weeklyText: {
    fontFamily: fonts.primaryRegular,
    fontSize: fonts.FONT_SIZE_14,
    color: colors.lightBlack,
    marginHorizontal: moderateScale(16),
    marginVertical: moderateVerticalScale(8),
  },
  debitCardText: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(16),
  },
  settingImage: {
    height: moderateVerticalScale(24),
    width: moderateScale(24),
  },
  line: {
    marginHorizontal: moderateScale(16),
    height: 0.5,
    backgroundColor: colors.lightGray,
    margin: moderateScale(12),
  },
  debitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageView: {
    height: moderateVerticalScale(24),
    width: moderateScale(24),
  },

  totalLimit: {
    fontSize: fonts.FONT_SIZE_12,
    fontFamily: fonts.primaryMedium,
    color: colors.lightGray,
  },
  spendLimit: {
    fontSize: fonts.FONT_SIZE_12,
    fontFamily: fonts.primaryMedium,
    color: colors.primary,
  },
});

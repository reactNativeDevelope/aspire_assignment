import React, {useState, useEffect} from 'react';
import {Text, TextInput, Image, View, StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {colors, fonts} from '../../utils';

const FieldInput = ({
  disable,
  type,
  msg,
  inputStyle,
  name,
  onBlur,
  inputViewStyle,
  value,
  onChange,
  placeHolder,
  ...props
}) => {
  return (
    <View style={styles.mainView}>
      <View style={[styles.inputWrapper]}>
        <View style={styles.currencyStyle}>
          <Text style={styles.currencyText}>{`S$`}</Text>
        </View>
        <TextInput
          placeholder={placeHolder}
          style={styles.input}
        returnKeyType='done'
          onBlur={onBlur}
          onChangeText={value => onChange(value)}
          value={value}
          keyboardType={'numeric'}
          placeholderTextColor={colors.lightGray}
          {...props}
        />
      </View>
    </View>
  );
};
export default FieldInput;
const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    marginHorizontal: moderateVerticalScale(16),
  },
  inputWrapper: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderBottomColor: 'gray',
  },
  icon: {
    height: 23,
    width: 23,
    resizeMode: 'contain',
    marginRight: '4%',
  },
  currencyStyle: {
    height: moderateVerticalScale(30),
    width: moderateScale(50),
    borderRadius: moderateScale(8),
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyText: {
    fontFamily: fonts.primaryMedium,
    color: colors.white,
    fontSize: fonts.FONT_SIZE_14,
  },
  input: {
    fontSize: fonts.FONT_SIZE_20,
    fontWeight: fonts.fontWeightBold,
    marginHorizontal: moderateScale(12),
  },
});

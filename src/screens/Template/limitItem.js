import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  ALert,
} from 'react-native';
import {color} from 'react-native-reanimated';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {fonts, colors, images} from '../../utils';
const limitItem = ({item, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.item,
        {backgroundColor: item.selected ?colors.primary : colors.lightPrimary},
      ]}>
      <Text style={[styles.text,{color:item.selected ?colors.lightPrimary : colors.primary}]}>{`S$ `}</Text>
      <Text style={[styles.subText,{color:item.selected ?colors.lightPrimary : colors.primary}]}>{item.value}</Text>
    </TouchableOpacity>
  );
};

export default limitItem;
const styles = StyleSheet.create({
  item: {
    marginHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    height: moderateVerticalScale(40),
    width: moderateScale(80),
    backgroundColor: colors.primary,
    borderRadius: moderateScale(4),
    justifyContent: 'center',
    marginVertical: moderateVerticalScale(8),
  },
  text: {
    fontSize: fonts.FONT_SIZE_14,
    fontFamily: fonts.primaryMedium,
    color: colors.white,
  },
  subText: {
    fontSize: fonts.FONT_SIZE_12,
    fontFamily: fonts.primaryMedium,
  },
});

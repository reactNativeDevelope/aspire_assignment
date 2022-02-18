import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {fonts, colors, images, validationStings} from '../../utils';
const card = ({title, avtar, email}) => {
  return (
    <View style={styles.nestedView}>
      <View style={styles.aspireView}>
        <Image
          source={images.icArrow}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.aspire}>{validationStings.aspireText}</Text>
      </View>
      <View style={styles.staticView} />
      <Text style={styles.aspire}>{validationStings.nameText}</Text>
      <View style={styles.staticView} />
      <Text style={styles.aspire}>{validationStings.cardText}</Text>
      <View style={styles.staticView} />
      <View style={{flexDirection: 'row', width: '100%'}}>
        <Text style={styles.aspire}>{validationStings.ddyyText}</Text>
        <View style={{width: moderateScale(24)}} />
        <Text style={styles.aspire}>{validationStings.CVVText}</Text>
        <Text style={styles.aspire}>{validationStings.cvvValueText}</Text>
        <Text
          style={[
            styles.aspire,
            {position: 'absolute', right: 0, fontSize: fonts.FONT_SIZE_22},
          ]}>
          {validationStings.cardType}
        </Text>
      </View>
    </View>
  );
};

export default card;
const styles = StyleSheet.create({
  nestedView: {
    height: moderateVerticalScale(170),
    width: '100%',
    zIndex: 100,
    borderRadius: 12,
    padding: 12,
  },
  aspireView: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: moderateVerticalScale(24),
    width: moderateScale(24),
    marginHorizontal: moderateScale(6),
  },
  aspire: {
    fontFamily: fonts.primaryMedium,
    fontSize: fonts.FONT_SIZE_16,
    color: colors.white,
  },
  staticView: {
    height: moderateVerticalScale(18),
  },
});

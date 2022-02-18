import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  ALert,
} from 'react-native';
import {fonts, colors, images} from '../../utils';
const item = ({title, avtar, email, onPress, index, selected}) => {
  return (
    <View style={styles.item}>
      <View style={styles.horizontal}>
        <Image source={{uri: avtar}} style={styles.avtar} />
        <View>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.subText}>{email}</Text>
        </View>
      </View>
      {index === 2 ? (
        <TouchableOpacity onPress={onPress}>
          <Image
            source={selected ? images.icToggleOn : images.icToggleOff}
            style={styles.avtar}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default item;
const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    justifyContent: 'space-between',
  },
  avtar: {
    height: 28,
    width: 28,
    marginHorizontal: 8,
    borderRadius: 12,
  },
  text: {
    fontSize: fonts.FONT_SIZE_14,
    fontFamily: fonts.primaryMedium,
  },
  subText: {
    fontSize: fonts.FONT_SIZE_12,
    fontFamily: fonts.primaryRegular,
    color: colors.lightBlack,
  },
  horizontal: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
});

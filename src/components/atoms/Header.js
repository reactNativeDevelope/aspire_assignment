import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, fonts, images} from '../../utils';
import {moderateVerticalScale} from 'react-native-size-matters';

const Header = ({left, right, handleRightPress, textColor = false}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainView}>
      {/* left side management */}

      {left === 'back' && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.HeaderLeft}>
          <Image
            style={styles.backIcon}
            source={images.icBack}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}

      {/* {
                left === 'menu' && <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={styles.HeaderLeft}>
                    <Image
                        style={styles.backIcon}
                        source={images.icMenu}
                    />
                </TouchableOpacity>
            } */}

      {/* center Management */}
      {/* <Text style={[styles.heading,{color:textColor?colors.white:colors.black}]}>
                {title}
            </Text> */}

      {/* Right Side Management */}
      {right === 'right' && (
        <TouchableOpacity onPress={handleRightPress} style={styles.HeaderRight}>
          <Image
            style={styles.backIcon}
            source={images.icGrowth}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  mainView: {
    height: moderateVerticalScale(60),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    top: moderateVerticalScale(20),
    position: 'relative',
  },
  HeaderLeft: {
    height: 60,
    width: 60,
    position: 'absolute',
    left: 0,
    justifyContent: 'center',
    paddingLeft: 10,
    zIndex: 2,
  },
  backIcon: {
    height: 24,
    width: 24,
  },
  heading: {
    color: colors.lightBlack,
    fontSize: fonts.FONT_SIZE_16,
    fontFamily: fonts.primaryBold,
  },
  HeaderRight: {
    height: 60,
    width: 60,
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
    zIndex: 2,
  },
});

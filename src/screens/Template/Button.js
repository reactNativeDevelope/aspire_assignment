import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AppStyles} from '../../styles';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={AppStyles.button}>
      <Text style={AppStyles.submitText}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Button;

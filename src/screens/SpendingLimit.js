import React, {useState} from 'react';
import {Text, View, Alert, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Header} from '../components/atoms';
import {AppStyles} from '../styles';
import {validationStings, limits, images, colors} from '../utils';
import Button from './Template/Button';
import ItemLimit from './Template/limitItem';
import FieldInput from '../components/atoms/FieldInput';
export default function SpendingLimit({navigation, route}) {
  /********************** Hooks Function **********************/
  const [isSelected, setIsSelected] = useState(false);
  const [spendlimits, setLimits] = useState([...limits]);
  const [state, setState] = useState({limit: ''});

  const onPress = () => {
    if (
      route.params &&
      route.params.spendingLimitData &&
      state.limit != '' &&
      parseInt(state.limit) <= 50000
    ) {
      let {spendingLimitData} = route.params;
      spendingLimitData(state.limit);
      navigation.goBack();
    } else {
      Alert.alert(validationStings.errorText);
    }
  };

  const onPressItem = limit => {
    const updatedList = limits.map(item =>
      item.id === limit.id
        ? {...item, selected: true}
        : {...item, selected: false},
    );
    setState(prevState => ({
      ...prevState,
      ['limit']: limit.value,
    }));
    setLimits(updatedList);
  };

  // Spending Limit List
  const renderItem = ({item, index}) => {
    return (
      <View>
        <ItemLimit item={item} onPress={() => onPressItem(item)} />
      </View>
    );
  };
  //Spending limit flatlist view
  const spendingLimitBar = () => {
    return (
      <View
        style={{
          height: moderateVerticalScale(50),
          alignItems: 'center',
          marginVertical: moderateVerticalScale(12),
        }}>
        <FlatList
          horizontal
          data={spendlimits}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    );
  };

  const onChangeText = text => {
    console.log();
    setState(prevState => ({
      ...prevState,
      ['limit']: text,
    }));
  };

  return (
    <View style={AppStyles.mainContainert}>
      <Header left={'back'} right={'right'} />

      <Text style={[AppStyles.debit, {paddingLeft: moderateScale(16)}]}>
        {validationStings.spendingLimitText}
      </Text>
      <View style={AppStyles.heightView} />

      <View style={AppStyles.spending}>
        <View style={AppStyles.debitCardText}>
          <Image source={images.icSettings} style={AppStyles.imageView} />
          <Text
            style={[
              AppStyles.weeklyText,
              {color: colors.black, marginHorizontal: moderateScale(8)},
            ]}>
            {validationStings.setWeeklyTarget}
          </Text>
        </View>
        <FieldInput
          placeHolder={`Enter spending limit`}
          onChange={text => onChangeText(text)}
        />
        <View style={AppStyles.line} />
        <Text style={AppStyles.weeklyText}>{validationStings.weeklyText}</Text>

        {spendingLimitBar()}
        <Button text={validationStings.submitText} onPress={onPress} />
      </View>
    </View>
  );
}

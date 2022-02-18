import React, {useEffect, useState, useRef} from 'react';
import {Text, View, FlatList, Image, Alert} from 'react-native';

import BottomSheet from 'reanimated-bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {DashboardRequest} from '../store/modules/dashboard/actions';
import Item from './Template/item';
import {AppStyles} from '../styles';
import {colors, fonts, images, validationStings} from '../utils';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {PercentageBar} from '../components/atoms';
import Card from './Template/card';
const snap = ['72%', '100%'];

export default function Dashboard({navigation}) {
  const dispatch = useDispatch();
  const sheetRef = useRef(null);
  const [state, setState] = useState({
    percentage: '0%',
    spendLimit: '',
    totalLimit: '50000',
  });

  const [selected, isSelected] = useState(false);

  //Get data from reducer
  const {services = []} = useSelector(state => ({
    services: state.dashboardReducer.dashboard,
  }));

  /********************** Hooks Function **********************/
  useEffect(() => {
     sheetRef.current.snapTo(0);
    getDummyWebApi();
  }, []);

  //  Web api call for get dummy data
  const getDummyWebApi = () => {
    dispatch(DashboardRequest());
  };

  //Callback get spending limit data
  const spendingLimitData = limit => {
    var percentage = (parseInt(limit) / 50000) * 100;
    setState(prevState => ({
      ...prevState,
      ['percentage']: percentage + '%',
      ['spendLimit']: limit,
    }));
  };

  const onPress = () => {
    isSelected(true);
    navigation.navigate('SpendingLimit', {
      spendingLimitData: data => spendingLimitData(data),
    });
  };

  // Bottom sheet flatlist data
  const renderItem = ({item, index}) => {
    return (
      <View>
        <Item
          title={item.first_name + '' + item.last_name}
          avtar={item.avatar}
          email={item.email}
          selected={selected}
          onPress={onPress}
          index={index}
        />
      </View>
    );
  };

  // Bottom sheet content
  const renderContent = () => (
    <View style={AppStyles.mainRender}>
      {/* Card view */}
      <View style={AppStyles.nestedView}>
        <Card />
      </View>
      <View style={AppStyles.cardStyle}>
        <View style={AppStyles.heightView} />
        {state.percentage != '0%' ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingRight: moderateScale(16),
            }}>
            <Text
              style={[
                AppStyles.available,
                {
                  color: colors.black,
                  paddingLeft: moderateScale(16),
                  fontFamily: fonts.primaryMedium,
                  paddingTop: moderateVerticalScale(8),
                },
              ]}>
              {validationStings.debitCardLimit}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={AppStyles.spendLimit}>
                {`S$ `}
                {state.spendLimit}
              </Text>
              <View
                style={{
                  backgroundColor: colors.lightGray,
                  height: moderateVerticalScale(6),
                  width: 1,
                  marginHorizontal: moderateScale(4),
                }}
              />
              <Text style={AppStyles.totalLimit}>{state.totalLimit}</Text>
            </View>
          </View>
        ) : null}
        {/* Debit limit percentage bar */}
        {state.percentage != '0%' ? (
          <View
            style={{
              marginHorizontal: moderateVerticalScale(16),
              justifyContent: 'center',
            }}>
            <PercentageBar
              height={moderateVerticalScale(16)}
              backgroundColor={colors.lightPrimary}
              completedColor={colors.primary}
              percentage={state.percentage}
            />
          </View>
        ) : null}

        {/* Flatlist data with toggle button */}
        <FlatList
          data={services}
          scrollEnabled={false}
          contentContainerStyle={AppStyles.flatListContent}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );

  //Debit and balance Text
  const debitAndBalanceView = () => {
    return (
      <View style={{padding: 16}}>
        <View style={AppStyles.debitRow}>
          <Text style={AppStyles.debit}>{validationStings.debitCardText}</Text>
          <Image
            source={images.icGrowth}
            style={AppStyles.imageView}
            resizeMode="contain"
          />
        </View>
        <Text style={AppStyles.available}>
          {validationStings.availBalanceText}
        </Text>
        <View style={AppStyles.balanceView}>
          <View style={AppStyles.currencyStyle}>
            <Text
              style={[AppStyles.available, {fontFamily: fonts.primaryMedium}]}>
              {validationStings.randomText}
            </Text>
            <Text
              style={[AppStyles.available, {fontFamily: fonts.primaryMedium}]}>
              {validationStings.currencyText}
            </Text>
          </View>
          <Text
            style={[
              AppStyles.debit,
              {marginHorizontal: moderateScale(12)},
            ]}>{`xxxxx`}</Text>
        </View>
      </View>
    );
  };

  return (
<>
      <View style={AppStyles.mainContainert}>
        <View style={AppStyles.staticView} />
        {debitAndBalanceView()}
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snap}
        renderContent={renderContent}
      />
    </> 
  );
}



import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import SpendingLimit from '../screens/SpendingLimit';
const Stack = createStackNavigator();
import {Indicator} from '../components/atoms';

const Navigator = () => {
  // ****************** Hooks Functions ********************//

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={'Dashboard'} component={Dashboard} />
          <Stack.Screen name={'SpendingLimit'} component={SpendingLimit} />
        </Stack.Navigator>
        <Indicator />
      </NavigationContainer>
    </View>
  );
};

export default Navigator;

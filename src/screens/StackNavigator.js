import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import TabNavigator from './TabNavigator';
import TabPizzaMania from './TabPizzaMania';
import Cart from './Cart';
import EverydayValueOffers from './EverydayValueOffers';
import OrderConfirmedScreen from './OrderConfirmedScreen';

export default class StackNavigator extends React.Component {
    render() {
        const Stack = createStackNavigator();
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode={'none'} initialRouteName={'DrawerNavigator'}>
                    <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
                    <Stack.Screen name="TabNavigator" component={TabNavigator}/>
                    <Stack.Screen name="TabPizzaMania" component={TabPizzaMania}/>
                    <Stack.Screen name="Cart" component={Cart}/>
                    <Stack.Screen name="EverydayValueOffers" component={EverydayValueOffers}/>
                    <Stack.Screen name="OrderConfirmedScreen" component={OrderConfirmedScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

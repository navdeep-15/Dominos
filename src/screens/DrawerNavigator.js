import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Menu from './Menu';
import DealsandOffers from './DealsandOffers';
import EverydayValueOffers from './EverydayValueOffers';
import Feedback from './Feedback';
import TermsandCoditions from './TermsandConditions';
import { Image } from 'react-native';

export default class DrawerNavigator extends React.Component {
    render() {
        const Drawer = createDrawerNavigator();
        return (
            <Drawer.Navigator initialRouteName="Home" >
                <Drawer.Screen name="Home" component={Home} options={{
                    drawerIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/home.png')}
                            style={{ width: 30, height: 30 }}
                        />
                    ),
                }} />
                <Drawer.Screen name="Menu" component={Menu} options={{
                    drawerIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/menu.png')}
                            style={{ width: 30, height: 30 }}
                        />
                    ),
                }} />
                <Drawer.Screen name="Deals & Offers" component={DealsandOffers} options={{
                    drawerIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/coupon.png')}
                            style={{ width: 30, height: 30 }}
                        />
                    ),
                }} />
                <Drawer.Screen name="Everyday Value Offers" component={EverydayValueOffers} options={{
                    drawerIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/gift-box.png')}
                            style={{ width: 30, height: 30 }}
                        />
                    ),
                }} />
                

                <Drawer.Screen name="Feedback" component={Feedback} options={{
                    drawerIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/feedback.png')}
                            style={{ width: 30, height: 30 }}
                        />
                    ),
                }} />
                <Drawer.Screen name="Terms & Conditions" component={TermsandCoditions} options={{
                    drawerIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/document.png')}
                            style={{ width: 30, height: 30 }}
                        />
                    ),
                }} />

            </Drawer.Navigator>
        )
    }
}

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabBestsellers from './TabBestsellers';
import TabVegPizza from './TabVegPizza';
import TabNonVegPizza from './TabNonVegPizza';
import TabBeverages from './TabBeverages';
import TabDesserts from './TabDesserts';
import TabMealsAndCombos from './TabMealsAndCombos';
import TabPastaPizzaParty from './TabPastaPizzaParty';
import TabPizzaMania from './TabPizzaMania';
import TabSides from './TabSides';
import TabSpecialityChicken from './TabSpecialityChicken';
import { View, SafeAreaView, StyleSheet, Text, Image, TouchableOpacity,Platform } from 'react-native';
import {normalize} from '../dimension'


export default class TabNavigator extends React.Component {
  render() {
    const Tab = createMaterialTopTabNavigator();
    return (

      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('DrawerNavigator')}>
            <Image
              source={require('../assets/arrow.png')}
              style={styles.backimg}
            />
          </TouchableOpacity>
          <Text style={styles.exploremenutext}>Explore Menu</Text>
        </View>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: { fontSize: 14, marginTop: 0, fontWeight: 'bold' },
            style: { backgroundColor: '#0a5c91' },
            scrollEnabled: true,
            activeTintColor: '#ffffff',
          }}>
          <Tab.Screen name="Bestsellers" component={TabBestsellers} />
          <Tab.Screen name="Veg Pizza" component={TabVegPizza} />
          <Tab.Screen name="Non-Veg Pizza" component={TabNonVegPizza} />
          <Tab.Screen name="Pasta Pizza Party" component={TabPastaPizzaParty} />
          <Tab.Screen name="Meals & Combos" component={TabMealsAndCombos} />
          <Tab.Screen name="Pizza Mania" component={TabPizzaMania} />
          <Tab.Screen name="Speciality Chicken" component={TabSpecialityChicken} />
          <Tab.Screen name="Sides" component={TabSides} />
          <Tab.Screen name="Beverages" component={TabBeverages} />
          <Tab.Screen name="Desserts" component={TabDesserts} />
        </Tab.Navigator>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#0a5c91',
    alignItems: 'center',
    paddingTop:Platform.OS === 'ios'?normalize(50):normalize(22),
    padding:normalize(15),
  },
  exploremenutext: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft:normalize(20),
  },
  backimg: {
    width: 25,
    height: 25,
  }
});

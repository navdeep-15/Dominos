import React from 'react';
import { Platform,Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { Dropdown } from 'react-native-material-dropdown';
import {normalize} from '../dimension'

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  cartbtn = () => {
    this.props.navigation.navigate("Cart");
  }
  render() {
    const radioButtonsData = [
      {
        id: '1',
        label: 'Delivery',
        value: 'option1'
      },
      {
        id: '2',
        label: 'Takeaway',
        value: 'option2'
      },
      {
        id: '3',
        label: 'Dine-in',
        value: 'option3'
      }
    ]
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
            <Image source={{ uri: 'https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png' }} style={styles.hamburgericon} />
          </TouchableOpacity>
          <View style={{width:'100%',marginLeft:20}}>
          <Dropdown
            label='Deliver to'
            data={datas}
            value={'WA-58, Rose Villa, Delhi'}
            onChangeText={(value) => {
              this.setState({ sizevalue: value.toLowerCase() })
            }}
            style={styles.dropdownstyle}
            labelTextStyle={{fontWeight:'bold',color:'red'}}
            labelFontSize={16}
            textColor='white'
            baseColor='white'
            selectedItemColor='#0a5c91'
          />
          </View>
        </View>
        <ScrollView style={styles.content}>
          <View style={styles.radiobtngrpstyle}>
            <RadioGroup
              radioButtons={radioButtonsData}
              layout={'row'}
            />
          </View>
          <Image
            source={{ uri: 'https://www.dominos.co.in/assets/Safety_Merchandising_adaptation_400x128px.jpg' }}
            resizeMode={'stretch'}
            style={styles.banner}
          />
          <Text style={styles.menuheading}>
            Explore Menu
          </Text>
          <View style={styles.menu1}>
            <TouchableOpacity style={styles.menulist1} onPress={() => this.props.navigation.navigate('TabNavigator', { screen: 'Veg Pizza' })}>
              <Image source={require('../assets/veg_pizza.png')} style={styles.menulist1img} resizeMode='contain' />
              <Text style={styles.menulisttext}>Veg Pizza</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menulist1} onPress={() => this.props.navigation.navigate('TabNavigator', { screen: 'Non-Veg Pizza' })}>
              <Image source={require('../assets/non-veg_pizza.png')} style={styles.menulist1img} resizeMode='contain' />
              <Text style={styles.menulisttext}>Non-Veg Pizza</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.menu2}>
            <TouchableOpacity style={styles.menulist2} onPress={() => this.props.navigation.navigate('TabNavigator', { screen: 'Sides' })}>
              <Image source={require('../assets/sides.png')} style={styles.menulist2img} resizeMode='contain' />
              <Text style={styles.menulisttext}>Sides & Others</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menulist2} onPress={() => this.props.navigation.navigate('TabNavigator', { screen: 'Beverages' })}>
              <Image source={require('../assets/beverages.png')} style={styles.menulist2img} resizeMode='contain' />
              <Text style={styles.menulisttext}>Beverages</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menulist2} onPress={() => this.props.navigation.navigate('TabNavigator', { screen: 'Desserts' })}>
              <Image source={require('../assets/chocolava.png')} style={styles.menulist2img} resizeMode='contain' />
              <Text style={styles.menulisttext}>Deserts</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{ uri: 'https://www.shopickr.com/wp-content/uploads/2020/07/dominos-pizza-everyday-value-offer-199-lockdown-2020.jpg' }}
            resizeMode={'stretch'}
            style={styles.banner}
          />
          <Text style={styles.menuheading}>
            Offers
          </Text>
          <ScrollView horizontal={true} style={styles.scrollviewstyle}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('TabNavigator')}>
              <Image source={{ uri: 'https://api.dominos.co.in/prod-olo-api/images/amazon_home_20210412.jpg' }} style={styles.offerimg} resizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('TabNavigator')}>
              <Image source={{ uri: 'https://api.dominos.co.in/prod-olo-api/images/Home_Paytm_20210519.jpg' }} style={styles.offerimg} resizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('TabNavigator')}>
              <Image source={{ uri: 'https://api.dominos.co.in/prod-olo-api/images/Home_airtel_30082020.jpg' }} style={styles.offerimg} resizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('TabNavigator')}>
              <Image source={{ uri: 'https://api.dominos.co.in/prod-olo-api/images/Home_Freecharge_20210405.jpg' }} style={styles.offerimg} resizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('TabNavigator')}>
              <Image source={{ uri: 'https://api.dominos.co.in/prod-olo-api/images/Dominos_Mobi_Home_20210503.jpg' }} style={styles.offerimg} resizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('TabNavigator')}>
              <Image source={{ uri: 'https://api.dominos.co.in/prod-olo-api/images/Home_payzapp_20201029.jpg' }} style={styles.offerimg} resizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('TabNavigator')}>
              <Image source={{ uri: 'https://api.dominos.co.in/prod-olo-api/images/Home_au_20201029.jpg' }} style={styles.offerimg} resizeMode='contain' />
            </TouchableOpacity>
          </ScrollView>
        </ScrollView>
        <View style={styles.quickaccesscomponent}>
          <TouchableOpacity style={styles.quickaccesscomponentbtn} onPress={() => this.props.navigation.navigate('TabNavigator')}>
            <Image source={{ uri: 'https://img.icons8.com/ios/50/ffffff/pizza-five-eighths.png' }} style={styles.quickaccesscomponentimg} />
            <Text style={styles.quickaccesscomponenttext}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickaccesscomponentbtn} onPress={() => this.props.navigation.navigate('EverydayValueOffers')}>
            <Image source={{ uri: 'https://img.icons8.com/wired/64/ffffff/discount-ticket.png' }} style={styles.quickaccesscomponentimg} />
            <Text style={styles.quickaccesscomponenttext}>EDV</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickaccesscomponentbtn} onPress={this.cartbtn}>
            <Image source={{ uri: 'https://img.icons8.com/material-outlined/24/ffffff/fast-cart.png' }} style={styles.quickaccesscomponentimg} />
            <Text style={styles.quickaccesscomponenttext}>Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
let datas = [
  {
    value: 'WA-58, Rose Villa, Delhi',
  },
  {
    value: 'KC-3/8, Ganesh Nagar, Delhi',
  },
  {
    value: 'D-15, Sector-2 , Noida',
  }
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.03,
    flexDirection: 'row',
    backgroundColor: '#0a5c91',
    padding: normalize(20),
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios'?normalize(55):normalize(25),
  },
  content: {
    flex: 0.97,
    backgroundColor: '#f1f4ff',
    padding: normalize(8)
  },
  radiobtngrpstyle: {
    backgroundColor: '#ffffff',
    padding: normalize(10),
    marginHorizontal: '6%',
    marginTop: normalize(5)
  },
  hamburgericon: {
    width: 25,
    height: 20,
  },
  headerstyle: {
    marginLeft: normalize(20),
  },
  headertitle: {
    color: '#fff',
    fontWeight: 'bold'
  },
  headersubtitle: {
    color: '#fff',
    fontSize: 12.5,
    marginTop: normalize(5)
  },
  dropdownimg: {
    width: 15,
    height: 15,
    marginLeft: 5
  },
  titlestyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuheading: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: normalize(40),
  },
  menu1: {
    flexDirection: 'row',
    marginTop: normalize(10),
  },
  menu2: {
    flexDirection: 'row',
    marginTop: normalize(5)
  },
  menulist1: {
    backgroundColor: '#fff',
    flex: 0.5,
    marginLeft: normalize(5),
    padding: normalize(10),
  },
  menulist2: {
    backgroundColor: '#fff',
    flex: 0.33,
    marginHorizontal: normalize(2),
    padding: normalize(6)
  },
  menulist1img: {
    width: 180,
    height: 90,
    alignSelf: 'center'
  },
  menulist2img: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  },
  menulisttext: {
    marginTop: normalize(5),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  quickaccesscomponent: {
    position: 'absolute',
    bottom: normalize(15),
    backgroundColor: '#65ab0d',
    flexDirection: 'row',
    borderRadius: normalize(50),
    alignSelf: 'center',
    marginHorizontal: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: normalize(5),
    paddingBottom: normalize(5),
    paddingLeft: normalize(15),
    paddingRight: normalize(15),
  },
  quickaccesscomponentimg: {
    width: 30,
    height: 30,
  },
  quickaccesscomponenttext: {
    color: '#fff',
    marginTop: normalize(5),
    fontSize: 12.5,
  },
  quickaccesscomponentbtn: {
    flex: 0.33,
    marginHorizontal: normalize(5),
    alignItems: 'center'
  },
  offerimg: {
    width: 320,
    height: 150,
    marginRight: normalize(10),
    marginTop: normalize(10),
  },
  banner: {
    width: '100%',
    height: 140,
    marginTop: normalize(20)
  },
  dropdownstyle:{
    width:200,
  },
  scrollviewstyle:{
    marginBottom:normalize(80)
  }
});
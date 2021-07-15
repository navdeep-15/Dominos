import React from 'react';
import StackNavigator from './src/screens/StackNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { View, Image, StyleSheet } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    }
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false
    });
  }

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 2500);
  }

  render() {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Image
            source={require('./src/assets/logo.png')}
            style={styles.logo}
            resizeMode='contain'
          />
        </View>
      </View>)
    return (
      <Provider store={store}>
        <StackNavigator />
        {
          (this.state.isVisible === true) ? Splash_Screen : null
        }
      </Provider>

    )
  }
}

const styles = StyleSheet.create(
  {
    SplashScreen_RootView:
    {
      justifyContent: 'center',
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
    },

    SplashScreen_ChildView:
    {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0a5c91',
      flex: 1,
    },
    logo: {
      width: '100%',
      height: '100%'
    }
  });
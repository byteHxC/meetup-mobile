import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import { HomeScreen } from './src/screens'
import { cachedFonts } from './helpers';
import { AppLoading } from 'expo';
EStyleSheet.build(Colors);

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }
  componentDidMount(){
    this._loadAssetsAsync();
  }
  async _loadAssetsAsync (){
    const fontAssets = cachedFonts([
      {
        montserrat: require('./assets/fonts/Montserrat-Regular.ttf')
      },
      {
        montserratBold: require('./assets/fonts/Montserrat-Bold.ttf')
      },
      {
        montserratLight: require('./assets/fonts/Montserrat-Light.ttf')
      },
      {
        montserratMed: require('./assets/fonts/Montserrat-Medium.ttf')
      }
    ])

    await Promise.all(fontAssets);
    this.setState({fontLoaded: true})
  }
  render(){
    if(!this.state.fontLoaded){
      return <AppLoading />
    }
    return <HomeScreen/>;
  }
}


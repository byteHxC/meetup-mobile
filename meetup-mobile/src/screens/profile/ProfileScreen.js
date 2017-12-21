import { MaterialIcons } from '@expo/vector-icons';
import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Colors from '../../../constants/Colors';

class ProfileScreen extends Component {
  static navigationOptions = {
    headerStyle: {
        backgroundColor: Colors.$redColor
    },
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcons name="account-circle" size={25} color={tintColor}/>
    )
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Profile</Text>
      </View>
    );
  }
}

export default ProfileScreen;

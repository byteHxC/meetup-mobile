import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {fetchMeetups} from './constants/api'

export default class App extends React.Component {
  static defaultProps = {
    fetchMeetups
  }
  state = {
    loading: false,
    meetups: []
  }
  async componentDidMount(){
    this.setState({
      loading: true
    })
    const data = await this.props.fetchMeetups();
    this.setState({
      loading: false, meetups: data.meetups
    })
  }
  render() {
    if(this.state.loading){
      return (
        <View>
          <ActivityIndicator size="large" style={styles.container}/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text>MeetupME</Text>
        {this.state.meetups.map((meetup, index) => (
          <Text key={index}>{meetup.title}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

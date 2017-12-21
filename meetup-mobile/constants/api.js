import axios from 'axios';
axios.defaults.baseURL = 'http://192.168.1.71:3000/api';

const fakeGroupId = '5a3b3c9d412ba611add1eb10';

class MeetupApi {
  constructor(){
    this.groupId = fakeGroupId;
    this.path = `groups/${this.groupId}/meetups`;
  }
  async fetchGroupMeetups(){
    const {data} = await axios.get(this.path);
    return data.meetups;
  }
}

export {
  MeetupApi
}

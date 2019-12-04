import React from 'react';
import './App.css';
import axios from 'axios';
import User from './components/User'
import FollowerList from './components/FollowerList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/nathan-saygers')
    .then(response => {
      this.setState({user: response.data})
      console.log('this is state', this.state.user)
    })
    axios.get('https://api.github.com/users/nathan-saygers/followers')
    .then(response => {
      this.setState({followers: response.data})
      console.log('Follower State', this.state.followers)
    })
  }

  render () {
    return (
      <div>
        <User userData={this.state.user}/>
        <FollowerList followerData={this.state.followers}/>
      </div>
    );
  }
}

export default App;

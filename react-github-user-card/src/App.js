import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      userFollowers: [],
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/nathan-saygers')
    .then(response => {
      this.setState({user: response.data})
      console.log('this is state', this.state.user)
    })
  }
  

  render () {
    return (
      <div>
        Hello, World
      </div>
    );
  }
}

export default App;

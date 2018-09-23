// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import axios from 'axios';

// App Component
export default class App extends React.Component {

  state = {
    socketData: false,
    endpoint: 'http://localhost:3002',
    users: [],
    screens: []
  }

  componentDidMount() {
    const self = this;

    // Setup Sockets
    const { endpoint } = this.state;
    const socket = io(endpoint);
    socket.on('FromAPI', data => this.setState({ socketData: data }));

    // Grab Data From DB
    // axios.get(endpoint + '/profiles').then((profiles) => {
    //   console.log('got profiles from db: ', profiles.data);
    //   self.setState({profile: profiles.data});
    // }).catch(err => console.log(err));
  }

  componentDidUpdate() {
    console.log('component did update');
  }

  render() {
    return (
      <div>
        {'Hi it\'s is react bitches'}
      </div>
    )
  }

}
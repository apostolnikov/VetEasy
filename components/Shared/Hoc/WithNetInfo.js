import React, { Component } from 'react';
import { NetInfo } from 'react-native';
import axios from 'axios';

const WithNetInfo = (WrappedComponent) => {
  class EnhancedComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isConnected: false,
      };
    }

    componentDidMount() {
      NetInfo.getConnectionInfo().then(this.handleConnectivityChange);

      NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    }

    componentWillUnmount() {
      NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    }

    handleConnectivityChange = async () => {
      let hasInternet;
      try {
        const res = await axios.head('https://google.com');
        hasInternet = res.status === 200;
      } catch (e) {
        hasInternet = false;
      }

      this.setState({ isConnected: hasInternet });
    }

    render() {
      return this.state.isConnected !== null
        ? <WrappedComponent isNetworkConnected={this.state.isConnected} {...this.props} />
        : null;
    }
  }

  return EnhancedComponent;
};

export default WithNetInfo;

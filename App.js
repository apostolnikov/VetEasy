import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import styled from 'styled-components';
import Routes from './Routes';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
      require('./assets/images/mustelids.png'),
      require('./assets/images/cat.png'),
      require('./assets/images/dog.png'),
      require('./assets/images/cow.png'),
    ]),
    Font.loadAsync({
      ...Icon.Ionicons.font,
    }),
  ]);

  handleLoadingError = error => console.log(error);

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    return (
      <>
        {!this.state.isLoadingComplete && !this.props.skipLoadingScreen &&
          <AppLoading
            startAsync={this.loadResourcesAsync}
            onError={this.handleLoadingError}
            onFinish={this.handleFinishLoading}
          />
      }
        <MainAppWrapper>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Routes />
        </MainAppWrapper>
      </>
    );
  }
}

const MainAppWrapper = styled.View`
  flex: 1;
  background-color: #fff;
`;
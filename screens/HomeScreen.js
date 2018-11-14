import React from 'react';
import styled from 'styled-components';
import { hoistStatics } from 'recompose';
import WithNetInfo from '../components/Shared/Hoc/WithNetInfo';
import AnimalsList from '../components/AnimalsList';
import Layout from '../constants/Layout';
import KGMetricInput from '../components/KGMetricInput';
import MedicineTypeInput from '../components/MedicineTypeInput';
import { HeaderButton } from '../components/Shared/HeaderButton';
import { HomeContext } from '../context/HomeContext';
// import { noInternetConnectionPopup } from '../components/Shared/ShakbarPopup';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerRight: (
      navigation.getParam('showDoneButton') ?
        <HeaderButton text="Done" onPress={navigation.getParam('showResult')} />
        : null
    )
  });

  state = {
    showDoneButton: true
  }

  componentDidMount() {
    this.props.navigation.setParams({
      showResult: this.showResult,
      showDoneButton: this.state.showDoneButton
    });

    // !this.props.isNetworkConnected && noInternetConnectionPopup();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.showDoneButton && prevState.showDoneButton !== this.state.showDoneButton) {
      this.props.navigation.setParams({
        showResult: this.showResult,
        showDoneButton: this.state.showDoneButton
      });
    }
  }

  showResult = () => this.setState({ showDoneButton: !this.state.showDoneButton });

  render() {
    return (
      <HomeContext>
        <Wrapper>
          <Section window={Layout.window}>
            <Header>Choose patient type: </Header>
            <AnimalsList />
          </Section>
          <Section window={Layout.window}>
            <Header>Enter animal's weight: </Header>
            <KGMetricInput />
          </Section>
          <Section window={Layout.window}>
            <Header>Enter medicine type: </Header>
            <MedicineTypeInput />
          </Section>
        </Wrapper>
      </HomeContext>
    );
  }
}

export default hoistStatics(WithNetInfo)(HomeScreen);

const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 15px;
`;

const Section = styled.View`
  height: ${props => props.window.height / 3 - 20}
`;

const Header = styled.Text`
  fontSize: 17;
  color: rgba(96,100,109, 1);
  textAlign: center;
`;
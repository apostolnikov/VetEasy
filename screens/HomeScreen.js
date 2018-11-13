import React from 'react';
import styled from 'styled-components';
import { hoistStatics } from 'recompose';
import WithNetInfo from '../components/Shared/Hoc/WithNetInfo';
import AnimalsList from '../components/AnimalsList';
import Layout from '../constants/Layout';
import KGMetricInput from '../components/KGMetricInput';
import MedicineTypeInput from '../components/MedicineTypeInput';
import { HeaderButton } from '../components/Shared/HeaderButton';
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

  componentDidMount() {
    this.props.navigation.setParams({
      showResult: this.showResult,
      showDoneButton: this.props.searchResults.length > 0
    });

    // !this.props.isNetworkConnected && noInternetConnectionPopup();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.inputResults.length !== this.props.inputResults.length) {
      this.props.navigation.setParams({
        showDoneButton: this.props.inputResults.length > 0
      });
    }
  }

  showResult = () => {
    // hide all inputs and show mmols here
  }

  render() {
    return (
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
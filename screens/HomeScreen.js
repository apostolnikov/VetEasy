import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-native-elements';
import { hoistStatics } from 'recompose';
import WithNetInfo from '../components/Shared/Hoc/WithNetInfo';
import AnimalsList from '../components/AnimalsList';
import Layout from '../constants/Layout';
import KGMetricInput from '../components/KGMetricInput';
import MedicineTypeInput from '../components/MedicineTypeInput';
import { HeaderButton } from '../components/Shared/HeaderButton';
import { HomeContext } from '../context/HomeContext';
import Colors from '../constants/Colors';
import { handleErrorAlert } from '../utils/helpers';

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

    !this.props.isNetworkConnected && handleErrorAlert('No internet connection!');
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
          <StyledAnimalList window={Layout.window} />
          <EntrySection window={Layout.window}>
            <KGMetricInput />
            <MedicineTypeInput />
          </EntrySection>
          <Button
            icon={{ name: 'heartbeat', type: 'font-awesome', size: 32 }}
            buttonStyle={{ backgroundColor: Colors.tintColor, borderRadius: 10 }}
            textStyle={{ textAlign: 'center' }}
            title="Calculate"
            onPress={() => console.log('calc pressed')}
          />
        </Wrapper>
      </HomeContext>
    );
  }
}

export default hoistStatics(WithNetInfo)(HomeScreen);

const StyledAnimalList = styled(AnimalsList)`
  height: ${props => props.window.height / 4};
`;

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 15px;
`;

const EntrySection = styled.View`
  height: ${props => props.window.height / 4};
`;
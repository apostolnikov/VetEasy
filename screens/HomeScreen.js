import React from 'react';
import styled from 'styled-components';
import AnimalsList from '../components/AnimalsList';
import Layout from '../constants/Layout';
import KGMetricInput from '../components/KGMetricInput';
import MedicineTypeInput from '../components/MedicineTypeInput';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Main',
  };

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

const Wrapper = styled.View`
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
import React from 'react';
import styled from 'styled-components';
import AnimalsList from '../components/AnimalsList';
import Layout from '../constants/Layout';

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
      </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Section = styled.View`
  height: ${props => props.window.height / 3}
`;

const Header = styled.Text`
  fontSize: 17;
  color: rgba(96,100,109, 1);
  line-height: 24;
  textAlign: center;
`;
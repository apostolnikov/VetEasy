import React from 'react';
import styled from 'styled-components';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Main',
  };

  render() {
    return (
      <Wrapper>
        <Header>Get started by opening</Header>
      </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Header = styled.Text`
  fontSize: 17;
  color: rgba(96,100,109, 1);
  line-height: 24;
  textAlign: center;
`;
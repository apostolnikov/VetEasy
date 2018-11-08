import React from 'react';
import styled from 'styled-components';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollWrapper />
    );
  }
}
const ScrollWrapper = styled.ScrollView`
  flex: 1;
  padding-top: 15;
  background-color: #fff;
`;

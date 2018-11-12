import React from 'react';
import { FlatList, Text } from 'react-native';
import styled from 'styled-components';
import Layout from '../constants/Layout';
import { animalImageResolver } from '../utils/helpers';

class AnimalsList extends React.Component {
  state = {
    animalsList: ['cat', 'dog', 'cow', 'mustelids']
  }

  renderVideo = ({ item }) =>
    <AnimalWrapper onPress={() => this.selectAnimal(item)} window={Layout.window}>
      <Text>{item}</Text>
      <AnimalIcon source={animalImageResolver(item)} />
    </AnimalWrapper>;

  getItemKey = item => this.state.animalsList.indexOf(item).toString();

  render() {
    return (
      <FlatList
        data={this.state.animalsList}
        keyExtractor={this.getItemKey}
        renderItem={this.renderVideo}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}

export default AnimalsList;

const AnimalWrapper = styled.TouchableOpacity`
  width: ${props => props.window.width / 2};
  height: 100%;
  padding: 5px;
`;

const AnimalIcon = styled.Image`
  width: 150px;
  height: 100px;
`;
import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';
import Layout from '../constants/Layout';
import { animalImageResolver } from '../utils/helpers';
import { Context } from '../context/HomeContext';

class AnimalsList extends React.Component {
  state = {
    animalsList: ['cat', 'dog', 'cow', 'mustelids']
  }

  renderVideo = ({ item }) =>
    <Context.Consumer>
      {({ updateContext }) => (
        <AnimalWrapper onPress={() => updateContext({ selectedAnimal: item })} window={Layout.window}>
          <AnimalIcon source={animalImageResolver(item)} />
        </AnimalWrapper>
      )}
    </Context.Consumer>;

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
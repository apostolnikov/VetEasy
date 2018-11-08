import React from 'react';
import { FlatList, Text } from 'react-native';
import styled from 'styled-components';

class AnimalsList extends React.Component {
  state = {
    animalsList: ['cat', 'dog', 'cow']
  }

  renderVideo = ({ item }) => (
    <AnimalWrapper onPress={() => this.selectAnimal(item)}>
      <Text>{item}</Text>
    </AnimalWrapper>
  );

  getItemKey = item => this.state.animalsList.indexOf(item).toString();

  render() {
    return (
      <FlatList
        data={this.state.animalsList}
        keyExtractor={this.getItemKey}
        renderItem={this.renderVideo}
        horizontal={true}
      />
    );
  }
}

export default AnimalsList;

const AnimalWrapper = styled.TouchableOpacity`
  width: 150px;
  margin-right: 30px;
  margin-bottom: 20px;
`;
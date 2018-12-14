import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Context } from '../context/HomeContext';

export default class KGMetricInput extends React.Component {
  state = {
    kg: 0,
    error: ''
  }

  handleTextChange = (kg) => this.setState({ kg });

  render() {
    const { kg, error } = this.state;
    return (
      <InputContainer>
        <FormLabel>Weight</FormLabel>
        <Context.Consumer>
          {({ updateContext }) => (
            <FormInput
              placeholderTextColor="#8E8E93"
              autoCapitalize="none"
              clearButtonMode="always"
              returnKeyType="done"
              onSubmitEditing={() => updateContext({ kg })}
              onChangeText={this.handleTextChange}
            />
          )}
        </Context.Consumer>
        {error ? <FormValidationMessage><Text>{error}</Text></FormValidationMessage> : null}
      </InputContainer>
    );
  }
}

const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 100%;
  height: 50%;
  background-color: #f8f8f8;
`;
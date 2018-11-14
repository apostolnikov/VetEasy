import React from 'react';
import styled from 'styled-components';
import { Context } from '../context/HomeContext';

export default class KGMetricInput extends React.Component {
  state = {
    kg: 0
  }

  handleTextChange = (kg) => this.setState({ kg });

  render() {
    const { kg } = this.state;
    return (
      <InputContainer>
        <Context.Consumer>
          {({ updateContext }) => (
            <MetricInput
              placeholderTextColor="#8E8E93"
              defaultValue="0:00kg"
              autoCapitalize="none"
              clearButtonMode="always"
              returnKeyType="done"
              onSubmitEditing={() => updateContext({ kg })}
              onChangeText={this.handleTextChange}
            />
          )}
        </Context.Consumer>
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

const MetricInput = styled.TextInput`
  border-radius: 10px;
  background-color: rgba(142, 142, 147, 0.12);
  width: 100%;
  height: 100%;
  padding: 7px 5px 7px 32px;
  margin-bottom: 5px;
`;
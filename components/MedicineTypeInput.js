import React from 'react';
import styled from 'styled-components';
import { Context } from '../context/HomeContext';

export default class MedicineTypeInput extends React.Component {
  state = {
    medicineType: ''
  }

  handleTextChange = (text) => this.setState({ medicineType: text });

  render() {
    const { medicineType } = this.state;
    return (
      <InputContainer>
        <Context.Consumer>
          {({ updateContext }) => (
            <MedicineInput
              placeholderTextColor="#8E8E93"
              defaultValue="Nurofen"
              autoCapitalize="none"
              clearButtonMode="always"
              returnKeyType="done"
              onSubmitEditing={() => updateContext({ medicineType })}
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

const MedicineInput = styled.TextInput`
  border-radius: 10px;
  background-color: rgba(142, 142, 147, 0.12);
  width: 100%;
  height: 100%;
  padding: 7px 5px 7px 32px;
  margin-bottom: 5px;
`;
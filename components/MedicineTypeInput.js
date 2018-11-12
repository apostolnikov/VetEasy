import React from 'react';
import styled from 'styled-components';

export default class MedicineTypeInput extends React.Component {
  state = { }

  render() {
    return (
      <InputContainer>
        <MedicineInput
          placeholder="Search news"
          placeholderTextColor="#8E8E93"
          autoCapitalize="none"
          clearButtonMode="always"
          returnKeyType="search"
          onSubmitEditing={this.handleSubmit}
          onChangeText={this.handleTextChange}
        />
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
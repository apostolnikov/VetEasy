import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const HeaderButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <HeaderButtonText>{text}</HeaderButtonText>
  </TouchableOpacity>
);


export const HeaderButtonText = styled.Text`
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: #007AFF;
  padding-right: 10px;
  margin: 0;
`;
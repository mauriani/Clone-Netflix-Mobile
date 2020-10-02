import styled from 'styled-components/native';

import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #06050b;
`;

export const Footer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

export const TextDireitos = styled.Text`
  color: #fff;
  font-size: 13px;
  margin-top: 8px;
`;

import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled.View`
  flex: 1;
  background-color: #06050b;
  padding-top: ${30 + getStatusBarHeight(true)}px;
`;

export const Search = styled.View`
  background-color: #1e222b;
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
`;

export const Titulo = styled.Text`
  font-size: 17px;
  color: #fff;
  font-weight: bold;
  padding: 0 16px;
  margin-top: 10px;
`;

export const SubTitulo = styled.Text`
  font-size: 15px;
  color: #c6c6c6;
  padding: 0 16px;
`;

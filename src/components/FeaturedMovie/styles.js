import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const ContainerHeader = styled.SafeAreaView`
  height: 480px;
  margin-bottom: 10px;
`;

export const Informacoes = styled(LinearGradient).attrs({
  start: {x: 1.0, y: 0.5},
  colors: ['transparent', '#000'],
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${getStatusBarHeight()}px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100px;
`;

export const Logo = styled.Image`
  height: 40px;
  width: 40px;
`;

export const Titulos = styled.Text`
  font-size: 16px;
  color: #ddd;
`;

export const ImageBackground = styled.ImageBackground`
  height: 100%;
  width: 100%;
`;

export const FeaturedInfo = styled.View`
  flex: 0.1;
  left: 0px;
  right: 0px;
  bottom: -290px;
  align-items: center;
`;

export const BlocoButton = styled.View`
  flex: 0.1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  bottom: -290px;
  padding: 10px;
`;

export const BtnLista = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BtnText = styled.Text`
  color: #fff;
  font-size: 10px;
`;

export const BtnAssistir = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  width: 150px;
  border-radius: 10px;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

export const TextAssistir = styled.Text`
  color: #111;
  font-size: 15px;
  font-weight: bold;
`;

export const Titulo = styled.Text`
  font-size: 18px;
  color: #fff;
  margin-top: 15px;
  text-transform: uppercase;
`;

export const SubTitulo = styled.Text`
  font-size: 13px;
  color: #fff;
  margin-top: 15px;
`;

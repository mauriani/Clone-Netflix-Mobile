import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #06050b;
`;
export const ContainerHeader = styled.SafeAreaView`
  flex: 1;
`;
export const Logo = styled.Image`
  height: 50px;
  width: 50px;
  margin-top: 5px;
`;

export const Informacoes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const Titulos = styled.Text`
  flex: 1;
  font-size: 16px;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const BlocoTitulo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BlocoLogo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Titulo = styled.Text`
  color: #fff;
  font-size: 10px;
  font-weight: bold;
`;
export const SubTitulo = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;

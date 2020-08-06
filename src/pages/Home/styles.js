import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #06050b;
`;
export const ContainerHeader = styled.SafeAreaView`
  background-color: #fff;
  height: 450px;
`;
export const Logo = styled.Image`
  height: 50px;
  width: 50px;
  margin-top: 5px;
`;

export const Informacoes = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-horizontal: 35px;
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
  margin-top: 190px;
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

export const SubTituloChamada = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: bold;
`;

export const BlocoButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
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
  width: 120px;
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

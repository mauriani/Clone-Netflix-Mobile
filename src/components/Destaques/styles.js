import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 5px;
`;

export const ContainerScroll = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  },
}))``;

export const Titulo = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  padding: 0 16px;
`;

export const ContainerImagens = styled.TouchableOpacity`
  margin-horizontal: 4px;
  align-items: center;
  justify-content: center;
  background-color: #111;
  height: 130px;
  width: 130px;
  border-radius: 80px;
`;

export const Img = styled.Image`
  height: 130px;
  width: 130px;
  border-radius: 80px;
`;

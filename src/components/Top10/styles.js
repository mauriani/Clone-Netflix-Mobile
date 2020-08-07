import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-bottom: 20px;
`;
export const Titulo = styled.Text`
  font-size: 17px;
  color: #fff;
  font-weight: bold;
  padding: 0 16px;
  margin-bottom: 4px;
`;

export const ContainerScroll = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  },
}))``;

export const Image = styled.Image`
  width: 160px;
  height: 160px;
  margin-horizontal: 3px;
`;

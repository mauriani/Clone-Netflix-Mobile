import styled from 'styled-components/native';

export const ContainerScroll = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  },
}))`
  margin-top: 10px;
`;

export const Titulo = styled.Text`
  font-size: 16px;
  color: #fff;
  padding: 0 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Image = styled.Image`
  width: 150px;
  height: 200px;
  margin-left: 8px;
`;

import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  ContainerHeader,
  ImageBackground,
  BlocoButton,
  BtnLista,
  BtnText,
  BtnAssistir,
  TextAssistir,
  FeaturedInfo,
  Titulo,
  SubTitulo,
} from './styles';

export default ({item}) => {
  // gêneros
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <ContainerHeader>
      <ImageBackground
        style={{borderRadius: 3, opacity: 1.2}}
        source={{
          uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
        }}
        reziMode="cover">
        <LinearGradient
          colors={['transparent', '#000']}
          start={{x: 0.1, y: 0.1}}
          style={{height: '100%', opacity: 0.91}}>
          <BlocoButton>
            <BtnLista>
              <Icon
                name="plus"
                size={25}
                color="#ffffff"
                style={{marginBottom: 5}}
              />
              <BtnText>Minha Lista</BtnText>
            </BtnLista>

            <BtnAssistir>
              <Ionicons name="play" size={25} color="#111" />
              <TextAssistir>Assistir</TextAssistir>
            </BtnAssistir>

            <BtnLista>
              <Icon
                name="exclamationcircleo"
                size={20}
                color="#ffffff"
                style={{marginBottom: 5}}
              />
              <BtnText>Saiba Mais</BtnText>
            </BtnLista>
          </BlocoButton>

          <FeaturedInfo>
            <Titulo>{item.original_name}</Titulo>
            <SubTitulo> {genres.join(', ')}</SubTitulo>
          </FeaturedInfo>
        </LinearGradient>
      </ImageBackground>
    </ContainerHeader>
  );
};

import React, {useRef, useEffect} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';
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
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 2,
      duration: 30000,
    }).start();
  }, [fadeAnim]);

  // gêneros
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <ContainerHeader>
      <Animated.View>
        <ImageBackground
          style={{borderRadius: 3, opacity: 1.2}}
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
          }}
          reziMode="cover">
          <LinearGradient
            colors={['#09203f', '#537895']}
            start={[0.1, 0.1]}
            style={styles.linearGradient}>
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
      </Animated.View>
    </ContainerHeader>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

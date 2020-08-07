import React from 'react';
import {ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import chamada from '../../images/chamada.jpg';
import logoNetflix from '../../images/netflix_icon.png';

import Destaques from '../../components/Destaques';
import EmAlta from '../../components/EmAlta';

import {
  Container,
  ContainerHeader,
  Informacoes,
  Button,
  Titulos,
  Logo,
  BlocoTitulo,
  BlocoLogo,
  Titulo,
  SubTitulo,
  SubTituloChamada,
  BlocoButton,
  BtnLista,
  BtnAssistir,
  TextAssistir,
  BtnText,
} from './styles';

function Home() {
  return (
    <Container>
      <ContainerHeader>
        <ImageBackground
          source={chamada}
          style={{width: '100%', height: '100%'}}>
          <Informacoes>
            <Logo source={logoNetflix} reziMode="cover" />

            <Button>
              <Titulos>Séries</Titulos>
            </Button>

            <Button>
              <Titulos>Filmes</Titulos>
            </Button>

            <Button>
              <Titulos>Minha lista</Titulos>
            </Button>
          </Informacoes>
          <BlocoTitulo>
            <BlocoLogo>
              <Logo
                source={logoNetflix}
                reziMode="cover"
                style={{height: 28, width: 28}}
              />
              <Titulo>SÉRIE</Titulo>
            </BlocoLogo>

            <SubTitulo>CURON</SubTitulo>
            <SubTituloChamada>
              Assista á primeira temporada agora !
            </SubTituloChamada>
          </BlocoTitulo>

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
        </ImageBackground>
      </ContainerHeader>
      <Destaques />
      <EmAlta />
    </Container>
  );
}
export default Home;

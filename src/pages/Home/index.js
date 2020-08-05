import React from 'react';
import {ImageBackground} from 'react-native';
import chamada from '../../images/chamada.jpg';
import logoNetflix from '../../images/netflix_icon.png';

import {
  Container,
  ContainerHeader,
  Informacoes,
  Titulos,
  Logo,
  BlocoTitulo,
  BlocoLogo,
  Titulo,
  SubTitulo,
} from './styles';

function Home() {
  return (
    <Container>
      <ContainerHeader>
        <ImageBackground
          source={chamada}
          style={{width: '100%', height: '70%'}}>
          <Informacoes>
            <Logo source={logoNetflix} reziMode="cover" />
            <Titulos>Séries</Titulos>
            <Titulos>Filmes</Titulos>
            <Titulos>Minha lista</Titulos>
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
          </BlocoTitulo>
        </ImageBackground>
      </ContainerHeader>
    </Container>
  );
}
export default Home;

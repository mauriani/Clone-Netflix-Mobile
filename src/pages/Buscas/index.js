import React from 'react';
import {TextInput} from 'react-native';

import {Container, Titulo, SubTitulo} from './styles';

const Buscas = () => {
  return (
    <Container>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          backgroundColor: '#c6c6c6',
          marginTop: 30,
        }}
      />
      <Titulo>Encontre sua próxima história.</Titulo>
      <SubTitulo>
        Busque séries para assistir no caminho para o trabalho, filmes para
        descontrair ou seus gêneros favoritos.
      </SubTitulo>
    </Container>
  );
};

export default Buscas;

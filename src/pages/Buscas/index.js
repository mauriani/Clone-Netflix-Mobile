import React, {Component} from 'react';
import {TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Search, Titulo, SubTitulo} from './styles';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <Container>
        <Search>
          <Ionicons
            name="search"
            size={25}
            color="#adaeb2"
            style={{marginHorizontal: 5}}
          />
          <TextInput
            style={{
              height: 50,
              color: '#adaeb2',
            }}
            onChangeText={(text) => this.setState({text})}
            placeholder="Busque por série, filme, gênero, etc."
            placeholderTextColor="#adaeb2"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            value={this.state.text}
          />
          <TouchableOpacity>
            <Icon
              name="microphone"
              size={25}
              color="#adaeb2"
              style={{marginHorizontal: 80}}
            />
          </TouchableOpacity>
        </Search>

        <Titulo>Encontre sua próxima história.</Titulo>
        <SubTitulo>
          Busque séries para assistir no caminho para o trabalho, filmes para
          descontrair ou seus gêneros favoritos.
        </SubTitulo>
      </Container>
    );
  }
}

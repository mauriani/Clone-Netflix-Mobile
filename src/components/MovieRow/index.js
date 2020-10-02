import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {ContainerScroll, Titulo, Image} from './styles';

export default ({title, items}) => {
  return (
    <View style={{marginTop: 20}}>
      <Titulo style={{fontFamily: 'Roboto-Bold'}}>{title}</Titulo>
      <ContainerScroll>
        {items.results.length > 0 &&
          items.results.map((item, key) => (
            <TouchableOpacity key={key} horizontal={true}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
                }}
                reziMode="contain"
              />
            </TouchableOpacity>
          ))}
      </ContainerScroll>
    </View>
  );
};

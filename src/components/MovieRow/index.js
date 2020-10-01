import React, {useState} from 'react';
import {View} from 'react-native';

import {ContainerScroll, Titulo, Image} from './styles';

export default ({title, items}) => {
  return (
    <View>
      <Titulo>{title}</Titulo>
      <ContainerScroll>
        {items.results.length > 0 &&
          items.results.map((item, key) => (
            <View key={key} horizontal={true}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
                }}
                reziMode="contain"
              />
            </View>
          ))}
      </ContainerScroll>
    </View>
  );
};

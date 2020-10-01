import React from 'react';
import {View} from 'react-native';

import {
  ContainerHeader,
  ImageBackground,
  FeaturedInfoHorizontal,
  FeaturedInfo,
  Titulo,
  SubTitulo,
} from './styles';

export default ({item}) => {
  // ANO
  let firstDate = new Date(item.first_air_date);

  // gêneros
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + '...';
  }
  return (
    <ContainerHeader>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
        }}
        reziMode="cover">
        <FeaturedInfoHorizontal>
          <FeaturedInfo>
            <Titulo>{item.original_name}</Titulo>
            <SubTitulo> {genres.join(', ')}</SubTitulo>
          </FeaturedInfo>
        </FeaturedInfoHorizontal>
      </ImageBackground>
    </ContainerHeader>
  );
};

import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import MovieRow from '../../components/MovieRow';
import FeaturedMovie from '../../components/FeaturedMovie';
import api from '../services/api';

import {Container} from './styles';

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista ttoda
      let list = await api.getHomeList();
      setMovieList(list);

      //pegar o filme em destaque
      // pegar apenas o originails da netflix
      let originals = list.filter((i) => i.slug === 'originals');
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];

      // informações adicionais
      let chosenInfo = await api.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, []);

  return (
    <Container>
      {featuredData && <FeaturedMovie item={featuredData} />}
      <View>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </View>
    </Container>
  );
};

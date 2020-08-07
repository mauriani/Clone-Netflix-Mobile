import React from 'react';
// import {View} from 'react-native';

import {Container, Titulo, ContainerScroll, Image} from './styles';

import img1 from '../../images/top1.jpg';
import img2 from '../../images/top2.jpg';
import img3 from '../../images/top3.jpg';
import img4 from '../../images/top4.jpg';
import img5 from '../../images/top5.jpg';
import img6 from '../../images/top6.jpg';
import img7 from '../../images/top7.jpg';
import img8 from '../../images/top8.jpg';
import img9 from '../../images/top9.jpg';
import img10 from '../../images/top10.jpg';

const topBasil = [
  {
    key: String(Math.random()),
    img: img1,
  },
  {
    key: String(Math.random()),
    img: img2,
  },
  {
    key: String(Math.random()),
    img: img3,
  },

  {
    key: String(Math.random()),
    img: img4,
  },

  {
    key: String(Math.random()),
    img: img5,
  },

  {
    key: String(Math.random()),
    img: img6,
  },
  {
    key: String(Math.random()),
    img: img7,
  },
  {
    key: String(Math.random()),
    img: img8,
  },
  {
    key: String(Math.random()),
    img: img9,
  },
  {
    key: String(Math.random()),
    img: img10,
  },
];

const Top10 = () => {
  return (
    <Container>
      <Titulo>Top 10 de hoje no Brasil</Titulo>
      <ContainerScroll>
        {topBasil.map((item) => (
          <Image source={item.img} rezideMode="contain" />
        ))}
      </ContainerScroll>
    </Container>
  );
};

export default Top10;

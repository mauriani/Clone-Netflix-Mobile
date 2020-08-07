import React from 'react';

import img1 from '../../images/emalta1.jpg';
import img2 from '../../images/emalta2.jpg';
import img3 from '../../images/emalta3.jpg';
import img4 from '../../images/emalta4.jpg';
import img5 from '../../images/emalta5.jpg';
import img6 from '../../images/emalta6.jpg';
import img7 from '../../images/emalta7.jpg';
import img8 from '../../images/emalta8.jpg';
import img9 from '../../images/emalta9.jpg';
import img10 from '../../images/emalta10.jpg';

import {Container, Titulo, ContainerScroll, Image} from './styles';

const arrayAlta = [
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

const EmAlta = () => {
  return (
    <Container>
      <Titulo>Em Alta</Titulo>
      <ContainerScroll>
        {arrayAlta.map((item) => (
          <Image source={item.img} reziMode="contain" />
        ))}
      </ContainerScroll>
    </Container>
  );
};

export default EmAlta;

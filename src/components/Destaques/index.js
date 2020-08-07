import React from 'react';
// import {View} from 'react-native';

import {
  Container,
  ContainerScroll,
  Img,
  ContainerImagens,
  Titulo,
} from './styles';

import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';
import img6 from '../../images/img6.jpg';
import img7 from '../../images/img7.jpg';

const destaques = [
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
];

const Destaques = () => {
  return (
    <Container>
      <Titulo>Prévias</Titulo>
      <ContainerScroll>
        {destaques.map((item) => (
          <ContainerImagens>
            <Img source={item.img} reziMode="contain" />
          </ContainerImagens>
        ))}
      </ContainerScroll>
    </Container>
  );
};

export default Destaques;

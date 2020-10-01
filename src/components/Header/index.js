import React from 'react';
import {View} from 'react-native';

import {Container, Image} from './styles';

export default () => {
  return (
    <Container>
      <Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/600px-Netflix-new-icon.png',
        }}
        reziMode="contain"
      />

      <Image
        source={{
          uri:
            'https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png',
        }}
        reziMode="contain"
      />
    </Container>
  );
};

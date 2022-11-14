import {Teste} from '@/components/Teste';
import React from 'react';

import * as S from './styles';

//import {} from './interfaces';

export function Home() {
  return (
    <S.Container>
      <S.Txt>Home</S.Txt>
      <Teste />
    </S.Container>
  );
}

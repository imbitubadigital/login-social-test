import React from 'react';
import ArrowBack from '@/assets/icons/arrow-back.svg';
import * as S from './styles';
import {Close} from '../Icons/Close';

//import {} from './interfaces';

export function Teste() {
  return (
    <S.Container>
      <S.Txt>Teste</S.Txt>
      <ArrowBack />
      <Close />
    </S.Container>
  );
}

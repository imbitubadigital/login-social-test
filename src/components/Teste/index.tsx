import React from 'react';
import ArrowBack from '@/assets/icons/arrow-back.svg';
import * as S from './styles';
import {Close} from '../Icons/Close';
import {Button} from 'react-native';
import {useAuth} from '@/contexts/auth';

//import {} from './interfaces';

export function Teste() {
  const {signInWithGoogle, signInWithFacebook} = useAuth();
  return (
    <S.Container>
      <S.Txt>Teste</S.Txt>
      <ArrowBack />
      <Close />
      <S.Divider />
      <Button title="Google" onPress={signInWithGoogle} />
    </S.Container>
  );
}

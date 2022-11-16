import React from 'react';
import ArrowBack from '@/assets/icons/arrow-back.svg';
import * as S from './styles';
import {Close} from '../Icons/Close';
import {Button, Platform} from 'react-native';
import {useAuth} from '@/contexts/auth';

//import {} from './interfaces';

export function Teste() {
  const {signInWithGoogle, signInWithFacebook, signInWithApple} = useAuth();
  return (
    <S.Container>
      <S.Txt>Teste</S.Txt>
      <ArrowBack />
      <Close />
      <S.Divider />
      <Button title="Google" onPress={signInWithGoogle} />
      <S.Divider />
      <Button title="facebook" onPress={signInWithFacebook} />
      {Platform.OS === 'ios' && (
        <>
          <S.Divider />
          <Button title="Apple" onPress={signInWithApple} />
        </>
      )}
    </S.Container>
  );
}

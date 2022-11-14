import {ChildrenData} from '@/@types/common';
import React from 'react';
import {AuthProvider} from './auth';

export function AppProvider({children}: ChildrenData) {
  return <AuthProvider>{children}</AuthProvider>;
}

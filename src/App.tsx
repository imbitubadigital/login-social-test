import {StatusBar} from 'expo-status-bar';
import React from 'react';

import {Home} from './modules/app/screens/Home';

export default function App() {
  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  );
}

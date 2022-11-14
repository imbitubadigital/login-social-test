import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {AppProvider} from './contexts';

import {Home} from './modules/app/screens/Home';

export default function App() {
  return (
    <>
      <AppProvider>
        <Home />
        <StatusBar style="auto" />
      </AppProvider>
    </>
  );
}

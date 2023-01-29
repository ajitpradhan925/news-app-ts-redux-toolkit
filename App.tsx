import React, { useEffect } from 'react'
import RootNavigation from './src/navigations'
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from "react-redux";
import store from './src/store';

function App() {

  useEffect(() => {
    EStyleSheet.build();
  }, [])

  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  )
}

export default App
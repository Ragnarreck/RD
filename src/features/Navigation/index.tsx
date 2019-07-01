import React from 'react';
import { Provider } from 'react-redux';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { store } from '../../utils/configureStore';

export const Navigation = () => (
  <Provider store={store}>
    <Router>
      <Stack key="root">
        <Scene
          hideNavBar
          key="authorization"
        />
        <Scene key="tabs">
          <Scene key="news" />
          <Scene key="profile" />
          <Scene key="store" />
        </Scene>
      </Stack>
    </Router>
  </Provider>
);

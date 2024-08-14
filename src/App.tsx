import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './utils/store.tsx';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers/Routers.tsx';
import WebProvider from './utils/WebProvider.tsx';
import 'swiper/css';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <WebProvider>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </WebProvider>
    </Provider>
  );
};

export default App;

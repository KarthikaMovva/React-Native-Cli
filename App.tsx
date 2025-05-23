
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/Redux/CounterStore';
import Counter from './src/Components/Counter';

const App = () => (

  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;

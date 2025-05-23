

import { legacy_createStore as createStore } from 'redux';
import counterReducer from './CounterReducer'; 

console.log('Reducer:', counterReducer); 
const store = createStore(counterReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;

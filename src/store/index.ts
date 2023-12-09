import { createStore } from 'redux';
import rootReducer from './language/reducers';

const store = createStore(rootReducer);

export default store;
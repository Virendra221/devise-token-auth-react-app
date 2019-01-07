
import { createStore } from 'redux';
import reducer from '../src/reducer/index';

export default function configureStore(){
 return createStore(reducer);
};














// import { createStore, applyMiddleware } from 'redux';
// import postReducer from '../src/reducer/post';
// import thunk from 'redux-thunk';

// export default function configureStore(){
//  return createStore(postReducer, {}, applyMiddleware(thunk));
// };








// import { createStore, applyMiddleware } from 'redux'
// import postReducer from './reducer/post'

// const store = createStore(postReducer);

// export default store;
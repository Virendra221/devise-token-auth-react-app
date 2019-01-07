import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import configureStore from '../store/configureStore';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import history from './routes/history';
import { ConnectedRouter, routerMiddleware} from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux'

 //  const store = configureStore();
 // // store.dispatch(addPost({ title: 'Test1', description: 'Water Bill' }));
 // console.log(store.getState());

const historyMiddleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(historyMiddleware, thunk)
  )
)

window.addEventListener("beforeunload", (ev) => 
{
  ev.preventDefault();
  if(location == "http://localhost:8080/registraction")
    localStorage.removeItem('authentication');
});

class App extends React.Component{
   render(){
    return(
        <Provider store={store} >
          <AppRouter />
        </Provider>
      )
  }
}



ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import Header from './../components/Header';
import NotFound from './../components/NotFound';
import LoginUser from './../components/LoginUser';
import RegisterUser from './../components/RegisterUser';
import DashBoard from './../components/DashBoard';
import LogOut from '../components/SignUp/logOut';
import Auth from './Auth';
import configureStore from '../../store/configureStore';
import {currentUser} from '../actions/user'
import axios from 'axios';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';

const authentication = () =>{
  let auth = JSON.parse(localStorage.getItem('authentication'))!=null ? true : false
  return auth
}

 const AppRouter = (props) => {
  return(
     <BrowserRouter>
        <div>
           <hr/>
              <Switch>

              <Route exact path="/"  render={(props) => authentication()? (<Redirect to="/DashBoard"/>) : (<LoginUser />)} />

              <Route exact path="/login"  render={(props) => authentication()? (<Redirect to="/DashBoard"/>) : (<LoginUser />)} />

              <Route exact path="/registraction"  render={(props) => authentication()? (<Redirect to="/DashBoard"/>) : (<RegisterUser />)} />

              <Route exact path="/dashBoard"  render={(props) => !authentication()? (<Redirect to="/login"/>) : (<DashBoard />)} />

              <Route exact path="/logOut"  render={(props) => !authentication()? (<Redirect to="/login"/>) : (<LogOut auth = {authentication()} />)} />


                 {/*<Route path="/" exact component={LoginUser} />*/}
                 {/*<Route path="/login" component={LoginUser} />*/}
                 {/*<Route path="/registraction" component={RegisterUser} />*/}
                 {/*<Route path="/dashBoard" component={DashBoard} />*/}
                 <Route path="/logOut" component={LogOut} />
                 <Route component={NotFound}/>
             </Switch>
        </div>
     </BrowserRouter>
    );
 }


export default AppRouter;






    {/*
        <BrowserRouter>
            <div>
               <hr/>
                  <Switch>
                     <Route path="/" exact component={LoginUser} />
                     <Route path="/login" component={LoginUser} />
                     <Route path="/registraction" component={RegisterUser} />
                     <Route path="/dashBoard" component={DashBoard} onEnter={requireAuth} />
                     <Route path="/logOut" component={LogOut} />
    
                     <Route component={NotFound}/>
                 </Switch>
            </div>
         </BrowserRouter>
     */}
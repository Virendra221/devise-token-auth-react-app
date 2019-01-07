import React from 'react';
import { NavLink } from 'react-router-dom'


const Header = (props) =>{
       return(
           <div>
            <ul>
              <li>
                <NavLink to="/login" > Login here </NavLink>
              </li>
              <li>
                <NavLink to="/registraction" > Registraction here </NavLink>
              </li>
              <li>
                <NavLink to="/" activeClassName="is-active" exact={true} > Home </NavLink>
              </li>
              <li>
                <NavLink to="/logout" > LogOut </NavLink>
              </li>
            </ul>
            
          </div>
          );
}

export default Header;


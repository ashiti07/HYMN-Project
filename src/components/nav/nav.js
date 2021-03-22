import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './nav.module.css';

const Nav = () => {
  return (
    <div>
      <div className={classes.container}>
        <nav>
          <ul>
            <li className={classes.list}>
              <NavLink activeClassName={classes.navLink} to="/">
                Home
              </NavLink>
            </li>
            <li className={classes.list}>
              <NavLink className={classes.navLink} to="/Browse">
                Browse
              </NavLink>
            </li>
            <li className={classes.list}>
              <NavLink className={classes.navLink} to="/Generation">
                Generation
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;

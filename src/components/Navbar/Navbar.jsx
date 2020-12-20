import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
    <nav className={s.nav}>
          <div className={s.item}>
                <NavLink to="/mainpage" activeClassName={s.activeLink}>Main Page</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/registration" activeClassName={s.activeLink}>Registration</NavLink>
          </div>
          <div className={s.item}>
             <NavLink to="/loginpage" activeClassName={s.activeLink}>Log In</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/offers" activeClassName={s.activeLink}>Tour offers</NavLink>
          </div>

    </nav>
    );
}

export default Navbar;
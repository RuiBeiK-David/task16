import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import logo from '../assets/logo.svg';
import calculation from '../assets/calculation.svg';
import measering from '../assets/measering.svg';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="OKHA XAYC" />
        </Link>
        
        <div className={styles.menuLinks}>
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About us</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contacts">Contacts</Link>
        </div>

        <div className={styles.actions}>
          <Link to="/request" className={styles.makeRequest}>
            <img src={measering} alt="" />
            Make request
          </Link>
          <Link to="/calculation" className={styles.calculation}>
            <img src={calculation} alt="" />
            Calculation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav; 
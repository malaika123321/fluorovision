import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FiMenu, FiX, FiLogIn, FiUserPlus } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: language === 'EN' ? 'Home' : 'ہوم' },
    { path: '/about', label: language === 'EN' ? 'About' : 'ہمارے بارے میں' },
    { path: '/tips', label: language === 'EN' ? 'Tips' : 'مشورے' },
    { path: '/quiz', label: language === 'EN' ? 'Screening' : 'اسکریننگ' },
    { path: '/dashboard', label: language === 'EN' ? 'Dashboard' : 'ڈیش بورڈ' },
  ];

  return (
    <>
      <nav style={styles.nav}>
        <Link to='/' style={styles.logoLink}>
          <div style={styles.logoWrapper}>
            <img src='/fluorovision-logo.png' alt='FluoroVision' style={styles.logoImg} />
          </div>
        </Link>

        <div style={styles.navLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                ...styles.navLink,
                color: location.pathname === link.path ? '#FF6B00' : '#333333',
                borderBottom: location.pathname === link.path ? '2px solid #FF6B00' : '2px solid transparent',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#FF6B00'}
              onMouseLeave={e => e.currentTarget.style.color = location.pathname === link.path ? '#FF6B00' : '#333333'}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div style={styles.rightSide}>
          <button
            onClick={toggleLanguage}
            style={styles.langBtn}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#FF6B00'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#FF6B00'; }}
          >
            {language === 'EN' ? 'اردو' : 'EN'}
          </button>

          <Link
            to='/login'
            style={styles.loginBtn}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#FF6B00'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
          >
            <FiLogIn size={14} /> {language === 'EN' ? 'Login' : 'لاگ ان'}
          </Link>

          <Link
            to='/register'
            style={styles.registerBtn}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e55f00'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FF6B00'}
          >
            <FiUserPlus size={14} /> {language === 'EN' ? 'Register' : 'رجسٹر'}
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} style={styles.menuBtn}>
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div style={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} style={styles.mobileLink} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link to='/login' style={styles.mobileLink} onClick={() => setIsOpen(false)}>
            {language === 'EN' ? 'Login' : 'لاگ ان'}
          </Link>
          <Link to='/register' style={styles.mobileLink} onClick={() => setIsOpen(false)}>
            {language === 'EN' ? 'Register' : 'رجسٹر'}
          </Link>
        </div>
      )}
    </>
  );
}

const styles = {
  nav: {
    backgroundColor: '#ffffff',
    padding: '0 40px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid rgba(0,0,0,0.08)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
  },
  logoLink: { display: 'flex', alignItems: 'center', textDecoration: 'none' },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '4px 8px',
    borderRadius: '12px',
    transition: 'box-shadow 0.2s',
  },
  logoImg: {
    height: '75px',
    width: 'auto',
    objectFit: 'contain',
    filter: 'drop-shadow(0 2px 8px rgba(255,107,0,0.18))',
    transition: 'transform 0.2s',
  },
  navLinks: { display: 'flex', gap: '32px', alignItems: 'center' },
  navLink: {
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
    paddingBottom: '4px',
    transition: 'color 0.2s',
    fontFamily: 'sans-serif',
  },
  rightSide: { display: 'flex', alignItems: 'center', gap: '12px' },
  langBtn: {
    backgroundColor: 'transparent',
    border: '1px solid #FF6B00',
    color: '#FF6B00',
    padding: '7px 16px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '600',
    transition: 'all 0.2s',
    fontFamily: 'sans-serif',
  },
  loginBtn: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '14px',
    fontWeight: '500',
    padding: '8px 18px',
    border: '1px solid rgba(0,0,0,0.15)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'border-color 0.2s',
  },
  registerBtn: {
    textDecoration: 'none',
    backgroundColor: '#FF6B00',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: '700',
    padding: '8px 18px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'background-color 0.2s',
  },
  menuBtn: { display: 'none', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: '#333' },
  mobileMenu: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 0',
  },
  mobileLink: {
    textDecoration: 'none',
    color: '#333',
    padding: '12px 40px',
    fontSize: '15px',
    borderBottom: '1px solid rgba(0,0,0,0.05)',
    fontFamily: 'sans-serif',
  },
};

export default Navbar;
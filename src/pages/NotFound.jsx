import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FiAlertCircle, FiHome } from 'react-icons/fi';

function NotFound() {
  const { language } = useLanguage();

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <div style={styles.iconWrapper}>
          <FiAlertCircle size={48} color="#00b4d8" />
        </div>
        <div style={styles.code}>404</div>
        <h1 style={styles.title}>
          {language === 'EN' ? 'Page Not Found' : 'صفحہ نہیں ملا'}
        </h1>
        <p style={styles.desc}>
          {language === 'EN'
            ? 'The page you are looking for does not exist or has been moved.'
            : 'آپ جس صفحے کی تلاش کر رہے ہیں وہ موجود نہیں۔'}
        </p>
        <Link
          to="/"
          style={styles.btn}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e55f00'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FF6B00'}
        >
          <FiHome size={16} />
          {language === 'EN' ? 'Go to Home' : 'ہوم پر جائیں'}
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f5f7fa', minHeight: '100vh',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'sans-serif',
  },
  box: {
    textAlign: 'center', padding: '60px 40px',
    backgroundColor: '#ffffff',
    border: '1.5px solid rgba(0,180,216,0.3)',
    borderRadius: '24px',
    boxShadow: '0 4px 24px rgba(0,180,216,0.08)',
    maxWidth: '480px', width: '90%',
  },
  iconWrapper: {
    width: '80px', height: '80px', borderRadius: '50%',
    backgroundColor: 'rgba(0,180,216,0.1)',
    border: '2px solid rgba(0,180,216,0.3)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 20px auto',
  },
  code: {
    fontSize: '90px', fontWeight: '800', color: '#FF6B00',
    lineHeight: 1, marginBottom: '16px',
    textShadow: '0 2px 16px rgba(255,107,0,0.2)',
  },
  title: { color: '#1a1a1a', fontSize: '26px', fontWeight: '800', margin: '0 0 12px 0' },
  desc: { color: '#666', fontSize: '14px', lineHeight: '1.7', margin: '0 0 32px 0' },
  btn: {
    backgroundColor: '#FF6B00', color: '#ffffff',
    textDecoration: 'none', padding: '13px 32px',
    borderRadius: '30px', fontWeight: '700', fontSize: '15px',
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    transition: 'background-color 0.2s ease',
    boxShadow: '0 4px 16px rgba(255,107,0,0.25)',
  },
};

export default NotFound;
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function Footer() {
  const { language } = useLanguage();

  const content = {
    EN: {
      tagline: 'See your smile clearly.',
      description: 'A research-based dental fluorosis screening platform built on peer-reviewed clinical studies.',
      quickLinks: 'Quick Links',
      support: 'Support',
      contact: 'Contact',
      home: 'Home',
      about: 'About',
      tips: 'Tips',
      screening: 'Screening',
      
      assistant: 'Assistant',
      dashboard: 'Dashboard',
      copyright: '© 2026 FluoroVision. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      disclaimer: 'Disclaimer',
      discText: 'FluoroVision is a screening tool only and does not replace professional dental diagnosis. Always consult a qualified dentist.',
    },
    UR: {
      tagline: 'اپنی مسکراہٹ واضح طور پر دیکھیں۔',
      description: 'ہم مرتبہ جائزہ لی گئی طبی تحقیق پر مبنی ڈینٹل فلوروسس اسکریننگ پلیٹ فارم۔',
      quickLinks: 'فوری لنکس',
      support: 'مدد',
      contact: 'رابطہ',
      home: 'ہوم',
      about: 'ہمارے بارے میں',
      tips: 'مشورے',
      screening: 'اسکریننگ',
      
      assistant: 'اسسٹنٹ',
      dashboard: 'ڈیش بورڈ',
      copyright: '© 2026 FluoroVision۔ جملہ حقوق محفوظ ہیں۔',
      privacy: 'رازداری',
      terms: 'شرائط',
      disclaimer: 'دستبرداری',
      discText: 'FluoroVision صرف ایک اسکریننگ ٹول ہے اور پیشہ ورانہ تشخیص کا متبادل نہیں۔',
    },
  };

  const t = content[language];

  return (
    <footer style={styles.footer}>
      <div style={styles.topSection}>
        <div style={styles.brand}>
          <div style={styles.logoWrapper}>
            <img src='/fluorovision-logo.png' alt='FluoroVision' style={styles.footerLogo} />
          </div>
          <p style={styles.tagline}>{t.tagline}</p>
          <p style={styles.description}>{t.description}</p>
        </div>

        <div style={styles.linkGroup}>
          <h4 style={styles.linkTitle}>{t.quickLinks}</h4>
          <Link to='/' style={styles.link}>{t.home}</Link>
          <Link to='/about' style={styles.link}>{t.about}</Link>
          <Link to='/tips' style={styles.link}>{t.tips}</Link>
          <Link to='/quiz' style={styles.link}>{t.screening}</Link>
        </div>

        <div style={styles.linkGroup}>
          <h4 style={styles.linkTitle}>{t.support}</h4>
          
          <Link to='/chatbot' style={styles.link}>{t.assistant}</Link>
          <Link to='/dashboard' style={styles.link}>{t.dashboard}</Link>
        </div>

        <div style={styles.linkGroup}>
          <h4 style={styles.linkTitle}>{t.contact}</h4>
          <p style={styles.contactText}>support@fluorovision.com</p>
          <p style={styles.contactText}>+92 300 0000000</p>
          <p style={styles.contactText}>Pakistan</p>
        </div>
      </div>

      <div style={styles.disclaimerBox}>
        <p style={styles.disclaimerText}>{t.discText}</p>
      </div>

      <div style={styles.divider} />

      <div style={styles.bottomSection}>
        <p style={styles.copyright}>{t.copyright}</p>
        <div style={styles.bottomLinks}>
          <span style={styles.bottomLink}>{t.privacy}</span>
          <span style={styles.bottomLink}>{t.terms}</span>
          <span style={styles.bottomLink}>{t.disclaimer}</span>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: { backgroundColor: '#ffffff', borderTop: '3px solid #FF6B00', padding: '60px 60px 30px 60px' },
  topSection: { display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px', marginBottom: '40px' },
  brand: { maxWidth: '280px' },
  logoWrapper: {
    display: 'inline-flex',
    backgroundColor: '#fff8f5',
    borderRadius: '14px',
    padding: '8px 12px',
    marginBottom: '14px',
    border: '1px solid rgba(255,107,0,0.12)',
    boxShadow: '0 2px 10px rgba(255,107,0,0.1)',
  },
  footerLogo: {
    height: '70px',
    objectFit: 'contain',
    filter: 'drop-shadow(0 2px 6px rgba(255,107,0,0.15))',
  },
  tagline: { color: '#333', fontSize: '14px', fontStyle: 'italic', margin: '0 0 12px 0' },
  description: { color: '#666', fontSize: '13px', lineHeight: '1.7', margin: 0 },
  linkGroup: { display: 'flex', flexDirection: 'column', gap: '10px' },
  linkTitle: { color: '#FF6B00', fontSize: '13px', fontWeight: '700', margin: '0 0 6px 0', textTransform: 'uppercase', letterSpacing: '1px' },
  link: { textDecoration: 'none', color: '#555', fontSize: '13px' },
  contactText: { color: '#555', fontSize: '13px', margin: 0 },
  disclaimerBox: { backgroundColor: '#fff8f5', border: '1px solid rgba(255,107,0,0.2)', borderRadius: '10px', padding: '14px 20px', marginBottom: '30px' },
  disclaimerText: { color: '#666', fontSize: '12px', margin: 0, lineHeight: '1.6' },
  divider: { height: '1px', backgroundColor: 'rgba(0,0,0,0.08)', margin: '0 0 24px 0' },
  bottomSection: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' },
  copyright: { color: '#999', fontSize: '13px', margin: 0 },
  bottomLinks: { display: 'flex', gap: '20px' },
  bottomLink: { color: '#999', fontSize: '13px', cursor: 'pointer' },
};

export default Footer;
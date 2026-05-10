import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  FiCheckCircle, FiAlertTriangle, FiAlertOctagon,
  FiAlertCircle, FiBookOpen, FiTarget, FiLayers, FiShield
} from 'react-icons/fi';

function About() {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: 'About FluoroVision',
      subtitle: 'A research-driven dental fluorosis screening platform built on peer-reviewed clinical evidence.',
      whatTitle: 'What is Dental Fluorosis?',
      whatDesc1: 'Dental fluorosis is a developmental condition caused by excessive fluoride intake during the years of tooth formation (birth to approximately age 8). It affects the appearance of tooth enamel, ranging from subtle white spots in mild cases to brown staining and pitting in severe cases.',
      whatDesc2: 'Fluorosis is irreversible once formed, making early awareness and prevention critical — especially in regions with naturally high fluoride levels in groundwater, such as parts of Pakistan and South Asia.',
      missionTitle: 'Our Mission',
      missionDesc: 'FluoroVision was developed to bridge the gap between clinical dental research and public awareness. Our goal is to provide a free, accessible, and research-informed screening tool that helps individuals and families identify potential fluorosis risk early — and take appropriate action.',
      howBuiltTitle: 'How FluoroVision Was Built',
      howBuiltDesc: 'FluoroVision is grounded in 17 peer-reviewed research papers published in journals including PubMed, IEEE Xplore, ScienceDirect, Springer, and MDPI. Our screening criteria are based on internationally recognized clinical classification systems.',
      indexTitle: 'Clinical Indices Used',
      index1Title: "Dean's Fluorosis Index",
      index1Desc: 'Developed by H.T. Dean (1942), this is the most widely used index for classifying dental fluorosis severity. It categorizes fluorosis into: Normal, Questionable, Very Mild, Mild, Moderate, and Severe.',
      index2Title: 'Thylstrup-Fejerkov (TF) Index',
      index2Desc: 'A more detailed 10-point clinical scale that provides finer gradation of fluorosis severity based on enamel surface characteristics. Used in advanced clinical research worldwide.',
      categoriesTitle: 'Fluorosis Categories in FluoroVision',
      cat1Title: 'Normal',
      cat1Desc: 'No visible fluorosis. Enamel is smooth, translucent and uniformly cream-white. No intervention required beyond routine dental hygiene.',
      cat2Title: 'Mild',
      cat2Desc: 'Opaque white areas or fine white lines covering less than 25% of the tooth surface. Monitoring and preventive care recommended.',
      cat3Title: 'Severe',
      cat3Desc: 'Widespread brown or yellow staining, pitting or enamel surface erosion affecting more than 50% of the tooth surface. Immediate professional dental consultation strongly recommended.',
      researchTitle: 'Research Foundation',
      researchDesc: 'Our screening methodology draws from studies on automated fluorosis detection using image processing, deep learning, and smartphone-based screening tools — ensuring FluoroVision reflects the current state of clinical and technological research in this field.',
      limitTitle: 'Important Limitations',
      limit1: 'FluoroVision is a screening tool only — not a diagnostic instrument.',
      limit2: 'Results are indicative and should always be confirmed by a qualified dental professional.',
      limit3: 'Photo-based screening has inherent limitations due to lighting, image quality and camera resolution.',
      limit4: 'FluoroVision does not store or share your personal health data without consent.',
      ctaTitle: 'Ready to Start Your Screening?',
      ctaBtn: 'Begin Screening',
      disclaimer: 'FluoroVision is a screening tool only and does not replace professional dental diagnosis. Always consult a qualified dentist for clinical evaluation.',
    },
    UR: {
      title: 'FluoroVision کے بارے میں',
      subtitle: 'ہم مرتبہ جائزہ لی گئی طبی تحقیق پر مبنی ڈینٹل فلوروسس اسکریننگ پلیٹ فارم۔',
      whatTitle: 'ڈینٹل فلوروسس کیا ہے؟',
      whatDesc1: 'ڈینٹل فلوروسس ایک ترقیاتی حالت ہے جو دانتوں کی تشکیل کے سالوں (پیدائش سے تقریباً 8 سال) کے دوران ضرورت سے زیادہ فلورائیڈ کی نمائش کی وجہ سے ہوتی ہے۔',
      whatDesc2: 'فلوروسس ایک بار بن جانے کے بعد ناقابل واپسی ہے، اس لیے جلد آگاہی اور بچاؤ بہت ضروری ہے۔',
      missionTitle: 'ہمارا مشن',
      missionDesc: 'FluoroVision کو طبی تحقیق اور عوامی آگاہی کے درمیان فرق کو ختم کرنے کے لیے تیار کیا گیا ہے۔',
      howBuiltTitle: 'FluoroVision کیسے بنایا گیا',
      howBuiltDesc: 'FluoroVision 17 ہم مرتبہ جائزہ لی گئی تحقیقی مقالوں پر مبنی ہے جو PubMed، IEEE، ScienceDirect اور Springer جیسے جرائد میں شائع ہوئے ہیں۔',
      indexTitle: 'استعمال شدہ طبی انڈیکس',
      index1Title: 'ڈین کا فلوروسس انڈیکس',
      index1Desc: 'H.T. Dean (1942) کا تیار کردہ یہ سب سے زیادہ استعمال ہونے والا انڈیکس ہے۔ یہ فلوروسس کو نارمل، ہلکا، درمیانہ اور شدید میں تقسیم کرتا ہے۔',
      index2Title: 'Thylstrup-Fejerkov (TF) انڈیکس',
      index2Desc: 'یہ ایک 10 نکاتی پیمانہ ہے جو تامچینی کی سطح کی خصوصیات کی بنیاد پر فلوروسس کی شدت کا باریک بینی سے جائزہ لیتا ہے۔',
      categoriesTitle: 'FluoroVision میں فلوروسس کی اقسام',
      cat1Title: 'نارمل',
      cat1Desc: 'فلوروسس کی کوئی علامت نہیں۔ تامچینی ہموار اور سفید ہے۔ معمول کی دانتوں کی صفائی جاری رکھیں۔',
      cat2Title: 'ہلکا',
      cat2Desc: 'دانت کی سطح کے 25 فیصد سے کم پر سفید دھبے۔ نگرانی اور احتیاطی دیکھ بھال تجویز کی جاتی ہے۔',
      cat3Title: 'شدید',
      cat3Desc: 'بھورے داغ، گڑھے یا تامچینی کا کٹاؤ 50 فیصد سے زیادہ سطح پر۔ فوری ڈاکٹر سے مشورہ ضروری ہے۔',
      researchTitle: 'تحقیقی بنیاد',
      researchDesc: 'ہماری اسکریننگ کا طریقہ کار امیج پروسیسنگ، ڈیپ لرننگ اور اسمارٹ فون پر مبنی اسکریننگ ٹولز کے مطالعات سے ماخوذ ہے۔',
      limitTitle: 'اہم حدود',
      limit1: 'FluoroVision صرف ایک اسکریننگ ٹول ہے — تشخیصی آلہ نہیں۔',
      limit2: 'نتائج صرف اشارہ دیتے ہیں اور انہیں ہمیشہ اہل ڈینٹسٹ سے تصدیق کروانی چاہیے۔',
      limit3: 'تصویر پر مبنی اسکریننگ کی روشنی اور تصویر کے معیار کی وجہ سے حدود ہیں۔',
      limit4: 'FluoroVision آپ کا ذاتی صحت کا ڈیٹا رضامندی کے بغیر محفوظ یا شیئر نہیں کرتا۔',
      ctaTitle: 'اسکریننگ شروع کرنے کے لیے تیار ہیں؟',
      ctaBtn: 'اسکریننگ شروع کریں',
      disclaimer: 'FluoroVision صرف ایک اسکریننگ ٹول ہے اور پیشہ ورانہ تشخیص کا متبادل نہیں۔ طبی تشخیص کے لیے ہمیشہ اہل ڈینٹسٹ سے مشورہ کریں۔',
    }
  };

  const t = content[language];

  const categories = [
    { icon: <FiCheckCircle size={32} color="#16a34a" />, borderColor: '#16a34a', titleColor: '#16a34a', bg: 'rgba(22,163,74,0.05)', title: t.cat1Title, desc: t.cat1Desc },
    { icon: <FiAlertTriangle size={32} color="#d97706" />, borderColor: '#d97706', titleColor: '#d97706', bg: 'rgba(217,119,6,0.05)', title: t.cat2Title, desc: t.cat2Desc },
    { icon: <FiAlertOctagon size={32} color="#dc2626" />, borderColor: '#dc2626', titleColor: '#dc2626', bg: 'rgba(220,38,38,0.05)', title: t.cat3Title, desc: t.cat3Desc },
  ];

  const limits = [t.limit1, t.limit2, t.limit3, t.limit4];

  return (
    <div style={styles.container}>

      {/* Hero */}
      <div style={styles.hero}>
        <h1 style={styles.title}>{t.title}</h1>
        <p style={styles.subtitle}>{t.subtitle}</p>
      </div>

      {/* What is Fluorosis */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.titleIconWrapper}><FiBookOpen size={18} color="#00b4d8" /></span>
          {t.whatTitle}
        </h2>
        <p style={styles.para}>{t.whatDesc1}</p>
        <p style={styles.para}>{t.whatDesc2}</p>
      </div>

      {/* Mission */}
      <div style={styles.highlightBox}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.titleIconWrapper}><FiTarget size={18} color="#00b4d8" /></span>
          {t.missionTitle}
        </h2>
        <p style={styles.para}>{t.missionDesc}</p>
      </div>

      {/* How Built */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.titleIconWrapper}><FiLayers size={18} color="#00b4d8" /></span>
          {t.howBuiltTitle}
        </h2>
        <p style={styles.para}>{t.howBuiltDesc}</p>
      </div>

      {/* Clinical Indices */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.titleIconWrapper}><FiBookOpen size={18} color="#00b4d8" /></span>
          {t.indexTitle}
        </h2>
        <div style={styles.grid2}>
          {[
            { title: t.index1Title, desc: t.index1Desc },
            { title: t.index2Title, desc: t.index2Desc },
          ].map((item, i) => (
            <div
              key={i}
              style={styles.indexCard}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,180,216,0.15)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'}
            >
              <h3 style={styles.indexTitle}>{item.title}</h3>
              <p style={styles.indexDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.titleIconWrapper}><FiLayers size={18} color="#00b4d8" /></span>
          {t.categoriesTitle}
        </h2>
        <div style={styles.grid3}>
          {categories.map((cat, i) => (
            <div
              key={i}
              style={{ ...styles.catCard, borderColor: cat.borderColor, backgroundColor: cat.bg }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 28px ${cat.borderColor}33`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'}
            >
              <div style={styles.catIconWrapper}>{cat.icon}</div>
              <h3 style={{ ...styles.catTitle, color: cat.titleColor }}>{cat.title}</h3>
              <p style={styles.catDesc}>{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Research */}
      <div style={styles.highlightBox}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.titleIconWrapper}><FiBookOpen size={18} color="#00b4d8" /></span>
          {t.researchTitle}
        </h2>
        <p style={styles.para}>{t.researchDesc}</p>
      </div>

      {/* Limitations */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.titleIconWrapper}><FiShield size={18} color="#00b4d8" /></span>
          {t.limitTitle}
        </h2>
        <div style={styles.limitBox}>
          {limits.map((item, i) => (
            <div key={i} style={styles.limitItem}>
              <div style={styles.limitIconWrapper}>
                <FiAlertCircle size={16} color="#d97706" />
              </div>
              <p style={styles.limitText}>{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={styles.cta}>
        <h2 style={styles.ctaTitle}>{t.ctaTitle}</h2>
        <Link
          to="/register"
          style={styles.ctaBtn}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e55f00'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FF6B00'}
        >
          {t.ctaBtn} →
        </Link>
      </div>

      {/* Disclaimer */}
      <div style={styles.disclaimerBox}>
        <div style={styles.disclaimerIcon}><FiAlertTriangle size={16} color="#d97706" /></div>
        <p style={styles.disclaimer}>{t.disclaimer}</p>
      </div>

    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f5f7fa', minHeight: '100vh',
    padding: '60px', fontFamily: 'sans-serif',
    color: '#1a1a1a', maxWidth: '1000px', margin: '0 auto',
  },
  hero: {
    textAlign: 'center', marginBottom: '56px',
    padding: '48px 40px',
    background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
    borderRadius: '20px',
    border: '1.5px solid rgba(0,180,216,0.3)',
    boxShadow: '0 4px 24px rgba(0,180,216,0.08)',
  },
  title: { fontSize: '36px', fontWeight: '800', margin: '0 0 14px 0', color: '#1a1a1a' },
  subtitle: { color: '#555', fontSize: '15px', lineHeight: '1.7', margin: 0 },
  section: { marginBottom: '40px' },
  highlightBox: {
    marginBottom: '40px',
    backgroundColor: '#f0f9ff',
    border: '1.5px solid rgba(0,180,216,0.35)',
    borderRadius: '16px',
    padding: '32px 36px',
    boxShadow: '0 2px 12px rgba(0,180,216,0.08)',
  },
  sectionTitle: {
    fontSize: '20px', fontWeight: '800', color: '#00b4d8',
    margin: '0 0 16px 0', paddingBottom: '10px',
    borderBottom: '2px solid rgba(0,180,216,0.25)',
    display: 'flex', alignItems: 'center', gap: '10px',
  },
  titleIconWrapper: {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: '32px', height: '32px', borderRadius: '8px',
    backgroundColor: 'rgba(0,180,216,0.1)', flexShrink: 0,
  },
  para: { color: '#555', fontSize: '14px', lineHeight: '1.8', margin: '0 0 14px 0' },
  grid2: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' },
  indexCard: {
    backgroundColor: '#ffffff',
    border: '1.5px solid rgba(0,180,216,0.35)',
    borderRadius: '14px', padding: '24px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
    transition: 'box-shadow 0.25s ease',
    cursor: 'default',
  },
  indexTitle: { color: '#1a1a1a', fontSize: '15px', fontWeight: '700', margin: '0 0 10px 0' },
  indexDesc: { color: '#666', fontSize: '13px', lineHeight: '1.7', margin: 0 },
  grid3: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' },
  catCard: {
    border: '1.5px solid', borderRadius: '14px', padding: '28px',
    textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
    transition: 'box-shadow 0.25s ease', cursor: 'default',
  },
  catIconWrapper: {
    width: '60px', height: '60px', borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.8)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 14px auto', boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  catTitle: { fontSize: '18px', fontWeight: '800', margin: '0 0 10px 0' },
  catDesc: { color: '#666', fontSize: '13px', lineHeight: '1.7', margin: 0 },
  limitBox: {
    backgroundColor: '#ffffff',
    border: '1.5px solid rgba(0,180,216,0.3)',
    borderRadius: '14px', padding: '24px',
    display: 'flex', flexDirection: 'column', gap: '14px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
  },
  limitItem: { display: 'flex', gap: '12px', alignItems: 'flex-start' },
  limitIconWrapper: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: '28px', height: '28px', borderRadius: '8px',
    backgroundColor: 'rgba(217,119,6,0.1)', flexShrink: 0, marginTop: '1px',
  },
  limitText: { color: '#555', fontSize: '13px', lineHeight: '1.7', margin: 0 },
  cta: {
    textAlign: 'center',
    backgroundColor: '#FF6B00',
    borderRadius: '20px', padding: '52px 36px', marginBottom: '32px',
    boxShadow: '0 8px 32px rgba(255,107,0,0.2)',
  },
  ctaTitle: { fontSize: '26px', fontWeight: '800', margin: '0 0 24px 0', color: '#ffffff' },
  ctaBtn: {
    backgroundColor: '#ffffff', color: '#FF6B00',
    textDecoration: 'none', padding: '13px 36px',
    borderRadius: '30px', fontWeight: '700', fontSize: '15px',
    display: 'inline-block', transition: 'background-color 0.2s ease',
    boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
  },
  disclaimerBox: {
    backgroundColor: '#fffbeb',
    border: '1.5px solid rgba(217,119,6,0.3)',
    borderRadius: '12px', padding: '16px 20px',
    display: 'flex', alignItems: 'flex-start', gap: '12px',
  },
  disclaimerIcon: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: '28px', height: '28px', borderRadius: '8px',
    backgroundColor: 'rgba(217,119,6,0.1)', flexShrink: 0,
  },
  disclaimer: { color: '#666', fontSize: '12px', lineHeight: '1.6', margin: 0 },
};

export default About;
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  FiUser, FiClipboard, FiCamera, FiBarChart2,
  FiBookOpen, FiSearch, FiVideo, FiUserCheck,
  FiCheckCircle, FiAlertTriangle, FiAlertOctagon,
  FiActivity
} from 'react-icons/fi';

function Home() {
  const { language } = useLanguage();

  const content = {
    EN: {
      
      hero: 'Detect Dental Fluorosis Early',
      heroSub: 'A research-based screening tool developed from peer-reviewed clinical studies to help you identify and understand dental fluorosis — from the comfort of your home.',
      getStarted: 'Start Screening',
      learnMore: 'Learn More',
      howTitle: 'How It Works',
      step1Title: 'Create Profile',
      step1Desc: 'Enter your age, gender and basic information to personalize your screening experience.',
      step2Title: 'Take the Quiz',
      step2Desc: 'Answer clinically informed questions about your dental symptoms, water source, and fluoride exposure history.',
      step3Title: 'Upload or Scan',
      step3Desc: 'Upload a photo of your teeth or use live camera scanning with guided instructions for accurate results.',
      step4Title: 'Get Results',
      step4Desc: 'Receive your fluorosis severity assessment — Normal, Mild, or Severe — with guidance on next steps.',
      catTitle: 'Fluorosis Severity Categories',
      catSubtitle: "Based on Dean's Fluorosis Index and Thylstrup-Fejerkov (TF) Index — internationally recognized clinical classification systems.",
      normalTitle: 'Normal',
      normalDesc: 'No visible signs of fluorosis. Enamel surface is smooth and cream-white in color. Continue good dental hygiene practices.',
      mildTitle: 'Mild',
      mildDesc: 'Small opaque white areas covering less than 25% of the tooth surface. Minor white spots or fine lines visible.',
      severeTitle: 'Severe',
      severeDesc: 'Widespread brown staining, pitting or enamel erosion affecting more than 50% of the tooth surface. Immediate dental consultation recommended.',
      whyTitle: 'Why FluoroVision?',
      why1Title: 'Research-Based',
      why1Desc: 'Developed using validated clinical fluorosis grading criteria and established dental screening methodology.',
      why2Title: 'Clinically Informed Quiz',
      why2Desc: "Screening questions derived from validated fluorosis indices including Dean's Index and the TF Index.",
      why3Title: 'Live Camera Screening',
      why3Desc: 'Guided live camera scanning with real-time instructions for proper positioning and lighting.',
      why4Title: 'Doctor Connect',
      why4Desc: 'Severe cases are directed to book a real dental professional consultation immediately.',
      ctaTitle: 'Ready to Check Your Dental Health?',
      ctaDesc: 'Start your free, research-based fluorosis screening today.',
      ctaBtn: 'Begin Screening',
      disclaimer: 'FluoroVision is a screening tool only and does not replace professional dental diagnosis. Always consult a qualified dentist for clinical evaluation.',
    },
    UR: {
    
      hero: 'ڈینٹل فلوروسس کا جلد پتہ لگائیں',
      heroSub: 'ہم مرتبہ جائزہ لی گئی طبی تحقیق پر مبنی ایک اسکریننگ ٹول — گھر بیٹھے فلوروسس کو سمجھیں اور اس کا انتظام کریں۔',
      getStarted: 'اسکریننگ شروع کریں',
      learnMore: 'مزید جانیں',
      howTitle: 'یہ کیسے کام کرتا ہے',
      step1Title: 'پروفائل بنائیں',
      step1Desc: 'اپنی عمر، جنس اور بنیادی معلومات درج کریں۔',
      step2Title: 'کوئز لیں',
      step2Desc: 'اپنی علامات، پانی کے ذریعہ اور فلورائیڈ کی تاریخ کے بارے میں سوالات کے جواب دیں۔',
      step3Title: 'تصویر اپ لوڈ کریں',
      step3Desc: 'دانتوں کی تصویر اپ لوڈ کریں یا رہنمائی کے ساتھ لائیو کیمرہ اسکیننگ استعمال کریں۔',
      step4Title: 'نتائج حاصل کریں',
      step4Desc: 'اپنا فلوروسس نتیجہ حاصل کریں — نارمل، ہلکا، یا شدید۔',
      catTitle: 'فلوروسس کی شدت کی اقسام',
      catSubtitle: 'ڈین کے فلوروسس انڈیکس اور TF انڈیکس پر مبنی — بین الاقوامی سطح پر تسلیم شدہ طبی درجہ بندی۔',
      normalTitle: 'نارمل',
      normalDesc: 'فلوروسس کی کوئی علامت نہیں۔ دانتوں کی سطح ہموار اور سفید ہے۔',
      mildTitle: 'ہلکا',
      mildDesc: 'دانت کی سطح کے 25 فیصد سے کم پر سفید دھبے۔ معمولی علامات۔',
      severeTitle: 'شدید',
      severeDesc: 'بھورے داغ، گڑھے یا تامچینی کا کٹاؤ 50 فیصد سے زیادہ سطح پر۔ فوری طور پر ڈاکٹر سے مشورہ کریں۔',
      whyTitle: 'FluoroVision کیوں؟',
      why1Title: 'تحقیق پر مبنی',
      why1Desc: 'تسلیم شدہ طبی فلوروسس گریڈنگ معیار اور قائم شدہ دانتوں کی اسکریننگ طریقہ کار پر مبنی۔',
      why2Title: 'طبی سوالنامہ',
      why2Desc: 'ڈین انڈیکس اور TF انڈیکس سے ماخوذ سوالات۔',
      why3Title: 'لائیو کیمرہ اسکیننگ',
      why3Desc: 'روشنی اور پوزیشن کی رہنمائی کے ساتھ لائیو اسکیننگ۔',
      why4Title: 'ڈاکٹر سے رابطہ',
      why4Desc: 'شدید کیسز میں فوری طور پر اصل دانتوں کے ڈاکٹر سے بکنگ کروائیں۔',
      ctaTitle: 'اپنی دانتوں کی صحت چیک کرنے کے لیے تیار ہیں؟',
      ctaDesc: 'آج ہی اپنی مفت، تحقیق پر مبنی فلوروسس اسکریننگ شروع کریں۔',
      ctaBtn: 'اسکریننگ شروع کریں',
      disclaimer: 'FluoroVision صرف ایک اسکریننگ ٹول ہے اور پیشہ ورانہ دانتوں کی تشخیص کا متبادل نہیں۔ طبی تشخیص کے لیے ہمیشہ اہل ڈینٹسٹ سے مشورہ کریں۔',
    }
  };

  const t = content[language];

  const steps = [
    { num: '01', title: t.step1Title, desc: t.step1Desc, icon: <FiUser size={22} color="#FF6B00" /> },
    { num: '02', title: t.step2Title, desc: t.step2Desc, icon: <FiClipboard size={22} color="#FF6B00" /> },
    { num: '03', title: t.step3Title, desc: t.step3Desc, icon: <FiCamera size={22} color="#FF6B00" /> },
    { num: '04', title: t.step4Title, desc: t.step4Desc, icon: <FiBarChart2 size={22} color="#FF6B00" /> },
  ];

  const whyItems = [
    { icon: <FiBookOpen size={24} color="#FF6B00" />, title: t.why1Title, desc: t.why1Desc },
    { icon: <FiSearch size={24} color="#FF6B00" />, title: t.why2Title, desc: t.why2Desc },
    { icon: <FiVideo size={24} color="#FF6B00" />, title: t.why3Title, desc: t.why3Desc },
    { icon: <FiUserCheck size={24} color="#FF6B00" />, title: t.why4Title, desc: t.why4Desc },
  ];

  const categories = [
    {
      icon: <FiCheckCircle size={32} color="#16a34a" />,
      borderColor: '#16a34a',
      titleColor: '#16a34a',
      bgColor: 'rgba(22,163,74,0.06)',
      title: t.normalTitle,
      desc: t.normalDesc,
    },
    {
      icon: <FiAlertTriangle size={32} color="#d97706" />,
      borderColor: '#d97706',
      titleColor: '#d97706',
      bgColor: 'rgba(217,119,6,0.06)',
      title: t.mildTitle,
      desc: t.mildDesc,
    },
    {
      icon: <FiAlertOctagon size={32} color="#dc2626" />,
      borderColor: '#dc2626',
      titleColor: '#dc2626',
      bgColor: 'rgba(220,38,38,0.06)',
      title: t.severeTitle,
      desc: t.severeDesc,
    },
  ];

  return (
    <div style={styles.container}>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.badge}>{t.badge}</div>
          <h1 style={styles.heroTitle}>{t.hero}</h1>
          <p style={styles.heroSub}>{t.heroSub}</p>
          <div style={styles.heroBtns}>
            <Link to="/register" style={styles.primaryBtn}>{t.getStarted} →</Link>
            <Link to="/about" style={styles.secondaryBtn}>{t.learnMore}</Link>
          </div>
        </div>
        <div style={styles.heroVisual}>
          <div style={styles.glowCard}>
            <div style={styles.toothIconWrapper}>
              <FiActivity size={30} color="#FF6B00" />
            </div>
            <p style={styles.glowText}>Clinical Screening</p>
            <div style={styles.scanBar}>
              <div style={styles.scanFill}></div>
            </div>
            <div style={styles.resultChips}>
              <span style={{ ...styles.chip, backgroundColor: 'rgba(22,163,74,0.12)', color: '#16a34a' }}>
                <FiCheckCircle size={11} style={{ marginRight: 4 }} /> Normal
              </span>
              <span style={{ ...styles.chip, backgroundColor: 'rgba(217,119,6,0.12)', color: '#d97706' }}>
                <FiAlertTriangle size={11} style={{ marginRight: 4 }} /> Mild
              </span>
              <span style={{ ...styles.chip, backgroundColor: 'rgba(220,38,38,0.12)', color: '#dc2626' }}>
                <FiAlertOctagon size={11} style={{ marginRight: 4 }} /> Severe
              </span>
            </div>
            <p style={styles.indexNote}>Dean's Index & TF Index</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>{t.howTitle}</h2>
        <div style={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.num} style={styles.stepCard}>
              <div style={styles.stepNum}>{step.num}</div>
              <div style={styles.stepIconWrapper}>{step.icon}</div>
              <h3 style={styles.stepTitle}>{step.title}</h3>
              <p style={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section style={{ ...styles.section, backgroundColor: '#ffffff' }}>
        <h2 style={styles.sectionTitle}>{t.catTitle}</h2>
        <p style={styles.catSubtitle}>{t.catSubtitle}</p>
        <div style={styles.catGrid}>
          {categories.map((cat, i) => (
            <div key={i} style={{ ...styles.catCard, borderColor: cat.borderColor, backgroundColor: cat.bgColor }}>
              <div style={styles.catIconWrapper}>{cat.icon}</div>
              <h3 style={{ ...styles.catTitle2, color: cat.titleColor }}>{cat.title}</h3>
              <p style={styles.catDesc}>{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why FluoroVision */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>{t.whyTitle}</h2>
        <div style={styles.whyGrid}>
          {whyItems.map((item, i) => (
            <div key={i} style={styles.whyCard}>
              <div style={styles.whyIconWrapper}>{item.icon}</div>
              <h3 style={styles.whyTitle2}>{item.title}</h3>
              <p style={styles.whyDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>{t.ctaTitle}</h2>
        <p style={styles.ctaDesc}>{t.ctaDesc}</p>
        <Link to="/register" style={{ ...styles.primaryBtn, backgroundColor: '#ffffff', color: '#FF6B00' }}>
          {t.ctaBtn} →
        </Link>
        <p style={styles.disclaimer}>{t.disclaimer}</p>
      </section>

    </div>
  );
}

const styles = {
  container: { backgroundColor: '#f5f7fa', color: '#1a1a1a', fontFamily: 'sans-serif' },
  hero: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '80px 60px', gap: '40px', flexWrap: 'wrap',
    background: 'linear-gradient(135deg, #ffffff 0%, #fff5ef 100%)',
    borderBottom: '1px solid rgba(255,107,0,0.1)',
  },
  heroContent: { maxWidth: '560px' },
  
  heroTitle: { fontSize: '48px', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px', color: '#1a1a1a' },
  heroSub: { fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '36px' },
  heroBtns: { display: 'flex', gap: '16px', flexWrap: 'wrap' },
  primaryBtn: {
    backgroundColor: '#FF6B00', color: '#ffffff', padding: '14px 28px',
    borderRadius: '30px', textDecoration: 'none', fontWeight: '700', fontSize: '15px',
    transition: 'background-color 0.2s', display: 'inline-block',
  },
  secondaryBtn: {
    backgroundColor: 'transparent', color: '#333', padding: '14px 28px',
    borderRadius: '30px', textDecoration: 'none', fontWeight: '600', fontSize: '15px',
    border: '1px solid rgba(0,0,0,0.2)',
  },
  heroVisual: { display: 'flex', justifyContent: 'center', flex: '1' },
  glowCard: {
    backgroundColor: '#ffffff', border: '1px solid rgba(255,107,0,0.2)',
    borderRadius: '20px', padding: '40px', textAlign: 'center',
    boxShadow: '0 8px 40px rgba(255,107,0,0.1)', minWidth: '280px',
  },
  toothIconWrapper: {
    width: '64px', height: '64px', borderRadius: '50%',
    backgroundColor: 'rgba(255,107,0,0.08)', display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 16px auto', border: '2px solid rgba(255,107,0,0.15)',
  },
  glowText: { color: '#FF6B00', fontSize: '14px', fontWeight: '600', marginBottom: '16px' },
  scanBar: { backgroundColor: '#f0f0f0', borderRadius: '10px', height: '8px', marginBottom: '20px' },
  scanFill: { backgroundColor: '#FF6B00', width: '70%', height: '100%', borderRadius: '10px' },
  resultChips: { display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' },
  chip: { padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '600', display: 'inline-flex', alignItems: 'center' },
  indexNote: { color: '#999', fontSize: '11px', marginTop: '8px' },
  section: { padding: '80px 60px', backgroundColor: '#f5f7fa' },
  sectionTitle: { textAlign: 'center', fontSize: '36px', fontWeight: '800', marginBottom: '16px', color: '#1a1a1a' },
  catSubtitle: { textAlign: 'center', color: '#666', fontSize: '14px', marginBottom: '40px', fontStyle: 'italic' },
  stepsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginTop: '40px' },
  stepCard: {
    backgroundColor: '#ffffff', border: '1px solid rgba(255,107,0,0.1)',
    borderRadius: '16px', padding: '30px', textAlign: 'center',
    boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
  },
  stepNum: { color: 'rgba(255,107,0,0.25)', fontSize: '40px', fontWeight: '800', marginBottom: '8px' },
  stepIconWrapper: {
    width: '48px', height: '48px', borderRadius: '12px',
    backgroundColor: 'rgba(255,107,0,0.08)', display: 'flex',
    alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto',
  },
  stepTitle: { color: '#1a1a1a', fontSize: '16px', fontWeight: '700', marginBottom: '8px' },
  stepDesc: { color: '#666', fontSize: '13px', lineHeight: '1.6', margin: 0 },
  catGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginTop: '20px' },
  catCard: {
    border: '1px solid', borderRadius: '16px', padding: '36px',
    textAlign: 'center', boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
  },
  catIconWrapper: {
    width: '60px', height: '60px', borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.8)', display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 16px auto', boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  catTitle2: { fontSize: '20px', fontWeight: '800', marginBottom: '10px' },
  catDesc: { color: '#666', fontSize: '14px', lineHeight: '1.7', margin: 0 },
  whyGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginTop: '40px' },
  whyCard: {
    backgroundColor: '#ffffff', border: '1px solid rgba(255,107,0,0.1)',
    borderRadius: '16px', padding: '30px', textAlign: 'center',
    boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
  },
  whyIconWrapper: {
    width: '52px', height: '52px', borderRadius: '14px',
    backgroundColor: 'rgba(255,107,0,0.08)', display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 16px auto', border: '1px solid rgba(255,107,0,0.12)',
  },
  whyTitle2: { color: '#FF6B00', fontSize: '16px', fontWeight: '700', marginBottom: '10px' },
  whyDesc: { color: '#666', fontSize: '13px', lineHeight: '1.6', margin: 0 },
  ctaSection: {
    backgroundColor: '#FF6B00', padding: '80px 60px', textAlign: 'center',
  },
  ctaTitle: { fontSize: '36px', fontWeight: '800', marginBottom: '16px', color: '#ffffff' },
  ctaDesc: { color: 'rgba(255,255,255,0.85)', fontSize: '16px', marginBottom: '32px' },
  disclaimer: {
    color: 'rgba(255,255,255,0.75)', fontSize: '12px',
    maxWidth: '600px', margin: '32px auto 0', lineHeight: '1.6',
  },
};

export default Home;
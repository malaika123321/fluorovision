import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  FiActivity, FiClipboard, FiBookOpen, FiCalendar,
  FiMessageCircle, FiCamera, FiInfo, FiLogOut,
  FiCheckCircle, FiAlertTriangle, FiAlertOctagon,
  FiTrash2, FiEye, FiAlertCircle
} from 'react-icons/fi';

function Dashboard() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [lastResult, setLastResult] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
  const savedResult = localStorage.getItem('fluoroResult');
  if (savedResult) {
    setLastResult(savedResult);
  }
}, []);

  const content = {
    EN: {
      welcome: 'Welcome back',
      user: 'User',
      subtitle: 'Your dental health overview',
      lastScreening: 'Last Screening Result',
      noScreening: 'No screening completed yet.',
      startScreening: 'Start Screening',
      quickActions: 'Quick Actions',
      action1: 'New Screening',
      action2: 'View Tips',
      action3: 'Book Consultation',
      action4: 'AI Assistant',
      action5: 'Upload Photo',
      action6: 'About Fluorosis',
      healthTips: 'Daily Health Tips',
      tip1Title: 'Use Fluoride-Safe Toothpaste',
      tip1Desc: 'Children under 6 should use only a pea-sized amount of toothpaste to avoid excess fluoride intake.',
      tip2Title: 'Check Your Water Source',
      tip2Desc: 'If you use well water, get it tested for fluoride levels. Safe limit is 0.7 ppm as per WHO guidelines.',
      tip3Title: 'Regular Dental Checkups',
      tip3Desc: 'Visit a dentist every 6 months for professional cleaning and early detection of any dental issues.',
      screeningHistory: 'Screening History',
      noHistory: 'No previous screenings found.',
      date: 'Date',
      resultLabel: 'Result',
      action: 'Action',
      viewResult: 'View Report',
      deleteResult: 'Delete',
      deleteConfirmTitle: 'Delete this report?',
      deleteConfirmDesc: 'This action cannot be undone. Your screening data will be permanently removed.',
      deleteConfirmYes: 'Yes, Delete',
      deleteConfirmNo: 'Cancel',
      logout: 'Logout',
    },
    UR: {
      welcome: 'خوش آمدید',
      user: 'صارف',
      subtitle: 'آپ کی دانتوں کی صحت کا جائزہ',
      lastScreening: 'آخری اسکریننگ کا نتیجہ',
      noScreening: 'ابھی تک کوئی اسکریننگ مکمل نہیں ہوئی۔',
      startScreening: 'اسکریننگ شروع کریں',
      quickActions: 'فوری اقدامات',
      action1: 'نئی اسکریننگ',
      action2: 'تجاویز دیکھیں',
      action3: 'ڈاکٹر بک کریں',
      action4: 'اے آئی اسسٹنٹ',
      action5: 'تصویر اپ لوڈ کریں',
      action6: 'فلوروسس کے بارے میں',
      healthTips: 'روزانہ صحت کی تجاویز',
      tip1Title: 'محفوظ ٹوتھ پیسٹ استعمال کریں',
      tip1Desc: '6 سال سے کم عمر بچوں کو مٹر کے دانے جتنا ٹوتھ پیسٹ استعمال کرنا چاہیے۔',
      tip2Title: 'اپنے پانی کا ذریعہ چیک کریں',
      tip2Desc: 'اگر آپ کنویں کا پانی استعمال کرتے ہیں تو فلورائیڈ کی سطح چیک کروائیں۔ محفوظ حد 0.7 ppm ہے۔',
      tip3Title: 'باقاعدہ دانتوں کا معائنہ',
      tip3Desc: 'ہر 6 ماہ بعد دانتوں کے ڈاکٹر سے ملیں۔',
      screeningHistory: 'اسکریننگ کی تاریخ',
      noHistory: 'کوئی پچھلی اسکریننگ نہیں ملی۔',
      date: 'تاریخ',
      resultLabel: 'نتیجہ',
      action: 'عمل',
      viewResult: 'رپورٹ دیکھیں',
      deleteResult: 'حذف',
      deleteConfirmTitle: 'یہ رپورٹ حذف کریں؟',
      deleteConfirmDesc: 'یہ عمل واپس نہیں ہو سکتا۔ آپ کا اسکریننگ ڈیٹا مستقل طور پر حذف ہو جائے گا۔',
      deleteConfirmYes: 'ہاں، حذف کریں',
      deleteConfirmNo: 'منسوخ کریں',
      logout: 'لاگ آؤٹ',
    }
  };

  const t = content[language];

  const handleLogout = () => {
    localStorage.removeItem('fluorovision_user');
    localStorage.removeItem('quizAnswers');
    localStorage.removeItem('dentalPhoto');
    navigate('/login');
  };

  const handleDeleteReport = () => {
    localStorage.removeItem('quizAnswers');
    localStorage.removeItem('dentalPhoto');
    setLastResult(null);
    setShowDeleteConfirm(false);
  };

  const resultConfig = {
    normal: { color: '#16a34a', bg: 'rgba(22,163,74,0.08)', border: 'rgba(22,163,74,0.3)', label: 'Normal', icon: <FiCheckCircle size={16} color="#16a34a" /> },
    mild:   { color: '#d97706', bg: 'rgba(217,119,6,0.08)', border: 'rgba(217,119,6,0.3)',  label: 'Mild Fluorosis', icon: <FiAlertTriangle size={16} color="#d97706" /> },
    severe: { color: '#dc2626', bg: 'rgba(220,38,38,0.08)', border: 'rgba(220,38,38,0.3)',  label: 'Severe Fluorosis', icon: <FiAlertOctagon size={16} color="#dc2626" /> },
  };

  const quickActions = [
  { label: t.action1, path: '/profile',      icon: <FiClipboard size={20} color="#00b4d8" /> },
  { label: t.action2, path: '/tips',          icon: <FiBookOpen size={20} color="#00b4d8" /> },
  { label: t.action3, path: '/find-doctor',   icon: <FiCalendar size={20} color="#00b4d8" /> },  // ← YAHAN
  { label: t.action4, path: '/chatbot',       icon: <FiMessageCircle size={20} color="#00b4d8" /> },
  { label: t.action5, path: '/upload',        icon: <FiCamera size={20} color="#00b4d8" /> },
  { label: t.action6, path: '/about',         icon: <FiInfo size={20} color="#00b4d8" /> },
];

  const mockHistory = lastResult ? [
    { date: new Date().toLocaleDateString(), result: lastResult },
  ] : [];

  return (
    <div style={styles.container}>

      {/* Delete Confirm Modal */}
      {showDeleteConfirm && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <div style={styles.modalIconWrapper}>
              <FiAlertCircle size={28} color="#dc2626" />
            </div>
            <h3 style={styles.modalTitle}>{t.deleteConfirmTitle}</h3>
            <p style={styles.modalDesc}>{t.deleteConfirmDesc}</p>
            <div style={styles.modalBtns}>
              <button
                onClick={handleDeleteReport}
                style={styles.modalDeleteBtn}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b91c1c'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#dc2626'}
              >
                {t.deleteConfirmYes}
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                style={styles.modalCancelBtn}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#00b4d8'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
              >
                {t.deleteConfirmNo}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <div style={styles.headerIconWrapper}>
            <FiActivity size={22} color="#00b4d8" />
          </div>
          <div>
            <h1 style={styles.welcome}>
              {t.welcome}, <span style={styles.userName}>{t.user}</span>
            </h1>
            <p style={styles.subtitle}>{t.subtitle}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          style={styles.logoutBtn}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#dc2626'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#dc2626'; }}
        >
          <FiLogOut size={14} /> {t.logout}
        </button>
      </div>

      {/* Last Result Card */}
      <div style={styles.resultCard}>
        <h3 style={styles.cardTitle}>{t.lastScreening}</h3>
        {lastResult ? (
          <div style={styles.resultInner}>
            <span style={{
              ...styles.resultBadge,
              backgroundColor: resultConfig[lastResult].bg,
              borderColor: resultConfig[lastResult].border,
              color: resultConfig[lastResult].color,
            }}>
              {resultConfig[lastResult].icon}
              {resultConfig[lastResult].label}
            </span>
            <div style={styles.resultActions}>
              <Link
                to="/results"
                style={styles.viewBtn}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#00b4d8'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,180,216,0.35)'}
              >
                <FiEye size={13} /> {t.viewResult}
              </Link>
              <button
                onClick={() => setShowDeleteConfirm(true)}
                style={styles.deleteBtn}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#dc2626'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#dc2626'; }}
              >
                <FiTrash2 size={13} /> {t.deleteResult}
              </button>
            </div>
          </div>
        ) : (
          <div style={styles.noResult}>
            <p style={styles.noResultText}>{t.noScreening}</p>
            <Link
              to="/profile"
              style={styles.startBtn}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e55f00'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FF6B00'}
            >
              {t.startScreening}
            </Link>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>{t.quickActions}</h3>
        <div style={styles.actionsGrid}>
          {quickActions.map((action, i) => (
            <Link
              key={i}
              to={action.path}
              style={styles.actionCard}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,180,216,0.18)';
                e.currentTarget.style.borderColor = '#00b4d8';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                e.currentTarget.style.borderColor = 'rgba(0,180,216,0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={styles.actionIconWrapper}>{action.icon}</div>
              <span style={styles.actionLabel}>{action.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Health Tips */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>{t.healthTips}</h3>
        <div style={styles.tipsGrid}>
          {[
            { title: t.tip1Title, desc: t.tip1Desc },
            { title: t.tip2Title, desc: t.tip2Desc },
            { title: t.tip3Title, desc: t.tip3Desc },
          ].map((tip, i) => (
            <div
              key={i}
              style={styles.tipCard}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,180,216,0.14)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'}
            >
              <h4 style={styles.tipTitle}>{tip.title}</h4>
              <p style={styles.tipDesc}>{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Screening History */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>{t.screeningHistory}</h3>
        {mockHistory.length > 0 ? (
          <div style={styles.historyTable}>
            <div style={styles.historyHeader}>
              <span>{t.date}</span>
              <span>{t.resultLabel}</span>
              <span>{t.action}</span>
            </div>
            {mockHistory.map((item, i) => (
              <div key={i} style={styles.historyRow}>
                <span style={styles.historyDate}>{item.date}</span>
                <span style={{
                  color: resultConfig[item.result].color,
                  fontSize: '13px', fontWeight: '600',
                  display: 'flex', alignItems: 'center', gap: '6px',
                }}>
                  {resultConfig[item.result].icon}
                  {resultConfig[item.result].label}
                </span>
                <div style={styles.historyActionGroup}>
                  <Link
                    to="/results"
                    style={styles.historyViewBtn}
                    onMouseEnter={e => e.currentTarget.style.borderColor = '#00b4d8'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,180,216,0.3)'}
                  >
                    <FiEye size={12} /> {t.viewResult}
                  </Link>
                  <button
                    onClick={() => setShowDeleteConfirm(true)}
                    style={styles.historyDeleteBtn}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#dc2626'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#dc2626'; }}
                  >
                    <FiTrash2 size={12} /> {t.deleteResult}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={styles.noHistoryText}>{t.noHistory}</p>
        )}
      </div>

    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f5f7fa', minHeight: '100vh',
    padding: '40px 60px', fontFamily: 'sans-serif', color: '#1a1a1a',
  },
  modalOverlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.45)', display: 'flex',
    alignItems: 'center', justifyContent: 'center', zIndex: 1000,
  },
  modal: {
    backgroundColor: '#ffffff',
    border: '1.5px solid rgba(220,38,38,0.3)',
    borderRadius: '16px', padding: '36px', maxWidth: '420px',
    width: '90%', textAlign: 'center',
    boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
  },
  modalIconWrapper: {
    width: '56px', height: '56px', borderRadius: '50%',
    backgroundColor: 'rgba(220,38,38,0.08)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 16px auto',
  },
  modalTitle: { color: '#1a1a1a', fontSize: '18px', fontWeight: '800', margin: '0 0 12px 0' },
  modalDesc: { color: '#666', fontSize: '13px', lineHeight: '1.7', margin: '0 0 28px 0' },
  modalBtns: { display: 'flex', gap: '12px', justifyContent: 'center' },
  modalDeleteBtn: {
    backgroundColor: '#dc2626', color: '#ffffff', border: 'none',
    borderRadius: '10px', padding: '10px 24px', fontSize: '13px',
    fontWeight: '700', cursor: 'pointer', transition: 'background-color 0.2s',
  },
  modalCancelBtn: {
    backgroundColor: 'transparent', color: '#555',
    border: '1px solid rgba(0,0,0,0.15)', borderRadius: '10px',
    padding: '10px 24px', fontSize: '13px', fontWeight: '600',
    cursor: 'pointer', transition: 'border-color 0.2s',
  },
  header: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px',
    backgroundColor: '#ffffff', border: '1.5px solid rgba(0,180,216,0.3)',
    borderRadius: '16px', padding: '24px 28px',
    boxShadow: '0 2px 12px rgba(0,180,216,0.08)',
  },
  headerLeft: { display: 'flex', alignItems: 'center', gap: '14px' },
  headerIconWrapper: {
    width: '48px', height: '48px', borderRadius: '12px',
    backgroundColor: 'rgba(0,180,216,0.1)',
    border: '1.5px solid rgba(0,180,216,0.3)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  },
  welcome: { fontSize: '22px', fontWeight: '800', margin: '0 0 4px 0', color: '#1a1a1a' },
  userName: { color: '#FF6B00' },
  subtitle: { color: '#666', fontSize: '13px', margin: 0 },
  logoutBtn: {
    backgroundColor: 'transparent', border: '1.5px solid rgba(220,38,38,0.4)',
    color: '#dc2626', padding: '9px 18px', borderRadius: '10px',
    cursor: 'pointer', fontSize: '13px', fontWeight: '600',
    display: 'flex', alignItems: 'center', gap: '6px',
    transition: 'all 0.2s ease',
  },
  resultCard: {
    backgroundColor: '#ffffff', border: '1.5px solid rgba(0,180,216,0.3)',
    borderRadius: '16px', padding: '28px', marginBottom: '28px',
    boxShadow: '0 2px 12px rgba(0,180,216,0.06)',
  },
  cardTitle: {
    color: '#00b4d8', fontSize: '12px', fontWeight: '700',
    textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 16px 0',
  },
  resultInner: {
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px',
  },
  resultBadge: {
    border: '1.5px solid', borderRadius: '10px', padding: '10px 20px',
    fontSize: '14px', fontWeight: '700',
    display: 'flex', alignItems: 'center', gap: '8px',
  },
  resultActions: { display: 'flex', gap: '10px', flexWrap: 'wrap' },
  viewBtn: {
    color: '#00b4d8', textDecoration: 'none', fontSize: '13px',
    fontWeight: '600', border: '1.5px solid rgba(0,180,216,0.35)',
    padding: '8px 16px', borderRadius: '8px',
    display: 'flex', alignItems: 'center', gap: '6px',
    transition: 'border-color 0.2s',
  },
  deleteBtn: {
    backgroundColor: 'transparent', color: '#dc2626',
    border: '1.5px solid rgba(220,38,38,0.35)', borderRadius: '8px',
    padding: '8px 16px', fontSize: '13px', fontWeight: '600', cursor: 'pointer',
    display: 'flex', alignItems: 'center', gap: '6px',
    transition: 'all 0.2s ease',
  },
  noResult: { textAlign: 'center', padding: '16px 0' },
  noResultText: { color: '#999', fontSize: '13px', marginBottom: '16px' },
  startBtn: {
    backgroundColor: '#FF6B00', color: '#ffffff', padding: '11px 24px',
    borderRadius: '10px', textDecoration: 'none', fontWeight: '700',
    fontSize: '13px', display: 'inline-block', transition: 'background-color 0.2s',
  },
  section: { marginBottom: '32px' },
  sectionTitle: {
    color: '#1a1a1a', fontSize: '15px', fontWeight: '700',
    marginBottom: '16px', paddingBottom: '10px',
    borderBottom: '2px solid rgba(0,180,216,0.25)',
  },
  actionsGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px',
  },
  actionCard: {
    backgroundColor: '#ffffff', border: '1.5px solid rgba(0,180,216,0.3)',
    borderRadius: '12px', padding: '20px 16px', textDecoration: 'none',
    textAlign: 'center', display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', gap: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    transition: 'all 0.2s ease', cursor: 'pointer',
  },
  actionIconWrapper: {
    width: '40px', height: '40px', borderRadius: '10px',
    backgroundColor: 'rgba(0,180,216,0.08)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  actionLabel: { color: '#333', fontSize: '12px', fontWeight: '600' },
  tipsGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px',
  },
  tipCard: {
    backgroundColor: '#ffffff', border: '1.5px solid rgba(0,180,216,0.28)',
    borderRadius: '12px', padding: '22px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    transition: 'box-shadow 0.25s ease',
  },
  tipTitle: { color: '#00b4d8', fontSize: '13px', fontWeight: '700', margin: '0 0 8px 0' },
  tipDesc: { color: '#666', fontSize: '13px', lineHeight: '1.6', margin: 0 },
  historyTable: {
    backgroundColor: '#ffffff', border: '1.5px solid rgba(0,180,216,0.3)',
    borderRadius: '12px', overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  },
  historyHeader: {
    display: 'grid', gridTemplateColumns: '1fr 1fr 1.5fr',
    padding: '12px 20px', backgroundColor: '#f0f9ff',
    color: '#00b4d8', fontSize: '12px', fontWeight: '700',
    textTransform: 'uppercase', letterSpacing: '0.8px',
    borderBottom: '1.5px solid rgba(0,180,216,0.2)',
  },
  historyRow: {
    display: 'grid', gridTemplateColumns: '1fr 1fr 1.5fr',
    padding: '14px 20px', borderTop: '1px solid rgba(0,180,216,0.1)',
    alignItems: 'center',
  },
  historyDate: { color: '#555', fontSize: '13px' },
  historyActionGroup: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
  historyViewBtn: {
    color: '#00b4d8', textDecoration: 'none', fontSize: '12px',
    fontWeight: '600', border: '1.5px solid rgba(0,180,216,0.3)',
    padding: '5px 12px', borderRadius: '6px',
    display: 'flex', alignItems: 'center', gap: '4px',
    transition: 'border-color 0.2s',
  },
  historyDeleteBtn: {
    backgroundColor: 'transparent', color: '#dc2626',
    border: '1.5px solid rgba(220,38,38,0.3)', borderRadius: '6px',
    padding: '5px 12px', fontSize: '12px', fontWeight: '600', cursor: 'pointer',
    display: 'flex', alignItems: 'center', gap: '4px',
    transition: 'all 0.2s ease',
  },
  noHistoryText: { color: '#999', fontSize: '13px' },
};

export default Dashboard;
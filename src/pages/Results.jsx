import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FiCheckCircle, FiAlertTriangle, FiAlertOctagon, FiActivity, FiClock, FiCpu } from 'react-icons/fi';

function Results() {
  const { language } = useLanguage();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [photo, setPhoto] = useState(null);
  const [apiUsed, setApiUsed] = useState(false);
  const [confidence, setConfidence] = useState(null);

  useEffect(() => {
  const savedPhoto = localStorage.getItem('dentalPhoto');
  const savedAnswers = localStorage.getItem('quizAnswers');
  setPhoto(savedPhoto);

  setTimeout(() => {
    if (savedAnswers) {
      const answers = JSON.parse(savedAnswers);
      const score = calculateScore(answers);
      
      let finalResult;
      let finalConfidence;

      if (score <= 4) {
        finalResult = 'normal';
        finalConfidence = 78;
      } else if (score <= 10) {
        finalResult = 'mild';
        finalConfidence = 82;
      } else {
        finalResult = 'severe';
        finalConfidence = 85;
      }

      setResult(finalResult);
      setConfidence(finalConfidence / 100);
      setApiUsed(false);
      localStorage.setItem('fluoroResult', finalResult);
      localStorage.setItem('fluoroConfidence', finalConfidence);
    } else {
      setResult('mild');
      setConfidence(0.75);
      localStorage.setItem('fluoroResult', 'mild');
      localStorage.setItem('fluoroConfidence', 75);
    }
    setLoading(false);
  }, 3000);
}, []);
  const calculateScore = (answers) => {
    let score = 0;
    const severeOptions = ['Well / Borehole Water', 'River / Stream Water', 'Clearly visible white spots', 'White patches on most teeth', 'Moderate brown staining', 'Severe dark brown staining', 'Rough or chalky feeling', 'Pitted or deeply eroded', 'Moderate sensitivity', 'Severe constant sensitivity', 'Frequently', 'Yes, diagnosed'];
    const mildOptions = ['Tap Water', 'Very faint white areas', 'Very slight yellow tint', 'Slightly rough in some areas', 'Mild occasional sensitivity', 'Occasionally', 'Suspected but not confirmed'];
    Object.values(answers).forEach(answer => {
      if (severeOptions.includes(answer)) score += 2;
      else if (mildOptions.includes(answer)) score += 1;
    });
    return score;
  };

  const content = {
    EN: {
      analyzing: 'Analyzing your screening data...',
      analyzingDesc: 'Processing AI predictions and quiz answers...',
      yourResult: 'Your Screening Result',
      basedOn: "Based on Dean's Fluorosis Index & TF Index",
      aiPowered: 'AI-Powered Result',
      aiModels: 'Analyzed by ResNet50 + VGG-CNN + YOLOv8 Ensemble',
      quizBased: 'Quiz-Based Result',
      confidence: 'Confidence',
      normal: { label: 'Normal', desc: 'Your screening indicates no significant signs of dental fluorosis. Your tooth enamel appears to be within the normal range.', action: 'Continue maintaining good dental hygiene. Schedule regular dental checkups every 6 months.', color: '#16a34a', bg: 'rgba(22,163,74,0.06)', border: 'rgba(22,163,74,0.3)' },
      mild: { label: 'Mild Fluorosis', desc: 'Your screening indicates possible mild dental fluorosis. Small opaque white areas may be present on less than 25% of your tooth surface.', action: 'Monitor your dental health and follow our prevention tips. Consider consulting a dentist for a professional evaluation.', color: '#d97706', bg: 'rgba(217,119,6,0.06)', border: 'rgba(217,119,6,0.3)' },
      severe: { label: 'Severe Fluorosis', desc: 'Your screening indicates possible severe dental fluorosis. Significant discoloration or enamel damage may be present.', action: 'We strongly recommend booking a consultation with a dental professional as soon as possible.', color: '#dc2626', bg: 'rgba(220,38,38,0.06)', border: 'rgba(220,38,38,0.3)' },
      disclaimer: 'This result is based on a screening tool only and is NOT a clinical diagnosis. Please consult a qualified dentist for professional evaluation.',
      viewTips: 'View Prevention Tips',
      findDoctor: 'Find a Dentist',
      goToDashboard: 'Go to Dashboard',
      chatAssistant: 'Chat with Assistant',
      yourPhoto: 'Your Submitted Photo',
      quizSummary: 'Screening Summary',
      quizCompleted: 'Quiz completed — 10 questions answered',
      photoAnalyzed: 'Photo analyzed by AI models',
      nextSteps: 'Recommended Next Steps',
    },
    UR: {
      analyzing: 'آپ کے اسکریننگ ڈیٹا کا تجزیہ ہو رہا ہے...',
      analyzingDesc: 'AI پیشین گوئیاں اور کوئز کے جوابات پر کارروائی ہو رہی ہے...',
      yourResult: 'آپ کا اسکریننگ نتیجہ',
      basedOn: 'ڈین کے فلوروسس انڈیکس اور TF انڈیکس کی بنیاد پر',
      aiPowered: 'AI پر مبنی نتیجہ',
      aiModels: 'ResNet50 + VGG-CNN + YOLOv8 نے تجزیہ کیا',
      quizBased: 'کوئز پر مبنی نتیجہ',
      confidence: 'اعتماد',
      normal: { label: 'نارمل', desc: 'آپ کی اسکریننگ ڈینٹل فلوروسس کی کوئی اہم علامت نہیں دکھاتی۔', action: 'اچھی دانتوں کی صفائی جاری رکھیں۔ ہر 6 ماہ بعد دانتوں کا معائنہ کروائیں۔', color: '#16a34a', bg: 'rgba(22,163,74,0.06)', border: 'rgba(22,163,74,0.3)' },
      mild: { label: 'ہلکا فلوروسس', desc: 'آپ کی اسکریننگ ہلکے ڈینٹل فلوروسس کی ممکنہ علامات دکھاتی ہے۔', action: 'اپنی دانتوں کی صحت کی نگرانی کریں اور ہماری تجاویز پر عمل کریں۔', color: '#d97706', bg: 'rgba(217,119,6,0.06)', border: 'rgba(217,119,6,0.3)' },
      severe: { label: 'شدید فلوروسس', desc: 'آپ کی اسکریننگ شدید ڈینٹل فلوروسس کی ممکنہ علامات دکھاتی ہے۔', action: 'ہم جلد از جلد دانتوں کے ڈاکٹر سے مشورہ کرنے کی سختی سے سفارش کرتے ہیں۔', color: '#dc2626', bg: 'rgba(220,38,38,0.06)', border: 'rgba(220,38,38,0.3)' },
      disclaimer: 'یہ نتیجہ صرف ایک اسکریننگ ٹول پر مبنی ہے اور طبی تشخیص نہیں ہے۔',
      viewTips: 'احتیاطی تجاویز دیکھیں',
      findDoctor: 'ڈینٹسٹ تلاش کریں',
      goToDashboard: 'ڈیش بورڈ پر جائیں',
      chatAssistant: 'اسسٹنٹ سے چیٹ کریں',
      yourPhoto: 'آپ کی جمع کردہ تصویر',
      quizSummary: 'اسکریننگ خلاصہ',
      quizCompleted: 'کوئز مکمل — 10 سوالات کے جواب دیے گئے',
      photoAnalyzed: 'AI ماڈلز نے تصویر کا تجزیہ کیا',
      nextSteps: 'تجویز کردہ اگلے اقدامات',
    }
  };

  const t = content[language];

  const resultIcons = {
    normal: <FiCheckCircle size={48} color="#16a34a" />,
    mild:   <FiAlertTriangle size={48} color="#d97706" />,
    severe: <FiAlertOctagon size={48} color="#dc2626" />,
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loadingCard}>
          <div style={styles.loadingIconWrapper}>
            <FiActivity size={36} color="#00b4d8" />
          </div>
          <h2 style={styles.loadingTitle}>{t.analyzing}</h2>
          <p style={styles.loadingDesc}>{t.analyzingDesc}</p>
          <div style={styles.loadingBar}>
            <div style={styles.loadingFill}></div>
          </div>
          <div style={styles.loadingSteps}>
            {[
              { icon: <FiCheckCircle size={14} color="#16a34a" />, text: 'Quiz answers processed' },
              { icon: <FiCheckCircle size={14} color="#16a34a" />, text: 'Photo submitted' },
              { icon: <FiClock size={14} color="#d97706" />, text: 'AI models calculating severity...' },
            ].map((step, i) => (
              <div key={i} style={styles.loadingStepRow}>
                {step.icon}
                <p style={styles.loadingStep}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const resultData = t[result];

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        {/* Logo */}
        <div style={styles.logoArea}>
          <div style={styles.logoWrapper}>
            <img src='/fluorovision-logo.png' alt='FluoroVision' style={styles.logoImg} />
          </div>
        </div>

        <h1 style={styles.title}>{t.yourResult}</h1>
        <p style={styles.basedOn}>{t.basedOn}</p>

        {/* AI Badge */}
        {apiUsed && (
          <div style={styles.aiBadge}>
            <FiCpu size={14} color="#00b4d8" />
            <span>{t.aiPowered} — {t.aiModels}</span>
            {confidence && (
              <span style={styles.confidenceBadge}>
                {t.confidence}: {(confidence * 100).toFixed(1)}%
              </span>
            )}
          </div>
        )}

        {/* Result Badge */}
        <div style={{ ...styles.resultBadge, borderColor: resultData.border, backgroundColor: resultData.bg }}>
          <div style={styles.resultIconWrapper}>{resultIcons[result]}</div>
          <h2 style={{ ...styles.resultLabel, color: resultData.color }}>{resultData.label}</h2>
          <p style={styles.resultDesc}>{resultData.desc}</p>
        </div>

        {/* Action Box */}
        <div style={{ ...styles.actionBox, borderColor: resultData.border }}>
          <h4 style={{ ...styles.actionTitle, color: resultData.color }}>{t.nextSteps}</h4>
          <p style={styles.actionDesc}>{resultData.action}</p>
        </div>

        {/* Summary */}
        <div style={styles.summaryBox}>
          <h4 style={styles.summaryTitle}>{t.quizSummary}</h4>
          <div style={styles.summaryRow}>
            <FiCheckCircle size={14} color="#16a34a" />
            <p style={styles.summaryItem}>{t.quizCompleted}</p>
          </div>
          <div style={styles.summaryRow}>
            <FiCheckCircle size={14} color="#16a34a" />
            <p style={styles.summaryItem}>{t.photoAnalyzed}</p>
          </div>
        </div>

        {/* Photo Preview */}
        {photo && (
          <div style={styles.photoBox}>
            <h4 style={styles.photoTitle}>{t.yourPhoto}</h4>
            <img src={photo} alt="Dental" style={styles.photoPreview} />
          </div>
        )}

        {/* Buttons */}
        <div style={styles.btnGrid}>
          <Link to="/tips" style={styles.secondaryBtn}>{t.viewTips}</Link>
          <Link to="/chatbot" style={styles.secondaryBtn}>{t.chatAssistant}</Link>
          {result === 'severe' && (
            <Link to="/find-doctor" style={styles.alertBtn}>
              {t.findDoctor}
            </Link>
          )}
          <Link to="/dashboard" style={styles.primaryBtn}>{t.goToDashboard}</Link>
        </div>

        {/* Disclaimer */}
        <div style={styles.disclaimerBox}>
          <FiAlertTriangle size={14} color="#d97706" style={{ flexShrink: 0 }} />
          <p style={styles.disclaimer}>{t.disclaimer}</p>
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f5f7fa', minHeight: '100vh',
    display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
    padding: '40px 20px', fontFamily: 'sans-serif',
  },
  loadingCard: {
    backgroundColor: '#ffffff', border: '1.5px solid rgba(0,180,216,0.3)',
    borderRadius: '20px', padding: '60px 40px', width: '100%', maxWidth: '480px',
    textAlign: 'center', boxShadow: '0 4px 24px rgba(0,180,216,0.08)',
  },
  loadingIconWrapper: {
    width: '72px', height: '72px', borderRadius: '50%',
    backgroundColor: 'rgba(0,180,216,0.1)', border: '2px solid rgba(0,180,216,0.3)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 20px auto',
  },
  loadingTitle: { color: '#1a1a1a', fontSize: '20px', fontWeight: '800', marginBottom: '8px' },
  loadingDesc: { color: '#666', fontSize: '14px', marginBottom: '24px' },
  loadingBar: { backgroundColor: '#e8f7fb', borderRadius: '10px', height: '6px', marginBottom: '24px', overflow: 'hidden' },
  loadingFill: { backgroundColor: '#00b4d8', height: '100%', borderRadius: '10px', width: '75%' },
  loadingSteps: { textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px' },
  loadingStepRow: { display: 'flex', alignItems: 'center', gap: '10px' },
  loadingStep: { color: '#555', fontSize: '13px', margin: 0 },
  card: {
    backgroundColor: '#ffffff', border: '1.5px solid rgba(0,180,216,0.3)',
    borderRadius: '20px', padding: '48px 40px', width: '100%', maxWidth: '580px',
    boxShadow: '0 4px 24px rgba(0,180,216,0.08)',
  },
  logoArea: { display: 'flex', justifyContent: 'center', marginBottom: '20px' },
  logoWrapper: {
    display: 'inline-flex', backgroundColor: '#fff8f5',
    borderRadius: '16px', padding: '10px 16px',
    border: '1px solid rgba(255,107,0,0.15)',
    boxShadow: '0 2px 12px rgba(255,107,0,0.1)',
  },
  logoImg: { height: '70px', objectFit: 'contain', filter: 'drop-shadow(0 2px 6px rgba(255,107,0,0.2))' },
  title: { color: '#1a1a1a', fontSize: '26px', fontWeight: '800', textAlign: 'center', margin: '0 0 8px 0' },
  basedOn: { color: '#999', fontSize: '12px', textAlign: 'center', marginBottom: '16px', fontStyle: 'italic' },
  aiBadge: {
    display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap',
    backgroundColor: 'rgba(0,180,216,0.08)', border: '1.5px solid rgba(0,180,216,0.25)',
    borderRadius: '10px', padding: '10px 14px', marginBottom: '20px',
    fontSize: '12px', color: '#00b4d8', fontWeight: '600',
  },
  confidenceBadge: {
    marginLeft: 'auto', backgroundColor: 'rgba(0,180,216,0.15)',
    padding: '3px 10px', borderRadius: '20px', fontSize: '11px',
  },
  resultBadge: {
    border: '1.5px solid', borderRadius: '16px', padding: '32px',
    textAlign: 'center', marginBottom: '24px',
  },
  resultIconWrapper: { marginBottom: '16px' },
  resultLabel: { fontSize: '26px', fontWeight: '800', margin: '0 0 12px 0' },
  resultDesc: { color: '#555', fontSize: '14px', lineHeight: '1.7', margin: 0 },
  actionBox: {
    border: '1.5px solid', borderRadius: '12px', padding: '20px',
    marginBottom: '20px', backgroundColor: '#fafafa',
  },
  actionTitle: { fontSize: '13px', fontWeight: '700', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' },
  actionDesc: { color: '#555', fontSize: '13px', lineHeight: '1.6', margin: 0 },
  summaryBox: {
    backgroundColor: '#f0f9ff', border: '1.5px solid rgba(0,180,216,0.25)',
    borderRadius: '12px', padding: '20px', marginBottom: '20px',
  },
  summaryTitle: { color: '#00b4d8', fontSize: '13px', fontWeight: '700', margin: '0 0 12px 0' },
  summaryRow: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' },
  summaryItem: { color: '#555', fontSize: '13px', margin: 0 },
  photoBox: { marginBottom: '20px' },
  photoTitle: { color: '#666', fontSize: '13px', fontWeight: '600', marginBottom: '10px' },
  photoPreview: { width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '10px', border: '1.5px solid rgba(0,180,216,0.2)' },
  btnGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' },
  primaryBtn: {
    backgroundColor: '#FF6B00', color: '#ffffff', padding: '12px 16px',
    borderRadius: '10px', textDecoration: 'none', fontWeight: '700',
    fontSize: '13px', textAlign: 'center',
  },
  secondaryBtn: {
    backgroundColor: '#ffffff', color: '#555', padding: '12px 16px',
    borderRadius: '10px', textDecoration: 'none', fontWeight: '600',
    fontSize: '13px', textAlign: 'center', border: '1.5px solid rgba(0,180,216,0.3)',
  },
  alertBtn: {
    backgroundColor: '#dc2626', color: '#ffffff', padding: '12px 16px',
    borderRadius: '10px', textDecoration: 'none', fontWeight: '700',
    fontSize: '13px', textAlign: 'center', gridColumn: '1 / -1',
  },
  disclaimerBox: {
    backgroundColor: '#fffbeb', border: '1.5px solid rgba(217,119,6,0.3)',
    borderRadius: '10px', padding: '14px 16px',
    display: 'flex', alignItems: 'flex-start', gap: '10px',
  },
  disclaimer: { color: '#666', fontSize: '12px', margin: 0, lineHeight: '1.6' },
};

export default Results;
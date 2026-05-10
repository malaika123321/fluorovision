import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FiBookOpen } from 'react-icons/fi';

function Quiz() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);

  const questions = {
    EN: [
      { id: 1, question: "What is your primary source of drinking water?", reference: "Systematic Review on Water Fluoride Levels — MDPI 2023", options: ["Tap Water", "Well / Borehole Water", "Bottled Water", "Filtered Water", "River / Stream Water"] },
      { id: 2, question: "During childhood (ages 0–8), where did you primarily live?", reference: "StatPearls — NIH, Fluorosis Critical Window", options: ["Rural area with well water", "Urban area with tap water", "Area with known high fluoride", "Not sure"] },
      { id: 3, question: "Do you notice any white spots or white lines on your teeth?", reference: "Dean's Fluorosis Index — CDC NHANES", options: ["No white spots at all", "Very faint white areas", "Clearly visible white spots", "White patches on most teeth"] },
      { id: 4, question: "Do you notice any brown or yellow staining on your teeth?", reference: "Thylstrup-Fejerkov (TF) Index", options: ["No discoloration", "Very slight yellow tint", "Moderate brown staining", "Severe dark brown staining"] },
      { id: 5, question: "How would you describe the surface texture of your teeth?", reference: "TSIF Index — Clinical Fluorosis Assessment", options: ["Smooth and normal", "Slightly rough in some areas", "Rough or chalky feeling", "Pitted or deeply eroded"] },
      { id: 6, question: "Do your teeth feel sensitive to hot or cold temperatures?", reference: "Clinical Fluorosis Symptoms — StatPearls NIH", options: ["No sensitivity at all", "Mild occasional sensitivity", "Moderate sensitivity", "Severe constant sensitivity"] },
      { id: 7, question: "How many times do you brush your teeth per day?", reference: "Fluoride Intake Risk Factors — NIH", options: ["Rarely or never", "Once a day", "Twice a day", "Three or more times"] },
      { id: 8, question: "As a child, did you swallow toothpaste while brushing?", reference: "Fluoride Intake via Toothpaste — StatPearls NIH", options: ["Never", "Occasionally", "Frequently", "Not sure"] },
      { id: 9, question: "Does anyone else in your household show similar dental symptoms?", reference: "Epidemiological Fluorosis Studies — Nature Index", options: ["No, only me", "One other person", "Multiple family members", "Not sure"] },
      { id: 10, question: "Have you ever been told by a dentist that you may have dental fluorosis?", reference: "Clinical Differential Diagnosis — PMC", options: ["No, never", "Not sure", "Suspected but not confirmed", "Yes, diagnosed"] },
    ],
    UR: [
      { id: 1, question: "آپ کے پینے کے پانی کا بنیادی ذریعہ کیا ہے؟", reference: "MDPI 2023 — پانی میں فلورائیڈ کی سطح", options: ["نل کا پانی", "کنویں / بورہول کا پانی", "بوتل کا پانی", "فلٹر شدہ پانی", "دریا / نہر کا پانی"] },
      { id: 2, question: "بچپن میں (0-8 سال) آپ بنیادی طور پر کہاں رہتے تھے؟", reference: "NIH StatPearls — فلوروسس کی نازک مدت", options: ["دیہی علاقہ کنویں کے پانی کے ساتھ", "شہری علاقہ نل کے پانی کے ساتھ", "زیادہ فلورائیڈ والا علاقہ", "یقین نہیں"] },
      { id: 3, question: "کیا آپ کے دانتوں پر سفید دھبے یا لکیریں ہیں؟", reference: "ڈین کا فلوروسس انڈیکس — CDC NHANES", options: ["کوئی سفید دھبے نہیں", "بہت ہلکے سفید علاقے", "واضح سفید دھبے", "زیادہ تر دانتوں پر سفید دھبے"] },
      { id: 4, question: "کیا آپ کے دانتوں پر بھورے یا پیلے داغ ہیں؟", reference: "Thylstrup-Fejerkov (TF) انڈیکس", options: ["کوئی رنگت نہیں", "بہت ہلکا پیلا رنگ", "اعتدال پسند بھورے داغ", "شدید گہرے بھورے داغ"] },
      { id: 5, question: "آپ کے دانتوں کی سطح کی ساخت کیسی ہے؟", reference: "TSIF انڈیکس — طبی فلوروسس تشخیص", options: ["ہموار اور نارمل", "کچھ جگہوں پر قدرے کھردری", "کھردری یا چاکی احساس", "گڑھے یا گہری کٹاؤ"] },
      { id: 6, question: "کیا آپ کے دانت گرم یا ٹھنڈے درجہ حرارت کے لیے حساس ہیں؟", reference: "NIH StatPearls — فلوروسس کی علامات", options: ["کوئی حساسیت نہیں", "ہلکی کبھی کبھار حساسیت", "اعتدال پسند حساسیت", "شدید مسلسل حساسیت"] },
      { id: 7, question: "آپ روزانہ کتنی بار دانت صاف کرتے ہیں؟", reference: "NIH — فلورائیڈ کی مقدار کے خطرات", options: ["شاید ہی کبھی یا کبھی نہیں", "دن میں ایک بار", "دن میں دو بار", "تین یا زیادہ بار"] },
      { id: 8, question: "کیا آپ بچپن میں برش کرتے وقت ٹوتھ پیسٹ نگل لیتے تھے؟", reference: "NIH StatPearls — ٹوتھ پیسٹ سے فلورائیڈ", options: ["کبھی نہیں", "کبھی کبھی", "اکثر", "یقین نہیں"] },
      { id: 9, question: "کیا آپ کے گھر میں کسی اور کو بھی ایسی علامات ہیں؟", reference: "Nature Index — فلوروسس وبائی مطالعات", options: ["نہیں، صرف میں", "ایک اور شخص", "کئی خاندان کے افراد", "یقین نہیں"] },
      { id: 10, question: "کیا کسی دانتوں کے ڈاکٹر نے آپ کو ڈینٹل فلوروسس کا شبہ بتایا ہے؟", reference: "PMC — طبی تشخیص", options: ["نہیں، کبھی نہیں", "یقین نہیں", "شبہ ہے لیکن تصدیق نہیں", "ہاں، تشخیص ہو چکی ہے"] },
    ]
  };

  const qs = questions[language];
  const current = qs[currentQuestion];
  const totalQuestions = qs.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleSelect = (option) => setSelected(option);

  const handleNext = () => {
    if (!selected) return;
    const newAnswers = { ...answers, [current.id]: selected };
    setAnswers(newAnswers);
    setSelected(null);
    if (currentQuestion + 1 < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      localStorage.setItem('quizAnswers', JSON.stringify(newAnswers));
      // sessionStorage mein mark karo k quiz is session mein complete hui
      sessionStorage.setItem('quizDoneThisSession', 'true');
      navigate('/upload');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelected(answers[qs[currentQuestion - 1].id] || null);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        {/* Logo */}
        <div style={styles.logoArea}>
          <div style={styles.logoWrapper}>
            <img src='/fluorovision-logo.png' alt='FluoroVision' style={styles.logoImg} />
          </div>
        </div>

        {/* Progress */}
        <div style={styles.progressInfo}>
          <span style={styles.progressLabel}>
            {language === 'EN' ? `Question ${currentQuestion + 1} of ${totalQuestions}` : `سوال ${currentQuestion + 1} از ${totalQuestions}`}
          </span>
          <span style={styles.progressPercent}>{Math.round(progress)}%</span>
        </div>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${progress}%` }}></div>
        </div>
        <p style={styles.stepText}>
          {language === 'EN' ? 'Step 2 of 3 — Clinical Screening Quiz' : 'مرحلہ 2 از 3 — طبی اسکریننگ کوئز'}
        </p>

        {/* Question */}
        <div style={styles.questionBox}>
          <h2 style={styles.question}>{current.question}</h2>
          <div style={styles.referenceRow}>
            <FiBookOpen size={12} color="#00b4d8" />
            <p style={styles.reference}>{current.reference}</p>
          </div>
        </div>

        {/* Options */}
        <div style={styles.optionsGrid}>
          {current.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              style={{
                ...styles.optionBtn,
                backgroundColor: selected === option ? 'rgba(0,180,216,0.08)' : '#ffffff',
                borderColor: selected === option ? '#00b4d8' : 'rgba(0,180,216,0.25)',
                color: selected === option ? '#00b4d8' : '#333',
              }}
              onMouseEnter={e => {
                if (selected !== option) {
                  e.currentTarget.style.borderColor = '#00b4d8';
                  e.currentTarget.style.backgroundColor = 'rgba(0,180,216,0.04)';
                }
              }}
              onMouseLeave={e => {
                if (selected !== option) {
                  e.currentTarget.style.borderColor = 'rgba(0,180,216,0.25)';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }
              }}
            >
              <span style={{
                ...styles.optionLetter,
                backgroundColor: selected === option ? 'rgba(0,180,216,0.15)' : 'rgba(0,180,216,0.08)',
                color: selected === option ? '#00b4d8' : '#555',
              }}>
                {String.fromCharCode(65 + index)}
              </span>
              {option}
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div style={styles.navRow}>
          <button
            onClick={handleBack}
            disabled={currentQuestion === 0}
            style={{ ...styles.backBtn, opacity: currentQuestion === 0 ? 0.4 : 1 }}
            onMouseEnter={e => { if (currentQuestion !== 0) e.currentTarget.style.borderColor = '#00b4d8'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,180,216,0.3)'; }}
          >
            ← {language === 'EN' ? 'Back' : 'واپس'}
          </button>
          <button
            onClick={handleNext}
            disabled={!selected}
            style={{ ...styles.nextBtn, opacity: !selected ? 0.5 : 1 }}
            onMouseEnter={e => { if (selected) e.currentTarget.style.backgroundColor = '#e55f00'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#FF6B00'; }}
          >
            {currentQuestion + 1 === totalQuestions
              ? (language === 'EN' ? 'Finish & Upload Photo →' : 'مکمل کریں اور تصویر اپ لوڈ کریں →')
              : (language === 'EN' ? 'Next →' : 'اگلا →')}
          </button>
        </div>

        {/* Disclaimer */}
        <p style={styles.disclaimer}>
          {language === 'EN'
            ? 'These questions are based on validated clinical fluorosis indices and peer-reviewed research. This is not a medical diagnosis.'
            : 'یہ سوالات تسلیم شدہ طبی فلوروسس انڈیکس اور تحقیق پر مبنی ہیں۔ یہ طبی تشخیص نہیں ہے۔'}
        </p>
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
  card: {
    backgroundColor: '#ffffff', border: '1.5px solid rgba(0,180,216,0.3)',
    borderRadius: '20px', padding: '48px 40px', width: '100%', maxWidth: '620px',
    boxShadow: '0 4px 24px rgba(0,180,216,0.08)',
  },
  logoArea: { display: 'flex', justifyContent: 'center', marginBottom: '24px' },
  logoWrapper: {
    display: 'inline-flex', backgroundColor: '#fff8f5',
    borderRadius: '16px', padding: '10px 16px',
    border: '1px solid rgba(255,107,0,0.15)',
    boxShadow: '0 2px 12px rgba(255,107,0,0.1)',
  },
  logoImg: { height: '70px', objectFit: 'contain', filter: 'drop-shadow(0 2px 6px rgba(255,107,0,0.2))' },
  progressInfo: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px' },
  progressLabel: { color: '#666', fontSize: '13px' },
  progressPercent: { color: '#00b4d8', fontSize: '13px', fontWeight: '700' },
  progressBar: { backgroundColor: '#e8f7fb', borderRadius: '10px', height: '6px', marginBottom: '8px' },
  progressFill: { backgroundColor: '#00b4d8', height: '100%', borderRadius: '10px', transition: 'width 0.3s ease' },
  stepText: { color: '#999', fontSize: '12px', textAlign: 'center', marginBottom: '24px' },
  questionBox: {
    backgroundColor: '#f0f9ff', border: '1.5px solid rgba(0,180,216,0.25)',
    borderRadius: '14px', padding: '24px', marginBottom: '24px',
  },
  question: { color: '#1a1a1a', fontSize: '17px', fontWeight: '700', margin: '0 0 12px 0', lineHeight: '1.5' },
  referenceRow: { display: 'flex', alignItems: 'center', gap: '6px' },
  reference: { color: '#00b4d8', fontSize: '11px', margin: 0, fontStyle: 'italic' },
  optionsGrid: { display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' },
  optionBtn: {
    display: 'flex', alignItems: 'center', gap: '14px',
    border: '1.5px solid', borderRadius: '10px', padding: '13px 18px',
    cursor: 'pointer', fontSize: '14px', textAlign: 'left',
    transition: 'all 0.2s ease', fontFamily: 'sans-serif',
  },
  optionLetter: {
    width: '28px', height: '28px', borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '12px', fontWeight: '700', flexShrink: 0,
    transition: 'all 0.2s ease',
  },
  navRow: { display: 'flex', justifyContent: 'space-between', gap: '16px' },
  backBtn: {
    backgroundColor: 'transparent', border: '1.5px solid rgba(0,180,216,0.3)',
    color: '#555', padding: '12px 24px', borderRadius: '10px',
    cursor: 'pointer', fontSize: '14px', fontFamily: 'sans-serif',
    transition: 'border-color 0.2s',
  },
  nextBtn: {
    backgroundColor: '#FF6B00', color: '#ffffff',
    border: 'none', padding: '12px 28px', borderRadius: '10px',
    cursor: 'pointer', fontSize: '14px', fontWeight: '700',
    fontFamily: 'sans-serif', flex: 1, transition: 'background-color 0.2s',
  },
  disclaimer: { color: '#999', fontSize: '11px', textAlign: 'center', marginTop: '20px', lineHeight: '1.6' },
};

export default Quiz;
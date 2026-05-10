import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FiUser, FiClipboard } from 'react-icons/fi';

function Profile() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: '', gender: '', height: '', weight: '', region: '', waterSource: '', fluorideSupplements: ''
  });
  const [errors, setErrors] = useState({});

  const content = {
    EN: {
      title: 'Set Up Your Profile',
      subtitle: 'This information helps us personalize your fluorosis screening accurately.',
      age: 'Age (years)', agePlaceholder: 'Enter your age',
      gender: 'Gender', genderPlaceholder: 'Select gender',
      male: 'Male', female: 'Female', other: 'Other',
      height: 'Height (cm)', heightPlaceholder: 'Enter your height',
      weight: 'Weight (kg)', weightPlaceholder: 'Enter your weight',
      region: 'Region / City', regionPlaceholder: 'e.g. Lahore, Karachi',
      waterSource: 'Primary Water Source', waterPlaceholder: 'Select water source',
      tapWater: 'Tap Water', wellWater: 'Well / Borehole Water',
      bottledWater: 'Bottled Water', filteredWater: 'Filtered Water', riverWater: 'River / Stream Water',
      fluoride: 'Did you take fluoride supplements as a child (0-8 years)?',
      fluoridePlaceholder: 'Select an option', yes: 'Yes', no: 'No', notSure: 'Not Sure',
      submit: 'Save & Continue to Screening',
      note: 'This information is used only for screening purposes and is kept confidential.',
    },
    UR: {
      title: 'اپنا پروفائل ترتیب دیں',
      subtitle: 'یہ معلومات آپ کی فلوروسس اسکریننگ کو درست بنانے میں مدد کرتی ہیں۔',
      age: 'عمر (سال)', agePlaceholder: 'اپنی عمر درج کریں',
      gender: 'جنس', genderPlaceholder: 'جنس منتخب کریں',
      male: 'مرد', female: 'عورت', other: 'دیگر',
      height: 'قد (سینٹی میٹر)', heightPlaceholder: 'اپنا قد درج کریں',
      weight: 'وزن (کلوگرام)', weightPlaceholder: 'اپنا وزن درج کریں',
      region: 'علاقہ / شہر', regionPlaceholder: 'مثلاً لاہور، کراچی',
      waterSource: 'پانی کا بنیادی ذریعہ', waterPlaceholder: 'پانی کا ذریعہ منتخب کریں',
      tapWater: 'نل کا پانی', wellWater: 'کنویں / بورہول کا پانی',
      bottledWater: 'بوتل کا پانی', filteredWater: 'فلٹر شدہ پانی', riverWater: 'دریا / نہر کا پانی',
      fluoride: 'کیا آپ نے بچپن میں (0-8 سال) فلورائیڈ سپلیمنٹس لیے؟',
      fluoridePlaceholder: 'ایک آپشن منتخب کریں', yes: 'ہاں', no: 'نہیں', notSure: 'یقین نہیں',
      submit: 'محفوظ کریں اور اسکریننگ جاری رکھیں',
      note: 'یہ معلومات صرف اسکریننگ کے مقاصد کے لیے استعمال ہوتی ہیں اور خفیہ رکھی جاتی ہیں۔',
    }
  };

  const t = content[language];

  const validate = () => {
    const newErrors = {};
    if (!formData.age) newErrors.age = 'Age is required';
    else if (formData.age < 1 || formData.age > 120) newErrors.age = 'Enter a valid age';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.height) newErrors.height = 'Height is required';
    if (!formData.weight) newErrors.weight = 'Weight is required';
    if (!formData.waterSource) newErrors.waterSource = 'Water source is required';
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    navigate('/quiz');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const inputStyle = (field) => ({
    width: '100%', backgroundColor: '#f8f9fa',
    border: `1.5px solid ${errors[field] ? '#ff4d4d' : 'rgba(0,180,216,0.3)'}`,
    borderRadius: '10px', padding: '12px 16px', color: '#1a1a1a',
    fontSize: '14px', outline: 'none', boxSizing: 'border-box',
    fontFamily: 'sans-serif',
  });

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        {/* Logo */}
        <div style={styles.logoArea}>
          <div style={styles.logoWrapper}>
            <img src='/fluorovision-logo.png' alt='FluoroVision' style={styles.logoImg} />
          </div>
        </div>

        <h1 style={styles.title}>{t.title}</h1>
        <p style={styles.subtitle}>{t.subtitle}</p>

        {/* Progress */}
        <div style={styles.progressBar}>
          <div style={styles.progressFill}></div>
        </div>
        <p style={styles.progressText}>
          {language === 'EN' ? 'Step 1 of 3 — Profile Setup' : 'مرحلہ 1 از 3 — پروفائل سیٹ اپ'}
        </p>

        {/* Age & Gender */}
        <div style={styles.row}>
          <div style={{ ...styles.field, flex: 1 }}>
            <label style={styles.label}>{t.age}</label>
            <input name="age" type="number" placeholder={t.agePlaceholder} value={formData.age} onChange={handleChange} style={inputStyle('age')} />
            {errors.age && <p style={styles.error}>{errors.age}</p>}
          </div>
          <div style={{ ...styles.field, flex: 1 }}>
            <label style={styles.label}>{t.gender}</label>
            <select name="gender" value={formData.gender} onChange={handleChange} style={inputStyle('gender')}>
              <option value="">{t.genderPlaceholder}</option>
              <option value="male">{t.male}</option>
              <option value="female">{t.female}</option>
              <option value="other">{t.other}</option>
            </select>
            {errors.gender && <p style={styles.error}>{errors.gender}</p>}
          </div>
        </div>

        {/* Height & Weight */}
        <div style={styles.row}>
          <div style={{ ...styles.field, flex: 1 }}>
            <label style={styles.label}>{t.height}</label>
            <input name="height" type="number" placeholder={t.heightPlaceholder} value={formData.height} onChange={handleChange} style={inputStyle('height')} />
            {errors.height && <p style={styles.error}>{errors.height}</p>}
          </div>
          <div style={{ ...styles.field, flex: 1 }}>
            <label style={styles.label}>{t.weight}</label>
            <input name="weight" type="number" placeholder={t.weightPlaceholder} value={formData.weight} onChange={handleChange} style={inputStyle('weight')} />
            {errors.weight && <p style={styles.error}>{errors.weight}</p>}
          </div>
        </div>

        {/* Region */}
        <div style={styles.field}>
          <label style={styles.label}>{t.region}</label>
          <input name="region" type="text" placeholder={t.regionPlaceholder} value={formData.region} onChange={handleChange} style={inputStyle('region')} />
        </div>

        {/* Water Source */}
        <div style={styles.field}>
          <label style={styles.label}>{t.waterSource}</label>
          <select name="waterSource" value={formData.waterSource} onChange={handleChange} style={inputStyle('waterSource')}>
            <option value="">{t.waterPlaceholder}</option>
            <option value="tap">{t.tapWater}</option>
            <option value="well">{t.wellWater}</option>
            <option value="bottled">{t.bottledWater}</option>
            <option value="filtered">{t.filteredWater}</option>
            <option value="river">{t.riverWater}</option>
          </select>
          {errors.waterSource && <p style={styles.error}>{errors.waterSource}</p>}
        </div>

        {/* Fluoride Supplements */}
        <div style={styles.field}>
          <label style={styles.label}>{t.fluoride}</label>
          <select name="fluorideSupplements" value={formData.fluorideSupplements} onChange={handleChange} style={inputStyle('fluorideSupplements')}>
            <option value="">{t.fluoridePlaceholder}</option>
            <option value="yes">{t.yes}</option>
            <option value="no">{t.no}</option>
            <option value="notSure">{t.notSure}</option>
          </select>
        </div>

        {/* Note */}
        <div style={styles.noteBox}>
          <FiClipboard size={14} color="#00b4d8" style={{ flexShrink: 0, marginTop: 2 }} />
          <p style={styles.noteText}>{t.note}</p>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          style={styles.submitBtn}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e55f00'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FF6B00'}
        >
          {t.submit} →
        </button>
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
    borderRadius: '20px', padding: '48px 40px', width: '100%', maxWidth: '560px',
    boxShadow: '0 4px 24px rgba(0,180,216,0.08)',
  },
  logoArea: { display: 'flex', justifyContent: 'center', marginBottom: '20px' },
  logoWrapper: {
    display: 'inline-flex', backgroundColor: '#fff8f5',
    borderRadius: '16px', padding: '10px 16px',
    border: '1px solid rgba(255,107,0,0.15)',
    boxShadow: '0 2px 12px rgba(255,107,0,0.1)',
  },
  logoImg: { height: '75px', objectFit: 'contain', filter: 'drop-shadow(0 2px 6px rgba(255,107,0,0.2))' },
  title: { color: '#1a1a1a', fontSize: '24px', fontWeight: '800', textAlign: 'center', margin: '0 0 8px 0' },
  subtitle: { color: '#666', fontSize: '13px', textAlign: 'center', margin: '0 0 24px 0', lineHeight: '1.6' },
  progressBar: { backgroundColor: '#e8f7fb', borderRadius: '10px', height: '6px', marginBottom: '8px' },
  progressFill: { backgroundColor: '#00b4d8', width: '33%', height: '100%', borderRadius: '10px' },
  progressText: { color: '#999', fontSize: '12px', textAlign: 'center', marginBottom: '28px' },
  row: { display: 'flex', gap: '16px' },
  field: { marginBottom: '20px' },
  label: { color: '#444', fontSize: '13px', fontWeight: '600', display: 'block', marginBottom: '8px' },
  error: { color: '#ff4d4d', fontSize: '12px', margin: '6px 0 0 0' },
  noteBox: {
    backgroundColor: 'rgba(0,180,216,0.05)', border: '1.5px solid rgba(0,180,216,0.2)',
    borderRadius: '10px', padding: '12px 16px', marginBottom: '24px',
    display: 'flex', alignItems: 'flex-start', gap: '8px',
  },
  noteText: { color: '#555', fontSize: '12px', margin: 0, lineHeight: '1.6' },
  submitBtn: {
    width: '100%', backgroundColor: '#FF6B00', color: '#ffffff',
    border: 'none', borderRadius: '10px', padding: '14px',
    fontSize: '15px', fontWeight: '700', cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
};

export default Profile;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FiEye, FiEyeOff, FiUser } from 'react-icons/fi';

const REGISTERED_USERS = [
  { email: 'test@test.com', password: 'password123' },
];

function Login() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');

  const content = {
    EN: {
      title: 'Welcome Back',
      subtitle: 'Login to continue your dental fluorosis screening',
      emailLabel: 'Email Address',
      emailPlaceholder: 'Enter your email',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter your password',
      forgotPassword: 'Forgot Password?',
      loginBtn: 'Login',
      guestBtn: 'Continue as Guest',
      noAccount: "Don't have an account?",
      register: 'Register here',
      disclaimer: 'FluoroVision is a screening tool only. Not a substitute for professional dental advice.',
      emailRequired: 'Email is required',
      emailInvalid: 'Enter a valid email address',
      passwordRequired: 'Password is required',
      passwordMin: 'Password must be at least 6 characters',
      wrongPassword: 'Incorrect password for this email. Please try again.',
      emailNotFound: 'No account found with this email. Please register first.',
      orText: 'OR',
    },
    UR: {
      title: 'خوش آمدید',
      subtitle: 'اپنی اسکریننگ جاری رکھنے کے لیے لاگ ان کریں',
      emailLabel: 'ای میل',
      emailPlaceholder: 'ای میل درج کریں',
      passwordLabel: 'پاس ورڈ',
      passwordPlaceholder: 'پاس ورڈ درج کریں',
      forgotPassword: 'پاس ورڈ بھول گئے؟',
      loginBtn: 'لاگ ان',
      guestBtn: 'بغیر اکاؤنٹ کے جاری رکھیں',
      noAccount: 'اکاؤنٹ نہیں ہے؟',
      register: 'یہاں رجسٹر کریں',
      disclaimer: 'FluoroVision صرف ایک اسکریننگ ٹول ہے۔ پیشہ ورانہ مشورے کا متبادل نہیں۔',
      emailRequired: 'ای میل ضروری ہے',
      emailInvalid: 'درست ای میل درج کریں',
      passwordRequired: 'پاس ورڈ ضروری ہے',
      passwordMin: 'پاس ورڈ کم از کم 6 حروف کا ہو',
      wrongPassword: 'اس ای میل کا پاس ورڈ غلط ہے۔ دوبارہ کوشش کریں۔',
      emailNotFound: 'اس ای میل سے کوئی اکاؤنٹ نہیں ملا۔ پہلے رجسٹر کریں۔',
      orText: 'یا',
    },
  };

  const t = content[language];

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = t.emailRequired;
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t.emailInvalid;
    if (!formData.password) newErrors.password = t.passwordRequired;
    else if (formData.password.length < 6) newErrors.password = t.passwordMin;
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setLoginError('');
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    const savedUsers = JSON.parse(localStorage.getItem('fluorovision_users') || '[]');
    const allUsers = [...REGISTERED_USERS, ...savedUsers];
    const userExists = allUsers.find(u => u.email === formData.email);
    if (!userExists) { setLoginError(t.emailNotFound); return; }
    if (userExists.password !== formData.password) { setLoginError(t.wrongPassword); return; }
    localStorage.setItem('fluorovision_user', JSON.stringify({ email: formData.email }));
    navigate('/dashboard');
  };

  const handleGuest = () => {
    localStorage.setItem('fluorovision_user', JSON.stringify({ email: 'guest@fluorovision.com', isGuest: true }));
    navigate('/dashboard');
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

        <h1 style={styles.title}>{t.title}</h1>
        <p style={styles.subtitle}>{t.subtitle}</p>

        {loginError && <div style={styles.loginError}>{loginError}</div>}

        {/* Email */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>{t.emailLabel}</label>
          <input
            type='email'
            name='email'
            placeholder={t.emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
            style={{ ...styles.input, borderColor: errors.email ? '#ff4d4d' : 'rgba(0,0,0,0.15)' }}
          />
          {errors.email && <p style={styles.errorText}>{errors.email}</p>}
        </div>

        {/* Password */}
        <div style={styles.fieldGroup}>
          <div style={styles.passwordHeader}>
            <label style={styles.label}>{t.passwordLabel}</label>
            <span style={styles.forgotLink}>{t.forgotPassword}</span>
          </div>
          <div style={styles.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder={t.passwordPlaceholder}
              value={formData.password}
              onChange={handleChange}
              style={{ ...styles.input, borderColor: errors.password ? '#ff4d4d' : 'rgba(0,0,0,0.15)', marginBottom: 0 }}
            />
            <button onClick={() => setShowPassword(!showPassword)} style={styles.eyeBtn}>
              {showPassword ? <FiEyeOff size={16} color="#999" /> : <FiEye size={16} color="#999" />}
            </button>
          </div>
          {errors.password && <p style={styles.errorText}>{errors.password}</p>}
        </div>

        {/* Login Button */}
        <button
          onClick={handleSubmit}
          style={styles.loginBtn}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e55f00'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FF6B00'}
        >
          {t.loginBtn}
        </button>

        {/* OR Divider */}
        <div style={styles.divider}>
          <div style={styles.dividerLine} />
          <span style={styles.dividerText}>{t.orText}</span>
          <div style={styles.dividerLine} />
        </div>

        {/* Guest Button */}
        <button
          onClick={handleGuest}
          style={styles.guestBtn}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#00b4d8'; e.currentTarget.style.color = '#00b4d8'; e.currentTarget.style.backgroundColor = 'rgba(0,180,216,0.05)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,180,216,0.3)'; e.currentTarget.style.color = '#555'; e.currentTarget.style.backgroundColor = 'transparent'; }}
        >
          <FiUser size={15} />
          {t.guestBtn}
        </button>

        {/* Register */}
        <p style={styles.registerText}>
          {t.noAccount} <Link to='/register' style={styles.registerLink}>{t.register}</Link>
        </p>

        {/* Disclaimer */}
        <p style={styles.disclaimer}>{t.disclaimer}</p>

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
    backgroundColor: '#ffffff', border: '1.5px solid rgba(0,180,216,0.25)',
    borderRadius: '20px', padding: '40px', width: '100%', maxWidth: '400px',
    boxShadow: '0 4px 24px rgba(0,180,216,0.08)',
    overflowY: 'auto',
  },
  logoArea: { display: 'flex', justifyContent: 'center', marginBottom: '20px' },
  logoWrapper: {
    display: 'inline-flex', backgroundColor: '#fff8f5',
    borderRadius: '16px', padding: '10px 16px',
    border: '1px solid rgba(255,107,0,0.15)',
    boxShadow: '0 2px 12px rgba(255,107,0,0.1)',
  },
  logoImg: {
    height: '80px', objectFit: 'contain',
    filter: 'drop-shadow(0 2px 6px rgba(255,107,0,0.2))',
  },
  title: { color: '#1a1a1a', fontSize: '24px', fontWeight: '800', textAlign: 'center', margin: '0 0 6px 0' },
  subtitle: { color: '#666', fontSize: '13px', textAlign: 'center', margin: '0 0 24px 0', lineHeight: '1.5' },
  loginError: {
    backgroundColor: '#fff0f0', border: '1px solid rgba(255,77,77,0.3)',
    borderRadius: '8px', padding: '12px 16px', color: '#cc0000',
    fontSize: '13px', marginBottom: '16px', lineHeight: '1.5',
  },
  fieldGroup: { marginBottom: '16px' },
  label: { display: 'block', color: '#444', fontSize: '13px', fontWeight: '600', marginBottom: '6px' },
  input: {
    width: '100%', backgroundColor: '#f8f9fa', border: '1px solid',
    borderRadius: '10px', padding: '11px 14px', color: '#1a1a1a',
    fontSize: '14px', outline: 'none', boxSizing: 'border-box',
  },
  passwordHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' },
  forgotLink: { color: '#FF6B00', fontSize: '12px', cursor: 'pointer' },
  passwordWrapper: { position: 'relative' },
  eyeBtn: {
    position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
    background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center',
  },
  errorText: { color: '#ff4d4d', fontSize: '12px', margin: '4px 0 0 0' },
  loginBtn: {
    width: '100%', backgroundColor: '#FF6B00', color: '#ffffff', border: 'none',
    borderRadius: '10px', padding: '13px', fontSize: '15px', fontWeight: '700',
    cursor: 'pointer', marginTop: '8px', marginBottom: '16px',
    transition: 'background-color 0.2s',
  },
  divider: {
    display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px',
  },
  dividerLine: {
    flex: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.08)',
  },
  dividerText: {
    color: '#999', fontSize: '12px', fontWeight: '600', whiteSpace: 'nowrap',
  },
  guestBtn: {
    width: '100%', backgroundColor: 'transparent',
    border: '1.5px solid rgba(0,180,216,0.3)',
    color: '#555', borderRadius: '10px', padding: '11px',
    fontSize: '14px', fontWeight: '600', cursor: 'pointer',
    marginBottom: '16px', transition: 'all 0.2s ease',
    fontFamily: 'sans-serif', display: 'flex', alignItems: 'center',
    justifyContent: 'center', gap: '8px',
  },
  registerText: { textAlign: 'center', color: '#666', fontSize: '13px', margin: '0 0 16px 0' },
  registerLink: { color: '#FF6B00', textDecoration: 'none', fontWeight: '600' },
  disclaimer: {
    color: '#999', fontSize: '11px', textAlign: 'center', lineHeight: '1.6',
    margin: 0, borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '12px',
  },
};

export default Login;
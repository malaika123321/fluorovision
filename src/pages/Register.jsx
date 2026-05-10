import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function Register() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '', email: '', password: '', confirmPassword: '', agreeTerms: false
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const content = {
    EN: {
      title: 'Create Your Account',
      subtitle: 'Join FluoroVision for free dental fluorosis screening',
      fullName: 'Full Name',
      fullNamePlaceholder: 'Enter your full name',
      email: 'Email Address',
      emailPlaceholder: 'Enter your email',
      password: 'Password',
      passwordPlaceholder: 'Create a password',
      confirmPassword: 'Confirm Password',
      confirmPlaceholder: 'Repeat your password',
      terms: 'I agree to the Terms of Service and Privacy Policy',
      register: 'Create Account',
      haveAccount: 'Already have an account?',
      login: 'Login here',
      disclaimer: 'FluoroVision is a screening tool only and does not replace professional dental diagnosis.',
    },
    UR: {
      title: 'اپنا اکاؤنٹ بنائیں',
      subtitle: 'مفت ڈینٹل فلوروسس اسکریننگ کے لیے FluoroVision میں شامل ہوں',
      fullName: 'پورا نام',
      fullNamePlaceholder: 'اپنا پورا نام درج کریں',
      email: 'ای میل ایڈریس',
      emailPlaceholder: 'اپنی ای میل درج کریں',
      password: 'پاس ورڈ',
      passwordPlaceholder: 'پاس ورڈ بنائیں',
      confirmPassword: 'پاس ورڈ کی تصدیق',
      confirmPlaceholder: 'پاس ورڈ دہرائیں',
      terms: 'میں سروس کی شرائط اور رازداری کی پالیسی سے متفق ہوں',
      register: 'اکاؤنٹ بنائیں',
      haveAccount: 'پہلے سے اکاؤنٹ ہے؟',
      login: 'یہاں لاگ ان کریں',
      disclaimer: 'FluoroVision صرف ایک اسکریننگ ٹول ہے اور پیشہ ورانہ تشخیص کا متبادل نہیں۔',
    }
  };

  const t = content[language];

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    const savedUsers = JSON.parse(localStorage.getItem('fluorovision_users') || '[]');
    const userExists = savedUsers.find(u => u.email === formData.email);
    if (userExists) {
      setErrors({ email: 'An account with this email already exists.' });
      return;
    }

    savedUsers.push({ email: formData.email, password: formData.password });
    localStorage.setItem('fluorovision_users', JSON.stringify(savedUsers));
    localStorage.setItem('fluorovision_user', JSON.stringify({ email: formData.email }));
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
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

        {/* Full Name */}
        <div style={styles.field}>
          <label style={styles.label}>{t.fullName}</label>
          <input
            name="fullName"
            type="text"
            placeholder={t.fullNamePlaceholder}
            value={formData.fullName}
            onChange={handleChange}
            style={{ ...styles.input, borderColor: errors.fullName ? '#ff4d4d' : 'rgba(0,0,0,0.15)' }}
          />
          {errors.fullName && <p style={styles.error}>{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div style={styles.field}>
          <label style={styles.label}>{t.email}</label>
          <input
            name="email"
            type="email"
            placeholder={t.emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
            style={{ ...styles.input, borderColor: errors.email ? '#ff4d4d' : 'rgba(0,0,0,0.15)' }}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>

        {/* Password */}
        <div style={styles.field}>
          <label style={styles.label}>{t.password}</label>
          <div style={styles.passwordWrapper}>
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder={t.passwordPlaceholder}
              value={formData.password}
              onChange={handleChange}
              style={{ ...styles.input, borderColor: errors.password ? '#ff4d4d' : 'rgba(0,0,0,0.15)', marginBottom: 0 }}
            />
            <button onClick={() => setShowPassword(!showPassword)} style={styles.eyeBtn}>
              {showPassword ? <FiEyeOff size={16} color="#999" /> : <FiEye size={16} color="#999" />}
            </button>
          </div>
          {errors.password && <p style={styles.error}>{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div style={styles.field}>
          <label style={styles.label}>{t.confirmPassword}</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder={t.confirmPlaceholder}
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{ ...styles.input, borderColor: errors.confirmPassword ? '#ff4d4d' : 'rgba(0,0,0,0.15)' }}
          />
          {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword}</p>}
        </div>

        {/* Terms */}
        <div style={styles.checkboxRow}>
          <input
            name="agreeTerms"
            type="checkbox"
            checked={formData.agreeTerms}
            onChange={handleChange}
            style={styles.checkbox}
          />
          <label style={styles.checkLabel}>{t.terms}</label>
        </div>
        {errors.agreeTerms && <p style={styles.error}>{errors.agreeTerms}</p>}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          style={styles.submitBtn}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e55f00'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FF6B00'}
        >
          {t.register}
        </button>

        {/* Login Link */}
        <p style={styles.loginText}>
          {t.haveAccount}{' '}
          <Link to="/login" style={styles.loginLink}>{t.login}</Link>
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
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '40px 20px', fontFamily: 'sans-serif',
  },
  card: {
    backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: '20px', padding: '48px 40px', width: '100%', maxWidth: '480px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
  },
  logoArea: { display: 'flex', justifyContent: 'center', marginBottom: '24px' },
  logoWrapper: {
    display: 'inline-flex',
    backgroundColor: '#fff8f5',
    borderRadius: '16px',
    padding: '10px 16px',
    border: '1px solid rgba(255,107,0,0.15)',
    boxShadow: '0 2px 12px rgba(255,107,0,0.1)',
  },
  logoImg: {
    height: '75px',
    objectFit: 'contain',
    filter: 'drop-shadow(0 2px 6px rgba(255,107,0,0.2))',
  },
  title: { color: '#1a1a1a', fontSize: '26px', fontWeight: '800', textAlign: 'center', margin: '0 0 8px 0' },
  subtitle: { color: '#666', fontSize: '14px', textAlign: 'center', margin: '0 0 32px 0' },
  field: { marginBottom: '20px' },
  label: { color: '#444', fontSize: '13px', fontWeight: '600', display: 'block', marginBottom: '8px' },
  input: {
    width: '100%', backgroundColor: '#f8f9fa', border: '1px solid',
    borderRadius: '10px', padding: '12px 16px', color: '#1a1a1a',
    fontSize: '14px', outline: 'none', boxSizing: 'border-box',
  },
  passwordWrapper: { position: 'relative' },
  eyeBtn: {
    position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
    background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center',
  },
  error: { color: '#ff4d4d', fontSize: '12px', margin: '6px 0 0 0' },
  checkboxRow: { display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' },
  checkbox: { marginTop: '2px', accentColor: '#FF6B00', width: '16px', height: '16px' },
  checkLabel: { color: '#555', fontSize: '13px', lineHeight: '1.5' },
  submitBtn: {
    width: '100%', backgroundColor: '#FF6B00', color: '#ffffff',
    border: 'none', borderRadius: '10px', padding: '14px',
    fontSize: '15px', fontWeight: '700', cursor: 'pointer', marginTop: '16px',
    transition: 'background-color 0.2s',
  },
  loginText: { color: '#666', fontSize: '13px', textAlign: 'center', marginTop: '20px' },
  loginLink: { color: '#FF6B00', textDecoration: 'none', fontWeight: '600' },
  disclaimer: {
    color: '#999', fontSize: '11px', textAlign: 'center', marginTop: '20px',
    lineHeight: '1.6', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '16px',
  },
};

export default Register;
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FiUpload, FiCamera, FiFolder, FiRotateCcw, FiArrowLeft, FiAlertTriangle, FiCheckCircle } from 'react-icons/fi';

function PhotoUpload() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [mode, setMode] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [apiError, setApiError] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const canvasRef = useRef(null);

  const content = {
    EN: {
      title: 'Dental Photo Screening',
      subtitle: 'Step 3 of 3 — Upload or scan your teeth photo for analysis',
      chooseMethod: 'Choose Scanning Method',
      uploadTitle: 'Upload a Photo',
      uploadDesc: 'Upload an existing photo of your teeth from your device.',
      cameraTitle: 'Live Camera Scan',
      cameraDesc: 'Use your camera with guided instructions for best results.',
      instructions: 'Camera Instructions',
      inst1: 'Keep device 20–30 cm from your face',
      inst2: 'Ensure good lighting — avoid shadows',
      inst3: 'Open your mouth wide and show your front teeth',
      inst4: 'Hold still when capturing',
      inst5: 'Avoid zooming in or out',
      startCamera: 'Start Camera',
      capture: 'Capture Photo',
      retake: 'Retake',
      uploadBtn: 'Choose Photo',
      analyzeBtn: 'Analyze & Get Results →',
      analyzingBtn: 'Analyzing with AI...',
      photoReady: 'Photo ready for analysis!',
      dragDrop: 'Drag & drop your photo here or click to browse',
      supported: 'Supported: JPG, PNG, JPEG (Max 10MB)',
      disclaimer: 'Photos are used only for screening purposes and are not stored permanently.',
      back: 'Back',
      apiErrorMsg: 'AI analysis unavailable — using quiz-based screening instead.',
    },
    UR: {
      title: 'دانتوں کی تصویر اسکریننگ',
      subtitle: 'مرحلہ 3 از 3 — تجزیہ کے لیے اپنے دانتوں کی تصویر اپ لوڈ یا اسکین کریں',
      chooseMethod: 'اسکیننگ کا طریقہ منتخب کریں',
      uploadTitle: 'تصویر اپ لوڈ کریں',
      uploadDesc: 'اپنے آلے سے دانتوں کی موجودہ تصویر اپ لوڈ کریں۔',
      cameraTitle: 'لائیو کیمرہ اسکین',
      cameraDesc: 'بہترین نتائج کے لیے رہنمائی کے ساتھ اپنا کیمرہ استعمال کریں۔',
      instructions: 'کیمرہ ہدایات',
      inst1: 'آلہ اپنے چہرے سے 20-30 سینٹی میٹر دور رکھیں',
      inst2: 'اچھی روشنی یقینی بنائیں — سائے سے بچیں',
      inst3: 'منہ چوڑا کھولیں اور اپنے سامنے کے دانت دکھائیں',
      inst4: 'تصویر لیتے وقت ساکن رہیں',
      inst5: 'زوم ان یا آؤٹ سے بچیں',
      startCamera: 'کیمرہ شروع کریں',
      capture: 'تصویر لیں',
      retake: 'دوبارہ لیں',
      uploadBtn: 'تصویر منتخب کریں',
      analyzeBtn: 'تجزیہ کریں اور نتائج دیکھیں →',
      analyzingBtn: 'AI تجزیہ جاری ہے...',
      photoReady: 'تصویر تجزیہ کے لیے تیار ہے!',
      dragDrop: 'اپنی تصویر یہاں ڈریگ اور ڈراپ کریں یا براؤز کرنے کے لیے کلک کریں',
      supported: 'سپورٹڈ: JPG، PNG، JPEG (زیادہ سے زیادہ 10MB)',
      disclaimer: 'تصاویر صرف اسکریننگ کے مقاصد کے لیے استعمال ہوتی ہیں اور مستقل طور پر محفوظ نہیں کی جاتیں۔',
      back: 'واپس',
      apiErrorMsg: 'AI تجزیہ دستیاب نہیں — کوئز پر مبنی اسکریننگ استعمال ہو رہی ہے۔',
    }
  };

  const t = content[language];

  const instructions = [t.inst1, t.inst2, t.inst3, t.inst4, t.inst5];

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
      setCameraActive(true);
    } catch (err) {
      alert('Camera access denied. Please allow camera permission and try again.');
    }
  };

  const capturePhoto = () => {
    let count = 3;
    setCountdown(count);
    const timer = setInterval(() => {
      count--;
      if (count === 0) {
        clearInterval(timer);
        setCountdown(null);
        const canvas = canvasRef.current;
        const video = videoRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
        const imageData = canvas.toDataURL('image/jpeg');
        setPhoto(imageData);
        stopCamera();
      } else {
        setCountdown(count);
      }
    }, 1000);
  };

  const stopCamera = () => {
    if (streamRef.current) streamRef.current.getTracks().forEach(track => track.stop());
    setCameraActive(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setPhoto(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setPhoto(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    localStorage.setItem('dentalPhoto', photo);
    setAnalyzing(true);
    setApiError(false);

    try {
      // base64 ko blob mein convert karo
      const fetchResponse = await fetch(photo);
      const blob = await fetchResponse.blob();
      const file = new File([blob], 'dental.jpg', { type: 'image/jpeg' });

      // API ko send karo
      const formData = new FormData();
      formData.append('image', file);

      const apiResponse = await fetch(
        'https://kalsoommm-dental-api.hf.space/predict',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!apiResponse.ok) throw new Error('API error');

      const result = await apiResponse.json();
      console.log('API Result:', result);

      // Result save karo
      localStorage.setItem('apiResult', JSON.stringify(result));

    } catch (error) {
      console.error('API Error:', error);
      // API fail ho toh bhi results pe jao — quiz score use hoga
      localStorage.removeItem('apiResult');
      setApiError(true);
      // 2 second baad navigate karo
      await new Promise(res => setTimeout(res, 2000));
    } finally {
      setAnalyzing(false);
      navigate('/results');
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

        <h1 style={styles.title}>{t.title}</h1>
        <p style={styles.subtitle}>{t.subtitle}</p>

        {/* Progress */}
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: '100%' }}></div>
        </div>

        {/* API Error Message */}
        {apiError && (
          <div style={styles.apiErrorBox}>
            <FiAlertTriangle size={14} color="#d97706" />
            <p style={styles.apiErrorText}>{t.apiErrorMsg}</p>
          </div>
        )}

        {/* Method Selection */}
        {!mode && !analyzing && (
          <>
            <h3 style={styles.sectionTitle}>{t.chooseMethod}</h3>
            <div style={styles.methodGrid}>
              <button
                onClick={() => setMode('upload')}
                style={styles.methodCard}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#00b4d8'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,180,216,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,180,216,0.25)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={styles.methodIconWrapper}>
                  <FiFolder size={28} color="#00b4d8" />
                </div>
                <h4 style={styles.methodTitle}>{t.uploadTitle}</h4>
                <p style={styles.methodDesc}>{t.uploadDesc}</p>
              </button>
              <button
                onClick={() => setMode('camera')}
                style={styles.methodCard}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#00b4d8'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,180,216,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,180,216,0.25)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={styles.methodIconWrapper}>
                  <FiCamera size={28} color="#00b4d8" />
                </div>
                <h4 style={styles.methodTitle}>{t.cameraTitle}</h4>
                <p style={styles.methodDesc}>{t.cameraDesc}</p>
              </button>
            </div>
          </>
        )}

        {/* Analyzing Overlay */}
        {analyzing && (
          <div style={styles.analyzingBox}>
            <div style={styles.analyzingIconWrapper}>
              <FiCamera size={32} color="#00b4d8" />
            </div>
            <h3 style={styles.analyzingTitle}>{t.analyzingBtn}</h3>
            <div style={styles.analyzingBar}>
              <div style={styles.analyzingFill}></div>
            </div>
            <p style={styles.analyzingDesc}>
              {language === 'EN'
                ? 'Our AI models (ResNet50,MobileNet) are analyzing your photo...'
                : 'ہمارے AI ماڈلز آپ کی تصویر کا تجزیہ کر رہے ہیں...'}
            </p>
          </div>
        )}

        {/* Upload Mode */}
        {mode === 'upload' && !photo && !analyzing && (
          <div style={styles.dropzone} onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
            <div style={styles.dropIconWrapper}>
              <FiUpload size={32} color="#00b4d8" />
            </div>
            <p style={styles.dropText}>{t.dragDrop}</p>
            <p style={styles.dropSupported}>{t.supported}</p>
            <label style={styles.uploadBtn}>
              {t.uploadBtn}
              <input type="file" accept="image/*" onChange={handleFileUpload} style={{ display: 'none' }} />
            </label>
          </div>
        )}

        {/* Camera Mode */}
        {mode === 'camera' && !photo && !analyzing && (
          <div>
            <div style={styles.instructionsBox}>
              <h4 style={styles.instructionsTitle}>{t.instructions}</h4>
              {instructions.map((inst, i) => (
                <div key={i} style={styles.instructionRow}>
                  <div style={styles.instrIconWrapper}>
                    <FiCamera size={14} color="#00b4d8" />
                  </div>
                  <p style={styles.instruction}>{inst}</p>
                </div>
              ))}
            </div>

            <div style={styles.cameraBox}>
              <video ref={videoRef} autoPlay playsInline style={{ ...styles.video, display: cameraActive ? 'block' : 'none' }} />
              <canvas ref={canvasRef} style={{ display: 'none' }} />
              {!cameraActive && (
                <div style={styles.cameraPlaceholder}>
                  <div style={styles.cameraPlaceholderIcon}>
                    <FiCamera size={36} color="#00b4d8" />
                  </div>
                  <p style={{ color: '#999', marginTop: '12px', fontSize: '14px' }}>Camera not started</p>
                </div>
              )}
              {countdown && <div style={styles.countdown}>{countdown}</div>}
            </div>

            {!cameraActive ? (
              <button
                onClick={startCamera}
                style={styles.cameraBtn}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e55f00'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FF6B00'}
              >
                <FiCamera size={16} /> {t.startCamera}
              </button>
            ) : (
              <button
                onClick={capturePhoto}
                style={{ ...styles.cameraBtn, opacity: countdown ? 0.7 : 1 }}
                disabled={!!countdown}
              >
                <FiCamera size={16} /> {countdown ? `${countdown}...` : t.capture}
              </button>
            )}
          </div>
        )}

        {/* Photo Preview */}
        {photo && !analyzing && (
          <div style={styles.previewBox}>
            <div style={styles.photoReadyRow}>
              <FiCheckCircle size={16} color="#16a34a" />
              <p style={styles.photoReady}>{t.photoReady}</p>
            </div>
            <img src={photo} alt="Dental" style={styles.preview} />
            <button
              onClick={() => { setPhoto(null); setMode(null); }}
              style={styles.retakeBtn}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#00b4d8'; e.currentTarget.style.color = '#00b4d8'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,180,216,0.3)'; e.currentTarget.style.color = '#555'; }}
            >
              <FiRotateCcw size={14} /> {t.retake}
            </button>
          </div>
        )}

        {/* Back button */}
        {mode && !photo && !analyzing && (
          <button
            onClick={() => { setMode(null); stopCamera(); }}
            style={styles.backBtn}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#00b4d8'; e.currentTarget.style.color = '#00b4d8'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,180,216,0.3)'; e.currentTarget.style.color = '#555'; }}
          >
            <FiArrowLeft size={14} /> {t.back}
          </button>
        )}

        {/* Analyze Button */}
        {photo && !analyzing && (
          <button
            onClick={handleAnalyze}
            style={styles.analyzeBtn}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e55f00'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FF6B00'}
          >
            {t.analyzeBtn}
          </button>
        )}

        {/* Disclaimer */}
        {!analyzing && (
          <div style={styles.disclaimerRow}>
            <FiAlertTriangle size={13} color="#d97706" />
            <p style={styles.disclaimer}>{t.disclaimer}</p>
          </div>
        )}

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
    borderRadius: '20px', padding: '48px 40px', width: '100%', maxWidth: '600px',
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
  title: { color: '#1a1a1a', fontSize: '24px', fontWeight: '800', textAlign: 'center', margin: '0 0 8px 0' },
  subtitle: { color: '#666', fontSize: '13px', textAlign: 'center', margin: '0 0 20px 0' },
  progressBar: { backgroundColor: '#e8f7fb', borderRadius: '10px', height: '6px', marginBottom: '28px' },
  progressFill: { backgroundColor: '#00b4d8', height: '100%', borderRadius: '10px' },
  apiErrorBox: {
    backgroundColor: '#fffbeb', border: '1.5px solid rgba(217,119,6,0.3)',
    borderRadius: '10px', padding: '10px 14px', marginBottom: '16px',
    display: 'flex', alignItems: 'center', gap: '8px',
  },
  apiErrorText: { color: '#d97706', fontSize: '12px', margin: 0 },
  analyzingBox: {
    textAlign: 'center', padding: '40px 20px',
    backgroundColor: '#f0f9ff', borderRadius: '16px',
    border: '1.5px solid rgba(0,180,216,0.25)', marginBottom: '20px',
  },
  analyzingIconWrapper: {
    width: '72px', height: '72px', borderRadius: '50%',
    backgroundColor: 'rgba(0,180,216,0.1)',
    border: '2px solid rgba(0,180,216,0.3)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 20px auto',
  },
  analyzingTitle: { color: '#00b4d8', fontSize: '18px', fontWeight: '700', marginBottom: '16px' },
  analyzingBar: {
    backgroundColor: '#e8f7fb', borderRadius: '10px', height: '6px',
    marginBottom: '16px', overflow: 'hidden',
  },
  analyzingFill: {
    backgroundColor: '#00b4d8', height: '100%', borderRadius: '10px',
    width: '80%', animation: 'pulse 1.5s ease-in-out infinite',
  },
  analyzingDesc: { color: '#666', fontSize: '13px', lineHeight: '1.6', margin: 0 },
  sectionTitle: { color: '#1a1a1a', fontSize: '16px', fontWeight: '700', textAlign: 'center', marginBottom: '20px' },
  methodGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' },
  methodCard: {
    backgroundColor: '#ffffff', border: '1.5px solid rgba(0,180,216,0.25)',
    borderRadius: '14px', padding: '24px 16px', cursor: 'pointer',
    textAlign: 'center', transition: 'all 0.2s ease',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  },
  methodIconWrapper: {
    width: '56px', height: '56px', borderRadius: '14px',
    backgroundColor: 'rgba(0,180,216,0.08)',
    border: '1.5px solid rgba(0,180,216,0.2)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 14px auto',
  },
  methodTitle: { color: '#00b4d8', fontSize: '15px', fontWeight: '700', margin: '0 0 8px 0' },
  methodDesc: { color: '#666', fontSize: '12px', lineHeight: '1.5', margin: 0 },
  dropzone: {
    border: '2px dashed rgba(0,180,216,0.35)', borderRadius: '14px',
    padding: '48px 24px', textAlign: 'center', marginBottom: '20px',
    backgroundColor: '#f0f9ff',
  },
  dropIconWrapper: {
    width: '64px', height: '64px', borderRadius: '50%',
    backgroundColor: 'rgba(0,180,216,0.1)',
    border: '2px solid rgba(0,180,216,0.2)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 16px auto',
  },
  dropText: { color: '#555', fontSize: '14px', marginBottom: '8px' },
  dropSupported: { color: '#999', fontSize: '12px', marginBottom: '20px' },
  uploadBtn: {
    backgroundColor: '#FF6B00', color: '#ffffff', padding: '12px 24px',
    borderRadius: '10px', cursor: 'pointer', fontSize: '14px', fontWeight: '700',
    display: 'inline-block',
  },
  instructionsBox: {
    backgroundColor: '#f0f9ff', border: '1.5px solid rgba(0,180,216,0.25)',
    borderRadius: '12px', padding: '20px', marginBottom: '20px',
  },
  instructionsTitle: { color: '#00b4d8', fontSize: '14px', fontWeight: '700', margin: '0 0 14px 0' },
  instructionRow: { display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' },
  instrIconWrapper: {
    width: '24px', height: '24px', borderRadius: '6px',
    backgroundColor: 'rgba(0,180,216,0.1)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  },
  instruction: { color: '#555', fontSize: '13px', margin: 0, lineHeight: '1.5' },
  cameraBox: {
    backgroundColor: '#f0f9ff', border: '1.5px solid rgba(0,180,216,0.25)',
    borderRadius: '12px', overflow: 'hidden', marginBottom: '16px',
    minHeight: '240px', position: 'relative',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  video: { width: '100%', borderRadius: '12px' },
  cameraPlaceholder: { textAlign: 'center', padding: '40px' },
  cameraPlaceholderIcon: {
    width: '72px', height: '72px', borderRadius: '50%',
    backgroundColor: 'rgba(0,180,216,0.1)',
    border: '2px solid rgba(0,180,216,0.2)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto',
  },
  countdown: {
    position: 'absolute', top: '50%', left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '80px', color: '#FF6B00', fontWeight: '800',
    textShadow: '0 2px 12px rgba(255,107,0,0.3)',
  },
  cameraBtn: {
    width: '100%', backgroundColor: '#FF6B00', color: '#ffffff',
    border: 'none', borderRadius: '10px', padding: '14px',
    fontSize: '15px', fontWeight: '700', cursor: 'pointer', marginBottom: '12px',
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
    transition: 'background-color 0.2s', fontFamily: 'sans-serif',
  },
  previewBox: { textAlign: 'center', marginBottom: '20px' },
  photoReadyRow: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' },
  photoReady: { color: '#16a34a', fontSize: '14px', fontWeight: '600', margin: 0 },
  preview: {
    width: '100%', maxHeight: '300px', objectFit: 'cover',
    borderRadius: '12px', marginBottom: '16px',
    border: '1.5px solid rgba(0,180,216,0.25)',
  },
  retakeBtn: {
    backgroundColor: 'transparent', border: '1.5px solid rgba(0,180,216,0.3)',
    color: '#555', padding: '10px 20px', borderRadius: '10px',
    cursor: 'pointer', fontSize: '13px', fontFamily: 'sans-serif',
    display: 'inline-flex', alignItems: 'center', gap: '6px',
    transition: 'all 0.2s ease',
  },
  backBtn: {
    backgroundColor: 'transparent', border: '1.5px solid rgba(0,180,216,0.3)',
    color: '#555', padding: '10px 20px', borderRadius: '10px',
    cursor: 'pointer', fontSize: '13px', marginBottom: '16px',
    display: 'inline-flex', alignItems: 'center', gap: '6px',
    transition: 'all 0.2s ease', fontFamily: 'sans-serif',
  },
  analyzeBtn: {
    width: '100%', backgroundColor: '#FF6B00', color: '#ffffff',
    border: 'none', borderRadius: '10px', padding: '14px',
    fontSize: '15px', fontWeight: '700', cursor: 'pointer', marginBottom: '16px',
    transition: 'background-color 0.2s', fontFamily: 'sans-serif',
  },
  disclaimerRow: {
    display: 'flex', alignItems: 'flex-start', gap: '8px',
    backgroundColor: '#fffbeb', border: '1.5px solid rgba(217,119,6,0.25)',
    borderRadius: '10px', padding: '12px 14px',
  },
  disclaimer: { color: '#666', fontSize: '11px', lineHeight: '1.6', margin: 0 },
};

export default PhotoUpload;
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FiSend, FiActivity, FiAlertCircle } from 'react-icons/fi';

function Chatbot() {
  const { language } = useLanguage();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const content = {
    EN: {
      title: 'FluoroVision Assistant',
      subtitle: 'Ask me anything about dental fluorosis',
      placeholder: 'Type your question here...',
      send: 'Send',
      disclaimer: 'This assistant provides general information only. It is not a substitute for professional dental advice.',
      welcome: "Hello! I'm your FluoroVision dental health assistant. I can help you understand dental fluorosis, prevention tips, and guide you through your screening. What would you like to know?",
      suggestions: [
        'What is dental fluorosis?',
        'How can I prevent fluorosis?',
        'What are the symptoms?',
        'Is fluorosis treatable?',
        'How much fluoride is safe?',
        'Should I see a doctor?',
      ],
    },
    UR: {
      title: 'FluoroVision اسسٹنٹ',
      subtitle: 'ڈینٹل فلوروسس کے بارے میں کچھ بھی پوچھیں',
      placeholder: 'اپنا سوال یہاں لکھیں...',
      send: 'بھیجیں',
      disclaimer: 'یہ اسسٹنٹ صرف عمومی معلومات فراہم کرتا ہے۔ یہ پیشہ ورانہ دانتوں کے مشورے کا متبادل نہیں ہے۔',
      welcome: 'ہیلو! میں آپ کا FluoroVision دانتوں کی صحت کا اسسٹنٹ ہوں۔ میں آپ کو ڈینٹل فلوروسس، احتیاطی تجاویز اور اسکریننگ میں مدد کر سکتا ہوں۔ آپ کیا جاننا چاہتے ہیں؟',
      suggestions: [
        'ڈینٹل فلوروسس کیا ہے؟',
        'فلوروسس سے کیسے بچیں؟',
        'علامات کیا ہیں؟',
        'کیا فلوروسس قابل علاج ہے؟',
        'فلورائیڈ کی محفوظ مقدار کتنی ہے؟',
        'کیا مجھے ڈاکٹر سے ملنا چاہیے؟',
      ],
    }
  };

  const t = content[language];

  const responses = {
    EN: {
      'what is dental fluorosis': 'Dental fluorosis is a condition caused by excessive fluoride intake during tooth development (ages 0–8). It ranges from faint white lines to brown staining and pitting. It is classified using Dean\'s Fluorosis Index and the TF Index into Normal, Mild, and Severe categories.',
      'how can i prevent fluorosis': 'Prevention tips based on clinical research:\n• Use only a pea-sized amount of fluoride toothpaste for children under 6\n• Ensure drinking water fluoride levels are below 0.7 ppm (WHO guideline)\n• Avoid fluoride supplements unless prescribed by a dentist\n• Use bottled or filtered water in high-fluoride areas\n• Regular dental checkups every 6 months',
      'what are the symptoms': 'Symptoms vary by severity:\n\nNormal — No visible changes\nMild — Faint white spots or lines on less than 25% of tooth surface\nSevere — Brown/yellow staining, pitting, or enamel erosion on more than 50% of tooth surface\n\nSensitivity to hot/cold temperatures may also be present.',
      'is fluorosis treatable': 'Yes, treatment options depend on severity:\n• Mild — Tooth whitening, microabrasion, or dental bonding\n• Moderate — Composite resin veneers\n• Severe — Porcelain veneers or dental crowns\n\nAlways consult a qualified dentist for treatment options.',
      'how much fluoride is safe': 'According to WHO and CDC guidelines:\n• Safe fluoride level in drinking water: 0.7 ppm\n• Levels above 1.5 ppm increase fluorosis risk significantly\n• Children under 6 should use only a rice-grain amount of toothpaste\n• Fluoride supplements should only be taken if prescribed by a dentist',
      'should i see a doctor': 'You should see a dentist if:\n• You notice brown or yellow staining on your teeth\n• You have pitted or rough tooth surfaces\n• Your screening result showed Severe fluorosis\n• You experience tooth sensitivity\n• You are unsure about your screening result\n\nUse the Book a Doctor feature in FluoroVision to schedule a consultation.',
      'default': 'Thank you for your question. For detailed information about dental fluorosis, I recommend:\n\n1. Taking our clinical screening quiz\n2. Reviewing our Tips & Prevention page\n3. Consulting a dental professional if you have concerns\n\nIs there anything specific about fluorosis you would like to know?',
    },
    UR: {
      'ڈینٹل فلوروسس کیا ہے': 'ڈینٹل فلوروسس دانتوں کی نشوونما کے دوران (0-8 سال) ضرورت سے زیادہ فلورائیڈ کی مقدار سے ہونے والی حالت ہے۔ یہ ہلکی سفید لکیروں سے لے کر بھورے داغوں تک ہو سکتی ہے۔',
      'فلوروسس سے کیسے بچیں': 'طبی تحقیق پر مبنی احتیاطی تجاویز:\n• 6 سال سے کم عمر بچوں کے لیے مٹر کے دانے جتنا ٹوتھ پیسٹ استعمال کریں\n• پینے کے پانی میں فلورائیڈ کی سطح 0.7 ppm سے کم رکھیں\n• ڈاکٹر کی تجویز کے بغیر فلورائیڈ سپلیمنٹس نہ لیں',
      'علامات کیا ہیں': 'علامات شدت کے مطابق مختلف ہوتی ہیں:\n\nنارمل — کوئی علامت نہیں\nہلکا — دانت کی سطح کے 25% سے کم پر سفید دھبے\nشدید — بھورے/پیلے داغ یا 50% سے زیادہ سطح پر کٹاؤ',
      'default': 'آپ کے سوال کا شکریہ۔ ڈینٹل فلوروسس کے بارے میں تفصیلی معلومات کے لیے ہماری اسکریننگ کوئز لیں یا تجاویز کا صفحہ دیکھیں۔',
    }
  };

  const getResponse = (userMessage) => {
    const msg = userMessage.toLowerCase().trim();
    const responseBank = responses[language];
    for (const key of Object.keys(responseBank)) {
      if (key !== 'default' && msg.includes(key.toLowerCase())) {
        return responseBank[key];
      }
    }
    return responseBank['default'];
  };

  useEffect(() => {
    setMessages([{
      role: 'assistant',
      text: t.welcome,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
  }, [language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (text) => {
    const userText = text || input.trim();
    if (!userText) return;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { role: 'user', text: userText, time }]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      const response = getResponse(userText);
      setMessages(prev => [...prev, {
        role: 'assistant', text: response,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatWrapper}>

        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerLeft}>
            <div style={styles.headerIconWrapper}>
              <FiActivity size={22} color="#00b4d8" />
            </div>
            <div>
              <h2 style={styles.headerTitle}>{t.title}</h2>
              <p style={styles.headerSubtitle}>{t.subtitle}</p>
            </div>
          </div>
          <div style={styles.onlineDot}>
            <span style={styles.dot}></span>
            <span style={styles.onlineText}>Online</span>
          </div>
        </div>

        {/* Messages */}
        <div style={styles.messagesArea}>
          {messages.map((msg, i) => (
            <div key={i} style={{
              ...styles.messageRow,
              justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
            }}>
              {msg.role === 'assistant' && (
                <div style={styles.avatar}>
                  <FiActivity size={16} color="#00b4d8" />
                </div>
              )}
              <div style={{
                ...styles.bubble,
                backgroundColor: msg.role === 'user' ? '#FF6B00' : '#ffffff',
                color: msg.role === 'user' ? '#ffffff' : '#1a1a1a',
                borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                border: msg.role === 'assistant' ? '1.5px solid rgba(0,180,216,0.3)' : 'none',
              }}>
                <p style={styles.bubbleText}>{msg.text}</p>
                <span style={{
                  ...styles.timeStamp,
                  color: msg.role === 'user' ? 'rgba(255,255,255,0.7)' : '#999'
                }}>{msg.time}</span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div style={{ ...styles.messageRow, justifyContent: 'flex-start' }}>
              <div style={styles.avatar}>
                <FiActivity size={16} color="#00b4d8" />
              </div>
              <div style={{
                ...styles.bubble,
                backgroundColor: '#ffffff',
                border: '1.5px solid rgba(0,180,216,0.3)',
                borderRadius: '18px 18px 18px 4px',
              }}>
                <p style={{ ...styles.bubbleText, color: '#999' }}>Typing...</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        <div style={styles.suggestions}>
          {t.suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => sendMessage(s)}
              style={styles.suggestionBtn}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(0,180,216,0.1)';
                e.currentTarget.style.borderColor = '#00b4d8';
                e.currentTarget.style.color = '#00b4d8';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
                e.currentTarget.style.borderColor = 'rgba(0,180,216,0.3)';
                e.currentTarget.style.color = '#555';
              }}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <div style={styles.inputArea}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder={t.placeholder}
            style={styles.input}
          />
          <button
            onClick={() => sendMessage()}
            style={styles.sendBtn}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e55f00'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FF6B00'}
          >
            <FiSend size={16} color="#fff" />
            <span>{t.send}</span>
          </button>
        </div>

        {/* Disclaimer */}
        <div style={styles.disclaimerRow}>
          <FiAlertCircle size={13} color="#d97706" />
          <p style={styles.disclaimer}>{t.disclaimer}</p>
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f5f7fa', minHeight: '100vh',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '40px 20px',
  },
  chatWrapper: {
    backgroundColor: '#ffffff',
    border: '1.5px solid rgba(0,180,216,0.35)',
    borderRadius: '20px', width: '100%', maxWidth: '700px',
    display: 'flex', flexDirection: 'column', overflow: 'hidden',
    boxShadow: '0 8px 40px rgba(0,180,216,0.1)',
    fontFamily: 'sans-serif',
  },
  header: {
    backgroundColor: '#f0f9ff',
    padding: '20px 24px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    borderBottom: '1.5px solid rgba(0,180,216,0.25)',
  },
  headerLeft: { display: 'flex', alignItems: 'center', gap: '12px' },
  headerIconWrapper: {
    width: '44px', height: '44px', borderRadius: '12px',
    backgroundColor: 'rgba(0,180,216,0.12)',
    border: '1.5px solid rgba(0,180,216,0.3)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  headerTitle: { color: '#1a1a1a', fontSize: '17px', fontWeight: '800', margin: 0 },
  headerSubtitle: { color: '#666', fontSize: '12px', margin: 0 },
  onlineDot: { display: 'flex', alignItems: 'center', gap: '6px' },
  dot: {
    width: '8px', height: '8px', backgroundColor: '#16a34a',
    borderRadius: '50%', display: 'inline-block',
  },
  onlineText: { color: '#16a34a', fontSize: '12px', fontWeight: '600' },
  messagesArea: {
    padding: '24px', height: '400px', overflowY: 'auto',
    display: 'flex', flexDirection: 'column', gap: '16px',
    backgroundColor: '#fafafa',
  },
  messageRow: { display: 'flex', alignItems: 'flex-end', gap: '10px' },
  avatar: {
    width: '32px', height: '32px', borderRadius: '50%',
    backgroundColor: 'rgba(0,180,216,0.1)',
    border: '1.5px solid rgba(0,180,216,0.3)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  bubble: {
    maxWidth: '75%', padding: '14px 18px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  bubbleText: {
    margin: '0 0 4px 0', fontSize: '14px',
    lineHeight: '1.6', whiteSpace: 'pre-line',
  },
  timeStamp: { fontSize: '10px' },
  suggestions: {
    padding: '12px 24px', display: 'flex', flexWrap: 'wrap', gap: '8px',
    borderTop: '1.5px solid rgba(0,180,216,0.2)',
    backgroundColor: '#ffffff',
  },
  suggestionBtn: {
    backgroundColor: '#f8f9fa',
    border: '1.5px solid rgba(0,180,216,0.3)',
    color: '#555', padding: '6px 14px', borderRadius: '20px',
    cursor: 'pointer', fontSize: '12px', fontFamily: 'sans-serif',
    transition: 'all 0.2s ease',
  },
  inputArea: {
    padding: '16px 24px', display: 'flex', gap: '12px',
    borderTop: '1.5px solid rgba(0,180,216,0.2)',
    backgroundColor: '#ffffff',
  },
  input: {
    flex: 1, backgroundColor: '#f8f9fa',
    border: '1.5px solid rgba(0,180,216,0.3)',
    borderRadius: '10px', padding: '12px 16px', color: '#1a1a1a',
    fontSize: '14px', outline: 'none', fontFamily: 'sans-serif',
  },
  sendBtn: {
    backgroundColor: '#FF6B00', color: '#ffffff', border: 'none',
    borderRadius: '10px', padding: '12px 20px', cursor: 'pointer',
    fontSize: '14px', fontWeight: '700', fontFamily: 'sans-serif',
    display: 'flex', alignItems: 'center', gap: '8px',
    transition: 'background-color 0.2s ease',
  },
  disclaimerRow: {
    display: 'flex', alignItems: 'flex-start', gap: '8px',
    padding: '12px 24px', borderTop: '1.5px solid rgba(0,180,216,0.15)',
    backgroundColor: '#fffbeb',
  },
  disclaimer: {
    color: '#666', fontSize: '11px', margin: 0,
    lineHeight: '1.6',
  },
};

export default Chatbot;
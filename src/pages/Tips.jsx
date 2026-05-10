import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  FiDroplet, FiHome, FiUser, FiSliders, FiCoffee,
  FiShoppingBag, FiActivity, FiUserCheck, FiXCircle,
  FiPlusCircle, FiAlertCircle, FiAlertTriangle
} from 'react-icons/fi';

function Tips() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const iconMap = {
    water:    <FiDroplet size={24} color="#00b4d8" />,
    home:     <FiHome size={24} color="#00b4d8" />,
    child:    <FiUser size={24} color="#FF6B00" />,
    brush:    <FiSliders size={24} color="#FF6B00" />,
    bottle:   <FiShoppingBag size={24} color="#FF6B00" />,
    drink:    <FiCoffee size={24} color="#8b5cf6" />,
    tea:      <FiCoffee size={24} color="#8b5cf6" />,
    milk:     <FiActivity size={24} color="#8b5cf6" />,
    tooth:    <FiActivity size={24} color="#00b4d8" />,
    doctor:   <FiUserCheck size={24} color="#00b4d8" />,
    no:       <FiXCircle size={24} color="#00b4d8" />,
    pill:     <FiPlusCircle size={24} color="#00b4d8" />,
  };

  const content = {
    EN: {
      title: 'Fluorosis Prevention & Care Tips',
      subtitle: 'Evidence-based guidance derived from peer-reviewed clinical research to help you prevent and manage dental fluorosis.',
      filterAll: 'All Tips',
      filterPrevention: 'Prevention',
      filterDiet: 'Diet & Water',
      filterHygiene: 'Dental Hygiene',
      filterChildren: 'Children',
      disclaimer: 'These tips are for general awareness only and do not replace professional dental advice. Consult a qualified dentist for clinical guidance.',
      tips: [
        { category: 'prevention', iconKey: 'water', title: 'Monitor Your Water Fluoride Levels', desc: 'The recommended fluoride level in drinking water is 0.7 mg/L (WHO guideline). Water fluoride levels above 1.5 mg/L significantly increase the risk of dental fluorosis. If you use well water, have it tested regularly.', tag: 'Prevention', tagColor: '#00b4d8' },
        { category: 'prevention', iconKey: 'home', title: 'Use Filtered or Bottled Water in High-Risk Areas', desc: 'In areas where groundwater fluoride levels are high (common in parts of South Asia including Pakistan), use reverse osmosis filtered water or certified low-fluoride bottled water for drinking and cooking.', tag: 'Prevention', tagColor: '#00b4d8' },
        { category: 'children', iconKey: 'child', title: 'Critical Window: Ages 0 to 8', desc: 'Dental fluorosis only develops during tooth formation, which occurs from birth to approximately age 8. Fluoride exposure during this critical period poses the highest risk. Extra care must be taken with young children.', tag: 'Children', tagColor: '#FF6B00' },
        { category: 'children', iconKey: 'brush', title: 'Use Age-Appropriate Toothpaste for Children', desc: 'Children under 3 years should use only a smear (rice-grain size) of fluoride toothpaste. Children aged 3 to 6 should use no more than a pea-sized amount. Supervise brushing until age 8.', tag: 'Children', tagColor: '#FF6B00' },
        { category: 'children', iconKey: 'bottle', title: 'Avoid Mixing Infant Formula with Fluoridated Water', desc: 'Infants who are primarily fed formula mixed with fluoridated tap water may be at increased risk of mild fluorosis. Use low-fluoride water when preparing infant formula where possible.', tag: 'Children', tagColor: '#FF6B00' },
        { category: 'diet', iconKey: 'drink', title: 'Be Aware of Hidden Fluoride Sources', desc: 'Fluoride is found not only in water but also in certain foods and beverages including tea (especially black tea), fish, and some processed foods. Being aware of total daily fluoride intake from all sources is important.', tag: 'Diet & Water', tagColor: '#8b5cf6' },
        { category: 'diet', iconKey: 'tea', title: 'Limit Excessive Tea Consumption', desc: 'Black tea has naturally high fluoride content. Excessive daily consumption, particularly in combination with high-fluoride water, can contribute to elevated fluoride intake. Moderate consumption is advised.', tag: 'Diet & Water', tagColor: '#8b5cf6' },
        { category: 'diet', iconKey: 'milk', title: 'Calcium-Rich Diet Supports Enamel Health', desc: 'A diet rich in calcium (dairy products, leafy greens, nuts) supports overall tooth enamel strength. While it does not reverse fluorosis, adequate calcium intake contributes to general dental health.', tag: 'Diet & Water', tagColor: '#8b5cf6' },
        { category: 'hygiene', iconKey: 'tooth', title: 'Maintain Consistent Oral Hygiene', desc: 'Brush teeth twice daily with fluoride toothpaste using a soft-bristled brush. Floss daily. Even with fluorosis present, good hygiene prevents additional complications such as cavities and gum disease.', tag: 'Dental Hygiene', tagColor: '#00b4d8' },
        { category: 'hygiene', iconKey: 'doctor', title: 'Regular Professional Dental Check-ups', desc: 'Visit a dentist every 6 months for professional cleaning and early detection of any worsening dental conditions. For mild to severe fluorosis cases, your dentist may recommend cosmetic or restorative treatment options.', tag: 'Dental Hygiene', tagColor: '#00b4d8' },
        { category: 'hygiene', iconKey: 'no', title: 'Avoid Abrasive Whitening Products', desc: 'Over-the-counter whitening toothpastes and strips can be abrasive and may worsen the appearance of fluorosis staining. Consult a dentist before using any whitening products if you have fluorosis.', tag: 'Dental Hygiene', tagColor: '#00b4d8' },
        { category: 'prevention', iconKey: 'pill', title: 'Consult Before Taking Fluoride Supplements', desc: 'Fluoride supplements should only be taken under the guidance of a dentist or physician. Self-prescribing fluoride supplements, especially for children, significantly increases the risk of fluorosis.', tag: 'Prevention', tagColor: '#00b4d8' },
      ],
    },
    UR: {
      title: 'فلوروسس سے بچاؤ اور دیکھ بھال کے مشورے',
      subtitle: 'ہم مرتبہ جائزہ لی گئی طبی تحقیق سے ماخوذ رہنمائی جو آپ کو ڈینٹل فلوروسس سے بچنے اور اس کے انتظام میں مدد کرے گی۔',
      filterAll: 'تمام',
      filterPrevention: 'بچاؤ',
      filterDiet: 'غذا و پانی',
      filterHygiene: 'دانتوں کی صفائی',
      filterChildren: 'بچے',
      disclaimer: 'یہ مشورے صرف عام آگاہی کے لیے ہیں اور پیشہ ورانہ دانتوں کے مشورے کا متبادل نہیں۔',
      tips: [
        { category: 'prevention', iconKey: 'water', title: 'پانی میں فلورائیڈ کی سطح جانچیں', desc: 'پینے کے پانی میں تجویز کردہ فلورائیڈ کی سطح 0.7 mg/L ہے۔ 1.5 mg/L سے زیادہ فلورائیڈ فلوروسس کا خطرہ بڑھاتا ہے۔', tag: 'بچاؤ', tagColor: '#00b4d8' },
        { category: 'prevention', iconKey: 'home', title: 'زیادہ خطرے والے علاقوں میں فلٹر پانی استعمال کریں', desc: 'پاکستان کے بعض علاقوں میں زیرزمین پانی میں فلورائیڈ زیادہ ہوتا ہے۔ ریورس اوسموسس فلٹر یا کم فلورائیڈ والی بوتل بند پانی استعمال کریں۔', tag: 'بچاؤ', tagColor: '#00b4d8' },
        { category: 'children', iconKey: 'child', title: 'اہم مرحلہ: پیدائش سے 8 سال تک', desc: 'ڈینٹل فلوروسس صرف دانتوں کی تشکیل کے دوران ہوتا ہے۔ اس عرصے میں فلورائیڈ کی زیادہ نمائش سب سے زیادہ خطرناک ہے۔', tag: 'بچے', tagColor: '#FF6B00' },
        { category: 'children', iconKey: 'brush', title: 'بچوں کے لیے مناسب ٹوتھ پیسٹ استعمال کریں', desc: '3 سال سے کم عمر بچوں کے لیے چاول کے دانے جتنا ٹوتھ پیسٹ کافی ہے۔ 3 سے 6 سال کے بچوں کے لیے مٹر کے دانے جتنا۔', tag: 'بچے', tagColor: '#FF6B00' },
        { category: 'diet', iconKey: 'drink', title: 'فلورائیڈ کے پوشیدہ ذرائع سے آگاہ رہیں', desc: 'فلورائیڈ صرف پانی میں نہیں بلکہ چائے، مچھلی اور بعض پراسیس شدہ غذاؤں میں بھی پایا جاتا ہے۔', tag: 'غذا و پانی', tagColor: '#8b5cf6' },
        { category: 'diet', iconKey: 'tea', title: 'زیادہ چائے پینے سے گریز کریں', desc: 'کالی چائے میں قدرتی طور پر فلورائیڈ زیادہ ہوتا ہے۔ روزانہ بہت زیادہ چائے پینا خطرہ بڑھا سکتا ہے۔', tag: 'غذا و پانی', tagColor: '#8b5cf6' },
        { category: 'hygiene', iconKey: 'tooth', title: 'دانتوں کی صفائی کا معمول', desc: 'دن میں دو بار نرم برش سے دانت صاف کریں۔ روزانہ فلاس کریں۔ اچھی صفائی اضافی پیچیدگیوں سے بچاتی ہے۔', tag: 'دانتوں کی صفائی', tagColor: '#00b4d8' },
        { category: 'hygiene', iconKey: 'doctor', title: 'باقاعدہ ڈینٹل چیک اپ', desc: 'ہر 6 ماہ بعد ڈینٹسٹ سے ملیں۔ ہلکے سے شدید فلوروسس کے لیے ڈاکٹر علاج کے اختیارات تجویز کر سکتا ہے۔', tag: 'دانتوں کی صفائی', tagColor: '#00b4d8' },
        { category: 'prevention', iconKey: 'pill', title: 'فلورائیڈ سپلیمنٹس لینے سے پہلے مشورہ کریں', desc: 'فلورائیڈ سپلیمنٹس صرف ڈاکٹر کی ہدایت پر لیں۔ خود سے سپلیمنٹس لینا فلوروسس کا خطرہ بڑھاتا ہے۔', tag: 'بچاؤ', tagColor: '#00b4d8' },
      ],
    }
  };

  const t = content[language];

  const categories = [
    { key: 'all',        label: t.filterAll },
    { key: 'prevention', label: t.filterPrevention },
    { key: 'diet',       label: t.filterDiet },
    { key: 'hygiene',    label: t.filterHygiene },
    { key: 'children',   label: t.filterChildren },
  ];

  const filteredTips = activeCategory === 'all'
    ? t.tips
    : t.tips.filter(tip => tip.category === activeCategory);

  return (
    <div style={styles.container}>

      {/* Header */}
      <div style={styles.hero}>
        <h1 style={styles.title}>{t.title}</h1>
        <p style={styles.subtitle}>{t.subtitle}</p>
      </div>

      {/* Filter Buttons */}
      <div style={styles.filterRow}>
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            style={{
              ...styles.filterBtn,
              backgroundColor: activeCategory === cat.key ? '#00b4d8' : '#ffffff',
              color: activeCategory === cat.key ? '#ffffff' : '#555',
              border: activeCategory === cat.key
                ? '1.5px solid #00b4d8'
                : '1.5px solid rgba(0,180,216,0.3)',
              boxShadow: activeCategory === cat.key
                ? '0 4px 14px rgba(0,180,216,0.25)'
                : 'none',
            }}
            onMouseEnter={e => {
              if (activeCategory !== cat.key) {
                e.currentTarget.style.borderColor = '#00b4d8';
                e.currentTarget.style.color = '#00b4d8';
              }
            }}
            onMouseLeave={e => {
              if (activeCategory !== cat.key) {
                e.currentTarget.style.borderColor = 'rgba(0,180,216,0.3)';
                e.currentTarget.style.color = '#555';
              }
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Tips Grid */}
      <div style={styles.grid}>
        {filteredTips.map((tip, i) => (
          <div
            key={i}
            style={styles.card}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,180,216,0.16)';
              e.currentTarget.style.borderColor = '#00b4d8';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
              e.currentTarget.style.borderColor = 'rgba(0,180,216,0.28)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={styles.cardTop}>
              <div style={{
                ...styles.iconWrapper,
                backgroundColor: `${tip.tagColor}12`,
                border: `1.5px solid ${tip.tagColor}30`,
              }}>
                {iconMap[tip.iconKey]}
              </div>
              <span style={{
                ...styles.tag,
                backgroundColor: `${tip.tagColor}12`,
                color: tip.tagColor,
                border: `1.5px solid ${tip.tagColor}35`,
              }}>
                {tip.tag}
              </span>
            </div>
            <h3 style={styles.cardTitle}>{tip.title}</h3>
            <p style={styles.cardDesc}>{tip.desc}</p>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div style={styles.disclaimerBox}>
        <div style={styles.disclaimerIcon}>
          <FiAlertTriangle size={16} color="#d97706" />
        </div>
        <p style={styles.disclaimer}>{t.disclaimer}</p>
      </div>

    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f5f7fa', minHeight: '100vh',
    padding: '60px 40px', fontFamily: 'sans-serif', color: '#1a1a1a',
  },
  hero: {
    textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px auto',
    background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
    borderRadius: '20px', padding: '48px 40px',
    border: '1.5px solid rgba(0,180,216,0.3)',
    boxShadow: '0 4px 24px rgba(0,180,216,0.08)',
  },
  title: { fontSize: '32px', fontWeight: '800', margin: '0 0 12px 0', color: '#1a1a1a' },
  subtitle: { color: '#555', fontSize: '14px', lineHeight: '1.7', margin: 0 },
  filterRow: {
    display: 'flex', flexWrap: 'wrap', gap: '10px',
    justifyContent: 'center', marginBottom: '36px',
  },
  filterBtn: {
    padding: '8px 22px', borderRadius: '20px', fontSize: '13px',
    fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s ease',
    fontFamily: 'sans-serif',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px', maxWidth: '1100px', margin: '0 auto 40px auto',
  },
  card: {
    backgroundColor: '#ffffff',
    border: '1.5px solid rgba(0,180,216,0.28)',
    borderRadius: '16px', padding: '24px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
    transition: 'all 0.25s ease', cursor: 'default',
  },
  cardTop: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: '16px',
  },
  iconWrapper: {
    width: '48px', height: '48px', borderRadius: '12px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  tag: {
    fontSize: '11px', fontWeight: '700', padding: '4px 10px',
    borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px',
  },
  cardTitle: {
    color: '#1a1a1a', fontSize: '15px', fontWeight: '700',
    margin: '0 0 10px 0', lineHeight: '1.4',
  },
  cardDesc: {
    color: '#666', fontSize: '13px', lineHeight: '1.7', margin: 0,
  },
  disclaimerBox: {
    maxWidth: '700px', margin: '0 auto',
    backgroundColor: '#fffbeb',
    border: '1.5px solid rgba(217,119,6,0.3)',
    borderRadius: '12px', padding: '16px 20px',
    display: 'flex', alignItems: 'flex-start', gap: '10px',
  },
  disclaimerIcon: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: '28px', height: '28px', borderRadius: '8px',
    backgroundColor: 'rgba(217,119,6,0.1)', flexShrink: 0,
  },
  disclaimer: {
    color: '#666', fontSize: '12px', lineHeight: '1.6', margin: 0,
  },
};

export default Tips;
import React from 'react';

function ResultBadge({ severity }) {
  const config = {
    Normal: { color: '#00d4c8', bg: 'rgba(0,212,200,0.12)', border: 'rgba(0,212,200,0.3)', icon: '✅', label: 'Normal' },
    Mild: { color: '#ffa500', bg: 'rgba(255,165,0,0.12)', border: 'rgba(255,165,0,0.3)', icon: '⚠️', label: 'Mild' },
    Severe: { color: '#ff4d4d', bg: 'rgba(255,77,77,0.12)', border: 'rgba(255,77,77,0.3)', icon: '🚨', label: 'Severe' },
  };

  const c = config[severity] || config['Normal'];

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: c.bg, border: `1px solid ${c.border}`, borderRadius: '30px', padding: '8px 18px' }}>
      <span style={{ fontSize: '16px' }}>{c.icon}</span>
      <span style={{ color: c.color, fontWeight: '700', fontSize: '14px' }}>{c.label}</span>
    </div>
  );
}

export default ResultBadge;
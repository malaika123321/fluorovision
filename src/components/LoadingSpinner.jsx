import React from 'react';

function LoadingSpinner({ message = 'Loading...' }) {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={styles.message}>{message}</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 20px' },
  spinner: { width: '48px', height: '48px', border: '4px solid rgba(201,168,76,0.2)', borderTop: '4px solid #c9a84c', borderRadius: '50%', animation: 'spin 0.9s linear infinite', marginBottom: '16px' },
  message: { color: '#b0a8c8', fontSize: '14px', margin: 0 },
};

export default LoadingSpinner;
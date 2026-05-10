import React from 'react';

function ChatBubble({ message, isUser }) {
  return (
    <div style={{ display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start', marginBottom: '12px' }}>
      {!isUser && (
        <div style={styles.avatar}>🦷</div>
      )}
      <div style={{
        ...styles.bubble,
        backgroundColor: isUser ? '#c9a84c' : '#221d35',
        color: isUser ? '#0d0b1a' : '#ffffff',
        borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
        border: isUser ? 'none' : '1px solid rgba(201,168,76,0.2)',
      }}>
        <p style={styles.text}>{message}</p>
      </div>
      {isUser && (
        <div style={styles.userAvatar}>👤</div>
      )}
    </div>
  );
}

const styles = {
  avatar: { width: '34px', height: '34px', backgroundColor: '#1a1528', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', marginRight: '8px', flexShrink: 0 },
  userAvatar: { width: '34px', height: '34px', backgroundColor: '#221d35', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', marginLeft: '8px', flexShrink: 0 },
  bubble: { maxWidth: '70%', padding: '10px 16px' },
  text: { margin: 0, fontSize: '13px', lineHeight: '1.6' },
};

export default ChatBubble;
import React from 'react';

const iconStyle = {
  width: 24,
  height: 24,
  margin: '0 8px',
  verticalAlign: 'middle',
  fill: 'none',
  stroke: '#fff',
  strokeWidth: 1.5,
};

const Footer = () => {
  return (
    <footer style={{
      background: '#0C0E0F',
      color: '#fff',
      borderTop: '1px solid #333',
      padding: '24px 0 12px 0',
      fontFamily: 'Montserrat, Arial, sans-serif',
      fontSize: 16,
      width: '100%',
      position: 'relative',
      bottom: 0,
    }}>
      <div style={{
        maxWidth: 1400,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
      }}>
        {/* Left: Quality Policy */}
        <div>
          <a href="/quality-policy" style={{ color: '#fff', textDecoration: 'none' }}>Quality Policy</a>
        </div>
        {/* Center: Social Icons */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Instagram */}
          <a href="#" aria-label="Instagram">
            <svg style={iconStyle} viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
          </a>
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn">
            <svg style={iconStyle} viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><line x1="7" y1="10" x2="7" y2="17"/><line x1="7" y1="7" x2="7" y2="7"/><line x1="12" y1="10" x2="12" y2="17"/><path d="M12 13c0-1.1 1.1-2 2.5-2s2.5.9 2.5 2v4"/></svg>
          </a>
          {/* YouTube */}
          <a href="#" aria-label="YouTube">
            <svg style={iconStyle} viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4"/><polygon points="10,9 16,12 10,15"/></svg>
          </a>
          {/* Twitter */}
          <a href="#" aria-label="Twitter">
            <svg style={iconStyle} viewBox="0 0 24 24"><path d="M22 5.92a8.38 8.38 0 0 1-2.36.65A4.13 4.13 0 0 0 21.4 4.1a8.19 8.19 0 0 1-2.6 1A4.1 4.1 0 0 0 12 8.09c0 .32.04.64.1.94A11.65 11.65 0 0 1 3 4.89a4.07 4.07 0 0 0-.55 2.06c0 1.42.72 2.68 1.82 3.42a4.07 4.07 0 0 1-1.86-.51v.05c0 1.98 1.41 3.63 3.28 4a4.1 4.1 0 0 1-1.85.07c.52 1.62 2.03 2.8 3.82 2.83A8.23 8.23 0 0 1 2 19.11a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.18 8.18 0 0 0 22 5.92z"/></svg>
          </a>
          {/* Facebook */}
          <a href="#" aria-label="Facebook">
            <svg style={iconStyle} viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 8h-2a2 2 0 0 0-2 2v2h4l-.5 4h-3.5v6"/></svg>
          </a>
        </div>
        {/* Right: Copyright */}
        <div style={{ color: '#b0b0b0', fontSize: 15 }}>
          © Copyright 2025. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
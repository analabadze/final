import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        
        {/* Navigation Section */}
        <div style={navSectionStyle}>
          <p style={sectionTitleStyle}>ნავიგაცია</p>
          <ul style={ulStyle}>
            <li style={liStyle}><Link to="/about" style={footerLinkStyle}>ჩვენს შესახებ</Link></li>
            <li style={liStyle}><Link to="/" style={footerLinkStyle}>მენიუ</Link></li>
            <li style={liStyle}><Link to="/contact" style={footerLinkStyle}>კონტაქტი</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div style={contactSectionStyle}>
          <p style={sectionTitleStyle}>დაგვიკავშირდით</p>
          <ul style={ulStyle}>
            <li style={liStyle}>📞 (555) 123-456</li>
            <li style={liStyle}>📧 ana.labadze435@tsu.edu.ge</li>
            <li style={liStyle}>📍 ქუთაისი, ნიკეას ქუჩა</li>
          </ul>
        </div>

        {/* Brand / Social Section */}
        <div style={brandSectionStyle}>
          <p style={logoStyle}>🍜 Simple Menu</p>
          <div style={socialLinksStyle}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <span style={socialIconStyle}>📘</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <span style={socialIconStyle}>📸</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <span style={socialIconStyle}>🐦</span>
            </a>
          </div>
        </div>

      </div>

      <div style={dividerStyle}></div>

      <div style={copyrightStyle}>
        &copy; {new Date().getFullYear()} Simple Menu. ყველა უფლება დაცულია.
      </div>
    </footer>
  );
};

/* ===================== Modernized Styles ===================== */

const footerStyle = {
  backgroundColor: '#fff',
  color: '#333',
  padding: '50px 8% 20px',
  boxShadow: '0 -2px 12px rgba(0,0,0,0.05)',
  fontFamily: "'Inter', sans-serif",
  transition: 'all 0.3s ease',
};

const footerContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '40px',
};

const sectionTitleStyle = {
  fontSize: '1em',
  fontWeight: '700',
  color: 'var(--primary-color, #0070f3)',
  marginBottom: '15px',
  letterSpacing: '0.5px',
  textTransform: 'uppercase',
};

const ulStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const liStyle = {
  marginBottom: '8px',
  fontSize: '0.95em',
  color: '#555',
};

const footerLinkStyle = {
  textDecoration: 'none',
  color: '#555',
  transition: 'color 0.3s ease, transform 0.2s ease',
};

footerLinkStyle[':hover'] = {
  color: '#0070f3',
  transform: 'translateX(4px)',
};

const navSectionStyle = {
  flex: '1 1 220px',
  minWidth: '180px',
};

const contactSectionStyle = {
  flex: '1 1 220px',
  minWidth: '180px',
};

const brandSectionStyle = {
  flex: '1 1 220px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  textAlign: 'right',
  minWidth: '180px',
};

const logoStyle = {
  fontSize: '1.2em',
  fontWeight: 800,
  color: '#111',
  marginBottom: '12px',
};

const socialLinksStyle = {
  display: 'flex',
  gap: '18px',
  marginTop: '8px',
};

const socialLinkStyle = {
  textDecoration: 'none',
  color: '#555',
  fontSize: '22px',
  transition: 'transform 0.2s ease, color 0.3s ease',
};

const socialIconStyle = {
  display: 'inline-block',
  transition: 'transform 0.3s ease',
};

const dividerStyle = {
  margin: '25px 0 15px',
  height: '1px',
  backgroundColor: '#eee',
  width: '100%',
};

const copyrightStyle = {
  textAlign: 'center',
  fontSize: '0.85em',
  color: '#777',
  paddingBottom: '10px',
};



export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container" style={footerContainerStyle}>
      
        <div style={navSectionStyle}>
          <p style={sectionTitleStyle}>ნავიგაცია</p>
          <ul style={ulStyle}>
           
            <li style={liStyle}><Link to="/about" style={footerLinkStyle}>ჩვენს შესახებ</Link></li>
            <li style={liStyle}><Link to="/" style={footerLinkStyle}>მენიუ</Link></li>
         <li style={liStyle}><Link to="/contact" style={footerLinkStyle}>კონტაქტი</Link></li>
          
            
          </ul>
        </div>

        <div style={contactSectionStyle}>
          <p style={sectionTitleStyle}>დაგვიკავშირდით</p>
          <ul style={ulStyle}>
            <li style={liStyle}>📞 (555) 123-456</li>
            <li style={liStyle}>📧 ana.labadze435@tsu.edu.ge</li> 
            <li style={liStyle}>📍 Kutaisi. Nikea street</li> 
          </ul>
        </div>
        
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
      
      <div style={copyrightStyle}>
        <div className="container">
          &copy; {new Date().getFullYear()} Simple Menu. ყველა უფლება დაცულია.
        </div>
      </div>
    </footer>
  );
};

// [აქ იქნებოდა სტილების კოდი, რომელიც უცვლელია]
const footerStyle = {
    backgroundColor: 'var(--footer-bg, #f8f8f8)',
    borderTop: '1px solid var(--border-color, #eee)',
    color: 'var(--text-color-dark, #333)',
    paddingTop: '40px',
    fontSize: '14px',
};

const footerContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '30px',
    paddingBottom: '30px',
    flexWrap: 'wrap', 
};

const sectionTitleStyle = {
    fontSize: '16px',
    fontWeight: '700',
    color: 'var(--primary-color-dark, #2c3e50)',
    marginBottom: '15px',
    borderBottom: '2px solid var(--primary-color, #e74c3c)',
    paddingBottom: '5px',
    display: 'inline-block',
};

const ulStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
};

const liStyle = {
    marginBottom: '8px',
};

const footerLinkStyle = {
    textDecoration: 'none',
    color: 'var(--text-color-light, #555)',
    transition: 'color 0.2s ease',
};

const navSectionStyle = {
    flex: '1 1 200px', 
};

const contactSectionStyle = {
    flex: '1 1 200px',
};

const brandSectionStyle = {
    flex: '1 1 200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
};

const logoStyle = {
    fontSize: '20px', 
    fontWeight: '800', 
    color: 'var(--primary-color-brand, #34495e)',
    marginBottom: '15px',
};

const socialLinksStyle = {
    display: 'flex',
    gap: '15px',
    marginTop: '10px',
};

const socialLinkStyle = {
    textDecoration: 'none',
    color: 'var(--text-color-light, #555)',
    fontSize: '20px',
    transition: 'transform 0.2s ease',
};

const socialIconStyle = {};

const copyrightStyle = {
    backgroundColor: 'var(--copyright-bg, #e0e0e0)',
    padding: '10px 0',
    textAlign: 'center',
    marginTop: '30px',
    fontSize: '13px',
    color: 'var(--text-color-dark, #444)',
};


export default Footer;
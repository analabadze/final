import React from 'react';

const AboutPage = () => {
  return (
    <div className="container" style={pageStyle}>
      
      <h1 style={headingStyle}>🍜 ჩვენს შესახებ: Simple Menu</h1>
      
      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>ჩვენი მისია</h2>
        <p style={paragraphStyle}>
          Simple Menu დაარსდა იმ მიზნით, რომ ონლაინ შეკვეთის პროცესი  მაქსიმალურად კომფორტული გახადა. 
           ჩვენ ვაკავშირებთ საუკეთესო ადგილობრივ რესტორნებს მომხმარებლებთან, 
          რათა ხარისხიანი კერძები დროულად და მარტივად მვიტანოთ თქვენამდე.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>რატომ ავირჩიოთ ჩვენ?</h2>
        <ul style={ulStyle}>
          <li style={liStyle}>✅ მარტივი ინტერფეისი.</li>
          <li style={liStyle}>🚀 სწრაფი მიწოდება .</li>
          <li style={liStyle}>⭐️ საუკეთესო რესტორნების შერჩევა.</li>
          <li style={liStyle}>💳 გადახდის მოქნილი და უსაფრთხო სისტემები.</li>
        </ul>
      </section>

      <div style={ctaBoxStyle}>
          <p style={ctaTextStyle}>მზად ხართ, შეუკვეთოთ?</p>
          <a href="/" style={ctaButtonStyle}>
            იხილეთ მენიუ
          </a>
      </div>
      
    </div>
  );
};


const pageStyle = {
    padding: '40px 0',
    maxWidth: '900px', 
    margin: '0 auto',
};

const headingStyle = {
    fontSize: '36px',
    color: 'var(--primary-color-dark, #34495e)',
    marginBottom: '30px',
    borderBottom: '3px solid var(--primary-color, #e74c3c)',
    paddingBottom: '10px',
};

const sectionStyle = {
    marginBottom: '30px',
    padding: '15px 0',
};

const subHeadingStyle = {
    fontSize: '24px',
    color: 'var(--primary-color, #e74c3c)',
    marginBottom: '15px',
};

const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.7',
    color: 'var(--text-color, #555)',
};

const ulStyle = {
    listStyle: 'none',
    padding: '0',
};

const liStyle = {
    fontSize: '16px',
    lineHeight: '2.0',
    color: 'var(--text-color, #333)',
    marginBottom: '5px',
    fontWeight: '500',
};

const ctaBoxStyle = {
    marginTop: '50px',
    padding: '30px',
    backgroundColor: 'var(--cta-bg, #f0f0f0)',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
};

const ctaTextStyle = {
    fontSize: '20px',
    color: 'var(--primary-color-dark, #34495e)',
    marginBottom: '20px',
    fontWeight: '700',
};

const ctaButtonStyle = {
    backgroundColor: 'var(--primary-color, #e74c3c)',
    color: '#fff', 
    padding: '12px 25px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '25px',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease',
    display: 'inline-block',
};

export default AboutPage;
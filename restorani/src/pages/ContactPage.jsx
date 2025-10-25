import React from 'react';

const ContactPage = () => {
  return (
    <div className="container" style={pageStyle}>
      
      <h1 style={headingStyle}>✉️ დაგვიკავშირდით</h1>
      
      <div style={contentWrapperStyle}>
        
  
        <section style={infoSectionStyle}>
          <h2 style={subHeadingStyle}>ჩვენი საკონტაქტო მონაცემები</h2>
          <p style={infoParagraphStyle}>ჩვენ მზად ვართ, ვუპასუხოთ თქვენს ნებისმიერ შეკითხვას. მოგვწერეთ ან დაგვირეკეთ:</p>
          
          <ul style={ulStyle}>
            <li style={liStyle}>📞 ტელეფონი: <span style={infoDetailStyle}>(555) 123-456</span></li>
            <li style={liStyle}>📧 ელ. ფოსტა: <span style={infoDetailStyle}>ana.labadze435@tsu.edu.ge </span></li>
            <li style={liStyle}>📍 მისამართი: <span style={infoDetailStyle}>kutaisi. nikea street 17 </span></li>
            <li style={liStyle}>⏰ სამუშაო საათები: <span style={infoDetailStyle}> Monday - Sunday  10:00 - 23:00</span></li>
          </ul>
        </section>

      
        <section style={formSectionStyle}>
          <h2 style={subHeadingStyle}>გამოგვიგზავნეთ შეტყობინება</h2>
          <form style={formStyle}>
            <input type="text" placeholder="თქვენი სახელი" style={inputStyle} required />
            <input type="email" placeholder="თქვენი ელ. ფოსტა" style={inputStyle} required />
            <textarea placeholder="თქვენი შეკითხვა/შეტყობინება" rows="5" style={textareaStyle} required />
            <button type="submit" style={submitButtonStyle}>გაგზავნა</button>
          </form>
        </section>
        
      </div>
    </div>
  );
};



const pageStyle = {
    padding: '40px 0',
    maxWidth: '1000px',
    margin: '0 auto',
};

const headingStyle = {
    fontSize: '36px',
    color: 'var(--primary-color-dark, #34495e)',
    marginBottom: '30px',
    borderBottom: '3px solid var(--primary-color, #e74c3c)',
    paddingBottom: '10px',
};

const contentWrapperStyle = {
    display: 'flex',
    gap: '40px',
    flexWrap: 'wrap',
};

const infoSectionStyle = {
    flex: '1 1 350px',
    paddingRight: '20px',
};

const formSectionStyle = {
    flex: '1 1 450px',
    backgroundColor: 'var(--form-bg, #f9f9f9)',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
};

const subHeadingStyle = {
    fontSize: '24px',
    color: 'var(--primary-color, #e74c3c)',
    marginBottom: '20px',
};

const infoParagraphStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: 'var(--text-color, #555)',
    marginBottom: '20px',
};

const ulStyle = {
    listStyle: 'none',
    padding: '0',
};

const liStyle = {
    marginBottom: '15px',
    fontSize: '17px',
    color: 'var(--text-color-dark, #333)',
};

const infoDetailStyle = {
    fontWeight: '700',
    color: 'var(--primary-color-dark, #2c3e50)',
    marginLeft: '5px',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
};

const inputStyle = {
    padding: '12px',
    border: '1px solid var(--border-color, #ddd)',
    borderRadius: '4px',
    fontSize: '16px',
    transition: 'border-color 0.2s ease',
};

const textareaStyle = {
    ...inputStyle,
    resize: 'vertical',
};

const submitButtonStyle = {
    backgroundColor: 'var(--primary-color, #e74c3c)',
    color: '#fff',
    padding: '12px 20px',
    fontSize: '17px',
    fontWeight: 'bold',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
};

export default ContactPage;
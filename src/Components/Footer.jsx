import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <p>Follow us on:</p>
         <div style={socialIconsStyle}>
        
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <i className="fab fa-facebook" style={iconSizeStyle}></i>
          </a>

        
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <i className="fab fa-twitter" style={iconSizeStyle}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};


const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  textAlign: 'center',
  padding: '20px 0',
};

const footerContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const socialIconsStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

const iconStyle = {
  color: 'white',
  textDecoration: 'none',
};

const iconSizeStyle = {
  fontSize: '30px',
};

export default Footer;

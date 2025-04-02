
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Sanskar</h3>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/sanskar-singh-56851a275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="https://github.com/Sanskar2301" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
            <a href="https://leetcode.com/u/Optimus2301/" target="_blank" rel="noopener noreferrer" className="social-link">leetcode</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Sanskar Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
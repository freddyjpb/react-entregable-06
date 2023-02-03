import React from 'react';
import '../css/footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="copyright">
                © Academlo 2022
            </div>
            <div className="social-networks">
                <a href="https://www.instagram.com/academlohq/">
                    <i className="icon-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/academlo/">
                    <i className="icon-linkedin"></i>
                </a>
                <a href="https://www.youtube.com/c/academlo">
                    <i className="icon-youtube"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
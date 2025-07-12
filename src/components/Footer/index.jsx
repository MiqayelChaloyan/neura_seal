import React from 'react';

import { Instagram, Linkedin, Youtube, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Hosts } from '../../constants/hosts';
import { Pages } from '../../constants/pages';

import './styles.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <Link to={Pages.QUALITY_POLICY} className="footer-link">
            Quality Policy
          </Link>
        </div>
        <div className="social-icons-footer">
          <Link to={Hosts.INSTAGRAM}>
            <Instagram width={25} height={25} />
          </Link>
          <Link to={Hosts.LINKEDIN}>
            <Linkedin width={25} height={25} />
          </Link>
          <Link to={Hosts.YOUTUBE}>
            <Youtube width={25} height={25} />
          </Link>
          <Link to={Hosts.TWITTER}>
            <Twitter width={25} height={25} />
          </Link>
          <Link to={Hosts.FACEBOOK}>
            <Facebook width={25} height={25} />
          </Link>
        </div>
        {/* Right: Copyright */}
        <div className="footer-copyright">
          © Copyright 2025. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
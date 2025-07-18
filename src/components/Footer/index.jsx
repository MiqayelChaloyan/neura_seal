import React from 'react';

import { Link } from 'react-router-dom';

import { Hosts } from '../../constants/hosts';
import { Pages } from '../../constants/pages';
import { SvgPaths, Texts } from '../../constants';

import './styles.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <Link to={Pages.QUALITY_POLICY} className="footer-link">
            {Texts.qualityPolicy}
          </Link>
        </div>
        <div className="social-icons-footer">
          <li><Link to={Hosts.LINKEDIN} aria-label="LinkedIn"><SvgPaths.linkedinIcon /></Link></li>
          <li><Link to={Hosts.INSTAGRAM} aria-label="Instagram"><SvgPaths.instagramIcon /></Link></li>
          <li><Link to={Hosts.YOUTUBE} aria-label="YouTube"><SvgPaths.youtubeIcon /></Link></li>
          <li><Link to={Hosts.TWITTER} aria-label="Twitter"><SvgPaths.twitterIcon /></Link></li>
          <li><Link to={Hosts.FACEBOOK} aria-label="Facebook"><SvgPaths.facebookIcon /></Link></li>
        </div>
        <div className="footer-copyright">
          <p>{Texts.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
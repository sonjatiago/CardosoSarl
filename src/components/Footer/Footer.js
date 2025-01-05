import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Phone, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/lg1.png';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, path, section) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const socialLinks = [
    { 
      icon: <Instagram size={24} />, 
      url: 'https://www.instagram.com/cardososarl/', 
      label: 'Instagram' 
    },
    { 
      icon: <Phone size={24} />, 
      url: 'tel:+41 76 439 57 80',  // Replace with your actual phone number
      label: 'Téléphone' 
    },
    {
      icon: <MapPin size={24} />,
      url: 'https://maps.app.goo.gl/TNbTosowJinb6Tb87',
      label: 'Location'
    },
    {
      icon: <Mail size={24} />,
      url: 'mailto:cardoso-paysages@hotmail.com',
      label: 'Email'
    }
  ];

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Accueil', path: '/#home', section: 'home' },
        { name: 'Nos Projects', path: '/#projects', label: 'Projects', section: 'projects' },
        { name: 'Nos Services', path: '/#services', section: 'services' },
        { name: 'Contact', path: '/#contact', section: 'contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Architecture paysagère', path: '/services#architecture' },
        { name: 'Construction', path: '/services#construction' },
        { name: 'Maintenance', path: '/services#maintenance' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Politique de confidentialité', path: '/privacy' },
        { name: 'Conditions d\'utilisation', path: '/terms' },
        { name: 'Mentions légales', path: '/legal' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link 
            to="/" 
            className="footer-logo-container"
            onClick={(e) => handleNavClick(e, '/#home', 'home')}
          >
            <img src={logo} alt="Cardoso Entreprise Logo" className="footer-logo" />
          </Link>
          <p className="footer-description">
            Transformer les espaces, cultiver les rêves.
          </p>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="social-icon"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer-links-container">
          {footerLinks.map((section, index) => (
            <div key={index} className="footer-section">
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path}
                      onClick={(e) => handleNavClick(e, link.path, link.section)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} CardosoSarl Entreprise. Made by Tiago Guimaraes. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
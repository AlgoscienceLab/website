import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';
import PyramidLogo from './PyramidLogo';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <PyramidLogo />
              <h3><span className="rainbow-text">Algo</span> Science Lab</h3>
            </div>
            <p className="footer-description">
              Emerging semiconductor design startup from Bangladesh, offering innovative 
              IC design services with Cadence Virtuoso and RTL to GDSII solutions.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/algosciencelab" target="_blank" rel="noopener noreferrer" className="social-link glass-hover" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/AlgoscienceLab" target="_blank" rel="noopener noreferrer" className="social-link glass-hover" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://youtube.com/@algoscienceacademy?si=OuDzNeIgsz0sV2KP" target="_blank" rel="noopener noreferrer" className="social-link glass-hover" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/software">Software</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#virtuoso">Cadence Virtuoso Design</a></li>
              <li><a href="#rtl">RTL to GDSII</a></li>
              <li><a href="#physical">Physical Design</a></li>
              <li><a href="#packaging">IC Packaging</a></li>
              <li><a href="#verification">Design Verification</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Chittagong 4217, Bangladesh</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+880 1859 492439</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>algoscienceacademy@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="divider"></div>
          <p>&copy; {currentYear} Algo Science Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

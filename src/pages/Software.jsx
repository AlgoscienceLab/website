import React, { useEffect } from 'react';
import { FaDownload, FaWindows, FaInfoCircle, FaCog } from 'react-icons/fa';
import './Software.css';

const Software = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const software = {
    name: 'AWave Viewer',
    version: '2.0.1',
    size: '45 MB',
    description: 'RTL waveform viewer and verification tool designed for digital design debugging. Visualize and analyze simulation waveforms from RTL code verification and testing.',
    features: [
      'RTL waveform visualization',
      'VCD/FSDB file format support',
      'Multi-signal comparison',
      'Time cursor and measurements',
      'Signal search and filtering',
      'Waveform export capabilities'
    ],
    requirements: [
      'Windows 7 or later',
      '4 GB RAM minimum (8GB recommended)',
      '500 MB available disk space',
      'Compatible with RTL simulators'
    ]
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../Resources/Software/AWaveViewer_Professional_Setup.exe';
    link.download = 'AWaveViewer_Professional_Setup.exe';
    link.click();
  };

  return (
    <div className="software">
      {/* Hero Section */}
      <section className="software-hero">
        <div className="container">
          <div className="software-hero-content fade-in-up">
            <h1 className="software-title">
              Our <span className="gold-text">Software</span>
            </h1>
            <p className="software-subtitle">
              RTL waveform viewer for digital design verification
            </p>
          </div>
        </div>
      </section>

      {/* Software Details */}
      <section className="software-details">
        <div className="container">
          <div className="software-grid">
            <div className="software-image glass fade-in">
              <div className="image-placeholder">
                <FaCog className="placeholder-icon rotating" />
                <FaWindows className="os-icon" />
              </div>
            </div>

            <div className="software-info fade-in-up">
              <div className="software-badge glass">
                <FaWindows /> Windows Application
              </div>
              <h2 className="software-name">{software.name}</h2>
              <div className="software-meta">
                <span className="meta-item">Version {software.version}</span>
                <span className="meta-divider">•</span>
                <span className="meta-item">{software.size}</span>
              </div>
              <p className="software-description">{software.description}</p>
              <button className="btn-gold download-btn" onClick={handleDownload}>
                <FaDownload /> Download Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="features-card glass fade-in-up">
              <div className="card-header">
                <FaInfoCircle className="card-icon" />
                <h3>Key Features</h3>
              </div>
              <ul className="features-list">
                {software.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-bullet">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="features-card glass fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="card-header">
                <FaCog className="card-icon" />
                <h3>System Requirements</h3>
              </div>
              <ul className="features-list">
                {software.requirements.map((requirement, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-bullet">▹</span>
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="documentation-section">
        <div className="container">
          <div className="documentation-card glass fade-in-up">
            <h2 className="section-title">
              Need More <span className="gold-text">Information?</span>
            </h2>
            <p className="documentation-text">
              Download our comprehensive documentation for detailed instructions on RTL waveform viewing, 
              signal debugging workflows, and tips for effective verification.
            </p>
            <a 
              href="../Resources/pdf/Algo Science Lab.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline-gold"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="support-section">
        <div className="container">
          <div className="support-content glass fade-in-up">
            <h2>Need Help?</h2>
            <p>Our support team is here to assist you with tool installation, RTL simulator integration, and technical troubleshooting.</p>
            <div className="support-buttons">
              <a href="/contact" className="btn-gold">Contact Support</a>
              <button className="btn-outline-gold">View FAQ</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Software;

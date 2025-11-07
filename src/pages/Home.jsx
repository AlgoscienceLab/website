import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaRocket, FaLightbulb, FaCog, FaUsers, FaChartLine, FaCode, FaArrowRight,
  FaMicrochip, FaServer, FaLaptopCode, FaGraduationCap, FaAward, FaStar,
  FaCheckCircle, FaHeadset, FaClock, FaGlobe, FaMemory, FaProjectDiagram,
  FaCube, FaDrawPolygon, FaSitemap, FaLayerGroup, FaMicroscope, FaIndustry,
  FaPlay, FaPause
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  const features = [
    {
      icon: <FaMicrochip />,
      title: 'IC Design',
      description: 'Full custom and semi-custom IC design from concept to tape-out',
      color: 'var(--gold)'
    },
    {
      icon: <FaMemory />,
      title: 'RTL Design',
      description: 'Register Transfer Level design and verification for complex systems',
      color: 'var(--light-gold)'
    },
    {
      icon: <FaDrawPolygon />,
      title: 'Layout Design',
      description: 'Physical layout design and optimization for advanced process nodes',
      color: 'var(--text-gold)'
    },
    {
      icon: <FaCube />,
      title: 'IC Packaging',
      description: 'Complete package design solutions from die to final assembly',
      color: 'var(--glow-gold)'
    }
  ];

  const services = [
    {
      icon: <FaMicrochip />,
      title: 'Cadence Virtuoso Design',
      description: 'Expert analog and mixed-signal IC design using Cadence Virtuoso platform. Complete schematic capture, simulation, and layout services',
      color: 'var(--gold)'
    },
    {
      icon: <FaProjectDiagram />,
      title: 'RTL to GDSII Flow',
      description: 'Complete digital design flow from RTL coding through synthesis, place & route, to final GDSII tape-out with timing closure',
      color: 'var(--light-gold)'
    },
    {
      icon: <FaLayerGroup />,
      title: 'Physical Design',
      description: 'Floor planning, placement, clock tree synthesis, routing, and physical verification for advanced technology nodes',
      color: 'var(--text-gold)'
    },
    {
      icon: <FaCube />,
      title: 'IC Package Design',
      description: 'Wire bonding, flip-chip, BGA, and advanced packaging solutions with thermal and signal integrity analysis',
      color: 'var(--glow-gold)'
    },
    {
      icon: <FaMicroscope />,
      title: 'DFT & Verification',
      description: 'Design for Test implementation, ATPG, functional verification, timing analysis, and design rule checking',
      color: 'var(--dark-gold)'
    },
    {
      icon: <FaIndustry />,
      title: 'Process Migration',
      description: 'Technology node migration services, design porting, and optimization for latest foundry processes',
      color: 'var(--gold)'
    }
  ];

  const expertise = [
    { icon: <FaMicrochip />, title: 'Projects Completed', count: '15+', color: 'var(--gold)' },
    { icon: <FaMemory />, title: 'RTL Designs', count: '10+', color: 'var(--light-gold)' },
    { icon: <FaDrawPolygon />, title: 'Layout Projects', count: '8+', color: 'var(--text-gold)' },
    { icon: <FaCube />, title: 'Clients Served', count: '5+', color: 'var(--glow-gold)' }
  ];

  const achievements = [
    { icon: <FaAward />, text: 'Fresh Perspective', color: 'var(--gold)' },
    { icon: <FaStar />, text: 'Quality Focused', color: 'var(--light-gold)' },
    { icon: <FaCheckCircle />, text: 'Dedicated Team', color: 'var(--text-gold)' },
    { icon: <FaHeadset />, text: '24/7 Support', color: 'var(--glow-gold)' },
    { icon: <FaClock />, text: 'Fast Delivery', color: 'var(--dark-gold)' },
    { icon: <FaGlobe />, text: 'Modern Solutions', color: 'var(--gold)' }
  ];

  return (
    <div className="home">
      {/* Particles Background */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section with Video */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="particles-bg">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="floating-particle" style={{
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i * 2}s`
            }}></div>
          ))}
        </div>
        
        <div className="container">
          <div className="hero-content fade-in-up">
            <div className="hero-badge">
              <span className="badge-pulse"></span>
              Semiconductor Design Excellence
            </div>
            
            <h1 className="hero-title">
              Welcome to <span className="rainbow-gradient">Algo Science Lab</span>
            </h1>
            
            <p className="hero-description">
              Leading semiconductor design agency specializing in Cadence Virtuoso, RTL to GDSII flows, 
              and advanced IC package design. From concept to tape-out, we deliver silicon success.
            </p>

            {/* Video Thumbnail Section */}
            <div className="hero-video-section">
              <div className="video-stellar-container">
                {/* Animated Border Lines */}
                <div className="border-animation">
                  <span className="border-line border-top"></span>
                  <span className="border-line border-right"></span>
                  <span className="border-line border-bottom"></span>
                  <span className="border-line border-left"></span>
                </div>
                
                {/* Floating Sparkles */}
                <div className="sparkles-container">
                  {[...Array(12)].map((_, i) => (
                    <span key={i} className="sparkle" style={{
                      left: `${5 + i * 8}%`,
                      top: `${10 + (i % 4) * 25}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${2 + (i % 3)}s`
                    }}></span>
                  ))}
                </div>
                
                <div className="video-thumbnail-container">
                  <div className="video-glow-effect"></div>
                  <div className="video-aurora-effect"></div>
                  
                  <div className="video-frame">
                    <img 
                      src="https://img.youtube.com/vi/MeuUuesTd60/hqdefault.jpg"
                      alt="Algo Science Lab Introduction"
                      className="video-thumbnail"
                      onError={(e) => {
                        e.target.src = "https://img.youtube.com/vi/MeuUuesTd60/0.jpg";
                      }}
                    />
                    <div className="video-overlay-gradient"></div>
                    <div className="video-shine-effect"></div>
                    
                    <button className="hero-play-button" onClick={toggleVideo}>
                      {/* Multiple Glow Layers */}
                      <div className="play-glow-outer"></div>
                      <div className="play-glow-middle"></div>
                      <div className="play-glow-inner"></div>
                      
                      {/* Main Button Core */}
                      <div className="play-button-core">
                        <div className="core-gradient"></div>
                        <div className="play-icon-wrapper">
                          {isPlaying ? <FaPause /> : <FaPlay />}
                        </div>
                      </div>
                      
                      {/* Animated Rings */}
                      <div className="play-ring-outer"></div>
                      <div className="play-ring-middle"></div>
                      <div className="play-ring-inner"></div>
                      
                      {/* Orbiting Particles */}
                      <div className="orbit-particles">
                        {[...Array(20)].map((_, i) => (
                          <span key={i} className="orbit-dot" style={{
                            transform: `rotate(${i * 18}deg) translateY(-65px)`,
                            animationDelay: `${i * 0.05}s`
                          }}></span>
                        ))}
                      </div>
                      
                      {/* Energy Waves */}
                      <div className="energy-waves">
                        <span className="wave wave-1"></span>
                        <span className="wave wave-2"></span>
                        <span className="wave wave-3"></span>
                      </div>
                    </button>
                    
                    {/* Enhanced Corner Accents */}
                    <div className="video-corners">
                      <span className="corner corner-tl">
                        <i className="corner-dot"></i>
                      </span>
                      <span className="corner corner-tr">
                        <i className="corner-dot"></i>
                      </span>
                      <span className="corner corner-bl">
                        <i className="corner-dot"></i>
                      </span>
                      <span className="corner corner-br">
                        <i className="corner-dot"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-buttons">
              <Link to="/about" className="btn-gold">
                Explore More <FaArrowRight />
              </Link>
              <Link to="/contact" className="btn-outline-gold">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>

        {/* Video Player Modal */}
        {isPlaying && (
          <div className="video-player-modal" onClick={() => setIsPlaying(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setIsPlaying(false)}>×</button>
              <iframe
                src="https://www.youtube.com/embed/MeuUuesTd60?autoplay=1&rel=0&modestbranding=1&vq=hd1080&controls=1"
                title="Algo Science Lab Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">
              What We <span className="rainbow-text">Deliver</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive semiconductor design services from schematic to silicon
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card glass glass-hover fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon" style={{ color: feature.color }}>{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">
              Our <span className="rainbow-text">Design Services</span>
            </h2>
            <p className="section-subtitle">
              End-to-end semiconductor design solutions with proven methodologies
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card glass glass-hover fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon-wrapper">
                  <div className="service-icon" style={{ color: service.color }}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to="/contact" className="service-link">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">
              Design <span className="rainbow-text">Track Record</span>
            </h2>
          </div>

          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="expertise-card glass glass-hover fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="expertise-icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <div className="expertise-count rainbow-text">{item.count}</div>
                <div className="expertise-title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-home">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">
              Why Choose <span className="rainbow-text">Us</span>
            </h2>
          </div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="achievement-badge glass glass-hover fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="achievement-icon" style={{ color: achievement.color }}>
                  {achievement.icon}
                </div>
                <div className="achievement-text">{achievement.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item glass fade-in-up">
              <div className="stat-number gold-text">2025</div>
              <div className="stat-label">Founded</div>
            </div>
            <div className="stat-item glass fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="stat-number gold-text">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item glass fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="stat-number gold-text">&lt;10</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-item glass fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="stat-number gold-text">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content glass fade-in-up">
            <FaUsers className="cta-icon" />
            <h2>Ready to Design Your Next IC?</h2>
            <p>Partner with us for your semiconductor design journey from RTL to GDSII</p>
            <Link to="/contact" className="btn-gold">
              Start Your Project <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

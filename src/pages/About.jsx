import React, { useEffect } from 'react';
import { FaMicrochip, FaRocket, FaUsers, FaAward, FaBullseye, FaEye, FaMemory, FaDrawPolygon, FaCube, FaProjectDiagram } from 'react-icons/fa';
import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <FaBullseye />,
      title: 'Our Mission',
      description: 'To provide innovative and quality semiconductor design services, helping clients bring their chip designs to life with modern EDA tools and methodologies.'
    },
    {
      icon: <FaEye />,
      title: 'Our Vision',
      description: 'To become a trusted semiconductor design partner, known for fresh perspectives, dedication to quality, and commitment to client success in the IC design industry.'
    },
    {
      icon: <FaAward />,
      title: 'Our Values',
      description: 'Innovation, Quality, Learning, and Client Satisfaction guide our approach to every project we undertake in our design journey.'
    }
  ];

  const team = [
    { name: 'Design Engineers', icon: <FaMicrochip />, count: '3' },
    { name: 'RTL Developers', icon: <FaMemory />, count: '2' },
    { name: 'Layout Specialists', icon: <FaDrawPolygon />, count: '2' },
    { name: 'Support Team', icon: <FaCube />, count: '2' }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content fade-in-up">
            <h1 className="about-title">
              About <span className="gold-text">Algo Science Lab</span>
            </h1>
            <p className="about-subtitle">
              Leading Semiconductor Design Agency
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story">
        <div className="container">
          <div className="story-grid">
            <div className="story-image glass fade-in">
              <div className="image-placeholder">
                <FaMicrochip className="placeholder-icon" />
              </div>
            </div>
            <div className="story-content fade-in-up">
              <h2 className="section-title">
                Our <span className="gold-text">Story</span>
              </h2>
              <p className="story-text">
                Founded in 2025, Algo Science Lab is a fresh and dynamic semiconductor design startup
                based in Chittagong, Bangladesh. With 2 years of combined experience in the IC design field,
                our passionate team is embarking on an exciting journey in the semiconductor industry.
              </p>
              <p className="story-text">
                Starting with less than 10 dedicated team members, we are focused on delivering quality
                design services from RTL to GDSII, working with modern EDA tools including Cadence Virtuoso.
                Our goal is to grow alongside our clients, learning and innovating together.
              </p>
              <p className="story-text">
                As a startup, we bring fresh perspectives, enthusiasm, and a strong commitment to quality.
                We're building our expertise in both analog and digital design, ready to take on new
                challenges and contribute to the growing semiconductor ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">
              What <span className="gold-text">Drives Us</span>
            </h2>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card glass glass-hover fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">
              Our <span className="gold-text">Design Team</span>
            </h2>
            <p className="section-subtitle">
              Expert engineers specialized in semiconductor design and verification
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div
                key={index}
                className="team-card glass glass-hover fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="team-icon">{member.icon}</div>
                <div className="team-count gold-text">{member.count}</div>
                <div className="team-name">{member.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <div className="container">
          <div className="achievements-content glass fade-in-up">
            <h2 className="section-title">
              Our <span className="gold-text">Journey</span>
            </h2>
              <div className="achievements-grid">
              <div className="achievement-item">
                <div className="achievement-number gold-text">2025</div>
                <div className="achievement-label">Founded</div>
              </div>
              <div className="achievement-item">
                <div className="achievement-number gold-text">15+</div>
                <div className="achievement-label">Projects Completed</div>
              </div>
              <div className="achievement-item">
                <div className="achievement-number gold-text">2+</div>
                <div className="achievement-label">Years Experience</div>
              </div>
              <div className="achievement-item">
                <div className="achievement-number gold-text">5+</div>
                <div className="achievement-label">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

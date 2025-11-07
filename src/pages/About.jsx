import React, { useEffect } from 'react';
import { FaMicrochip, FaRocket, FaUsers, FaAward, FaBullseye, FaEye, FaMemory, FaDrawPolygon, FaCube, FaProjectDiagram, FaChartLine, FaCog, FaCheckCircle, FaLightbulb, FaShieldAlt, FaClock, FaGraduationCap } from 'react-icons/fa';
import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const expertise = [
    {
      icon: <FaMicrochip />,
      title: 'SoC  Architecture',
      description: 'Complete System-on-Chip design from specification to implementation with multi-core CPU, peripherals, and bus architecture',
      technologies: ['AXI', 'AHB', 'APB', 'Multi-Core']
    },
    {
      icon: <FaMemory />,
      title: 'CPU Design',
      description: 'Advanced CPU microarchitecture including pipeline design, ALU, control units, cache hierarchy, and memory management',
      technologies: ['Pipeline', 'Cache', 'MMU', 'ISA']
    },
    {
      icon: <FaDrawPolygon />,
      title: 'IC Packaging',
      description: 'Comprehensive packaging solutions from pad ring design to BGA/QFN assembly with thermal and signal integrity analysis',
      technologies: ['BGA', 'Wirebond', 'Flip-Chip', 'Thermal']
    },
    {
      icon: <FaProjectDiagram />,
      title: 'Physical Design',
      description: 'Full RTL-to-GDSII flow including floorplanning, placement, routing, clock tree synthesis, and design verification',
      technologies: ['PnR', 'CTS', 'DRC', 'LVS']
    },
    {
      icon: <FaCog />,
      title: 'Analog Design',
      description: 'Custom analog and mixed-signal design using Cadence Virtuoso including op-amps, data converters, and power management',
      technologies: ['Virtuoso', 'ADC', 'DAC', 'PLL']
    },
    {
      icon: <FaChartLine />,
      title: 'Verification',
      description: 'Comprehensive verification using UVM methodology, functional coverage, assertions, and protocol compliance testing',
      technologies: ['UVM', 'SystemVerilog', 'Assertions']
    }
  ];

  const values = [
    {
      icon: <FaBullseye />,
      title: 'Our Mission',
      description: 'To deliver cutting-edge semiconductor design solutions that empower innovation in electronics, from concept to silicon, with uncompromising quality and technical excellence.'
    },
    {
      icon: <FaEye />,
      title: 'Our Vision',
      description: 'To become a globally recognized semiconductor design partner, known for innovation, technical expertise, and successful tape-outs in IC design and packaging.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation First',
      description: 'We embrace latest technologies and methodologies in semiconductor design, continuously learning and adapting to industry best practices.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Quality Assured',
      description: 'Every design undergoes rigorous verification, validation, and review processes to ensure reliability and manufacturability.'
    },
    {
      icon: <FaClock />,
      title: 'On-Time Delivery',
      description: 'We understand the critical nature of tape-out schedules and commit to delivering projects within agreed timelines and specifications.'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Continuous Learning',
      description: 'Our team stays updated with latest EDA tools, design techniques, and industry standards to provide state-of-the-art solutions.'
    }
  ];

  const team = [
    { 
      name: 'IC Design Engineers', 
      icon: <FaMicrochip />, 
      count: '3',
      role: 'Analog/Digital Design'
    },
    { 
      name: 'Verification Engineers', 
      icon: <FaCheckCircle />, 
      count: '2',
      role: 'UVM/Functional Verification'
    },
    { 
      name: 'Physical Design', 
      icon: <FaDrawPolygon />, 
      count: '2',
      role: 'RTL-to-GDSII Flow'
    },
    { 
      name: 'Packaging Specialists', 
      icon: <FaCube />, 
      count: '2',
      role: 'IC Package Design'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Foundation',
      description: 'Started with semiconductor design training and initial project experience'
    },
    {
      year: '2024',
      title: 'First Projects',
      description: 'Successfully delivered first RTL design and verification projects'
    },
    {
      year: '2025',
      title: 'Official Launch',
      description: 'Established Algo Science Lab in Chittagong with full-service capabilities'
    },
    {
      year: '2025+',
      title: 'Growth Phase',
      description: 'Expanding team, tools, and targeting tape-out ready designs'
    }
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
              Semiconductor Design Excellence from RTL to Silicon
            </p>
            <div className="hero-stats">
              <div className="stat-item glass">
                <span className="stat-value gold-text">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item glass">
                <span className="stat-value gold-text">15+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item glass">
                <span className="stat-value gold-text">&lt;10</span>
                <span className="stat-label">Team Members</span>
              </div>
              <div className="stat-item glass">
                <span className="stat-value gold-text">5+</span>
                <span className="stat-label">Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="container">
          <div className="overview-content glass fade-in-up">
            <h2 className="section-title">
              Who <span className="gold-text">We Are</span>
            </h2>
            <p className="overview-text">
              <strong>Algo Science Lab</strong> is a specialized semiconductor design startup based in <strong>Chittagong, Bangladesh</strong>, 
              founded in 2025. We are a team of passionate IC design engineers dedicated to delivering high-quality solutions 
              across the complete semiconductor design spectrum.
            </p>
            <p className="overview-text">
              With <strong>2+ years of combined industry experience</strong>, our team specializes in <strong>SoC architecture, 
              CPU microarchitecture, IC packaging, physical design, and verification</strong>. We leverage industry-standard 
              EDA tools including <strong>Cadence Virtuoso, Synopsys, and Mentor Graphics</strong> to deliver production-ready designs.
            </p>
            <p className="overview-text">
              As a growing startup, we bring <strong>fresh perspectives, cutting-edge knowledge, and agile methodologies</strong> to 
              semiconductor design. Our mission is to bridge the gap between concept and silicon, providing cost-effective, 
              high-quality design services for both analog and digital IC development.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">
              Our <span className="gold-text">Expertise</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive semiconductor design capabilities from architecture to tape-out
            </p>
          </div>
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="expertise-card glass glass-hover fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="expertise-icon">{item.icon}</div>
                <h3 className="expertise-title">{item.title}</h3>
                <p className="expertise-description">{item.description}</p>
                <div className="tech-tags">
                  {item.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">
              Our <span className="gold-text">Core Values</span>
            </h2>
            <p className="section-subtitle">
              The principles that guide every aspect of our work
            </p>
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

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">
              Our <span className="gold-text">Journey</span>
            </h2>
            <p className="section-subtitle">
              Milestones in our semiconductor design evolution
            </p>
          </div>
          
          <div className="timeline-container">
            <div className="timeline-line"></div>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="timeline-item fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="timeline-node"></div>
                <div className="timeline-content">
                  <div className="timeline-date">
                    <FaClock />
                    {milestone.year}
                  </div>
                  <h3 className="timeline-title">{milestone.title}</h3>
                  <p className="timeline-description">{milestone.description}</p>
                </div>
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
              Our <span className="gold-text">Expert Team</span>
            </h2>
            <p className="section-subtitle">
              Specialized engineers with expertise across the entire IC design flow
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
                <div className="team-role">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">
              Tools & <span className="gold-text">Technologies</span>
            </h2>
          </div>
          <div className="tech-content glass fade-in-up">
            <div className="tech-category">
              <h3 className="tech-category-title">EDA Tools</h3>
              <div className="tech-list">
                <span className="tech-item">Cadence Virtuoso</span>
                <span className="tech-item">Synopsys Design Compiler</span>
                <span className="tech-item">IC Compiler</span>
                <span className="tech-item">Mentor Calibre</span>
                <span className="tech-item">ModelSim</span>
                <span className="tech-item">VCS</span>
              </div>
            </div>
            <div className="tech-category">
              <h3 className="tech-category-title">Design Languages</h3>
              <div className="tech-list">
                <span className="tech-item">Verilog</span>
                <span className="tech-item">SystemVerilog</span>
                <span className="tech-item">VHDL</span>
                <span className="tech-item">UVM</span>
                <span className="tech-item">SPICE</span>
                <span className="tech-item">Spectre</span>
              </div>
            </div>
            <div className="tech-category">
              <h3 className="tech-category-title">Protocols & Standards</h3>
              <div className="tech-list">
                <span className="tech-item">AXI/AHB/APB</span>
                <span className="tech-item">PCIe</span>
                <span className="tech-item">DDR</span>
                <span className="tech-item">USB</span>
                <span className="tech-item">I2C/SPI</span>
                <span className="tech-item">JTAG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box glass fade-in-up">
            <h2 className="cta-title">
              Ready to Start Your <span className="gold-text">IC Design Project?</span>
            </h2>
            <p className="cta-text">
              Let's collaborate on your next semiconductor design challenge. From concept to tape-out, 
              we're here to bring your vision to silicon.
            </p>
            <button className="btn-gold">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

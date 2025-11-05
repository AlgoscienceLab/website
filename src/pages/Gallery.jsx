import React, { useEffect, useState } from 'react';
import { FaSearch, FaTimes, FaCalendar, FaMicrochip, FaCode, FaChartLine, FaClock, FaTag, FaInfoCircle } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'timeline'

  // Array of images with detailed semiconductor design information
  const images = [
    { 
      src: '/Resources/images/A1M.png', 
      category: 'soc', 
      title: 'A1M SoC Architecture Design',
      description: 'Complete System-on-Chip architecture featuring multi-core CPU, GPU, memory controller, and peripheral interfaces with advanced power management',
      date: '2025-10',
      tech: ['SoC', 'Multi-Core', 'AXI', 'APB'],
      status: 'Completed'
    },
    { 
      src: '/Resources/images/capture_251024_195030.png', 
      category: 'packaging', 
      title: 'IC Pad Ring & Bond Layout',
      description: 'Complete pad ring design with bond pad placement, ESD protection circuits, and peripheral I/O cell arrangement for wirebond packaging',
      date: '2024-10',
      tech: ['Pad Ring', 'Bond Pad', 'ESD', 'I/O'],
      status: 'Design'
    },
    { 
      src: '/Resources/images/capture_251024_195106.png', 
      category: 'packaging', 
      title: 'Chip Floorplan & Die Layout',
      description: 'Full chip floorplan showing core area, pad frame, power ring, corner cells, and seal ring structure for tape-out preparation',
      date: '2024-10',
      tech: ['Floorplan', 'Die', 'Seal Ring'],
      status: 'Design'
    },
    { 
      src: '/Resources/images/capture_251024_195224.png', 
      category: 'packaging', 
      title: 'Wirebond Pattern Design',
      description: 'Optimized wirebond pattern with bond pad pitch, wire clearance, and ball bond/wedge bond positioning for reliable interconnection',
      date: '2024-10',
      tech: ['Wirebond', 'Pitch', 'Clearance'],
      status: 'Design'
    },
    { 
      src: '/Resources/images/capture_251024_195311.png', 
      category: 'packaging', 
      title: 'Package Substrate Routing',
      description: 'Multi-layer package substrate with redistribution layer (RDL) routing, via stackup, and ball grid array (BGA) fanout design',
      date: '2024-10',
      tech: ['RDL', 'BGA', 'Substrate'],
      status: 'Design'
    },
    { 
      src: '/Resources/images/capture_251030_055018.png', 
      category: 'packaging', 
      title: 'Power/Ground Distribution Network',
      description: 'Chip-level power grid with VDD/VSS mesh, decoupling capacitors, power pads, and IR drop optimization for stable power delivery',
      date: '2024-10',
      tech: ['Power Grid', 'PDN', 'IR Drop'],
      status: 'Analysis'
    },
    { 
      src: '/Resources/images/capture_251030_055057.png', 
      category: 'packaging', 
      title: 'Die-to-Package Interface',
      description: 'Die bumping layout with controlled collapse chip connection (C4), flip-chip underfill, and thermal interface material design',
      date: '2024-10',
      tech: ['Flip-Chip', 'C4', 'Bumping'],
      status: 'Design'
    },
    { 
      src: '/Resources/images/capture_251030_055112.png', 
      category: 'packaging', 
      title: 'Signal Integrity & Crosstalk Analysis',
      description: 'Package-level signal integrity with coupled line analysis, ground bounce reduction, and simultaneous switching noise (SSN) mitigation',
      date: '2024-10',
      tech: ['SI', 'Crosstalk', 'SSN'],
      status: 'Analysis'
    },
    { 
      src: '/Resources/images/capture_251030_055124.png', 
      category: 'packaging', 
      title: 'Thermal Via & Heat Sink Design',
      description: 'Thermal management with via-in-pad, thermal vias to ground plane, heat spreader attachment, and junction temperature analysis',
      date: '2024-10',
      tech: ['Thermal', 'Via', 'Heat Sink'],
      status: 'Analysis'
    },
    { 
      src: '/Resources/images/capture_251030_055157.png', 
      category: 'packaging', 
      title: 'QFN/QFP Package Assembly',
      description: 'Quad Flat No-lead (QFN) package design with exposed pad, lead frame layout, mold compound, and solder mask definition',
      date: '2024-10',
      tech: ['QFN', 'QFP', 'Lead Frame'],
      status: 'Design'
    },
    { 
      src: '/Resources/images/capture_251030_055219.png', 
      category: 'packaging', 
      title: 'BGA Ball Pattern & Escape Routing',
      description: 'Ball grid array with optimized ball pitch, escape routing strategy, via-in-pad design, and solder ball placement for high-density I/O',
      date: '2024-10',
      tech: ['BGA', 'Ball Pitch', 'Escape'],
      status: 'Design'
    },
    { 
      src: '/Resources/images/capture_251030_055604.png', 
      category: 'packaging', 
      title: 'Package Stackup & Layer Definition',
      description: 'Multi-layer substrate stackup with core layers, prepreg, copper thickness, dielectric constant, and impedance-controlled traces',
      date: '2024-10',
      tech: ['Stackup', 'Impedance', 'PCB'],
      status: 'Design'
    },
    { 
      src: '/Resources/images/CPUpic1.png', 
      category: 'cpu', 
      title: 'CPU Core Microarchitecture',
      description: 'Complete CPU core design with 5-stage pipeline, superscalar execution, branch prediction, and out-of-order execution capability',
      date: '2024-09',
      tech: ['CPU', 'Pipeline', 'Superscalar'],
      status: 'Development'
    },
    { 
      src: '/Resources/images/CPUpic2.png', 
      category: 'cpu', 
      title: 'Instruction Decode Unit',
      description: 'Complex instruction decoder supporting RISC-V/ARM ISA with micro-op generation and instruction queue management',
      date: '2024-09',
      tech: ['Decoder', 'ISA', 'RISC-V'],
      status: 'Development'
    },
    { 
      src: '/Resources/images/CPUpic3.png', 
      category: 'cpu', 
      title: 'Arithmetic Logic Unit (ALU)',
      description: 'High-performance ALU with integer/floating-point operations, SIMD support, and fast carry-lookahead adder implementation',
      date: '2024-09',
      tech: ['ALU', 'FPU', 'SIMD'],
      status: 'Development'
    },
    { 
      src: '/Resources/images/CPUpic4.png', 
      category: 'cpu', 
      title: 'CPU Control Unit & FSM',
      description: 'Finite state machine-based control unit managing instruction fetch, decode, execute, memory access, and writeback stages',
      date: '2024-09',
      tech: ['Control', 'FSM', 'Pipeline'],
      status: 'Development'
    },
    { 
      src: '/Resources/images/CPUpic5.png', 
      category: 'cpu', 
      title: 'Multi-Port Register File',
      description: 'High-speed 32/64-bit register file with dual-read, single-write ports and register renaming for parallel execution',
      date: '2024-09',
      tech: ['Register', 'GPR', 'Bypass'],
      status: 'Development'
    },
    { 
      src: '/Resources/images/CPUpic6.png', 
      category: 'cpu', 
      title: 'Branch Prediction Unit',
      description: 'Two-level adaptive branch predictor with BTB (Branch Target Buffer) and RAS (Return Address Stack) for speculative execution',
      date: '2024-09',
      tech: ['BPU', 'BTB', 'Speculation'],
      status: 'Development'
    },
    { 
      src: '/Resources/images/CPUpic7.png', 
      category: 'cpu', 
      title: 'L1/L2 Cache Hierarchy',
      description: 'Multi-level cache system with separate instruction/data L1 caches, unified L2 cache, and MESI coherency protocol',
      date: '2024-09',
      tech: ['Cache', 'L1', 'L2', 'MESI'],
      status: 'Development'
    },
    { 
      src: '/Resources/images/CPUpic8.png', 
      category: 'cpu', 
      title: 'Memory Management Unit',
      description: 'MMU with TLB (Translation Lookaside Buffer), virtual-to-physical address translation, and memory protection features',
      date: '2024-09',
      tech: ['MMU', 'TLB', 'Virtual'],
      status: 'Development'
    },
    { 
      src: '/Resources/images/CPUpic9.png', 
      category: 'cpu', 
      title: 'Interrupt & Exception Handler',
      description: 'Advanced interrupt controller with vectored interrupts, priority arbitration, nested interrupt support, and exception handling',
      date: '2024-09',
      tech: ['Interrupt', 'Exception', 'Priority'],
      status: 'Development'
    },
    { 
      src: '/Resources/images/CPUpic10.png', 
      category: 'cpu', 
      title: 'Debug & Trace Interface',
      description: 'JTAG-based debug interface with instruction/data trace, breakpoint support, and real-time execution monitoring',
      date: '2024-09',
      tech: ['JTAG', 'Debug', 'Trace'],
      status: 'Development'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects', icon: <FaMicrochip /> },
    { value: 'soc', label: 'SoC Design', icon: <FaMicrochip /> },
    { value: 'cpu', label: 'CPU Architecture', icon: <FaCode /> },
    { value: 'packaging', label: 'IC Packaging', icon: <FaChartLine /> }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  // Group images by date for timeline view
  const groupedByDate = filteredImages.reduce((acc, img) => {
    const dateKey = img.date;
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(img);
    return acc;
  }, {});

  const sortedDates = Object.keys(groupedByDate).sort().reverse();

  const getStatusColor = (status) => {
    const colors = {
      'Completed': 'status-completed',
      'Development': 'status-development',
      'Verification': 'status-verification',
      'Analysis': 'status-analysis',
      'Design': 'status-design'
    };
    return colors[status] || 'status-default';
  };

  return (
    <div className="gallery">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <div className="gallery-hero-content fade-in-up">
            <h1 className="gallery-title">
              Design <span className="gold-text">Portfolio</span>
            </h1>
            <p className="gallery-subtitle">
              Comprehensive showcase of our semiconductor design expertise including SoC architecture, CPU microarchitecture, 
              and advanced IC packaging solutions from die design to final package assembly
            </p>
            <div className="gallery-stats">
              <div className="gallery-stat">
                <span className="stat-number gold-text">{images.length}</span>
                <span className="stat-label">Total Projects</span>
              </div>
              <div className="gallery-stat">
                <span className="stat-number gold-text">{categories.length - 1}</span>
                <span className="stat-label">Categories</span>
              </div>
              <div className="gallery-stat">
                <span className="stat-number gold-text">2024-25</span>
                <span className="stat-label">Timeline</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & View Toggle Section */}
      <section className="gallery-controls">
        <div className="container">
          <div className="controls-wrapper">
            <div className="filter-buttons fade-in">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  className={`filter-btn glass glass-hover ${filter === cat.value ? 'active' : ''}`}
                  onClick={() => setFilter(cat.value)}
                >
                  <span className="filter-icon">{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="view-toggle fade-in">
              <button
                className={`toggle-btn glass glass-hover ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                Grid View
              </button>
              <button
                className={`toggle-btn glass glass-hover ${viewMode === 'timeline' ? 'active' : ''}`}
                onClick={() => setViewMode('timeline')}
              >
                Timeline View
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid View */}
      {viewMode === 'grid' && (
        <section className="gallery-grid-section">
          <div className="container">
            <div className="gallery-grid">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="gallery-item glass glass-hover fade-in-up"
                  style={{ animationDelay: `${(index % 12) * 0.05}s` }}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="gallery-item-image">
                    <img src={image.src} alt={image.title} loading="lazy" />
                    <div className="gallery-item-overlay">
                      <FaSearch className="search-icon" />
                    </div>
                  </div>
                  <div className="gallery-item-info">
                    <div className="item-header">
                      <h3 className="item-title">{image.title}</h3>
                      <span className={`item-status ${getStatusColor(image.status)}`}>
                        {image.status}
                      </span>
                    </div>
                    <p className="item-description">{image.description}</p>
                    <div className="item-meta">
                      <div className="meta-item">
                        <FaCalendar />
                        <span>{image.date}</span>
                      </div>
                      <div className="item-tags">
                        {image.tech.slice(0, 2).map((tech, i) => (
                          <span key={i} className="tech-tag">
                            <FaTag /> {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Timeline View */}
      {viewMode === 'timeline' && (
        <section className="gallery-timeline-section">
          <div className="container">
            <div className="timeline">
              {sortedDates.map((date, dateIndex) => (
                <div key={date} className="timeline-group fade-in-up" style={{ animationDelay: `${dateIndex * 0.1}s` }}>
                  <div className="timeline-date">
                    <div className="date-badge glass">
                      <FaClock />
                      <span>{new Date(date + '-01').toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                    </div>
                  </div>
                  <div className="timeline-items">
                    {groupedByDate[date].map((image, index) => (
                      <div
                        key={index}
                        className="timeline-item glass glass-hover"
                        onClick={() => setSelectedImage(image)}
                      >
                        <div className="timeline-item-marker"></div>
                        <div className="timeline-item-content">
                          <div className="timeline-item-image">
                            <img src={image.src} alt={image.title} loading="lazy" />
                            <div className="timeline-overlay">
                              <FaSearch />
                            </div>
                          </div>
                          <div className="timeline-item-details">
                            <div className="detail-header">
                              <h3 className="detail-title">{image.title}</h3>
                              <span className={`detail-status ${getStatusColor(image.status)}`}>
                                {image.status}
                              </span>
                            </div>
                            <p className="detail-description">{image.description}</p>
                            <div className="detail-tech">
                              {image.tech.map((tech, i) => (
                                <span key={i} className="tech-badge">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="detail-category">
                              <FaTag />
                              <span>{categories.find(c => c.value === image.category)?.label}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enhanced Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            <FaTimes />
          </button>
          <div className="lightbox-content glass" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-wrapper">
              <img src={selectedImage.src} alt={selectedImage.title} />
            </div>
            <div className="lightbox-info">
              <div className="lightbox-header">
                <h2 className="lightbox-title">{selectedImage.title}</h2>
                <span className={`lightbox-status ${getStatusColor(selectedImage.status)}`}>
                  {selectedImage.status}
                </span>
              </div>
              <p className="lightbox-description">{selectedImage.description}</p>
              <div className="lightbox-meta">
                <div className="meta-row">
                  <FaCalendar className="meta-icon" />
                  <span className="meta-label">Date:</span>
                  <span className="meta-value">
                    {new Date(selectedImage.date + '-01').toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                  </span>
                </div>
                <div className="meta-row">
                  <FaTag className="meta-icon" />
                  <span className="meta-label">Category:</span>
                  <span className="meta-value">
                    {categories.find(c => c.value === selectedImage.category)?.label}
                  </span>
                </div>
              </div>
              <div className="lightbox-tech">
                <span className="tech-label">Technologies:</span>
                <div className="tech-list">
                  {selectedImage.tech.map((tech, i) => (
                    <span key={i} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

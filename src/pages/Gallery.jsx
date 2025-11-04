import React, { useEffect, useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  // Array of images from Resources folder
  const images = [
    { src: '../Resources/images/A1M.png', category: 'project', title: 'A1M System' },
    { src: '../Resources/images/capture_251024_195030.png', category: 'research', title: 'Research Capture 1' },
    { src: '../Resources/images/capture_251024_195106.png', category: 'research', title: 'Research Capture 2' },
    { src: '../Resources/images/capture_251024_195224.png', category: 'research', title: 'Research Capture 3' },
    { src: '../Resources/images/capture_251024_195311.png', category: 'research', title: 'Research Capture 4' },
    { src: '../Resources/images/capture_251030_055018.png', category: 'analysis', title: 'Analysis 1' },
    { src: '../Resources/images/capture_251030_055057.png', category: 'analysis', title: 'Analysis 2' },
    { src: '../Resources/images/capture_251030_055112.png', category: 'analysis', title: 'Analysis 3' },
    { src: '../Resources/images/capture_251030_055124.png', category: 'analysis', title: 'Analysis 4' },
    { src: '../Resources/images/capture_251030_055157.png', category: 'analysis', title: 'Analysis 5' },
    { src: '../Resources/images/capture_251030_055219.png', category: 'analysis', title: 'Analysis 6' },
    { src: '../Resources/images/capture_251030_055604.png', category: 'analysis', title: 'Analysis 7' },
    { src: '../Resources/images/CPUpic1.png', category: 'cpu', title: 'CPU Architecture 1' },
    { src: '../Resources/images/CPUpic2.png', category: 'cpu', title: 'CPU Architecture 2' },
    { src: '../Resources/images/CPUpic3.png', category: 'cpu', title: 'CPU Architecture 3' },
    { src: '../Resources/images/CPUpic4.png', category: 'cpu', title: 'CPU Architecture 4' },
    { src: '../Resources/images/CPUpic5.png', category: 'cpu', title: 'CPU Architecture 5' },
    { src: '../Resources/images/CPUpic6.png', category: 'cpu', title: 'CPU Architecture 6' },
    { src: '../Resources/images/CPUpic7.png', category: 'cpu', title: 'CPU Architecture 7' },
    { src: '../Resources/images/CPUpic8.png', category: 'cpu', title: 'CPU Architecture 8' },
    { src: '../Resources/images/CPUpic9.png', category: 'cpu', title: 'CPU Architecture 9' },
    { src: '../Resources/images/CPUpic10.png', category: 'cpu', title: 'CPU Architecture 10' }
  ];

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'project', label: 'Projects' },
    { value: 'research', label: 'Research' },
    { value: 'analysis', label: 'Analysis' },
    { value: 'cpu', label: 'CPU Architecture' }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div className="gallery">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <div className="gallery-hero-content fade-in-up">
            <h1 className="gallery-title">
              Our <span className="gold-text">Gallery</span>
            </h1>
            <p className="gallery-subtitle">
              Explore our collection of projects, research, and innovations
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="gallery-filters">
        <div className="container">
          <div className="filter-buttons fade-in">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`filter-btn glass glass-hover ${filter === cat.value ? 'active' : ''}`}
                onClick={() => setFilter(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
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
                  <img src={image.src} alt={image.title} />
                  <div className="gallery-item-overlay">
                    <FaSearch className="search-icon" />
                    <p className="gallery-item-title">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            <FaTimes />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <h3 className="lightbox-title">{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

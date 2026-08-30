import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CVSection from './components/CVSection';
import { catalogItems, artistProfile } from './data/artworks';

export default function App() {
  const [filter, setFilter] = useState('all');
  // State to toggle between 'gallery' view and 'cv' view
  const [activeTab, setActiveTab] = useState('gallery');

  const localBasketImage = "/basket.jpg";

  const filteredItems = filter === 'all' 
    ? catalogItems 
    : catalogItems.filter(item => item.category === filter);

  return (
    <div className="app-container">
      {/* Exact Basket Accents */}
      <img 
        src={localBasketImage} 
        alt="Decorative Woven Basket Top Left" 
        className="corner-motif top-left-motif"
      />
      <img 
        src={localBasketImage} 
        alt="Decorative Woven Basket Bottom Right" 
        className="corner-motif bottom-right-motif"
      />

      {/* Header */}
      <header className="site-header">
       <nav className="top-nav">
  <button 
    className="header-link"
    onClick={() => setActiveTab('gallery')}
  >
    Gallery
  </button>
  <span className="nav-divider">|</span>
  <button 
    className="header-link"
    onClick={() => setActiveTab('cv')}
  >
    CV & Achievements
  </button>
  <span className="nav-divider">|</span>
  <a href="#contact-section" className="header-link">Contact Me</a>
</nav>
        
        <div className="header-title-block" onClick={() => setActiveTab('gallery')} style={{ cursor: 'pointer' }}>
          <h1 className="artist-name">{artistProfile.name}</h1>
          <p className="subtitle">{artistProfile.title} — Studio & Archive</p>
        </div>
      </header>

      {/* RENDER CONDITIONALLY BASED ON ACTIVETAB */}
      {activeTab === 'gallery' ? (
        <>
          {/* Category Navigation */}
          <Navbar activeFilter={filter} onSelectFilter={setFilter} />

          {/* Gallery Showcase Grid */}
          <main className="gallery-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="art-card">
                <div className="gold-border">
                  <img src={item.image} alt={item.title} className="art-img" />
                </div>
                <div className="art-details">
                  <span className="tag">{item.categoryLabel}</span>
                  <h3 className="art-title">{item.title}</h3>
                  <p className="art-medium">{item.medium} • {item.dimensions}</p>
                  <button 
  className="inquire-btn"
  onClick={() => {
    const contactElement = document.getElementById('contact-section');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }}
>
  Inquire About Work
</button>
                </div>
              </div>
            ))}
          </main>
        </>
      ) : (
        /* Render CV ONLY when activeTab === 'cv' */
        <CVSection />
      )}

      {/* Direct Inquiries & Contact Section */}
      <footer id="contact-section" className="contact-section">
  <h2 className="contact-title">DIRECT INQUIRIES & CONTACT</h2>
  <div className="contact-details">
    <span>Email: <a href="mailto:mignotabdulkadir@gmail.com">mignotabdulkadir@gmail.com</a></span>
    <span className="contact-divider">|</span>
    <span>Phone: <a href="tel:+251991723223">+251 991723223</a></span>
    <span className="contact-divider">|</span>
    <span>Phone: <a href="tel:+251989057996">+251 989057996</a></span>
    <span className="contact-divider">|</span>
    <a 
      href="https://wa.me/251989057996" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-link"
      aria-label="Chat on WhatsApp"
    >
      <svg 
        className="whatsapp-icon" 
        viewBox="0 0 24 24" 
        width="18" 
        height="18" 
        fill="currentColor"
      >
        <path d="M12.012 2c-5.508 0-9.989 4.481-9.989 9.99 0 1.763.459 3.486 1.332 5.006l-1.416 5.172 5.292-1.388c1.464.798 3.118 1.21 4.781 1.21h.004c5.508 0 9.99-4.481 9.99-9.99 0-2.669-1.039-5.178-2.926-7.065-1.887-1.887-4.396-2.925-7.068-2.925zm0 1.666c2.227 0 4.32.868 5.894 2.441 1.573 1.574 2.44 3.667 2.44 5.893 0 4.589-3.733 8.323-8.322 8.323h-.003c-1.492 0-2.955-.399-4.232-1.155l-.304-.18-3.145.824.839-3.064-.198-.315c-.832-1.327-1.272-2.863-1.272-4.433 0-4.589 3.733-8.324 8.303-8.324zm-3.52 4.167c-.22 0-.468.083-.715.352-.248.268-.948.927-.948 2.261 0 1.333.972 2.62 1.108 2.802.138.183 1.91 2.915 4.628 4.088.647.28 1.152.448 1.546.573.65.207 1.242.178 1.71.108.522-.078 1.603-.655 1.83-1.288.227-.632.227-1.173.159-1.288-.068-.115-.248-.183-.522-.321-.275-.138-1.603-.791-1.85-1.082-.248-.29-.429-.413-.632-.138-.203.275-.791.998-.97 1.205-.18.207-.358.23-.632.092-.275-.138-1.162-.429-2.213-1.366-.818-.729-1.371-1.629-1.531-1.904-.16-.275-.017-.424.12-.56.124-.123.275-.321.413-.482.138-.161.183-.275.275-.459.092-.183.046-.344-.023-.482-.068-.138-.611-1.472-.837-2.013-.22-.527-.443-.455-.609-.463-.157-.008-.337-.008-.517-.008z"/>
      </svg>
      WhatsApp
    </a>
  </div>
</footer>
    </div>
  );
}
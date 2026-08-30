import React from 'react';

export default function CVSection() {
  const exhibitions = [
    {
      title: "Art Exhibition",
      venue: "Melanage Coffee House",
      period: "May 8 – June 8, 2014",
      details: "Fine art showcase and visual exhibition"
    },
    {
      title: "Art Exhibition & Fashion Show",
      venue: "Kaleb Hotel",
      period: "2014",
      details: "Jewelry & handcrafted bags crafted from natural materials (tree seeds, bamboo, stones, orange peels, sand, grass)"
    },
    {
      title: "Flower Art Showcase",
      venue: "German Cultural Institute (Goethe-Institut)",
      period: "October 8–11, 2014",
      details: "Botanical and natural material art exhibition"
    }
  ];

  const education = [
    {
      degree: "Fine Art Studies (4th Year Candidate)",
      institution: "Entoto TVET College",
      note: "Graduating June 2015"
    },
    {
      degree: "Certificate in Basic Drawing & Painting",
      institution: "Russian Cultural Center",
      note: "6-Month Intensive Training"
    },
    {
      degree: "LLB in Law",
      institution: "Higher Education",
      note: "Academic Foundation"
    }
  ];

  return (
    <section id="cv-section" className="cv-container">
      <h2 className="section-title">ARTISTIC BACKGROUND & ACHIEVEMENTS</h2>

      <div className="cv-block">
        <h3 className="cv-subtitle">EXHIBITIONS & FASHION SHOWS</h3>
        <ul className="cv-list">
          {exhibitions.map((item, idx) => (
            <li key={idx} className="cv-item">
              <div className="cv-item-header">
                <strong>{item.title}</strong> — <em>{item.venue}</em>
                <span className="cv-date">{item.period}</span>
              </div>
              <p className="cv-item-details">{item.details}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="cv-block">
        <h3 className="cv-subtitle">ART EDUCATION & TRAINING</h3>
        <ul className="cv-list">
          {education.map((item, idx) => (
            <li key={idx} className="cv-item">
              <strong>{item.degree}</strong> — {item.institution}
              {item.note && <span className="cv-note"> ({item.note})</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
import React from 'react';

export default function Navbar({ activeFilter, onSelectFilter }) {
  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'fine-art', label: 'Fine Art' },
    { id: 'crafts', label: 'Crafts' },
    { id: 'handcraft', label: 'Handcrafted' }
  ];

  return (
    <nav className="filter-nav">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`nav-btn ${activeFilter === cat.id ? 'active' : ''}`}
          onClick={() => onSelectFilter(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </nav>
  );
}
import React, { useState, useEffect } from 'react';
import { fetchCategories } from '../../api/menuApi';

const CategoryFilter = ({ onSelectCategory, selectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchCategories()
      .then(data => {
        setCategories(data.slice(0, 10)); // Only show up to 10 categories
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div style={loadingStyle}>კატეგორიები იტვირთება...</div>;

  return (
    <div style={filterContainerStyle}>
      <div style={filterScrollContainer}>
        <button
          onClick={() => onSelectCategory('Beef')}
          style={{
            ...buttonBaseStyle,
            ...(selectedCategory === 'Beef' ? selectedButtonStyle : buttonStyle),
          }}
        >
          ყველა (Beef Default)
        </button>

        {categories.map(cat => (
          <button
            key={cat.idCategory}
            onClick={() => onSelectCategory(cat.strCategory)}
            style={{
              ...buttonBaseStyle,
              ...(selectedCategory === cat.strCategory
                ? selectedButtonStyle
                : buttonStyle),
            }}
          >
            {cat.strCategory}
          </button>
        ))}
      </div>
    </div>
  );
};

/* ===================== Modernized Styles ===================== */

const filterContainerStyle = {
  backgroundColor: '#fff',
  borderRadius: '14px',
  boxShadow: '0 3px 12px rgba(0,0,0,0.06)',
  padding: '15px 20px',
  marginBottom: '25px',
  overflowX: 'auto',
  scrollbarWidth: 'none',
};

const filterScrollContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

const loadingStyle = {
  padding: '20px',
  textAlign: 'center',
  color: '#555',
  fontSize: '1em',
};

const buttonBaseStyle = {
  border: 'none',
  borderRadius: '30px',
  padding: '8px 18px',
  fontSize: '0.95em',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'all 0.25s ease',
  outline: 'none',
};

const buttonStyle = {
  backgroundColor: '#f3f4f6',
  color: '#444',
};

const selectedButtonStyle = {
  backgroundColor: 'var(--primary-color, #0070f3)',
  color: '#fff',
  boxShadow: '0 4px 10px rgba(0, 112, 243, 0.3)',
  transform: 'scale(1.05)',
};


buttonStyle[':hover'] = {
  backgroundColor: '#e5e7eb',
};

selectedButtonStyle[':hover'] = {
  backgroundColor: '#0059c1',
};

export default CategoryFilter;

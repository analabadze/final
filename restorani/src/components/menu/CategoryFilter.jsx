import React, { useState, useEffect } from 'react';
import { fetchCategories } from '../../api/menuApi';

const CategoryFilter = ({ onSelectCategory, selectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchCategories()
      .then(data => {
        // ვიღებთ მხოლოდ 10 კატეგორიას, რომ სია ძალიან არ გაიზარდოს
        setCategories(data.slice(0, 10)); 
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>კატეგორიები იტვირთება...</div>;

  return (
    <div style={filterStyle}>
      <button 
        onClick={() => onSelectCategory('Beef')} 
        className="button-primary"
        style={selectedCategory === 'Beef' ? selectedButtonStyle : buttonStyle}
      >
        ყველა (Beef Default)
      </button>

      {categories.map(cat => (
        <button 
          key={cat.idCategory} 
          onClick={() => onSelectCategory(cat.strCategory)}
          className="button-primary"
          style={selectedCategory === cat.strCategory ? selectedButtonStyle : buttonStyle}
        >
          {cat.strCategory}
        </button>
      ))}
    </div>
  );
};

// სტილები
const filterStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: 'var(--border-radius)',
    boxShadow: 'var(--shadow)',
    marginBottom: '20px',
};

const buttonStyle = {
    background: '#ccc',
    color: 'var(--secondary-color)',
    padding: '8px 15px',
};

const selectedButtonStyle = {
    background: 'var(--primary-color)',
    color: 'white',
    padding: '8px 15px',
};

export default CategoryFilter;
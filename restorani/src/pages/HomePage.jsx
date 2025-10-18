import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import CategoryFilter from '../components/menu/CategoryFilter';
import { fetchMealsByCategory } from '../api/menuApi';
import MenuItem from '../components/menu/MenuItem';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Beef');
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchMealsByCategory(selectedCategory)
      .then(data => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [selectedCategory]);

  return (
    <>
      <Header />
      <div className="container" style={{ padding: '20px 0' }}>
        <h1>მენიუ</h1>
        
        <CategoryFilter 
          onSelectCategory={setSelectedCategory} 
          selectedCategory={selectedCategory}
        />

        {loading ? (
          <div style={{ textAlign: 'center', padding: '50px' }}>მენიუ იტვირთება...</div>
        ) : (
          <div style={menuListStyle}>
            {menuItems.map(item => (
              <MenuItem 
                key={item.id} 
                item={item} 
              />
            ))}
            {menuItems.length === 0 && (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '20px' }}>
                კერძები ვერ მოიძებნა.
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

const menuListStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '25px',
    marginTop: '20px',
};

export default HomePage;
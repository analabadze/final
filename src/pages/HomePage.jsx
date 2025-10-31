import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import CategoryFilter from '../components/menu/CategoryFilter';
import { fetchMealsByCategory } from '../api/menuApi';
import MenuItem from '../components/menu/MenuItem';
import Footer from '../components/common/Footer';

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

  // Preload the first menu item's image so the browser discovers the LCP image from the HTML
  useEffect(() => {
    if (!menuItems || menuItems.length === 0) return;
    const firstImage = menuItems[0].image;
    if (!firstImage) return;

    // Avoid duplicating the preload link
    const selector = `link[rel="preload"][as="image"][href="${firstImage}"]`;
    if (document.querySelector(selector)) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = firstImage;
    // allow CORS if the image is hosted on another origin
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    return () => {
      // cleanup the link when component unmounts or first image changes
      if (link && link.parentNode) link.parentNode.removeChild(link);
    };
  }, [menuItems]);

  return (
    <>
      <Header />
      <div className="container" style={{ padding: '20px 15px' }}>
        <h1>მენიუ</h1>
        
        <CategoryFilter 
          onSelectCategory={setSelectedCategory} 
          selectedCategory={selectedCategory}
        />

        {loading ? (
          <div style={{ textAlign: 'center', padding: '50px' }}>მენიუ იტვირთება...</div>
        ) : (
          <div style={menuListStyle}>
              {menuItems.map((item, index) => (
                <MenuItem 
                  key={item.id} 
                  item={item}
                  // mark the first menu item as the LCP candidate so its img is eager and high priority
                  isLcp={index === 0}
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

      <Footer/>
    </>
  );
};

const menuListStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '30px',
  marginTop: '25px',
  padding: '10px',
  justifyItems: 'center',
  alignItems: 'stretch',
  width: '100%',
  boxSizing: 'border-box',
};


export default HomePage;
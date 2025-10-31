import React, { useState, useEffect, lazy, Suspense, useMemo } from 'react';
const Header = lazy(() => import('../components/common/Header'));
import CategoryFilter from '../components/menu/CategoryFilter';
import { fetchMealsByCategory } from '../api/menuApi';
import MenuItem from '../components/menu/MenuItem';
const Footer = lazy(() => import('../components/common/Footer'));

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


  useEffect(() => {
    if (!menuItems || menuItems.length === 0) return;
    const firstImage = menuItems[0].image;
    if (!firstImage) return;

    const selector = `link[rel="preload"][as="image"][href="${firstImage}"]`;
    if (document.querySelector(selector)) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = firstImage;
    link.fetchPriority = 'high';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    return () => {
      if (link && link.parentNode) link.parentNode.removeChild(link);
    };
  }, [menuItems]);

  const memoizedMenuItems = useMemo(() =>
    menuItems.map((item, index) => (
      <MenuItem
        key={item.id}
        item={item}
      
        isLcp={index === 0}
      />
    )), [menuItems]);

  return (
    <>
      <Suspense fallback={<div style={{height: '64px', backgroundColor: 'var(--header-bg, #ffffff)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'}}></div>}>
        <Header />
      </Suspense>
      <div className="container" style={{ padding: '20px 15px' }}>
        <h1 style={{ minHeight: '2.5em', marginBottom: '25px' }}>მენიუ</h1>

        <div style={{ minHeight: '120px', marginBottom: '25px' }}>
          <CategoryFilter
            onSelectCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </div>

        {loading ? (
          <div style={menuListStyle}>
            {Array.from({ length: 10 }, (_, index) => (
              <div key={index} style={skeletonStyle}>
                <div style={skeletonImageStyle}></div>
                <div style={skeletonContentStyle}>
                  <div style={skeletonTitleStyle}></div>
                  <div style={skeletonCategoryStyle}></div>
                  <div style={skeletonFooterStyle}>
                    <div style={skeletonPriceStyle}></div>
                    <div style={skeletonButtonStyle}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={menuListStyle}>
              {memoizedMenuItems}
            {menuItems.length === 0 && (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '20px' }}>
                კერძები ვერ მოიძებნა.
              </div>
            )}
          </div>
        )}
      </div>

      <Suspense fallback={<div style={{height: '120px', backgroundColor: 'var(--header-bg, #ffffff)', borderTop: '1px solid #eee'}}></div>}>
        <Footer />
      </Suspense>
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
  containIntrinsicSize: '0 200px', // Reserve space for layout stability
};

const skeletonStyle = {
  border: 'none',
  borderRadius: '16px',
  overflow: 'hidden',
  width: '100%',
  maxWidth: '320px',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  animation: 'pulse 1.5s ease-in-out infinite',
};

const skeletonImageStyle = {
  width: '100%',
  height: '200px',
  backgroundColor: '#f0f0f0',
  aspectRatio: '16/9',
};

const skeletonContentStyle = {
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '10px',
  flexGrow: 1,
};

const skeletonTitleStyle = {
  height: '1.1em',
  backgroundColor: '#f0f0f0',
  borderRadius: '4px',
  marginBottom: '8px',
};

const skeletonCategoryStyle = {
  height: '0.9em',
  backgroundColor: '#f0f0f0',
  borderRadius: '4px',
  width: '60%',
  marginBottom: '10px',
};

const skeletonFooterStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '12px',
};

const skeletonPriceStyle = {
  height: '1.25em',
  backgroundColor: '#f0f0f0',
  borderRadius: '4px',
  width: '50px',
};

const skeletonButtonStyle = {
  height: '2.5em',
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
  width: '120px',
};


export default HomePage;
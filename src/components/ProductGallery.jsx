import React from 'react';
import './ProductGallery.css';

const products = [
  { id: 1, name: 'Deconstructed Wool Blazer', price: '$850', image: '/product_1.jpg' },
  { id: 2, name: 'Asymmetric Cargo Trousers', price: '$520', image: '/product_2.jpg' },
  { id: 3, name: 'Heavy Link Chain', price: '$310', image: '/product_3.jpg' },
  { id: 4, name: 'Distressed Knit Sweater', price: '$480', image: '/product_4.jpg' }
];

const ProductGallery = () => {
  return (
    <section className="product-section container" id="new">
      <div className="section-header">
        <h2 className="section-title">Latest Acquisitions</h2>
        <a href="#collections" className="view-all">View All</a>
      </div>
      
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div className="product-image-container">
              <div className="product-placeholder">Image Not Loaded</div>
              <img src={product.image} alt={product.name} className="product-image" onError={(e) => e.target.style.display = 'none'} />
              <div className="product-overlay">
                <button className="add-to-cart">Quick Add</button>
              </div>
            </div>
            <div className="product-info flex items-center justify-between">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGallery;

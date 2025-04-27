import { useState } from 'react';

function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('populaire');

  const populaireProducts = [
    { id: 1, name: 'Graines semis Tomates Rio Grande', price: '2,900DT', img: '/products/tomate.jpg' },
    { id: 2, name: 'Huile de lin 1L Easy Color', price: '58,900DT', img: '/products/easycolor.jpg', outOfStock: true },
    { id: 3, name: 'Coffret de 16 mèches HARDEN', price: '41,900DT', img: '/products/meches.jpg' },
    { id: 4, name: 'Disque de coupe acier 115mm', price: '1,500DT', oldPrice: '1,900DT', img: '/products/disque.jpg' },
    { id: 5, name: 'Graines semis Tomates Rio Grande', price: '2,900DT', img: '/products/tomate.jpg' },
    { id: 6, name: 'Huile de lin 1L Easy Color', price: '58,900DT', img: '/products/easycolor.jpg', outOfStock: true },
    { id: 7, name: 'Coffret de 16 mèches HARDEN', price: '41,900DT', img: '/products/meches.jpg' },
    { id: 8, name: 'Disque de coupe acier 115mm', price: '1,500DT', oldPrice: '1,900DT', img: '/products/disque.jpg' },
  ];

  const promotionsProducts = [
    { id: 1, name: 'Décapeur thermique BOSCH', price: '679,000DT', oldPrice: '729,000DT', img: '/products/decapeur.jpg' },
    { id: 2, name: 'Soudeuse chauffante pour sacs', price: '649,000DT', oldPrice: '749,000DT', img: '/products/soudeuse.jpg' },
    { id: 3, name: 'Batterie 12V HRX', price: '499,000DT', oldPrice: '559,000DT', img: '/products/batterie.jpg' },
    { id: 4, name: 'Groupe électrogène démarrage', price: '495,000DT', oldPrice: '555,000DT', img: '/products/groupe.jpg' },
  ];

  const products = activeTab === 'populaire' ? populaireProducts : promotionsProducts;

  return (
    <div style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '30px auto',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px'
    }}>
      
      {/* Tabs */}
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <button
          onClick={() => setActiveTab('populaire')}
          style={{
            borderBottom: activeTab === 'populaire' ? '4px solid blue' : 'none',
            fontWeight: 'bold',
            fontSize: '20px',
            padding: '10px 20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: activeTab === 'populaire' ? '#1922A0' : 'black',
          }}
        >
          POPULAIRE
        </button>

        <button
          onClick={() => setActiveTab('promotions')}
          style={{
            borderBottom: activeTab === 'promotions' ? '4px solid yellow' : 'none',
            fontWeight: 'bold',
            fontSize: '20px',
            padding: '10px 20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: activeTab === 'promotions' ? '#FFD700' : 'black',
          }}
        >
          PROMOTIONS
        </button>
      </div>

      {/* Products Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            position: 'relative',
            border: '1px solid #eee',
            borderRadius: '8px',
            overflow: 'hidden',
            padding: '10px',
            background: 'white',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}>
            <img src={product.img} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />

            {/* Hover Details */}
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              background: 'rgba(0, 0, 0, 0.05)',
              opacity: '0',
              transition: '0.3s',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
              className="hover-card"
            >
              {product.outOfStock ? (
                <div style={{ backgroundColor: 'gray', color: 'white', padding: '8px 20px', borderRadius: '4px' }}>Rupture de stock</div>
              ) : (
                <>
                  <button style={{ backgroundColor: '#00aaff', color: 'white', padding: '8px 20px', border: 'none', borderRadius: '4px', marginBottom: '10px' }}>Ajouter</button>
                  <button style={{ backgroundColor: '#333', color: 'white', padding: '8px 20px', border: 'none', borderRadius: '4px' }}>Détails</button>
                </>
              )}
            </div>

            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <div style={{ minHeight: '40px' }}>{product.name}</div>
              <div style={{ fontWeight: 'bold', marginTop: '5px' }}>
                <span style={{ color: product.oldPrice ? 'red' : 'black' }}>{product.price}</span>
                {product.oldPrice && (
                  <span style={{ textDecoration: 'line-through', marginLeft: '8px', fontSize: '14px', color: '#aaa' }}>{product.oldPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Small CSS fix to show hover */}
      <style>
        {`
          .hover-card:hover {
            opacity: 1;
          }
        `}
      </style>

    </div>
  );
}

export default ProductShowcase;

function TopNav() {
    return (
      <div className="top-nav" style={{ 
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto',
        padding: '10px 0', 
        backgroundColor: 'white', 
        position: 'relative'
      }}>
        
        {/* Top right links */}
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <a href="#" style={{ fontSize: '14px', color: 'black' }}>Connexion</a>
          <a href="#" style={{ fontSize: '14px', color: 'black' }}>Contactez-nous</a>
        </div>
  
        {/* Middle Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '40px'
        }}>
          
          {/* Logo */}
          <img src="/Logo.jpg" alt="Brico Direct Logo" style={{ height: '150px' }} />
  
          {/* Search + Facebook + Panier */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            {/* Search Input */}
            <div style={{ position: 'relative' }}>
              <input 
                type="text" 
                placeholder="Rechercher" 
                style={{
                  width: '250px',
                  padding: '10px 35px 10px 10px',
                  backgroundColor: '#E1F3FD',
                  border: 'none',
                  borderRadius: '4px',
                  outline: 'none',
                  fontSize: '16px'
                }}
              />
              <span style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#ffc107',
                fontSize: '20px'
              }}>🔍</span>
            </div>
  
            {/* Facebook Button */}
            <button style={{
              backgroundColor: '#4267B2',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              Connexion avec Facebook
            </button>
  
            {/* Panier */}
            <div style={{
              background: 'linear-gradient(to bottom, #00aaff, #0077cc)',
              color: 'yellow',
              padding: '10px 15px',
              borderRadius: '10px',
              fontWeight: 'bold',
              textAlign: 'center',
              minWidth: '140px',
              position: 'relative',
              cursor: 'pointer'
            }}>
              🛒 Panier <span style={{ fontSize: '12px', color: 'white' }}>(vide)</span>
              <div style={{ fontSize: '14px', color: 'yellow', marginTop: '5px' }}>سلة المشتريات</div>
              <div style={{
                position: 'absolute',
                bottom: '-6px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '0',
                height: '0',
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '6px solid white',
              }}></div>
            </div>
          </div>
        </div>
  
        {/* Phone Number Centered */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button style={{
            backgroundColor: '#1922A0',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '20px',
            fontWeight: 'bold',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center'
          }}>
            📞 71 100 950
          </button>
        </div>
  
      </div>
    );
  }
  
  export default TopNav;
  
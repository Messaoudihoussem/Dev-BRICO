import { useState } from 'react';

function BottomNav() {
  const [showDropdown, setShowDropdown] = useState(false);

  const buttonStyle = {
    width: '200px',
    height: '50px',
    border: 'none',
    borderRadius: '0px',
    fontWeight: 'bold',
    fontSize: '18px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2px',
    cursor: 'pointer',
    backgroundColor: '#1922A0',
  };

  const dropdownButtonStyle = {
    width: '100%',
    padding: '8px 10px',
    marginBottom: '5px',
    fontSize: '14px',
    color: '#1922A0',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '4px',
    textAlign: 'left',
    cursor: 'pointer',
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: '10px 0',
      position: 'relative',
    }}>
      
      {/* Home Button */}
      <button style={{ ...buttonStyle }}>
        <img src="/home.png" alt="Home" style={{ width: '24px', height: '24px' }} />
      </button>

      {/* Quincaillerie Button with Dropdown */}
      <div
        style={{ position: 'relative' }}
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <button style={{ ...buttonStyle }}>
          QUINCAILLERIE
        </button>

        {showDropdown && (
          <div style={{
            position: 'absolute',
            top: '50px',
            left: '0',
            width: '1000px',
            backgroundColor: 'white',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
            padding: '20px',
            display: 'flex',
            gap: '40px',
            zIndex: 1000,
          }}>
            {/* 4 columns */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <button style={dropdownButtonStyle}>Outils de Mesure</button>
              <button style={dropdownButtonStyle}>Outils de Coupe</button>
              <button style={dropdownButtonStyle}>Outils de Serrage</button>
              <button style={dropdownButtonStyle}>Outils d'impact</button>
              <button style={dropdownButtonStyle}>Outils pour la peinture</button>
              <button style={dropdownButtonStyle}>Autres outillages manuels</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <button style={dropdownButtonStyle}>Perceuses</button>
              <button style={dropdownButtonStyle}>Scies</button>
              <button style={dropdownButtonStyle}>Visseuses</button>
              <button style={dropdownButtonStyle}>Meuleuses</button>
              <button style={dropdownButtonStyle}>Outils pour le bois</button>
              <button style={dropdownButtonStyle}>Autres électroportatifs</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <button style={dropdownButtonStyle}>Peintures</button>
              <button style={dropdownButtonStyle}>Collage et étanchéité</button>
              <button style={dropdownButtonStyle}>Produits d'entretien</button>
              <button style={dropdownButtonStyle}>Lubrifiants</button>
              <button style={dropdownButtonStyle}>Autres droguerie</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <button style={dropdownButtonStyle}>Organisation</button>
              <button style={dropdownButtonStyle}>Protection du bricoleur</button>
              <button style={dropdownButtonStyle}>Systèmes de fixation</button>
              <button style={dropdownButtonStyle}>Vissage et assemblage</button>
              <button style={dropdownButtonStyle}>Autres accessoires</button>
            </div>
          </div>
        )}
      </div>

      {/* Other Buttons */}
      <button style={{ ...buttonStyle }}>MAISON</button>
      <button style={{ ...buttonStyle }}>AUTOS</button>
      <button style={{ ...buttonStyle, backgroundColor: 'red' }}>PROMOS !</button>
      <button style={{ ...buttonStyle, backgroundColor: 'yellow', color: 'blue' }}>JDID !!</button>
      <button style={{ ...buttonStyle, backgroundColor: 'green' }}>SANA3TY</button>
      
    </div>
  );
}

export default BottomNav;

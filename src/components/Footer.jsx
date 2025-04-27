function Footer() {
    return (
      <div style={{
        backgroundColor: '#1922A0',
        color: 'white',
        padding: '40px 20px',
        fontSize: '14px'
      }}>
        {/* Top Part */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
          flexWrap: 'wrap',
        }}>
          
          {/* Newsletter */}
          <div style={{ flex: '1 1 250px', marginBottom: '20px' }}>
            <h3>Newsletter</h3>
            <div style={{
              display: 'flex',
              backgroundColor: 'white',
              borderRadius: '2px',
              overflow: 'hidden',
              marginTop: '10px'
            }}>
              <input
                type="email"
                placeholder="Adresse e-mail"
                style={{
                  border: 'none',
                  padding: '10px',
                  flex: 1,
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <button style={{
                backgroundColor: '#ccc',
                border: 'none',
                padding: '0 15px',
                fontSize: '20px',
                cursor: 'pointer'
              }}>
                ➤
              </button>
            </div>
          </div>
  
          {/* Categories / Informations / Account */}
          <div style={{
            display: 'flex',
            flex: '2 1 600px',
            justifyContent: 'space-around',
            marginBottom: '20px'
          }}>
            {/* Column 1 */}
            <div>
              <h4 style={{ borderBottom: '2px solid yellow', display: 'inline-block', marginBottom: '10px' }}>Catégories</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {['Quincaillerie', 'Maison', 'Autos', 'PROMOS !', 'Populaire', 'JDID !!', 'Sana3ty'].map((item) => (
                  <button key={item} style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: 'none',
                    textAlign: 'left',
                    padding: '8px 10px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#1922A0'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
  
            {/* Column 2 */}
            <div>
              <h4 style={{ borderBottom: '2px solid yellow', display: 'inline-block', marginBottom: '10px' }}>Informations</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {['Nos magasins', 'Contactez-nous', 'Plan du site'].map((item) => (
                  <button key={item} style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: 'none',
                    textAlign: 'left',
                    padding: '8px 10px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#1922A0'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
  
            {/* Column 3 */}
            <div>
              <h4 style={{ borderBottom: '2px solid yellow', display: 'inline-block', marginBottom: '10px' }}>Mon compte</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {['Mes commandes', 'Mes retours', 'Mes avoirs', 'Mes adresses', 'Mes informations personnelles', 'Mes bons de réduction'].map((item) => (
                  <button key={item} style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: 'none',
                    textAlign: 'left',
                    padding: '8px 10px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#1922A0'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
  
          {/* Follow Us */}
          <div style={{ flex: '1 1 250px', marginBottom: '20px', textAlign: 'right' }}>
            <div style={{ textAlign: 'right' }}>
              <div>BRICO-DIRECT.TN, 71bis Ave Louis Braille Tunis 1082 🏠</div>
              <div>Appelez-nous au : 71 100 950 📞</div>
              <div>E-mail : info@brico-direct.tn ✉️</div>
            </div>
          </div>
  
        </div>
  
        {/* Bottom small text */}
        <div style={{
          textAlign: 'center',
          fontSize: '12px',
          marginTop: '20px',
          color: 'white'
        }}>
          Contact | Condition générale de vente<br/>
          « Tout contenu ne pourra être publié ou reproduit sans autorisation écrite préalable. »<br/>
          © 2018 Brico-Direct.tn
        </div>
  
      </div>
    );
  }
  
  export default Footer;
  
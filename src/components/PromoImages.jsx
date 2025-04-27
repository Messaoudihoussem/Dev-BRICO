function PromoImages() {
    return (
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '30px auto',
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        
        {/* Top Row: 3 images */}
        <div style={{
          display: 'flex',
          gap: '10px'
        }}>
          <img src="/images/WD40.jpg" alt="WD40" style={{ flex: 1, height: '200px', objectFit: 'cover' }} />
          <img src="/images/youtube.jpg" alt="YouTube TV" style={{ flex: 1, height: '200px', objectFit: 'cover' }} />
          <img src="/images/sprays.jpg" alt="Spray colors" style={{ flex: 1, height: '200px', objectFit: 'cover' }} />
        </div>
  
        {/* Bottom Row: 2 images */}
        <div style={{
          display: 'flex',
          gap: '10px'
        }}>
          <img src="/images/piles.jpg" alt="Piles" style={{ flex: 1, height: '200px', objectFit: 'cover' }} />
          <img src="/images/electroportatif.jpg" alt="Electroportatif" style={{ flex: 1, height: '210px',width: '200px' , objectFit: 'cover' }} />
        </div>
  
      </div>
    );
  }
  
  export default PromoImages;
  
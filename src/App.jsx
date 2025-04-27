import Header from './components/Header';
import Navbar from './components/Navbar';
import FullImageSlider from './components/FullImageSlider';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';
import PromoImages from './components/PromoImages';
import Retrait from './components/Retrait';



function App() {
  return (
    <div style={{ 
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      backgroundColor: 'white' 
    }}>
      
      <Header />
      <Navbar />
      <FullImageSlider/>
      <Retrait />
      <ProductShowcase />
      <PromoImages />
      <Footer />

    
    </div>
  );
}

export default App;

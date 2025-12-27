import { useEffect, useState } from 'react';
import { getCurrentPage } from './utils/navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyContacts from './components/StickyContacts';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  const [currentRoute, setCurrentRoute] = useState(getCurrentPage());

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(getCurrentPage());
    };

    window.addEventListener('hashchange', handleHashChange);

    if (!window.location.hash) {
      window.location.hash = 'home';
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentRoute.page) {
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'service-detail':
        return <ServiceDetail serviceId={currentRoute.param || ''} />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentRoute.page} />
      <main>{renderPage()}</main>
      <Footer />
      <StickyContacts />
    </div>
  );
}

export default App;

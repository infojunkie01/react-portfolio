import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {

  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    else if (currentPage === 'Portfolio') {
      return <Project />;
    }
    else if (currentPage === 'Resume') {
      return <Resume />;
    } else {
      return <Contact />;
    }

  }

  const pageChangeHandler = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <Nav currentPage={currentPage} pageChangeHandler={pageChangeHandler} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;

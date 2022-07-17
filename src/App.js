import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

function App() {
  // const [categories] = useState([
  //   {
  //     name: 'commercial',
  //     description: 'Photos of grocery stores, food trucks, and other commercial projects',
  //   },
  //   { name: 'portraits', description: 'Portraits of people in my life' },
  //   { name: 'food', description: 'Delicious delicacies' },
  //   { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  // ]); 

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Header></Header>
      <Nav
        // categories={categories}
        // setCurrentCategory={setCurrentCategory}
        // currentCategory={currentCategory}
      ></Nav>
      <main>
        <Portfolio></Portfolio>
        <About></About>
        <Resume></Resume>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

import './App.css';
import { Header, WhatGPT3, Features, Possibility, Blog, Footer } from './Containers';
import { Navbar, Brand, CTA } from './Components';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

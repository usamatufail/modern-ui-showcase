import './App.css';
import { Header, WhatGPT3 } from './Containers';
import { Navbar, Brand } from './Components';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
    </div>
  );
}

export default App;

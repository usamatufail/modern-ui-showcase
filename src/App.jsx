import './App.css';
import { Header } from './Containers';
import { Navbar, Brand } from './Components';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
    </div>
  );
}

export default App;

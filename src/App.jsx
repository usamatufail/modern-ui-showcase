import './App.css';
import { Header } from './Containers';
import { Navbar } from './Components';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/HomeScreen/Home';
import About from './Components/About/About';
import Diseases from './Components/Diseases/Diseases';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Diseases />
      <Footer />
      
    </div>
  );
}

export default App;

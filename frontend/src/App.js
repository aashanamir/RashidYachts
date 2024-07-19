import './App.css';
import Footer from './components/Footer/Footer';
import FormComponent from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import SimpleComponent from './demo';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;

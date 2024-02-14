import './App.css';
import RouterManager from './components/RouterManager';
import NavBar from './components/screens/NavBar.jsx';
import Footer from './components/screens/footer/Footer.js';

function App() {
  return (
    <div className="App">
        <NavBar />
        <RouterManager />
        <Footer/>
    </div>
  );
}

export default App;

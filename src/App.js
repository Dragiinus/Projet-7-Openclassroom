import './App';
import {Routes, Route} from 'react-router-dom';
import Home from './containers/Home';
import Housing from './containers/Logements/Logements';
import AboutUs from './containers/About/About';
import NotFound from './containers/404NotFound/404NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Template from './components/Template';
import Homepage from './components/Homepage';
import Gallery from './components/Gallery';
import Album from './components/Album';

function App() {
  return (
    <div className="App">
      <Router>
        <Template />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/album' element={<Album />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;


import './App.css';

import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Navbar } from './pages/Home/Navabar/Navbar';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/login' element={<Login />}  />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

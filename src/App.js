import './App.css';
import {Route, Routes} from 'react-router-dom'
import NewProduct from './components/NewProduct';
import Home from  './components/Home';
import Register from './components/Register';
import Login from './pages/Login';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<NewProduct />} />
        <Route path='login' element={<Login />} />
        <Route  path='register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AddTPODetails from './pages/AddTPODetails';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/addTPODetails' element={<AddTPODetails/>}/>
      </Routes>
    </Router>
  )
}

export default App

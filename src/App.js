import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Contact from './components/Contact';
import Book from './components/Book';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/contact' element={<Contact/>} ></Route>
      <Route path='/booking' element={<Book/>} ></Route>
      </Routes>
    </>
  );
}

export default App;

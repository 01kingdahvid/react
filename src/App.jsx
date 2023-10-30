import './App.css'
import FetchUser from './FetchUser'
import Header from './components/Header'
import FetchCoin from './FetchCoin'
import Nav from './components/Nav';
import Home from './Home';
import Error404 from './components/Error404';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <div className="container">
    
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/fetchuser' element={<FetchUser/>}/>
    <Route path='/fetchcoin' element={<FetchCoin/>}/>
    <Route path='*' element={<Error404/>}/>
    </Routes>
    </BrowserRouter>
    
    </div>
    </>
  )
}

export default App
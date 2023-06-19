import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Pokeinfo from './components/PokemanData';

function App() {
   
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <h2>Pokemon🙊 information and Image</h2>
      <div> 
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/pokemon/:id/:name" element={<Pokeinfo/>} />
      </Routes>
      </div>
      
      
      </BrowserRouter>  
    </>
  )
}

export default App

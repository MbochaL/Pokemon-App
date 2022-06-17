import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Login from './pages/login/Login';
import PokeApp from './pages/pokedex';
import NotFound from './pages/NotFound';




function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/pokedex" element={<PokeApp/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


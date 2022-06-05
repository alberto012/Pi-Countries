import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Landing from "../src/components/Landing/Landing"
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import Detail from './components/Detail/Detail';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/details/:id"  element={<Detail/>} />
    <Route path="/created"  element={<Create/>} />
    <Route path="/"  element={<Landing/>} />
    <Route path="/home"  element={<Home/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;

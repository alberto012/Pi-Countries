import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Landing from "../src/components/Landing/Landing"
import Home from './components/Home/Home';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/"  element={<Landing/>} />
    <Route path="/home"  element={<Home/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;

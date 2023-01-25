import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import VegShop from './Containers/VegShop';
import Home from './Components/Home';
import VegItem from './Components/VegItem';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
      <Router>
      <h1>VEGGIES MUTHFUCKA</h1>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="shop" element={<VegShop/>}></Route>
          <Route path="shop/:id" element={<VegItem/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

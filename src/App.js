import './App.css';
import NavBar from './components/NavBar';
import AddProductPage from './pages/AddProductPage';
import ProductsPage from './pages/ProductsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductsPage />}></Route>
        <Route path="/addproducts" element={<AddProductPage />}></Route>
      </Routes>
      
    </BrowserRouter>
      
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Login from './Components/Login/Login';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Home from './Components/Pages/Home/Home';
import Product from './Components/Pages/Product/Product';
import ProductDetails from './Components/Pages/ProductDetails/ProductDetails';
import Register from './Components/Register/Register';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="product/:_id" element={<ProductDetails />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

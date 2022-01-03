import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Login from './Components/Login/Login';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import Blogs from './Components/Pages/Blogs/Blogs';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Home from './Components/Pages/Home/Home';
import Product from './Components/Pages/Product/Product';
import ProductDetails from './Components/Pages/ProductDetails/ProductDetails';
import Register from './Components/Register/Register';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <AuthProvider>
       
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="product/:_id" element={<ProductDetails />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="about" element={<AboutUs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        
      </AuthProvider>
    </div>
  );
}

export default App;

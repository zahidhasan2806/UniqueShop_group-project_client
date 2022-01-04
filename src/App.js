import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Login from './Components/Login/Login';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import BlogDetails1 from './Components/Pages/BlogDetails/BlogDetails1';
import BlogDetails2 from './Components/Pages/BlogDetails/BlogDetails2';
import BlogDetails3 from './Components/Pages/BlogDetails/BlogDetails3';
import BlogDetails4 from './Components/Pages/BlogDetails/BlogDetails4';
import BuyProducts from './Components/Pages/BuyProducts/BuyProducts';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import AddNewProduct from './Components/Pages/Dashboard/AddNewProduct/AddNewProduct';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import MakeAdmin from './Components/Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageAllProducts from './Components/Pages/Dashboard/ManageAllProducts/ManageAllProducts';
import ManageOrders from './Components/Pages/Dashboard/ManageOrders/ManageOrders';
import MyOrders from './Components/Pages/Dashboard/MyOrders/MyOrders';
import Payment from './Components/Pages/Dashboard/Payment/Payment';
import ReviewForm from './Components/Pages/Dashboard/Reviews/ReviewForm';
import Reviews from './Components/Pages/Dashboard/Reviews/Reviews';
import Home from './Components/Pages/Home/Home';
import Product from './Components/Pages/Product/Product';
import ProductView from './Components/Pages/ProductView/ProductView';
import StoreLocation from './Components/Pages/StoreLocation/StoreLocation';
import Register from './Components/Register/Register';



function App() {
  return (
    <div className="App">
      <AuthProvider>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="product/:productId" element={<ProductView />} />
            <Route path="buyProducts/:productId" element={<BuyProducts />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="storeLocation" element={<StoreLocation />} />
            <Route path="/blog/blogDetails1" element={<BlogDetails1 />} />
            <Route path="/blog/blogDetails2" element={<BlogDetails2 />} />
            <Route path="/blog/blogDetails3" element={<BlogDetails3 />} />
            <Route path="/blog/blogDetails4" element={<BlogDetails4 />} />
            <Route path="/review" element={<ReviewForm />} />
            <Route path="dashboard" element={<Dashboard />} >
              <Route path="/dashboard/addnewproduct" element={<AddNewProduct />} ></Route>
              <Route path="/dashboard/manageorders" element={<ManageOrders />} ></Route>
              <Route path="/dashboard/myorders" element={<MyOrders />} ></Route>
              <Route path="/dashboard/manageallproducts" element={<ManageAllProducts />} ></Route>
              <Route path="/dashboard/reviews" element={<Reviews />} ></Route>
              <Route path="/dashboard/makeadmin" element={<MakeAdmin />} ></Route>
              <Route path='/dashboard/payment' element={<Payment />}></Route>
            </Route>
          </Routes>

        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Login from './Components/Login/Login';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import BlogDetails1 from "./Components/Pages/BlogDetails/BlogDetails1";
import BlogDetails2 from './Components/Pages/BlogDetails/BlogDetails2';
import BlogDetails3 from './Components/Pages/BlogDetails/BlogDetails3';
import BlogDetails4 from './Components/Pages/BlogDetails/BlogDetails4';
import Blogs from './Components/Pages/Blogs/Blogs';
import BuyProducts from "./Components/Pages/BuyProducts/BuyProducts";
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import AddNewProduct from './Components/Pages/Dashboard/AddNewProduct/AddNewProduct';
import ReviewForm from './Components/Pages/Dashboard/addReviews/ReviewForm';
import Reviews from './Components/Pages/Dashboard/addReviews/Reviews';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import MakeAdmin from './Components/Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageAllProducts from './Components/Pages/Dashboard/ManageAllProducts/ManageAllProducts';
import ManageOrders from './Components/Pages/Dashboard/ManageOrders/ManageOrders';
import MyOrders from './Components/Pages/Dashboard/MyOrders/MyOrders';
import Payment from './Components/Pages/Dashboard/Payment/Payment';
import Home from './Components/Pages/Home/Home';
import MyWishlists from './Components/Pages/MyWishlists/MyWishlists';
import Product from './Components/Pages/Product/Product';
import ProductView from './Components/Pages/ProductView/ProductView';
import StoreLocation from './Components/Pages/StoreLocation/StoreLocation';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
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
            <Route path="blogs" element={<Blogs />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="product/:productId" element={<ProductView />} />
            <Route path="buyProducts/:productId" element={<ProtectedRoute><BuyProducts /></ProtectedRoute>} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="mywishlists" element={<MyWishlists />} />
            <Route path="storeLocation" element={<StoreLocation />} />
            <Route path="/blogs/blogDetails1" element={<BlogDetails1 />} />
            <Route path="/blogs/blogDetails2" element={<BlogDetails2 />} />
            <Route path="/blogs/blogDetails3" element={<BlogDetails3 />} />
            <Route path="/blogs/blogDetails4" element={<BlogDetails4 />} />
            
            <Route path="dashboard" element={<Dashboard />} >
              <Route path="/dashboard/addnewproduct" element={<AddNewProduct />} ></Route>
              <Route path="/dashboard/manageorders" element={<ManageOrders />} ></Route>
              <Route path="/dashboard/myorders" element={<MyOrders />} ></Route>
              <Route path="/dashboard/manageallproducts" element={<ManageAllProducts />} ></Route>
              <Route path="/dashboard/addreview" element={<ReviewForm />} ></Route>
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

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Login from './Components/Login/Login';
import Home from './Components/Pages/Home/Home';
import Register from './Components/Register/Register';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;

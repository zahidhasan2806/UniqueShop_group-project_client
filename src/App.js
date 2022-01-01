import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Components/Context/AuthProvider';
import Home from './Components/Pages/Home/Home';
import NavBar from './Components/Pages/Home/NavBar';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <NavBar></NavBar>
      <Home></Home>
      </div>
    </AuthProvider>
  );
}

export default App;

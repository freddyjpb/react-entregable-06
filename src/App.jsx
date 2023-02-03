//Ecommerce - By Freddy Parra
import { useSelector } from 'react-redux';

import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import Purchases from './pages/Purchases'
import SignUp from './pages/SignUp'
import UserInfo from './pages/UserInfo'

import LoadingScreen from './components/LoadingScreen'
import ProtectedRoutes from './components/ProtectedRoutes'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer'

import './App.css';

function App() {

  const isLoading = useSelector(state => state.app.isLoading);

  return (
    <div>

      {isLoading && <LoadingScreen />}
      <NavBar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/user" element={<UserInfo />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
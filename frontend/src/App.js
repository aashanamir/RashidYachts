import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Admin from './pages/Admin/Admin';
import LoginPage from './pages/Admin/Login/Login';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchUser } from './slice/userSlice';
import { useDispatch } from 'react-redux';
import DownloadBroucherPage from './pages/Admin/DownloadBroucherPage/DownloadBroucherPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();  
  
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path={"*"} element={<Home />} />
          <Route path={"/admin"} element={<Admin />} />
          <Route path={"/admin/download-broucher-page"} element={<DownloadBroucherPage />} />
          <Route path={"/login"} element={<LoginPage />} />
        </Routes>
        <ToastContainer autoClose={2000} />
      </div>
    </BrowserRouter>
  );
}

export default App;

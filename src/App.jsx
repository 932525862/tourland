import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Home from './routes/Home';
import "react-toastify/dist/ReactToastify.css";
import gift from "./assets/gif.gif"; // Yuklanish gif tasviri

function App() {
  const [loading, setLoading] = useState(true); // loading holatini yaratish

  useEffect(() => {
    // 2 soniya ichida loading holatini false qilish
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Tozalash funksiyasi
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ToastContainer />
      {loading ? (
        // Agar loading true bo'lsa, gif ko'rsatiladi
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <img src={gift} alt="Loading..." />
        </div>
      ) : (
        // loading false bo'lganda, Home komponenti ko'rsatiladi
        <Home />
      )}
    </>
  );
}

export default App;

import { useState, useEffect } from 'react'
import './index.css'
import Header from './components/header'
import Mainlayout from './layouts/mainlayout'
import Footer from './components/footer'
import Loading from './components/loading/loading.jsx'
function App() {
  const [loading,activeloading] = useState(true)
  const [data, setData] = useState([]);
  const [loadinged, setLoadinged] = useState(true);
  const [error, setError] = useState(null);

  setTimeout(() => {
    activeloading(false)
  }, 2000);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://lms.ilyosbekdev.uz/api/user'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        console.log('keldi')
      } catch (error) {
        setError(error.message);
        console.log('kemadi')
      } finally {
        setLoadinged(false);
        console.log('Tugadi operatsiya ')
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='wrapper w-full h-full'>
        {loading  &&
        <Loading/>
        }
       <Header/>
       <Mainlayout/>
       <Footer/>
      </div>

    </>
  )
}

export default App

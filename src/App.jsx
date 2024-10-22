import { useState } from 'react'
import './index.css'
import Header from './components/header'
import Mainlayout from './layouts/mainlayout'
import Footer from './components/footer'
import Loading from './components/loading/loading.jsx'
function App() {
  const [loading,activeloading] = useState(true)

  setTimeout(() => {
    activeloading(false)
  }, 2000);
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

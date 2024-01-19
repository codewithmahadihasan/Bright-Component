import { useEffect, useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom';
import Router from './Routers/Router';

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);


  useEffect(() => {


    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    // Add event listeners to detect online/offline changes
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);







  return (
    <div >

      {isOnline ? <RouterProvider router={Router} /> : <div className="grid h-screen px-4 bg-white place-content-center">
        <h1 className="tracking-widest text-gray-500 uppercase text-2xl"><span className="text-red-500 ">503</span> | You are currently offline </h1>
      </div>
      }
    </div>
  );
}

export default App

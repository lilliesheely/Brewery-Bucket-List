import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import BucketListPage from '../BucketListPage/BucketListPage';
import HomePage from '../HomePage/HomePage';
import BreweryDetailPage from '../BreweryDetailPage/BreweryDetailPage'
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(null);
  const [breweries, setBreweries] = useState([]);
  console.log(breweries, 'STATE')
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/bucketlist' element={<BucketListPage breweries={breweries} setBreweries={setBreweries}/>} />
            <Route path='/' element={<HomePage />} />
            <Route path='/:breweryName' element={<BreweryDetailPage breweries={breweries}  />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as breweriesAPI from '../../utilities/breweries-api'
import AuthPage from '../AuthPage/AuthPage';
import BucketListPage from '../BucketListPage/BucketListPage';
import HomePage from '../HomePage/HomePage';
import BreweryDetailPage from '../BreweryDetailPage/BreweryDetailPage'
import BreweriesPage from '../BreweriesPage/BreweriesPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [breweries, setBreweries] = useState([]);

  useEffect(function() { 
    async function getBreweries() { 
      const allBreweries = await breweriesAPI.getAll(); 
      setBreweries(allBreweries); 
    }
    getBreweries(); 
  }, []); 
 

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/bucketlist' element={<BucketListPage breweries={breweries} setBreweries={setBreweries} />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/:breweryName' element={<BreweryDetailPage breweries={breweries} setBreweries={setBreweries}  />} />
            <Route path='/all' element={<BreweriesPage breweries={breweries} setBreweries={setBreweries}  />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

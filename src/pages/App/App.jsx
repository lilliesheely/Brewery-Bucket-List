import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as breweriesAPI from '../../utilities/breweries-api'
import AuthPage from '../AuthPage/AuthPage';
import BucketListPage from '../BucketListPage/BucketListPage';
import BreweryDetailPage from '../BreweryDetailPage/BreweryDetailPage'
import BreweriesPage from '../BreweriesPage/BreweriesPage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
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
            <Route path='/' element={<BucketListPage breweries={breweries} setBreweries={setBreweries} />} />
            <Route path='/:breweryName' element={<BreweryDetailPage breweries={breweries} setBreweries={setBreweries}  />} />
            <Route path='/all' element={<BreweriesPage breweries={breweries} setBreweries={setBreweries}  />} />
          </Routes>
          <Footer />
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

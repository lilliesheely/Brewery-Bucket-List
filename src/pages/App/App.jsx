import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as breweriesAPI from '../../utilities/breweries-api';
import AuthPage from '../AuthPage/AuthPage';
import BucketListPage from '../BucketListPage/BucketListPage';
import BreweryDetailPage from '../BreweryDetailPage/BreweryDetailPage';
import BreweriesPage from '../BreweriesPage/BreweriesPage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [breweries, setBreweries] = useState([]);

  useEffect(function() { 
    async function getBreweries() { 
      const allBreweries = await breweriesAPI.getAll(); 
      setBreweries(allBreweries); 
    }
    if (user) {
      getBreweries(); 
    } else { 
      setBreweries([])
    }
  }, [user]); 
 
  async function deleteBrewery(id) {
    const brewerySpots = await breweriesAPI.deleteBrewery(id);
    const updatedList = breweries.filter((b) => b._id !== brewerySpots._id)
    setBreweries(updatedList);
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<BucketListPage breweries={breweries} setBreweries={setBreweries} />} />
            <Route path='/:breweryName' element={<BreweryDetailPage breweries={breweries} setBreweries={setBreweries}  />} />
            <Route path='/all' element={<BreweriesPage breweries={breweries} setBreweries={setBreweries} deleteBrewery={deleteBrewery}  />} />
          </Routes>
          <Footer />
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

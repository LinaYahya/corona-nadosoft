import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from './components';
import { getCovidSummary } from './helpers/api';
import { IGlobalStatistics } from './interfaces';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [globalStatistics, setGlobalStatistics] = useState<null | IGlobalStatistics>(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setError(false)
        setLoading(true)
        const { Countries, Global } = await getCovidSummary();
        setGlobalStatistics(Global);
        if (Countries) {
          setCountries(Countries)
        }
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getData();
  }, []);


  if (error) { // custom component should created to render errors
    return <div>Error happened please try again later</div>
  }

  return (
    <div className="app-container">
      <div className="flex flex-row items-start" >
        <SideBar />
        <Outlet context={{ loading, countries, globalStatistics }} />
      </div>
    </div>
  );
}

export default App;

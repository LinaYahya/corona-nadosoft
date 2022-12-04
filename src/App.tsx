import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from './components';
import { getCovidSummary } from './helpers/api';
import { IGlobalStatistics } from './interfaces';
import { ROWS_PER_PAGE } from './helpers/constants';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [globalStatistics, setGlobalStatistics] = useState<null | IGlobalStatistics>(null)
  const [totalPages, seTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const { Countries, Global } = await getCovidSummary();
        setGlobalStatistics(Global);
        if (Countries) {

          seTotalPages(Math.ceil(Countries.length / ROWS_PER_PAGE))
          setCountries(Countries)
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false)
      }
    }
    getData();
  }, []);



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

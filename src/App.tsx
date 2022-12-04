import { useEffect, useState } from 'react';
import { SideBar, TableOfCountries } from './components';
import getCovidSummary from './helpers/api';
import './App.css';

function App() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const { Countries } = await getCovidSummary();
        // console.log(data);
        setCountries(Countries)
      } catch (err) {

      }
    }
    getData();
  }, []);

  return (
    <div className="app-container">
      <div className="flex flex-row items-start" >
        <SideBar />
        <div className=" w-full">
          {countries && (
            <TableOfCountries countries={countries} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

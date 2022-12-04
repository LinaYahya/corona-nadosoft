import React, { useEffect, useState } from 'react';
import { SideBar, TableOfCountries, Pagination, Spinner, GeneralInfo } from './components';
import { getCovidSummary } from './helpers/api';
import './App.css';

const ROWS_PER_PAGE = 12;

function App() {
  const [countries, setCountries] = useState([]);
  const [globalStatistics, setGlobalStatistics] = useState(null)
  const [totalPages, seTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false);
  const [countrySearchVal, setCountrySearchVal] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const { Countries, Global } = await getCovidSummary();
        console.log(Global);
        setGlobalStatistics(Global);
        seTotalPages(Math.ceil(Countries.length / ROWS_PER_PAGE))
        setCountries(Countries)
      } catch (err) {

      } finally {
        setLoading(false)
      }
    }
    getData();
  }, []);


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountrySearchVal(e.target.value)
  }



  /*
  data to render which is basically data from the api, 
  if user search on specific value it will change based on the search term
  and the data sliced based on the pagination
  */
  let data = countries;

  if (countrySearchVal) {
    data = countries.filter((ele: any) => {
      return ele.Country.toUpperCase().startsWith(countrySearchVal.toUpperCase())
    });
  }
  data = data.slice(((currentPage - 1) * ROWS_PER_PAGE), currentPage * ROWS_PER_PAGE);


  const moveToPage = (page: number) => {
    if (page > data.length || page < 1) {
      return;
    }
    setCurrentPage(page);
  }

  return (
    <div className="app-container">
      <div className="flex flex-row items-start" >
        <SideBar />
        {loading ? <Spinner /> : (
          <div className="w-full">
            {globalStatistics && (

              <GeneralInfo globalStatistics={globalStatistics} />
            )}
            {/* <input
              type="search"
              className="mx-auto my-5 block p-2.5 self-center text-sm text-gray-900 bg-gray-50 border-b-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              value={countrySearchVal}
              onChange={handleSearch}
              placeholder="Search By Country Name"
            />
            {countries && (
              <TableOfCountries countries={data} />
            )}
            <Pagination currentPage={currentPage} PagesLength={data.length} moveToPage={moveToPage}></Pagination> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

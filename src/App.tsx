import { useEffect, useState } from 'react';
import { SideBar, TableOfCountries, Pagination, Spinner } from './components';
import getCovidSummary from './helpers/api';
import './App.css';

const ROWS_PER_PAGE = 14;

function App() {
  const [countries, setCountries] = useState([]);
  const [totalPages, seTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const { Countries } = await getCovidSummary();
        console.log(Countries);
        seTotalPages(Math.ceil(Countries.length / ROWS_PER_PAGE))
        setCountries(Countries)
      } catch (err) {

      } finally {
        setLoading(false)
      }
    }
    getData();
  }, []);

  const moveToPage = (page: number) => {
    if (page > totalPages || page < 1) {
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
            {countries && (
              <TableOfCountries countries={countries.slice(((currentPage - 1) * ROWS_PER_PAGE), currentPage * ROWS_PER_PAGE)} />
            )}
            <Pagination currentPage={currentPage} PagesLength={totalPages} moveToPage={moveToPage}></Pagination>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

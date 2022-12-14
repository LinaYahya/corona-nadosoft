import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { Spinner, Pagination, TableOfCountries } from '../components';
import { ROWS_PER_PAGE } from '../helpers/constants';
import { Country, ISearchPageContext } from '../interfaces';

function CountriesPage() {
  const { loading, countries }: ISearchPageContext = useOutletContext();

  const [countrySearchVal, setCountrySearchVal] = useState("");
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBase, setSortBase] = useState<null | 'NewConfirmed' | 'NewDeaths' | 'NewRecovered'>(null)
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountrySearchVal(e.target.value)
  }

  /*
  data to render which is basically data from the api, 
  if user search on specific value it will change based on the search term
  and the data sliced based on the pagination
  */
  let data = countries;
  let totalResults = countries.length;
  if (sortBase) {
    data.sort((ele1: Country, ele2: Country) => ele2[sortBase] - ele1[sortBase]);
    totalResults = data.length;
  }
  if (countrySearchVal) {
    data = countries.filter((ele: Country) => {
      return ele.Country.toUpperCase().startsWith(countrySearchVal.toUpperCase())
    });
    totalResults = data.length;
  }
  data = data.slice(((currentPage - 1) * ROWS_PER_PAGE), currentPage * ROWS_PER_PAGE);
  const totalPages = Math.ceil(totalResults / ROWS_PER_PAGE)

  const moveToPage = (page: number) => {
    if (page > data.length || page < 1) {
      return;
    }
    setCurrentPage(page);
  }

  return (
    <>
      {loading ? <Spinner /> : (
        <div className="w-full">
          <input
            type="search"
            className="mx-auto my-5 block p-2.5 self-center text-sm text-gray-900 bg-gray-50 border-b-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            value={countrySearchVal}
            onChange={handleSearch}
            placeholder="Search By Country Name"
          />
          {data.length ? (
            <>
              <TableOfCountries countries={data} setSortBase={setSortBase} />
              <Pagination currentPage={currentPage} PagesLength={totalPages} moveToPage={moveToPage}></Pagination>
            </>
          ) : (
            <div>
              No Results Match Your search
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default CountriesPage;


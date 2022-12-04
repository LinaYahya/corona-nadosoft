import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { Spinner, Pagination, TableOfCountries } from '../components';
import { ROWS_PER_PAGE } from '../helpers/constants';

function CountriesPage() {
  const { loading, countries }: any = useOutletContext();

  const [countrySearchVal, setCountrySearchVal] = useState("");
  const [currentPage, setCurrentPage] = useState(1)

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
          {countries && (
            <TableOfCountries countries={data} />
          )}
          <Pagination currentPage={currentPage} PagesLength={data.length} moveToPage={moveToPage}></Pagination>
        </div>
      )}
    </>
  )
}

export default CountriesPage;


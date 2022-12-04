import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { Spinner, GeneralInfo } from '../components';

function GeneralInfoPage() {
  const { loading, globalStatistics }: any = useOutletContext();

  return (
    <>
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
    </>
  )
}

export default GeneralInfoPage;


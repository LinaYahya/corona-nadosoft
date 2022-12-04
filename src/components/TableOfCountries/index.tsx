import { ICountries } from '../../interfaces';
import Row from './Row'


function TableOfCountries({ countries, setSortBase }: ICountries) {
  // if (!countries.length) {

  //   return <div>no result found</div>
  // }

  return (
    <table className="table-auto w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700">
        <tr>
          <th scope="col" className="py-3 px-6">Country
          </th>
          <th scope="col" className="py-3 px-6">New Confirmed
            <button title="Sort By Confirmed" className="p-1 text-lg" onClick={() => setSortBase('NewConfirmed')}>↓</button>
          </th>
          <th scope="col" className="py-3 px-6">New Recovered
            <button title="Sort By Recovered" className="p-1 text-lg" onClick={() => setSortBase('NewRecovered')}>↓</button>

          </th>
          <th scope="col" className="py-3 px-6">New Deaths
            <button title="Sort By Deaths" className="p-1 text-lg" onClick={() => setSortBase('NewDeaths')}>↓</button>

          </th>
        </tr>
      </thead>
      <tbody>
        {countries.map(ele => (<Row key={ele.Slug} {...ele} />))}
      </tbody>
    </table>
  )
}

export default TableOfCountries

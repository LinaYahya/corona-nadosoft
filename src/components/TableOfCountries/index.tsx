import Row from './Row'

// initial data
const data = [
  {
    "ID": "e2231cd3-8067-469d-9b45-8eb5cf5bc491",
    "Country": "Afghanistan",
    "CountryCode": "AF",
    "Slug": "afghanistan",
    "NewConfirmed": 12,
    "TotalConfirmed": 206145,
    "NewDeaths": 0,
    "TotalDeaths": 7834,
    "NewRecovered": 0,
    "TotalRecovered": 0,
    "Date": "2022-12-04T08:00:42.976Z",
    "Premium": {}
  },
  {
    "ID": "925ab2cd-f78a-450b-a30c-efd2bb28e2f9",
    "Country": "Albania",
    "CountryCode": "AL",
    "Slug": "albania",
    "NewConfirmed": 10,
    "TotalConfirmed": 333391,
    "NewDeaths": 0,
    "TotalDeaths": 3594,
    "NewRecovered": 0,
    "TotalRecovered": 0,
    "Date": "2022-12-04T08:00:42.976Z",
    "Premium": {}
  },
  {
    "ID": "0124c5a0-a6a0-4b7b-9e72-bd4e06195881",
    "Country": "Andorra",
    "CountryCode": "AD",
    "Slug": "andorra",
    "NewConfirmed": 0,
    "TotalConfirmed": 47219,
    "NewDeaths": 0,
    "TotalDeaths": 157,
    "NewRecovered": 0,
    "TotalRecovered": 0,
    "Date": "2022-12-04T08:00:42.976Z",
    "Premium": {}
  }
]
function TableOfCountries() {
  return (
    <table className="table-auto w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700">
        <tr>
          <th scope="col" className="py-3 px-6">Country</th>
          <th scope="col" className="py-3 px-6">New Confirmed</th>
          <th scope="col" className="py-3 px-6">New Recovered</th>
          <th scope="col" className="py-3 px-6">New Deaths</th>
        </tr>
      </thead>
      <tbody>
        {data.map(ele => (<Row key={ele.Slug} {...ele} />))}
      </tbody>
    </table>
  )
}

export default TableOfCountries

import { ICountries } from '../../interfaces';
import Row from './Row'


function TableOfCountries({ countries }: ICountries) {
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
        {countries.map(ele => (<Row key={ele.Slug} {...ele} />))}
      </tbody>
    </table>
  )
}

export default TableOfCountries

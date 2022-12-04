import { ICountryRow } from "../../interfaces";


const Row = ({ Country, NewConfirmed, NewDeaths, NewRecovered }: ICountryRow) => (
  <tr className="bg-white border-b">
    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">{Country}</th>
    <td className="py-4 px-6">{NewConfirmed}</td>
    <td className="py-4 px-6">{NewRecovered}</td>
    <td className="py-4 px-6">{NewDeaths}</td>
  </tr>
)

export default Row;

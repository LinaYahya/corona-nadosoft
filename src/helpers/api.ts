import axios from 'axios';
import { getPrevMonth, getCurrentMonth } from './utils';

/*
      'https://api.covid19api.com/summary',
      'https://api.covid19api.com/countries',
      'https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z'
      'https://api.covid19api.com/world?from=2022-03-01T00:00:00Z&to=2022-04-01T00:00:00Z'
*/
async function getCovidSummary() {
  const { data } = await axios.get(
    'https://api.covid19api.com/summary',

  );
  return data;
}


async function getWorldCovidStatisticsPrevMonth() {
  let currentDate = new Date();
  const currentMonth = getCurrentMonth(currentDate).toISOString();
  const prevMonth = getPrevMonth(currentDate).toISOString();


  const { data } = await axios.get(
    `https://api.covid19api.com/world?from=${prevMonth}&to=${currentMonth}`, // fetch data for the last month
  );
  return data;
}
export { getCovidSummary, getWorldCovidStatisticsPrevMonth };

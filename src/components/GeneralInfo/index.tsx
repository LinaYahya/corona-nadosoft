import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { getWorldCovidStatisticsPrevMonth } from '../../helpers/api';
import { numberWithCommas } from '../../helpers/utils';
import { IGeneralInfo } from '../../interfaces';
import { confirmedCasesOptions, deathsOptions } from './Chart';

const Statistic = ({ numbers, text }: { numbers: number, text: string }) => (<div className="p-5 pl-0">
  <span className="text-6xl">
    {numberWithCommas(numbers)}
  </span>
  <br />
  {text}
</div>)

function GeneralInfo({ globalStatistics }: IGeneralInfo) {
  const [loading, setLoading] = useState(false);
  const [confirmedLastMonthRecords, setConfirmedLastMonthRecords] = useState<Array<number>>([]);
  const [deathsLastMonthRecords, setDeathsLastMonthRecords] = useState<Array<number>>([]);

  const { NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths } = globalStatistics
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const data = await getWorldCovidStatisticsPrevMonth();

        // loop over data to have array for confirmed cases and other for deaths, using foreach to loop once 
        const newConfirmedMonthlyData: Array<number> = [];
        const newDeathsDailyData: Array<number> = [];
        if (data.length) {
          data.forEach((element: any) => {
            newConfirmedMonthlyData.push(element.NewConfirmed)
            newDeathsDailyData.push(element.NewDeaths)
          });
          setConfirmedLastMonthRecords(newConfirmedMonthlyData);
          setDeathsLastMonthRecords(newDeathsDailyData)
        }
      } catch (err) {
      } finally {
        setLoading(false)
      }
    }
    getData();
  }, []);

  const data = {
    labels: Array.from(Array(30).keys()),
    datasets: [
      {
        label: 'total confirmed',
        data: confirmedLastMonthRecords,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };


  const data2 = {
    labels: Array.from(Array(30).keys()),
    datasets: [
      {
        label: 'total deaths',
        data: deathsLastMonthRecords,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className="text-2xl font-bold text-gray-700">
      <div className="text-stone-700 text-left	p-10 ">
        <h2>Global Situation</h2>
        <div className="flex justify-between text-stone-700	items-center">
          <div>
            <Statistic numbers={NewConfirmed} text="new confirmed cases" />
            <Statistic numbers={TotalConfirmed} text="total confirmed cases" />
          </div>
          {!loading && (<div className="w-2/4">
            <Bar options={confirmedCasesOptions} data={data} />
          </div>)}
        </div>
        <div className="flex justify-between text-stone-700 items-center">
          <div>
            <Statistic numbers={NewDeaths} text="new deaths" />
            <Statistic numbers={TotalDeaths} text="total deaths" />
          </div>
          {!loading && (
            <div className="w-2/4">
              <Bar options={deathsOptions} data={data2} />
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default GeneralInfo

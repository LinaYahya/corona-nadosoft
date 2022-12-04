
function GeneralInfo({ globalStatistics }: any) {
  const { NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths } = globalStatistics
  return (
    <div className="text-2xl font-bold text-gray-700">
      <h2>Global Situation</h2>
      <div className="text-stone-700">
        <div className="flex justify-around text-stone-700	p-5">

          <div>
            <span className="text-6xl">

              {NewConfirmed}
            </span>
            <br />
            new confirmed cases

          </div>
          <div>
            <span className="text-6xl">

              {TotalConfirmed}
            </span>
            <br />
            total confirmed cases

          </div>
        </div>
        <div className="flex justify-around text-stone-700	p-5">

          <div>
            <span className="text-6xl">

              {NewDeaths}
            </span>
            <br />
            new deaths

          </div>
          <div>
            <span className="text-6xl">

              {TotalDeaths}
            </span>
            <br />
            total deaths

          </div>
        </div>

      </div>
    </div>
  )
}

export default GeneralInfo

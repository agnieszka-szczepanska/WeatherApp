import { forecastType } from '../types'

type Props = {
  data: forecastType
}

const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0]
  return (
    <div className="w-full md:max-w-[500px] py md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shawod-lg">
      <div className="mx-auto w-[300px]">
        <section className="text-center">
          <h2 className="text-2xl font-black">
            {data.name} <span className="font-thin">{data.country}</span>
          </h2>
          <h1 className="text-4xl font-extrabold">
            {Math.round(today.main.temp)}
            <sup>o</sup>
          </h1>
          <p className="text-sm">
            {today.weather[0].main} {today.weather[0].description}
          </p>
          <p className="text-sm">
            H:{Math.ceil(today.main.temp_max)}
            <sup>o</sup> L:
            {Math.floor(today.main.temp_min)}
            <sup>o</sup>
          </p>
        </section>
        <section className="flex overflow-x-scroll mt-4 pb-2 mb-5">
          {data.list.map((item, index) => (
            <div
              className="inline-block text-center width=[50px] flex-shrink-0"
              key={index}
            >
              <p className="text-sm">
                {index === 0
                  ? 'Now'
                  : new Date(item.dt * 1000).getHours() + ':00'}
              </p>
              <img
                alt={`weather-icon-${item.weather[0].description}`}
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <p className="text-sm font-bold">
                {Math.round(item.main.temp)}
                <sup>o</sup>
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Forecast

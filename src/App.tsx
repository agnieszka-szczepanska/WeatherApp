import Search from './components/Search'
import useForecast from './components/hooks/useForecast'

const App = (): JSX.Element => {
  const { term, options, forecast, onInputChange, onOptionSelect, onSubmit } =
    useForecast()
  return (
    <main className="flex justify-center items-center h-[100vh] w-full ">
      {forecast ? (
        'We have forecast'
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  )
}

export default App

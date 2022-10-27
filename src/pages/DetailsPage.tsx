import millify from "millify";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from '../app/hooks'

const DetailsPage = () => {
  const { country, isLoading } = useAppSelector(state => state.country)
  const navigate = useNavigate()

  console.log(country)

  if (isLoading) {
    return <h1 className="text-center text-6xl font-bold">Loading...</h1>
  }

  return (
    <div>
      <div className='max-w-[800px] m-auto'>
        {(!country)?
          <div>
            <h1 className="text-center font-bold p-10 text-3xl text-red-500">Country couldn not found please check your input !</h1>
            <button className="block m-auto py-2 px-3 bg-blue-500 rounded-md text-white my-5 hover:opacity-90"
              onClick={() => navigate("/")}
            >Back to Home</button>
          </div>
          :
          <div>
            <h1 className='text-center p-10 text-4xl uppercase font-bold shadow-md bg-slate-300 rounded-md mb-5 mt-2'>{country[0]?.name?.common}</h1>
            <div className='flex flex-wrap shadow-md bg-slate-300 rounded-md'>
              <div className='sm-12/12 md:w-6/12 p-5'>
                <img src={country[0].flags.svg} alt={country[0].name.common} />
              </div>
              <ul className='sm-12/12 md:w-6/12 p-10 text-base m-auto'>
                <li className='font-bold'>Catpital: <span className='font-light'>{country[0].capital[0]}</span></li>
                <li className='font-bold'>Region: <span className='font-light'>{country[0].region}</span></li>
                <li className='font-bold'>Population: <span className='font-light'>{country[0].population}</span></li>
                <li className='font-bold'>Languages: <span className='font-light'>{Object.values(country[0].languages).map((item) => item + " || ")}</span></li>
                <li className='font-bold'>Area: <span className='font-light'>{country[0].area} km <sup>2</sup> ({millify(country[0].area, { precision: 2, space: true })}) </span></li>
              </ul>
            </div>
            <button className="block m-auto py-2 px-3 bg-blue-500 rounded-md text-white my-5 hover:opacity-90"
              onClick={() => navigate("/")}
            >Back to Home</button>
          </div>
        }
      </div>
    </div>
  )
}

export default DetailsPage
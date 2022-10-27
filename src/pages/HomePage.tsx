import MapChart from '../components/MapChart'
import Searching from '../components/Searching'

const HomePage = () => {
  // const [countryName, setCountryName] = useState("")
  
  return (
    <div>
      <Searching />
      <MapChart/>
    </div>
  )
}

export default HomePage
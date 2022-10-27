import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import ReactTooltip from "react-tooltip";
import { useAppDispatch } from "../app/hooks";
import { getCountry } from "../features/countySlice";

const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export default function MapChart() {

    const [countryName, setCountryName] = useState("");
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleDetail = () => {
        dispatch(getCountry(countryName));
        navigate("/detail")
    }
    
    return (
        <div data-tip="" >
            <ComposableMap style={{ height: "100vh", width: "100vw" }}>
                <ZoomableGroup >
                    <Geographies geography={geoUrl} >
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        setCountryName(geo.properties.name);
                                    }}
                                    onClick={(geo) => {
                                        handleDetail()
                                    }}
                                    onMouseLeave={() => {
                                        setCountryName("");
                                    }}
                                    style={{
                                        default: {
                                            fill: "#15181b",
                                            outline: "none",
                                        },
                                        hover: {
                                            fill: "#F53",
                                            outline: "none",
                                            cursor: "pointer",
                                        },
                                        pressed: {
                                            fill: "#E42",
                                            outline: "none",
                                        },

                                    }}
                                />
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <ReactTooltip>{countryName}</ReactTooltip>
        </div>
    )
}

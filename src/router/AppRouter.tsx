import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "../pages/HomePage"
import DetailsPage from "../pages/DetailsPage"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail" element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
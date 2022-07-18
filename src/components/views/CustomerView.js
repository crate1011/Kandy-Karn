import { Outlet, Route, Routes } from "react-router-dom"
import { KandyContainer } from "../KandyTickets.js/KandyContainer"
import { HomeList } from "../nav/Home"
import { LocationList } from "../nav/Locations"
import { BakerStreet, HahaYeah, Skrittle } from "../Products/LocationsProducts"
import { ProductList } from "../Products/ProductsList"

export const CustomerViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1 className="kandy_karn">Kandy Karn</h1>
                    <div className="kandy_karn2">Your one-stop-shop to get all your kandy karns</div>

                    <Outlet />
                </>
            }>

                <Route path="locations" element={<LocationList />} />
                <Route path="products" element={<ProductList />} />
                <Route path="/home" element={<HomeList />} />
                <Route path="/location/1" element={<BakerStreet />} />
                <Route path="/location/2" element={<HahaYeah />} />
                <Route path="/location/3" element={<Skrittle />} />
                <Route path="searchProducts" element={ <KandyContainer /> } />
            </Route>
        </Routes>
    )
}



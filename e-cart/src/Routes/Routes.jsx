import { Route, Routes } from "react-router-dom";
import ElectronicProduct from "./components/ElectronicProduct";
import EleProdDetails from "./components/EleProdDetails";
import Home from "./pages/Home";

<Routes>
<Route path="/" element={<Home />} />
<Route path="/electricPro/:eleId" element={<EleProdDetails />} />
<Route path="/product" element={<ElectronicProduct />} />
</Routes>
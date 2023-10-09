import Home from "./Home";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import Menubar from "./Menubar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
    return (
        <BrowserRouter>
            <Menubar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/ProductDetail/:pid" element={<ProductDetail />} />

            </Routes>
        </BrowserRouter>
    )
}
export default App;
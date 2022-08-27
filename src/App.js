import { BrowserRouter } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import NavBar from "./componetes/NavBar";
import ItemDetailContainer from "./componetes/ItemDetailContainer";
import ItemListContainer from "./componetes/ItemListContainer";
import Cart from "./componetes/Cart";
import Footer from "./componetes/Footer";
import MyProvider from "./context/CartContext";
import CheckOut from "./componetes/CheckOut";
import "../src/firebase"

const App = () => {

    return (
        <BrowserRouter>
            <MyProvider>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/categoria/:id" element={<ItemListContainer />} />
                    <Route path="/detalle/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<CheckOut/>} />
                </Routes>
                <Footer/>
            </MyProvider>
        </BrowserRouter>
    )
}

export default App;
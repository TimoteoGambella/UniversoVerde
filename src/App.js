import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApiContext } from "./context/ApiContext.jsx";
import "./styles/styles.scss";
import Home from "./views/Home/Home.jsx";
import BienestarListContainer from "./views/BienestarListContainer/BienestarListContainer.jsx";
import LoginContainer from "./views/LoginContainer/LoginContainer.jsx";
import TipoBienestar from "./views/TipoBienestar/TipoBienestar.jsx";
import ProductosBienestarList from "./views/ProductosBienestarList/ProductosBienestarList.jsx";
import TipoAromaList from "./views/TipoAromaList/TipoAromaList.jsx";
import Aromas from "./views/Aromas/Aromas.jsx";
import Favoritos from "./views/Favoritos/Favoritos.jsx";
import Cart from "./views/Cart/Cart.jsx";



function App() {

  return (
    <div className="mobile-div">
      <ApiContext>

        <Router>

          <Routes>


            <Route path="/" element={<Home />} />
            <Route path='/section/:sectionId' element={<BienestarListContainer />} />

            <Route path='/tipoBienestar/:tipoBienestarId' element={<TipoBienestar />} />
            <Route path='/productosBienestar/:productosBienestarId' element={<ProductosBienestarList />} />
            <Route path='/tiposAromas/:tiposAromasId' element={<TipoAromaList />} />

            <Route path='/aromas/:productoId/:aromaId' element={<Aromas />} />

            <Route path="/login/:loginId" element={<LoginContainer />} />
            <Route path="/favoritos/:favoritosId" element={<Favoritos />} />
            <Route path="/cart/:cartId" element={<Cart />} />



          </Routes>

        </Router>





      </ApiContext>
    </div>
  );
}

export default App;
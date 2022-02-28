import logo from "./logo.svg";
// import "./App.css";
import Header from "./component/Header";
import Prodect from "./component/Prodect";
import Details from "./component/Details";
import Footer from "./component/Footer";
import Cart from "./component/Cart";
import Aboutas from "./component/Aboutas";
import Homepage from "./component/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Datarovider} from "./component/Datarovider";
import Login from "./component/Login";
import Singin from "./component/Singin"
import Cartempty from "./component/Cartempty";
import Checkout from "./component/Checkout";
function App() {
  return (
    <Datarovider>
      <div className="App">
        <Router>
          <Header />
          
          <section>
            <Routes>
              <Route path="Prodect" element={<Prodect />} />
              <Route path="products/:id" element={<Details />} />
              <Route path="Cart" element={<Cart/>} />
              <Route path="/" element={<Homepage />} />
              <Route path="/Aboutas" element={<Aboutas />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Singin" element={<Singin />} />
              <Route path="/Cartempty" element={<Cartempty/>} />
              <Route path="/Checkout" element={<Checkout/>} />
            
            </Routes>
          </section>
          <Footer/>
        </Router>
      </div>
    </Datarovider>
  );
}

export default App;

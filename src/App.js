import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import ProductComponent from "./containers/ProductComponent";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path="/" exact element={<ProductListing />} />
            <Route
              path="/product/:productI"
              exact
              element={<ProductDetail />}
            />
            <Route> 404 not found </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

import {Routes,Route} from "react-router-dom";
import Layout from "./components/Layout";
import PageNotFound from "./components/PageNotFound";
import SearchBox from "./components/SearchBox";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";
function App() {
  return (
      <>
      <Routes>
        <Route path="/"  element={
          <>
           <SearchBox />
           <HomePage />
            </>
        } /> 
      <Route path="/products/:id" element={<ProductDetails/>} />
     <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
      </>
  );
}

export default App;

// Import library
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Routes } from 'react-router-dom';

//Import pages
import Home from "../src/pages/index"
import NotFound from "../src/pages/error/notFound"
import Login from "../src/pages/auth/Login"
import Catalog from "../src/pages/catalog"
import CatalogDetail from "../src/pages/catalog/slug"

const App = () => {
  return (
    <Routes>
      <Route path="/" ac element={<Home />} />
      <Route path="/katalog" element={<Catalog />} />
      <Route path="/katalog/:slug" element={<CatalogDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
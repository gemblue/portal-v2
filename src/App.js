// Import library
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Routes, useLocation } from 'react-router-dom';

//Import pages
import Home from "../src/pages/index"
import NotFound from "../src/pages/error/notFound"
import Login from "../src/pages/auth/Login"
import Catalog from "../src/pages/catalog"
import CatalogDetail from "../src/pages/catalog/slug"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:slug" element={<CatalogDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
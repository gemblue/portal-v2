import { Navigate, Route, Routes } from 'react-router-dom';

//Import pages
import Home from "../src/pages/index"
import FAQ from "../src/pages/FAQ"
import NotFound from "../src/pages/error/notFound"
import Login from "../src/pages/auth/Login"
import Register from "../src/pages/auth/Register"
import ForgotPassword from "./pages/auth/ForgotPassword"
import Catalog from "../src/pages/catalog"
import BukuTeksK13 from "../src/pages/catalog/BukuTeksK13"
import BukuKurikulumMerdeka from "../src/pages/catalog/BukuKurikulumMerdeka"
import BukuNonTeks from "../src/pages/catalog/BukuNonTeks"
import BukuTransisiPaudSD from "../src/pages/catalog/BukuTransisiPaudSD"
import CatalogDetail from "../src/pages/catalog/slug"
import ForParent from "./pages/guide/forParent"
import ForStudent from "./pages/guide/forStudent"
import ForTeacher from "./pages/guide/forTeacher"
import Test from './test';
import { useEffect } from 'react';
import { gapi } from "gapi-script";

// Import page dashboard
import Dashboard from "../src/pages/dashboard/index"
import ProtectedRoute from './components/dashboard/sections/Sidebar/ProtectedRoute/ProtectedRoute';
import Profile from './pages/dashboard/Profile';
import DownloadHistory from './pages/dashboard/DownloadHistory';
import ReadHistory from './pages/dashboard/ReadHistory';
import BukuRekomendasi from './pages/catalog/BukuRekomendasi';
import DetailBukuRekomendasi from './pages/catalog/DetailBukuRekomendasi';

const App = () => {

  useEffect(() => {
    if ('caches' in window) {
      caches.keys().then((names) => {
        // Delete all the cache files
        names.forEach(name => {
          caches.delete(name);
        })
      })
    }
    // Clear all caches browser
    caches.keys().then((keyList) => Promise.all(keyList.map((key) => caches.delete(key))))


    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId:
          "104944373110-hd7umobu1j3k66fnjm82l8gd32vnefm8.apps.googleusercontent.com",
        plugin_name: "chat",
      });
    });
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/test" element={<Test />} />
      <Route path="/katalog" element={<Catalog />} />
      <Route path="/katalog/buku-teks-k13" element={<BukuTeksK13 />} />
      <Route path="/katalog/buku-kurikulum-merdeka" element={<BukuKurikulumMerdeka />} />
      <Route path="/katalog/buku-non-teks" element={<BukuNonTeks />} />
      <Route path="/katalog/transisi-paud-sd" element={<BukuTransisiPaudSD />} />
      <Route path="/katalog/buku-rekomendasi" element={<BukuRekomendasi />} />
      <Route path="/katalog/buku-rekomendasi/:slug" element={<DetailBukuRekomendasi />} />
      <Route path="/katalog/:slug" element={<CatalogDetail />} />
      <Route path="/panduan/orang-tua" element={<ForParent />} />
      <Route path="/panduan/siswa" element={<ForStudent />} />
      <Route path="/panduan/guru" element={<ForTeacher />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrasi" element={<Register />} />
      <Route path="/lupa-sandi" element={<ForgotPassword />} />

      {/* Route dashboard */}
      <Route path="/user" element={<Navigate to="/user/dashboard" />} />
      <Route path="/user/*">
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="riwayat-unduh"
          element={
            <ProtectedRoute>
              <DownloadHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="riwayat-baca"
          element={
            <ProtectedRoute>
              <ReadHistory />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );

}

export default App
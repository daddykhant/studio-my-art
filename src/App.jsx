import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import { Contact, Home, PreWedding, PricingAndPortfolio } from "./pages";
import { AdminPannel, UploadFile } from "./admin/pages";
import AdminLayout from "./admin/layout/AdminLayout";
import PhotoGallery from "./admin/pages/PhotoGallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Side Routes */}
        <Route
          path="/admin/home"
          element={
            <AdminLayout>
              <AdminPannel />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/uploadfile"
          element={
            <AdminLayout>
              <UploadFile />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/photogallery"
          element={
            <AdminLayout>
              <PhotoGallery />
            </AdminLayout>
          }
        />

        {/* Client Side Routes */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/pricingandportfolio"
          element={
            <>
              <Header />
              <PricingAndPortfolio />
              <Footer />
            </>
          }
        />
        <Route
          path="/pricingandportfolio/prewedding"
          element={
            <>
              <Header />
              <PreWedding />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

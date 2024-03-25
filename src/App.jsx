import {
  AboutUs,
  Categories,
  CreatePost,
  DetailPost,
  HomePage,
  LoginPage,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="font-nunito p-6 md:max-w-[1200px] md:w-[90%] md:m-auto text-gray-800 min-h-screen">
              <HomePage />
            </div>
          }
        />

        <Route
          path="/home"
          element={
            <div className="font-nunito p-6 md:max-w-[1200px] md:w-[90%] md:m-auto text-gray-800 min-h-screen">
              <HomePage />
            </div>
          }
        />

        <Route
          path="/login"
          element={
            <div className="font-nunito p-6 md:max-w-[1200px] md:w-[90%] md:m-auto text-gray-800 min-h-screen">
              <LoginPage />
            </div>
          }
        />

        <Route
          path="/detail-post"
          element={
            <div className="font-nunito p-6 md:max-w-[1200px] md:w-[90%] md:m-auto text-gray-800 min-h-screen">
              <DetailPost />
            </div>
          }
        />

        <Route
          path="/create-post"
          element={
            <div className="font-nunito p-6 md:max-w-[1200px] md:w-[90%] md:m-auto text-gray-800 min-h-screen">
              <CreatePost />
            </div>
          }
        />

        <Route
          path="/categories"
          element={
            <div className="font-nunito p-6 md:max-w-[1200px] md:w-[90%] md:m-auto text-gray-800 min-h-screen">
              <Categories />
            </div>
          }
        />

        <Route
          path="/about"
          element={
            <div className="font-nunito p-6 md:max-w-[1200px] md:w-[90%] md:m-auto text-gray-800 min-h-screen">
              <AboutUs />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

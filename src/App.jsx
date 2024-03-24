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
            <div className="font-nunito p-6 md:max-w-[1200px] md:w-[90%] md:m-auto text-gray-800">
              <HomePage />
            </div>
          }
        />

        <Route
          path="/home"
          element={
            <div className="font-nunito p-6 md:max-w-[1200px] md:w-[90%] md:m-auto text-gray-800">
              <HomePage />
            </div>
          }
        />

        <Route
          path="/login"
          element={
            <div className="font-nunito p-6 md:max-w-[1200px] md:w-[90%] md:m-auto text-gray-800">
              <LoginPage />
            </div>
          }
        />

        <Route
          path="/detail-post"
          element={
            <div className="font-nunito p-6 md:max-w-[1200px] md:w-[90%] md:m-auto text-gray-800">
              <DetailPost />
            </div>
          }
        />

        <Route
          path="/create-post"
          element={
            <div className="font-nunito p-6 md:max-w-[1200px] md:w-[90%] md:m-auto text-gray-800">
              <CreatePost />
            </div>
          }
        />

        <Route
          path="/categories"
          element={
            <div className="font-nunito p-6 md:max-w-[1200px] md:w-[90%] md:m-auto text-gray-800">
              <Categories />
            </div>
          }
        />

        <Route
          path="/about"
          element={
            <div className="font-nunito p-6 md:max-w-[1200px] md:w-[90%] md:m-auto text-gray-800">
              <AboutUs />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

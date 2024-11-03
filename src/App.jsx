import "./App.css";
import Movies from "./Movies";
import React, { createContext, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import NavbarUi from "./Navbar";
import SingleMovie from "./singleMovie";
import ErrorBoundary from "./ErrorBoundray";
export const ThemeContext = createContext();

const NavbarUi = React.lazy(() => import("./Navbar"));
function App() {
  return (
    <ErrorBoundary>
      <ThemeContext.Provider value={{ color: "light" }}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading the navbat...</div>}>
            <NavbarUi />
          </Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie/:id" element={<SingleMovie />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
}

export default App;

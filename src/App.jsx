import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "./components/Home";
import Layout from "./components/Layout";
import PhotoGallery from "./components/PhotoGallery";


function App() {

const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (

    <Router> 
      <Routes>
        <Route path="/" element={<Layout theme={theme} toggleTheme={toggleTheme} />}>
           <Route index element={<Home />}></Route>
           <Route path="gallery" element={<PhotoGallery />}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./components/Home";
import Layout from "./components/Layout";
import PhotoGallery from "./components/PhotoGallery";

function App() {

  return (

    <Router> 
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<Home />}></Route>
           <Route path="gallery" element={<PhotoGallery />}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App

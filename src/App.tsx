import Home from "./pages/Home";
import './App.css'
import { Route, Routes, useLocation } from "react-router";
import PicturesPages from "./pages/PicturesPage";
import VideosPage from "./pages/VideosPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { AnimatePresence } from "framer-motion";

export default function App(){
  const location = useLocation();
  
  return(
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="pictures" element={<PicturesPages />} />
        <Route path="videos" element={<VideosPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
    </AnimatePresence>
  )
}
import Home from "./pages/Home";
import './App.css'
import { Route, Routes } from "react-router";
import PicturesPages from "./pages/PicturesPage";
import VideosPage from "./pages/VideosPage";
import Contact from "./pages/Contact";



export default function App(){

  return(
 <Routes>
  <Route index element={<Home />} />
  <Route path="pictures" element={<PicturesPages />} />
  <Route path="videos" element={<VideosPage />} />
  <Route path="contact" element={<Contact />} />
</Routes>
    
  )
}


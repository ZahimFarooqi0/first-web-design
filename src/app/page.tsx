'use client'
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

import Navbar from "./components/Navbar/Navbar";
import Recent from "./components/Recent/RecentPosts";
import Works from "./components/Works/Works";



export default function Home1(){

return(
  <>
    
    <header className="bg-[#C3C0C0] max-w-[1440px] h-[67px] absolute top-[-2px] gap-0 border-t border-transparent opacity-0">
    </header>
    <div className="w-full max-h-[800px] scroll-smooth">
    <Navbar/>
    <Home/>
    <Recent/>
    <Works/>
    <Footer/>
    </div>
    </>
  )
}
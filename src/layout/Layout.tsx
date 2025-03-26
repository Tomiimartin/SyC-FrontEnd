import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Layout() {
  

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavBar/>
      
      <main className="mt-26 sm:mt-28 md:mt-36 mb-22">
        <Outlet/>  
      </main>

      <Footer/>
    </div>
  )
}

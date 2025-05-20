import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Layout() {
  

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header> <NavBar/> </header>
      
      <main className="mt-26 sm:mt-28 xl:mt-32 mb-22">
        <Outlet/>  
      </main>

      <footer> <Footer/> </footer>
    </div>
  )
}

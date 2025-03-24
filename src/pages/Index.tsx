import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Index() {
  return (
    <div className="w-full min-h-screen flex flex-col align-center justify-center">
      <NavBar />
      
      <div className="mt-16 sm:mt-20 md:mt-36 mb-22 w-full flex flex-col lg:flex-row gap-3 lg:py-24 lg:px-7 items-center justify-center custom-bg">
        <img
          src="/logo.png"
          alt="logo SyC"
          className="w-full h-auto max-w-4/6 md:max-w-3/6 lg:max-w-4/12 xl:max-w-3/12 lg:order-2"
        />
        
        <div className="lg:order-1 rounded-lg px-2 py-6 text-lg md:text-xl lg:max-w-2xl bg-indigo-950 lg:bg-transparent mx-4 sm:mx-12 lg:mx-0">
          <p className="text-center px-4 text-white lg:text-start text-lg lg:text-xl 2xl:text-2xl">
            Somos Milton Lezcano y Manuela Barrios D'Ambra, estudiantes de la
            carrera de Medicina en la Universidad Nacional del Nordeste (UNNE).
            Durante la pandemia empezamos a hacer apuntes digitales para
            estudiar y comenzamos a compartirlos a través de nuestro instagram.
            En esta página te compartimos todos nuestros apuntes para que te sea
            un poco más llevadero estudiar durante la cursada. ¡Esperamos que te
            sirvan!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Index;
function Index() {


  return (  
    <div className="w-full flex flex-col lg:flex-row gap-3 lg:py-24 lg:px-7 items-center justify-center custom-bg">
      <img
        src="/logo.png"
        alt="logo SyC"
        className="w-full h-auto max-w-4/6 md:max-w-3/6 lg:max-w-4/12 xl:max-w-3/12 lg:order-2"
      />
      
      <div className="lg:order-1 rounded-lg px-2 py-6 text-lg md:text-xl lg:max-w-2xl bg-indigo-950 lg:bg-transparent mx-4 sm:mx-12 lg:mx-0">
        <p className="text-center px-4 text-white lg:text-start text-lg lg:text-xl 2xl:text-2xl">
        Somos Seba y Caro, al igual que ustedes, somos estudiantes de Medicina en la Universidad Nacional del Nordeste (UNNE). Como parte de nuestro método de estudio, hicimos apuntes basados en capítulos de libros, guías y artículos científicos que fuimos leyendo. Esperamos que les sean útiles, ya sea para ampliar sus conocimientos o simplemente de repaso. 
        Les compartimos con mucho cariño y les deseamos muchos éxitos !!.
        </p>
      </div>
    </div>
  );
}

export default Index;
// mt-26 sm:mt-28 md:mt-36 mb-22
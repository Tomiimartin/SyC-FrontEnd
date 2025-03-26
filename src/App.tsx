import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./pages/Index";
import PaginaAño from "./pages/PaginaAño";
import Layout from "./layout/Layout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Index />} />
          <Route path="/:year" element={<PaginaAño />} />
        </Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
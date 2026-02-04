import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import ServicesPage from "./pages/ServicesPage";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/service/:slug" element={<ServiceDetail />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
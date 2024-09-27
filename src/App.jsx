import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdoptionPage from "./pages/AdoptionPage";
import ConsultancyPage from "./pages/ConsultancyPage";
import ConsultantPage from "./pages/ConsultantPage";
import RescuePage from "./pages/RescuePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adoption" element={<AdoptionPage />} />
        <Route path="/consultancy" element={<ConsultancyPage />} />
        <Route path="/consultancy/:id" element={<ConsultantPage />} />
        <Route path="/rescue" element={<RescuePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;

import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Testimonials from "@/pages/Testimonials";
import FAQ from "@/pages/FAQ";
import Consultation from "@/pages/Consultation";
import Borough from "@/pages/Borough";

function App() {
  return (
    <div className="App bg-[#0C0C0C] min-h-screen relative">
      <BrowserRouter>
        <Navigation />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/areas/:slug" element={<Borough />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#141414",
              border: "1px solid #C5A059",
              color: "#F2F0E6",
              fontFamily: "'Manrope', sans-serif",
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;

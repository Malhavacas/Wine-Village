import { useState, useEffect, useCallback, createContext, useContext } from "react";
import "@/App.css";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MenuSection } from "@/components/MenuSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";

export const LangContext = createContext();

export const useLang = () => useContext(LangContext);

function App() {
  const [lang, setLang] = useState("pt");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      <div className="app-root" data-testid="app-root">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <MenuSection />
          <ReviewsSection />
          <LocationSection />
        </main>
        <Footer />
      </div>
    </LangContext.Provider>
  );
}

export default App;

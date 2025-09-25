import i18next from "i18next";
import Main_header from "./components/header/Main_header";
import Main_sidebar from "./components/sidebar/Main_sidebar.jsx";
import { useTheme } from "./context/ThemeContext.jsx";
import About_me from "./pages/About_me.jsx";
import Certificates from "./pages/Certificates.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Services from "./pages/Services.jsx";
import Skills from "./pages/Skills.jsx";
import { initReactI18next } from "react-i18next";
import es from "./i18n/es.json";
import en from "./i18n/en.json";
import Cursor from "./components/cursor/Cursor.jsx";

const savedLang = localStorage.getItem("lang") || "es";
i18next.use(initReactI18next).init({
  lng: savedLang,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
});

function App() {
  const { theme } = useTheme();

  
  return (
    <>
      
      <div className="" id={theme}>
        <Cursor />
        <Main_header />
        <div className="container_wrapper">
          <Home />
          <About_me />
          <Services />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </div>
        <Main_sidebar />
      </div>
    </>
  );
}

export default App;

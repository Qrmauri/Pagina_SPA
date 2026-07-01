import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ServiceCard from "./components/ServiceCard.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />

      <section className="services" id="servicios">
        <h2>Lo que encontrás en INACAP</h2>
        <div className="services__grid">
          <ServiceCard
            titulo="Programación"
            descripcion="Aprendé a crear software y aplicaciones con las tecnologías que usa la industria hoy."
            icono="💻"
          />
          <ServiceCard
            titulo="Biblioteca Digital"
            descripcion="Accedé a miles de recursos académicos y libros digitales desde cualquier lugar."
            icono="📚"
          />
          <ServiceCard
            titulo="Soporte Estudiantil"
            descripcion="Acompañamiento académico y psicosocial durante toda tu carrera."
            icono="🎓"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

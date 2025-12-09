import MoneyIcon from "./icons.jsx";

function Hero() {
  return (
    <section className="hero">
      <MoneyIcon />

      <h1 className="title">NOVA ERA</h1>
      <h2 className="subtitle">Eleve sua experiência financeira.</h2>

      <p className="description">
        Soluções financeiras inteligentes e personalizadas para você alcançar
        seus objetivos com segurança, transparência e excelência. Descubra uma
        nova forma de cuidar do seu patrimônio.
      </p>

      <button className="cta-button">Solicitar agora</button>
    </section>
  );
}

export default Hero;

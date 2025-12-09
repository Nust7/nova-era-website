import { IconMedal, IconSpeed, IconSecurity } from "./Icons";

const SobreNos = () => {
  return (
    <div className="Container-SobreNos">
      <h1>Por que escolher a NOVA ERA?</h1>
      <div className="text-p-SobreNos">
        <p>
          Somos uma instituição comprometida com a excelência e a inovação no
          mercado financeiro. Nossa missão é proporcionar segurança, rapidez e
          resultados consistentes para nossos clientes.
        </p>
      </div>
      <div className="features-SobreNos">
        <div className="feature-item feature-item-one">
          <div className="icon-wrapper">
            <IconMedal />
          </div>
          <h2>Confiança</h2>
          <p>
            Anos de experiência e milhares de clientes satisfeitos em todo o
            país.
          </p>
        </div>

        <div className="feature-item feature-item-two">
          <div className="icon-wrapper">
            <IconSecurity />
          </div>
          <h2>Segurança</h2>
          <p>
            Processos ágeis e eficientes para você não perder oportunidades no
            mercado.
          </p>
        </div>

        <div className="feature-item feature-item-three">
          <div className="icon-wrapper">
            <IconSpeed />
          </div>
          <h2>Rapidez</h2>
          <p>
            Processos ágeis e eficientes para você não perder oportunidades no
            mercado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;

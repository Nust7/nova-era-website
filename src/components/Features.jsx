import React from "react";  
import { IconClock, IconShield, IconCheck } from "./Icons";

const FeatureCard = ({ icon: Icon, title, text }) => {
  return (
    <div className="feature-card">
      <Icon />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="features-section">
      <FeatureCard
        icon={IconClock}
        title="AGILIDADE"
        text="Processos rápidos e eficientes para você não perder tempo. Respostas em até 24 horas."
      />

      <FeatureCard
        icon={IconShield}
        title="SEGURANÇA"
        text="Proteção máxima dos seus dados e investimentos com tecnologia de ponta."
      />

      <FeatureCard
        icon={IconCheck}
        title="CONFIANÇA"
        text="Anos de experiência no mercado financeiro com excelência e transparência."
      />
    </section>
  );
};

export default Features;


const FormSection = () => {
  return (
    <div className="Container-Form">
      <form action="#" className="Form">
        <h2>Comece Agora</h2>
        <p>Preencha seus dados e nossa equipe entrará em contato em breve.</p>

        <label htmlFor="nome" className="Title-Labels">Nome Completo</label>
        <input id="nome" type="text" placeholder="Nome Completo" required />

        <label htmlFor="telefone" className="Title-Labels" >Telefone</label>
        <input id="telefone" type="tel" placeholder="Telefone" required />

        <label htmlFor="email" className="Title-Labels">E-mail</label>
        <input id="email" type="email" placeholder="E-mail" required />

        <label htmlFor="regiao" className="Title-Labels">Região</label>
        <input id="regiao" type="text" placeholder="Sua região" required />

        <button>Enviar Solicitação</button>
      </form>
    </div>
  );
};

export default FormSection;

import { IconEmailTwo, IconLocation, IconPhoneCell } from "./icons";

function Footer() {
  return (
    <div className="Container-Footer">
      <div className="card1-footer">
        <h1>NOVA ERA</h1>
        <p>
          Transformando o futuro financeiro dos brasileiros com segurança,
          transparência e excelência.
        </p>
      </div>
      <div className="card2-footer">
        <h1>Contato</h1>
        <ul>
          <li>
            <IconEmailTwo />
            contato@novaera.com.br
          </li>
          <li>
            <IconPhoneCell />
            (11) 9999-9999
          </li>
          <li>
            <IconLocation />
            São Paulo, Brasil
          </li>
        </ul>
      </div>
      <div className="card3-footer">
        <h1>Informações</h1>
        <p>
          NOVA ERA é uma marca registrada. Todos os serviços financeiros são
          prestados em conformidade com as regulamentações vigentes do Banco
          Central do Brasil.
        </p>
      </div>
    <hr />
      <div className="final-footer">
        <p>© 2024 NOVA ERA. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}

export default Footer;

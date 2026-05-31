export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <a href="#" className="header__logo" style={{ color: '#fff', marginBottom: '1rem', display: 'inline-block' }}>
              Helena <span>Albuquerque</span>
            </a>
            <p className="footer__brand-description">
              Advocacia boutique em Direito de Família e Sucessões. Atendimento
              humanizado, estratégico e sigiloso em Salvador e região.
            </p>
          </div>

          <div>
            <h4 className="footer__heading">Contato</h4>
            <div className="footer__links">
              <a href="tel:+5571999999999">(71) 9 9999-9999</a>
              <a href="mailto:contato@helenaalbuquerque.adv.br">contato@helenaalbuquerque.adv.br</a>
              <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)' }}>
                Rua Square, 123, Sala 04<br />
                Salvador, BA — CEP 40000-000
              </span>
            </div>
          </div>

          <div>
            <h4 className="footer__heading">Navegue</h4>
            <div className="footer__links">
              <a href="#atuacao">Áreas de atuação</a>
              <a href="#sobre">Sobre</a>
              <a href="#diferenciais">Diferenciais</a>
              <a href="#depoimentos">Depoimentos</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>

          <div>
            <h4 className="footer__heading">Horários</h4>
            <div className="footer__links">
              <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)' }}>
                Seg–Sex: 9h às 18h<br />
                Sáb: 9h às 13h (agendado)
              </span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} Dra. Helena Albuquerque. Todos os direitos reservados.</span>
          <span>OAB/BA 48.237</span>
        </div>

        <p className="footer__portfolio-note">
          Projeto conceitual desenvolvido para portfólio
        </p>
      </div>
    </footer>
  );
}

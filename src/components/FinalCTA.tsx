export default function FinalCTA() {
  return (
    <section className="section" id="contato">
      <div className="container container--narrow">
        <div className="final-cta">
          <p className="section-label">Contato</p>
          <h2 className="section-title">
            Pronta para cuidar do que é mais importante para você
          </h2>
          <p className="section-subtitle">
            Agende uma conversa sem compromisso. Será um prazer ouvir sua história
            e mostrar como posso ajudar.
          </p>

          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="form__group">
              <label className="form__label" htmlFor="name">Nome</label>
              <input className="form__input" id="name" type="text" placeholder="Seu nome completo" />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="email">E-mail</label>
              <input className="form__input" id="email" type="email" placeholder="seu@email.com" />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="phone">Telefone</label>
              <input className="form__input" id="phone" type="tel" placeholder="(71) 9 9999-9999" />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="message">Mensagem</label>
              <textarea
                className="form__textarea"
                id="message"
                placeholder="Conte brevemente como podemos ajudar..."
              />
            </div>
            <button className="btn btn--primary form__btn" type="submit">
              Enviar mensagem
            </button>
            <p className="form__disclaimer">
              Seus dados estão protegidos. Ao enviar, você concorda com nossa
              Política de Privacidade.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

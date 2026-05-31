export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div
        className="hero__bg"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/8152736/pexels-photo-8152736.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80)`,
        }}
        aria-hidden="true"
      />
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__tagline">Direito de Família & Sucessões</p>
        <h1 className="hero__title">
          Sua história merece um olhar <em>jurídico</em> à altura.
        </h1>
        <p className="hero__text">
          Advocacia boutique em Salvador com atendimento humanizado, estratégico e
          discretamente personalizado para cada família.
        </p>
        <div className="hero__actions">
          <a href="#contato" className="btn btn--primary">
            Agendar consulta
          </a>
          <a href="#atuacao" className="btn btn--ghost">
            Áreas de atuação
          </a>
        </div>
      </div>
    </section>
  );
}

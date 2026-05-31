export default function About() {
  return (
    <section className="section section--dark" id="sobre">
      <div className="container">
        <div className="about__grid">
          <div className="about__image">
            <img
              src="https://images.pexels.com/photos/6077440/pexels-photo-6077440.jpeg?auto=compress&cs=tinysrgb&w=800&h=1067&fit=crop&q=80"
              alt="Dra. Helena Albuquerque — Advocacia boutique em Direito de Família e Sucessões"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>

          <div className="about__text">
            <p className="section-label">Sobre</p>
            <h3>Dra. Helena Albuquerque</h3>
            <p className="about__oab">OAB/BA 48.237</p>

            <p>
              Há mais de 15 anos dedicada ao Direito de Família e Sucessões, construí
              minha trajetória acreditando que cada caso carrega uma história única —
              e que o papel da advogada vai muito além da técnica jurídica.
            </p>
            <p>
              Meu escritório nasceu do desejo de oferecer um atendimento diferente:
              acolhedor sem perder o rigor técnico, estratégico sem abrir mão da
              sensibilidade. Aqui, você não é um número de protocolo.
            </p>
            <p>
              Com atuação em Salvador e região metropolitana, atendo presencialmente
              e por videoconferência, garantindo discrição, agilidade e segurança
              jurídica em cada etapa do processo.
            </p>

            <div className="about__signature">
              “A confiança se conquista com transparência. O respeito, com competência.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

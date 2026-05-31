const TESTIMONIALS = [
  {
    quote: 'A Dra. Helena conduziu meu processo de divórcio com uma humanidade que eu nem sabia que existia na advocacia. Me senti acolhida e segura do começo ao fim.',
    author: 'Mariana C.',
    role: 'Salvador, BA',
  },
  {
    quote: 'Profissionalismo impecável. O inventário do meu pai foi resolvido em tempo recorde, sem desgaste familiar. Recomendo de olhos fechados.',
    author: 'Ricardo A.',
    role: 'Lauro de Freitas, BA',
  },
  {
    quote: 'Finalmente uma advogada que explica tudo com clareza. Cada etapa foi transparente. Me senti amparada em um momento tão delicado da minha vida.',
    author: 'Ana Lúcia M.',
    role: 'Salvador, BA',
  },
];

export default function Testimonials() {
  return (
    <section className="section" id="depoimentos">
      <div className="container">
        <p className="section-label">Depoimentos</p>
        <h2 className="section-title">O que nossos clientes dizem</h2>
        <p className="section-subtitle">
          A satisfação de quem confiou seu caso ao nosso escritório é o nosso
          melhor reconhecimento.
        </p>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonials__card">
              <p className="testimonials__stars">★★★★★</p>
              <p className="testimonials__quote">“{t.quote}”</p>
              <p className="testimonials__author">
                {t.author} <span>— {t.role}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

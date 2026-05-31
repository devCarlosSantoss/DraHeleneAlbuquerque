const DIFFS = [
  {
    number: '01',
    title: 'Atendimento personalizado',
    text: 'Cada cliente é único. Seu caso é acompanhado pessoalmente por mim, do início ao fim, com escuta ativa e dedicação exclusiva.',
  },
  {
    number: '02',
    title: 'Sigilo e discrição',
    text: 'Questões familiares exigem absoluta confidencialidade. Seus dados e sua história são tratados com o mais estrito sigilo profissional.',
  },
  {
    number: '03',
    title: 'Visão estratégica',
    text: 'Além da solução jurídica, avalio cenários, riscos e oportunidades para proteger seus interesses de forma inteligente e eficiente.',
  },
  {
    number: '04',
    title: 'Comunicação clara',
    text: 'Traduzo o juridiquês para uma linguagem acessível. Você entende cada passo e toma decisões informadas com segurança.',
  },
];

export default function Differentiators() {
  return (
    <section className="section section--cream" id="diferenciais">
      <div className="container">
        <p className="section-label">Diferenciais</p>
        <h2 className="section-title">Por que escolher nosso escritório</h2>
        <p className="section-subtitle">
          Mais do que expertise jurídica, entregamos cuidado, transparência e
          resultados que fazem diferença na vida das pessoas.
        </p>

        <div className="diffs__grid">
          {DIFFS.map((item) => (
            <div key={item.number} className="diffs__item">
              <p className="diffs__number">{item.number}</p>
              <h3 className="diffs__item-title">{item.title}</h3>
              <p className="diffs__item-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

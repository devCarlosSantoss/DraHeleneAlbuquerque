const AREAS = [
  {
    icon: '⚖️',
    title: 'Direito de Família',
    text: 'Divórcio, guarda de filhos, investigação de paternidade, alimentos e mediação familiar com foco na pacificação e no bem-estar de todos os envolvidos.',
  },
  {
    icon: '📜',
    title: 'Sucessões',
    text: 'Planejamento sucessório, inventário judicial e extrajudicial, testamentos e partilha de bens conduzidos com sigilo e técnica apurada.',
  },
  {
    icon: '🤝',
    title: 'União Estável',
    text: 'Reconhecimento e dissolução de união estável, formalização de contratos de convivência e defesa de direitos patrimoniais.',
  },
  {
    icon: '👶',
    title: 'Direito das Crianças',
    text: 'Guarda, convivência, pensão alimentícia e tutela. Atuação sensível que prioriza o interesse e a proteção da criança.',
  },
  {
    icon: '🏛️',
    title: 'Mediação Familiar',
    text: 'Resolução extrajudicial de conflitos com diálogo orientado. Redução de desgaste emocional e agilidade nas soluções.',
  },
  {
    icon: '✍️',
    title: 'Planejamento Patrimonial',
    text: 'Estruturação de sucessão, blindagem patrimonial e doações em vida. Estratégias legais para proteger seu legado.',
  },
];

export default function PracticeAreas() {
  return (
    <section className="section" id="atuacao">
      <div className="container">
        <p className="section-label">Áreas de atuação</p>
        <h2 className="section-title">Direito de Família e Sucessões com excelência</h2>
        <p className="section-subtitle">
          Atendimento especializado nas principais áreas do Direito das Famílias,
          sempre com visão estratégica e humana.
        </p>

        <div className="areas__grid">
          {AREAS.map((area) => (
            <div key={area.title} className="areas__card">
              <span className="areas__icon">{area.icon}</span>
              <h3 className="areas__card-title">{area.title}</h3>
              <p className="areas__card-text">{area.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

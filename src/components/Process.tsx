const STEPS = [
  {
    number: '01',
    label: 'Primeiro contato',
    text: 'Agende uma consulta inicial por telefone, WhatsApp ou formulário. Sem compromisso.',
  },
  {
    number: '02',
    label: 'Escuta e análise',
    text: 'Em uma conversa reservada, compreendo seu caso e apresento as melhores estratégias.',
  },
  {
    number: '03',
    label: 'Plano de ação',
    text: 'Traçamos juntos o caminho jurídico ideal, com prazos, custos e expectativas claras.',
  },
  {
    number: '04',
    label: 'Acompanhamento',
    text: 'Você recebe atualizações constantes e tem contato direto comigo em toda a jornada.',
  },
];

export default function Process() {
  return (
    <section className="section section--dark" id="processo">
      <div className="container">
        <p className="section-label">Processo de atendimento</p>
        <h2 className="section-title">Como trabalhamos</h2>
        <p className="section-subtitle">
          Da primeira conversa à solução final, um fluxo transparente e acolhedor
          pensado para sua tranquilidade.
        </p>

        <div className="process__steps">
          {STEPS.map((step) => (
            <div key={step.number} className="process__step">
              <p className="process__step-number">{step.number}</p>
              <h3 className="process__step-label">{step.label}</h3>
              <p className="process__step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

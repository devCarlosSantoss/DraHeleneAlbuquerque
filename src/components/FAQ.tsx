import { useState } from 'react';

const FAQ_DATA = [
  {
    question: 'Qual o valor da consulta inicial?',
    answer: 'A primeira consulta tem valor fixo e você pode agendá-la sem compromisso. Nela, analisamos seu caso, esclarecemos dúvidas e definimos a melhor estratégia, com total transparência sobre honorários e custos do processo.',
  },
  {
    question: 'Atendem apenas em Salvador?',
    answer: 'Sim, nosso escritório está localizado em Salvador, mas realizamos atendimentos por videoconferência para clientes de todo o estado da Bahia. Processos judiciais podem ser acompanhados remotamente sem prejuízo da qualidade.',
  },
  {
    question: 'Quanto tempo leva um processo de divórcio?',
    answer: 'O prazo varia conforme a complexidade do caso e se há consenso entre as partes. Divórcios consensuais extrajudiciais podem ser concluídos em semanas, enquanto ações litigiosas podem demandar mais tempo. Esclareço todos os cenários na consulta inicial.',
  },
  {
    question: 'Preciso de um advogado para fazer um testamento?',
    answer: 'Sim, o testamento exige assistência jurídica especializada para ser válido. Posso orientá-lo sobre o tipo mais adequado ao seu caso e conduzir todo o processo com segurança e sigilo.',
  },
  {
    question: 'Como funciona o sigilo profissional?',
    answer: 'O sigilo profissional é um dever ético inegociável na advocacia. Todas as informações compartilhadas conosco são protegidas por confidencialidade absoluta, salvo autorização expressa do cliente.',
  },
  {
    question: 'Atendem causas de pensão alimentícia?',
    answer: 'Sim, atuamos tanto em ações de fixação quanto de revisão e execução de alimentos. Buscamos sempre soluções equilibradas que garantam o sustento sem criar conflitos desnecessários.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="section section--cream" id="faq">
      <div className="container container--narrow">
        <p className="section-label" style={{ textAlign: 'center' }}>FAQ</p>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Perguntas frequentes
        </h2>
        <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 0.5rem' }}>
          Dúvidas comuns sobre nossos serviços e processos.
        </p>

        <div className="faq__list">
          {FAQ_DATA.map((item, index) => (
            <div
              key={index}
              className={`faq__item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggle(index)}
            >
              <div className="faq__question">
                {item.question}
                <span className="faq__toggle">+</span>
              </div>
              <div className="faq__answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

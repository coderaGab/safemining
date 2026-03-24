const Privacidade = () => {
  return (
    <div className="bg-brand-bg text-brand-text min-h-screen py-24">
      <div className="container-max max-w-3xl">
        <h1 className="text-4xl font-serif font-bold text-white mb-10">
          Política de Privacidade
        </h1>

        <div className="space-y-6 text-brand-text-muted leading-relaxed">

          <p>
            A Safe Mining valoriza a sua privacidade e está comprometida com a proteção dos dados pessoais de seus usuários, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>

          <h2 className="text-white font-bold text-lg">1. Coleta de Dados</h2>
          <p>
            Coletamos apenas as informações fornecidas voluntariamente pelo usuário por meio de formulários de contato, como nome, e-mail, telefone e informações profissionais.
          </p>

          <h2 className="text-white font-bold text-lg">2. Uso das Informações</h2>
          <p>
            Os dados coletados são utilizados exclusivamente para:
          </p>
          <ul className="list-disc pl-5">
            <li>Responder solicitações e contatos</li>
            <li>Prestar serviços solicitados</li>
            <li>Melhorar a experiência do usuário</li>
          </ul>

          <h2 className="text-white font-bold text-lg">3. Compartilhamento</h2>
          <p>
            Não compartilhamos dados pessoais com terceiros, exceto quando necessário para cumprimento de obrigações legais.
          </p>

          <h2 className="text-white font-bold text-lg">4. Armazenamento e Segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais adequadas para proteger os dados contra acessos não autorizados, perda ou alteração.
          </p>

          <h2 className="text-white font-bold text-lg">5. Direitos do Usuário</h2>
          <p>
            Nos termos da LGPD, o usuário pode solicitar acesso, correção ou exclusão de seus dados a qualquer momento.
          </p>

          <h2 className="text-white font-bold text-lg">6. Contato</h2>
          <p>
            Para dúvidas sobre esta política, entre em contato pelo e-mail: contato@safemining.com
          </p>

          <p className="text-sm text-white/40 pt-6">
            Última atualização: 2026
          </p>

        </div>
      </div>
    </div>
  );
};

export default Privacidade;
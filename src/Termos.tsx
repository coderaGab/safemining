const Termos = () => {
  return (
    <div className="bg-brand-bg text-brand-text min-h-screen py-24">
      <div className="container-max max-w-3xl">
        <h1 className="text-4xl font-serif font-bold text-white mb-10">
          Termos de Uso
        </h1>

        <div className="space-y-6 text-brand-text-muted leading-relaxed">

          <p>
            Ao acessar este site, você concorda com os presentes Termos de Uso. Caso não concorde, recomendamos que não utilize a plataforma.
          </p>

          <h2 className="text-white font-bold text-lg">1. Uso do Site</h2>
          <p>
            O conteúdo deste site é disponibilizado para fins informativos e institucionais, podendo ser alterado sem aviso prévio.
          </p>

          <h2 className="text-white font-bold text-lg">2. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo, incluindo textos, imagens, logotipos e identidade visual, é de propriedade da Safe Mining e não pode ser reproduzido sem autorização.
          </p>

          <h2 className="text-white font-bold text-lg">3. Limitação de Responsabilidade</h2>
          <p>
            Não garantimos que o site estará sempre disponível ou livre de erros. O uso das informações é de responsabilidade do usuário.
          </p>

          <h2 className="text-white font-bold text-lg">4. Links Externos</h2>
          <p>
            O site pode conter links para terceiros, não sendo responsável pelo conteúdo ou políticas dessas plataformas.
          </p>

          <h2 className="text-white font-bold text-lg">5. Alterações</h2>
          <p>
            A Safe Mining pode atualizar estes termos a qualquer momento sem aviso prévio.
          </p>

          <p className="text-sm text-white/40 pt-6">
            Última atualização: 2026
          </p>

        </div>
      </div>
    </div>
  );
};

export default Termos;
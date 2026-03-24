/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import React from "react";
import { 
  ArrowRight, 
  Menu, 
  X, 
  Mail, 
  Phone, 
  CheckCircle2,
  Bell,
  Gem,
  Layers,
  Scale,
  FileText,
  Calculator,
  Search,
  GraduationCap,
  Briefcase,
  Globe,
  MapPin,
  Zap,
  Eye,
  Brain,
  Clock,
  Shield
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Tecnologia', href: '#tech' },
    { name: 'Riscos', href: '#risks' },
    { name: 'Diferenciais', href: '#differentials' },
    { name: 'Quem Somos', href: '#team' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-bg/95 backdrop-blur-sm py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container-max flex justify-between items-center">
        <a href="#" className="flex items-center space-x-4 group">
          <div className="w-10 h-10 bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-brand-accent transition-colors">
            <div className="w-5 h-5 border-2 border-brand-accent rotate-45 flex items-center justify-center">
               <div className="w-1 h-1 bg-brand-accent"></div>
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white uppercase">Safe <span className="text-brand-accent">Mining</span></span>
        </a>

        {/* Desktop Nav & Button Group */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-brand-text-muted hover:text-brand-text transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a href="#contact" className="bg-brand-accent text-brand-bg px-6 py-2 rounded-md text-sm font-bold hover:brightness-110 transition-all text-center">
            Fale Conosco
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-text" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-brand-bg z-[60] flex flex-col p-6"
          >
            <div className="flex justify-between items-center">
              <a 
                href="#" 
                className="flex items-center space-x-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-10 h-10 bg-brand-card flex items-center justify-center border border-white/10">
                   <div className="w-5 h-5 border-2 border-brand-accent rotate-45 flex items-center justify-center">
                      <div className="w-1 h-1 bg-brand-accent"></div>
                   </div>
                </div>
                <span className="text-xl font-bold tracking-tight text-white uppercase">Safe <span className="text-brand-accent">Mining</span></span>
              </a>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-8 h-8 text-brand-text" />
              </button>
            </div>
            <div className="flex flex-col space-y-8 mt-16">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-3xl font-bold text-brand-text"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-brand-accent text-brand-bg px-8 py-4 rounded-md text-lg font-bold w-full mt-4 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-bg">
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
        style={{
  backgroundImage: "url('/fundo.jpg')"
}}
      ></div>
      
      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-bg/40 via-brand-bg/60 to-brand-bg"></div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"></div>

      <div className="container-max relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-brand-accent/10 border border-brand-accent/20 rounded-full text-brand-accent text-xs font-bold uppercase tracking-widest mb-10">
            <Shield className="w-3.5 h-3.5" />
            <span>Mais de 50 processos minerários sob gestão</span>
          </div>
          
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center space-x-6 mb-6">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-white/5 flex items-center justify-center border border-white/10">
                <div className="w-8 h-8 md:w-12 md:h-12 border-2 md:border-4 border-brand-accent rotate-45 flex items-center justify-center">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-brand-accent"></div>
                </div>
              </div>
              <span className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white uppercase">
                Safe <span className="text-brand-accent">Mining</span>
              </span>
            </div>
            <div className="h-px w-32 bg-brand-accent/30 mb-8"></div>
            <h2 className="text-2xl md:text-4xl font-serif font-medium text-white/90 tracking-wide uppercase">
              Segurança jurídica do subsolo à superfície
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-brand-text-muted mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
            Monitoramento automatizado e inteligência técnico-jurídica integrada para proteger seus direitos minerários e evitar perdas de prazos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-24">
            <a href="#contact" className="bg-brand-accent text-brand-bg px-10 py-4 rounded-md text-lg font-bold hover:brightness-110 transition-all flex items-center justify-center space-x-2 w-full sm:w-auto">
              <span>Solicitar Consultoria</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="bg-transparent text-white border border-white/20 px-10 py-4 rounded-md text-lg font-bold hover:bg-white/5 transition-all w-full sm:w-auto">
              Conheça Nossos Serviços
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <FileText className="w-6 h-6" />, val: "50+", label: "Processos Monitorados" },
              { icon: <Shield className="w-6 h-6" />, val: "24/7", label: "Monitoramento Contínuo" },
              { icon: <Scale className="w-6 h-6" />, val: "100%", label: "Conformidade Regulatória" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                className="bg-brand-card/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center group hover:border-brand-accent/30 transition-all"
              >
                <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-brand-bg transition-all">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold text-white mb-2">{stat.val}</p>
                <p className="text-sm text-brand-text-muted font-medium uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-brand-paper text-brand-ink">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <p className="text-brand-accent font-bold text-xs uppercase tracking-[0.2em] mb-4">Sobre a Safe Mining</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight text-brand-bg">
                A união estratégica entre <br />
                <span className="text-brand-accent">Geologia</span> e <span className="text-brand-accent">Advocacia</span>
              </h2>
              <div className="space-y-6 text-brand-ink/80 text-lg leading-relaxed">
                <p>
                  A Safe Mining nasceu da união estratégica entre a Geologia e a Advocacia, reunindo profissionais altamente qualificados para atuar de forma integrada na gestão técnica e jurídica de processos minerários.
                </p>
                <p>
                  Essa parceria alia o conhecimento científico e técnico da geologia, essencial para a correta interpretação dos ativos minerais, avaliação de riscos e planejamento dos empreendimentos, à expertise jurídica especializada, garantindo segurança regulatória, conformidade legal e eficiência na condução dos processos minerários.
                </p>
                <p>
                  A Safe Mining se posiciona como parceira estratégica para empresas e profissionais do setor mineral, promovendo uma mineração responsável, tecnicamente fundamentada e juridicamente segura.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-2xl border border-brand-accent/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent mb-6">
                <Gem className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-brand-bg">Expertise Técnica</h4>
              <p className="text-brand-ink/70 leading-relaxed">
                Conhecimento científico em geociências aplicado ao Direito Minerário, com visão sistêmica dos projetos desde a fase de requerimento até o suporte técnico contínuo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-brand-accent/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent mb-6">
                <Scale className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-brand-bg">Segurança Jurídica</h4>
              <p className="text-brand-ink/70 leading-relaxed">
                Advocacia especializada em Direito da Mineração com atuação consolidada junto à ANM, garantindo conformidade legal e proteção dos direitos minerários.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { 
      id: 0, 
      label: "Monitoramento e Alertas", 
      icon: <Bell className="w-5 h-5" />,
      title: "Monitoramento e Alertas",
      items: [
        "Monitoramento de Direitos Minerários",
        "Alertas ao Cliente",
        "Comunicação à ANM solicitando acompanhamento de processos e procedimentos pendentes",
        "Verificação de área livre/disponível durante leilões"
      ]
    },
    { 
      id: 1, 
      label: "Guias e Taxas", 
      icon: <Calculator className="w-5 h-5" />,
      title: "Guias e Taxas",
      items: [
        "Emissão de guias de pagamento da TAH",
        "Emissão de outras guias e taxas",
        "ART (Anotação de Responsabilidade Técnica)"
      ]
    },
    { 
      id: 2, 
      label: "Requerimentos", 
      icon: <Layers className="w-5 h-5" />,
      title: "Requerimentos",
      items: [
        "Requerimento de Alvará de Pesquisa",
        "Desistência de Requerimento de Alvará de Pesquisa",
        "Requerimento de Permissão de Lavra Garimpeira (PLG)",
        "Requerimento de Guia de Utilização (GU)",
        "Renúncia de Alvará de Pesquisa"
      ]
    },
    { 
      id: 3, 
      label: "Relatórios e Declarações", 
      icon: <FileText className="w-5 h-5" />,
      title: "Relatórios e Declarações",
      items: [
        "Declaração de Investimentos em Pesquisa Mineral (DIPEM)",
        "Relatório Anual de Lavra (RAL)",
        "Elaboração e pedido de prorrogação e Relatório Parcial de Pesquisa",
        "Justificativa, comunicação sobre prorrogação",
        "Relatório Final de Pesquisa Negativo",
        "Relatório Final de Pesquisa Positivo",

      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-brand-bg">
      <motion.div 
        className="container-max"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Soluções completas <br />
            para <span className="text-brand-accent italic">gestão minerária</span>
          </h2>
          <p className="text-brand-text-muted max-w-3xl mx-auto text-lg leading-relaxed">
            Oferecemos um conjunto integrado de serviços para garantir a segurança e conformidade dos seus processos minerários junto à ANM.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={`flex items-center space-x-3 px-6 py-3.5 rounded-md border transition-all font-semibold text-sm ${
                activeTab === tab.id 
                ? 'bg-brand-accent text-brand-bg border-brand-accent shadow-lg shadow-brand-accent/20' 
                : 'bg-brand-card text-brand-text-muted border-white/5 hover:bg-white/5 hover:border-white/10'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Card Content */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brand-card rounded-3xl border border-white/10 p-10 md:p-16 max-w-5xl mx-auto shadow-2xl"
        >
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent border border-brand-accent/20">
              {tabs[activeTab].icon}
            </div>
            <h3 className="text-3xl font-serif font-bold">{tabs[activeTab].title}</h3>
          </div>

          <div className="space-y-4">
            {tabs[activeTab].items.map((item, i) => (
              <div key={i} className="flex items-center space-x-4 bg-brand-card-inner p-5 rounded-xl border border-white/5">
                <div className="w-6 h-6 rounded-full border border-brand-accent flex items-center justify-center shrink-0">
                   <div className="w-3 h-3 bg-brand-accent rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-2 h-2 text-brand-bg" strokeWidth={4} />
                   </div>
                </div>
                <p className="text-lg text-brand-text font-medium">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Differentials = () => {
  const differentials = [
    {
      title: "Tecnologia de Ponta",
      desc: "Utilizamos as plataformas Jazida e Astrea para varredura automatizada diária no DOU, SEI da ANM e Cadastro Mineiro.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Monitoramento em Tempo Real",
      desc: "Se amanhã sair qualquer movimentação sobre seus processos, a Safe Mining saberá antes que sua equipe tome conhecimento.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Expertise Integrada",
      desc: "Combinação única: leitura técnica da Dra. Iraclézia e orientação jurídica do Dr. Philippe em um fluxo integrado.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Resposta Imediata",
      desc: "Alertas instantâneos com orientação técnica e jurídica sobre o próximo passo. Não há margem para surpresa.",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <section id="differentials" className="section-padding bg-brand-paper text-brand-ink">
      <motion.div 
        className="container-max"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-brand-accent font-bold text-xs uppercase tracking-[0.2em] mb-4">Nossos Diferenciais</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight text-brand-bg">
                Por que escolher <br /> a <span className="text-brand-accent">Safe Mining?</span>
              </h2>
              <p className="text-brand-ink/70 text-lg leading-relaxed max-w-xl">
                O que diferencia a Safe Mining não é apenas o que fazemos, mas quem o faz e como fazemos. Não monitoramos processos manualmente — usamos inteligência especializada em mineração.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-brand-accent/10 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent"></div>
              <p className="text-brand-ink/80 italic text-lg leading-relaxed">
                "O volume de prazos simultâneos é simplesmente incompatível com gestão manual interna. Monitoramento especializado não é opcional: é proteção de ativo."
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {differentials.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-brand-accent/5 flex items-start space-x-6 hover:border-brand-accent/30 transition-all group shadow-sm">
                <div className="w-12 h-12 bg-brand-paper rounded-xl flex items-center justify-center text-brand-accent shadow-sm border border-brand-accent/10 group-hover:bg-brand-accent group-hover:text-white transition-colors shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-brand-bg">{item.title}</h4>
                  <p className="text-brand-ink/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Technology = () => {
  return (
    <section id="tech" className="section-padding bg-brand-bg text-white">
      <motion.div 
        className="container-max"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Tecnologia de <span className="text-brand-accent italic">Ponta</span>
          </h2>
          <p className="text-brand-text-muted max-w-2xl mx-auto text-lg">
            Plataformas especializadas Jazida & Astrea para inteligência em monitoramento minerário.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* JAZIDA Card */}
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-white/5 p-10 rounded-3xl border border-white/10 shadow-xl cursor-default"
          >
            <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-8">
              <Layers className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Plataforma JAZIDA</h3>
            <p className="text-white/60 mb-8 leading-relaxed">
              Varredura automática e diária em tempo real com alertas instantâneos ao cliente com orientação técnica e jurídica.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <span>Varredura Diária Automática</span>
              </li>
              <li className="flex items-center space-x-3 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <span>Detecção de Eventos em Tempo Real</span>
              </li>
            </ul>
          </motion.div>
          
          {/* ASTREA Card */}
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-white/5 p-10 rounded-3xl border border-white/10 shadow-xl cursor-default"
          >
            <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-8">
              <Scale className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Plataforma ASTREA</h3>
            <p className="text-white/60 mb-8 leading-relaxed">
              Inteligência especializada em monitoramento jurídico e processual, garantindo conformidade total.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <span>Análise Técnica + Jurídica Integrada</span>
              </li>
              <li className="flex items-center space-x-3 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <span>Gestão de Prazos e Notificações</span>
              </li>
            </ul>
          </motion.div>
        </div>

            {/* Fluxo de Monitoramento */}
        <div className="bg-white/5 p-12 rounded-3xl border border-white/10">
          <p className="text-center text-xs font-bold text-brand-accent uppercase tracking-[0.3em] mb-12">Fluxo de Monitoramento</p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
            {[
              { label: "Varredura Diária", icon: <Search className="w-5 h-5" /> },
              { label: "Detecção do Evento", icon: <Bell className="w-5 h-5" /> },
              { label: "Análise Tec + Jur", icon: <Scale className="w-5 h-5" /> },
              { label: "Alerta ao Cliente", icon: <Mail className="w-5 h-5" /> },
              { label: "Relatório Mensal", icon: <FileText className="w-5 h-5" /> }
            ].map((step, i) => (
              <React.Fragment key={i}>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center space-y-4 z-10 cursor-default"
                >
                  <div className="w-14 h-14 bg-brand-accent text-brand-bg rounded-full flex items-center justify-center shadow-lg shadow-brand-accent/30">
                    {step.icon}
                  </div>
                  <span className="text-[10px] font-bold text-center uppercase tracking-wider text-white/80">{step.label}</span>
                </motion.div>
                {i < 4 && (
                  <div className="hidden md:block flex-1 h-[1px] bg-white/10 mx-2"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Risks = () => {
  const risks = [
    { title: "Prazo Perdido", desc: "TAH, DIPEM, RAL e Prorrogações.", icon: <Bell className="w-6 h-6" /> },
    { title: "Notificação ANM", desc: "Exigência formal imediata.", icon: <Mail className="w-6 h-6" /> },
    { title: "Auto de Infração", desc: "Multas pesadas e evitáveis.", icon: <Calculator className="w-6 h-6" /> },
    { title: "Caducidade", desc: "Perda definitiva e irreversível.", icon: <X className="w-6 h-6" /> }
  ];

  return (
    <section id="risks" className="section-padding bg-brand-bg">
      <motion.div 
        className="container-max"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-text mb-8">O Risco <span className="text-brand-accent italic">Regulatório</span></h2>
            <p className="text-brand-text-muted mb-10 text-lg leading-relaxed">
              O que acontece sem monitoramento especializado? Proteja seu investimento contra falhas processuais críticas.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {risks.map((risk, i) => (
                <div key={i} className="bg-brand-card p-6 rounded-2xl border border-white/5">
                  <div className="text-brand-accent mb-4">{risk.icon}</div>
                  <h4 className="font-bold text-brand-text mb-2">{risk.title}</h4>
                  <p className="text-brand-text-muted text-sm leading-relaxed">{risk.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-card p-10 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center">Prazos Críticos ANM</h3>
            <div className="space-y-4 mb-12">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="px-3 py-1 bg-brand-accent text-brand-bg text-[10px] font-bold rounded uppercase">Jan e Jul</div>
                  <span className="text-sm font-medium">Emissão das guias da TAH</span>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="px-3 py-1 bg-brand-accent text-brand-bg text-[10px] font-bold rounded uppercase">Anual</div>
                  <span className="text-sm font-medium">DIPEM - Declaração de Investimentos</span>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="px-3 py-1 bg-brand-accent text-brand-bg text-[10px] font-bold rounded uppercase">Anual</div>
                  <span className="text-sm font-medium">RAL - Relatório Anual de Lavra</span>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="px-3 py-1 bg-brand-accent text-brand-bg text-[10px] font-bold rounded uppercase">Alvará</div>
                  <span className="text-sm font-medium">Prorrogação do Alvará de Pesquisa</span>
                </div>
              </div>
      </motion.div>
    </section>
  );
};

const Team = () => {
  const team = [
    {
      name: "Dra. Iraclézia G. de Araújo",
      role: "Geóloga | Doutora em Geociências – UFPE",
      desc: "Doutora em Geociências pela UFPE, com especialização em aplicação técnica ao Direito Minerário. Une visão geológica profunda com conhecimento regulatório único no mercado. Responsável por toda análise técnica dos processos monitorados.",
      email: "iraclezia@safemining.com",
      phone: "(81) 99874-6158",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      name: "Dr. Philippe Martins",
      role: "Advogado | Direito da Mineração – Lima & Martins",
      desc: "Especialista em Direito da Mineração, sócio da Lima & Martins Sociedade de Advogados. Atuação consolidada junto à ANM e amplo domínio do Código de Mineração. Garante segurança jurídica e conformidade legal.",
      email: "pmartins@safemining.com",
      phone: "(31) 9168-6298",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  return (
    <section id="team" className="section-padding bg-brand-paper">
      <motion.div 
        className="container-max"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <p className="text-brand-accent font-bold text-xs uppercase tracking-[0.2em] mb-4">Nossa Equipe</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-bg mb-6">
            Profissionais <span className="text-brand-accent">altamente qualificados</span>
          </h2>
          <p className="text-brand-ink/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Quando a ANM faz uma movimentação em um processo, a leitura técnica e a orientação jurídica acontecem em um único fluxo integrado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl p-10 shadow-sm border border-brand-accent/5 flex flex-col">
              <div className="flex items-center space-x-5 mb-8">
                <div className="w-14 h-14 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent shrink-0">
                  {member.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-bg">{member.name}</h3>
                  <p className="text-brand-accent font-medium text-sm">{member.role}</p>
                </div>
              </div>
              
              <p className="text-brand-ink/70 text-base leading-relaxed mb-10 flex-grow">
                {member.desc}
              </p>

              <div className="pt-8 border-t border-brand-accent/5 space-y-3">
                <div className="flex items-center space-x-3 text-brand-ink/50 hover:text-brand-accent transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">{member.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-brand-ink/50 hover:text-brand-accent transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">{member.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const NextSteps = () => {
  const steps = [
    { id: 1, title: "Aceite da Proposta", desc: "Assinatura digital disponível para início imediato." },
    { id: 2, title: "Onboarding", desc: "Configuração dos processos nas plataformas Jazida & Astrea em 5 dias úteis." },
    { id: 3, title: "Primeiro Relatório", desc: "Relatório consolidado de todos os processos em menos de 30 dias." }
  ];

  return (
    <section className="section-padding bg-brand-card/20">
      <motion.div 
        className="container-max"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Próximos <span className="text-brand-accent italic">Passos</span></h2>
          <p className="text-brand-text-muted max-w-2xl mx-auto text-lg">Como começar – 3 passos simples em menos de 30 dias.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative bg-brand-card p-10 rounded-3xl border border-white/10 text-center">
              <div className="w-12 h-12 bg-brand-accent text-brand-bg rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.id}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-brand-text-muted text-sm leading-relaxed">{step.desc}</p>
              {step.id < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-brand-accent/30">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const Contact = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.append("access_key", "377acf8a-8814-41ce-b0f8-641aab78d253");
    formData.append("subject", "Novo contato - Safe Mining");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    if (data.success) {
      alert("Mensagem enviada com sucesso!");
      e.target.reset();
    } else {
      alert("Erro ao enviar.");
    }
  };
  return (
    <section id="contact" className="section-padding bg-brand-bg">
      <motion.div 
        className="container-max"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-10">
            <div>
              <p className="text-brand-accent font-bold text-xs uppercase tracking-[0.2em] mb-4">Contato</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Vamos <span className="text-brand-accent">conversar</span> <br /> sobre seu projeto
              </h2>
              <p className="text-brand-text-muted text-lg leading-relaxed max-w-md">
                Entre em contato para uma consultoria personalizada. Nossa equipe está pronta para ajudar você a proteger e gerenciar seus processos minerários.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-5">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-accent border border-white/5">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-0.5">Website</p>
                  <p className="text-brand-accent font-medium">www.safemining.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-5">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-accent border border-white/5">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-0.5">E-mail</p>
                  <p className="text-brand-accent font-medium">contato@safemining.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-5">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-accent border border-white/5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-0.5">Localização</p>
                  <p className="text-brand-text-muted font-medium">Atendimento em todo o Brasil</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/5 space-y-4">
              <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Contato direto com nossa equipe:</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-brand-accent">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-bold">Dra. Iraclézia: <span className="text-white font-medium">(81) 99874-6158</span></span>
                </div>
                <div className="flex items-center space-x-3 text-brand-accent">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-bold">Dr. Philippe: <span className="text-white font-medium">(31) 9168-6298</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-serif font-bold text-white mb-8">Envie uma mensagem</h3>      
  <form onSubmit={handleSubmit} className="space-y-6">

  {/* Anti-spam */}
  <input type="checkbox" name="botcheck" className="hidden" />

  <div className="space-y-2">
    <label className="text-xs font-bold text-white/70 uppercase tracking-widest">Nome completo</label>
    <input 
      type="text" 
      name="name"
      placeholder="Seu nome"
      required
      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-accent transition-colors"
    />
  </div>

  <div className="space-y-2">
    <label className="text-xs font-bold text-white/70 uppercase tracking-widest">Empresa</label>
    <input 
      type="text" 
      name="empresa"
      placeholder="Nome da empresa"
      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-accent transition-colors"
    />
  </div>

  <div className="space-y-2">
    <label className="text-xs font-bold text-white/70 uppercase tracking-widest">E-mail</label>
    <input 
      type="email" 
      name="email"
      placeholder="seu@email.com"
      required
      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-accent transition-colors"
    />
  </div>

  <div className="space-y-2">
    <label className="text-xs font-bold text-white/70 uppercase tracking-widest">Quantidade de processos</label>
    <input 
      type="text" 
      name="processos"
      placeholder="Ex: 50 processos"
      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-accent transition-colors"
    />
  </div>

  <div className="space-y-2">
    <label className="text-xs font-bold text-white/70 uppercase tracking-widest">Mensagem</label>
    <textarea 
      name="message"
      rows={4}
      placeholder="Como podemos ajudar?"
      required
      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-accent transition-colors resize-none"
    ></textarea>
  </div>

  <button 
    type="submit"
    className="w-full bg-brand-accent text-brand-bg py-5 rounded-xl text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all"
  >
    Enviar Mensagem
  </button>

</form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-bg text-brand-text py-24 border-t border-white/5">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center mb-10">
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-white/10">
                <div className="w-5 h-5 border-2 border-brand-accent rotate-45 flex items-center justify-center">
                  <div className="w-1 h-1 bg-brand-accent"></div>
                </div>
              </div>
              <span className="ml-4 text-2xl font-bold tracking-tight text-white">Safe <span className="text-brand-accent">Mining</span></span>
            </div>
            <p className="text-brand-text-muted text-lg leading-relaxed max-w-sm">
              Inteligência técnica e jurídica integrada para a gestão estratégica de ativos minerários em todo o território nacional.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-brand-accent text-xs font-bold uppercase tracking-[0.2em] mb-8">Navegação</h4>
            <ul className="space-y-4 text-brand-text-muted">
              <li><a href="#about" className="hover:text-brand-accent transition-colors">Sobre</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Serviços</a></li>
              <li><a href="#tech" className="hover:text-brand-accent transition-colors">Tecnologia</a></li>
              <li><a href="#risks" className="hover:text-brand-accent transition-colors">Riscos</a></li>
              <li><a href="#differentials" className="hover:text-brand-accent transition-colors">Diferenciais</a></li>
              <li><a href="#team" className="hover:text-brand-accent transition-colors">Quem Somos</a></li>
              <li><a href="#contact" className="hover:text-brand-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-brand-accent text-xs font-bold uppercase tracking-[0.2em] mb-8">Social</h4>
            <ul className="space-y-4 text-brand-text-muted">
              <li><a href="#" className="hover:text-brand-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">YouTube</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-brand-accent text-xs font-bold uppercase tracking-[0.2em] mb-8">Legal</h4>
            <ul className="space-y-4 text-brand-text-muted">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Termos</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-brand-text-muted/50">
          <p>© 2026 SAFE MINING. ALL RIGHTS RESERVED.</p>
          <p className="mt-4 md:mt-0">DEVELOPED BY CODERA &gt;&gt;</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-bg scroll-smooth">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Hero />
          <About />
          <Services />
          <Differentials />
          <Technology />
          <Risks />
          <Team />
          <Contact />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
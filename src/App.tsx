/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Menu, X, Mail, Phone, CheckCircle2, Bell, Gem, Layers,
  Scale, FileText, Calculator, Search, GraduationCap, Briefcase,
  Globe, MapPin, Zap, Eye, Brain, Clock, Shield
} from "lucide-react";

// --- Variantes de Animação Globais ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

const cardHover = {
  whileHover: { 
    y: -10, 
    transition: { type: "spring", stiffness: 400, damping: 10 } 
  },
  whileTap: { scale: 0.98 }
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Tecnologia", href: "#tech" },
    { name: "Riscos", href: "#risks" },
    { name: "Diferenciais", href: "#differentials" },
    { name: "Quem Somos", href: "#team" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled
        ? "bg-brand-bg/95 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl"
        : "bg-transparent py-6"
    }`}>
      <div className="container-max flex justify-between items-center">
        {/* LOGO */}
        <motion.a 
          href="#" 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
        >
          <img src="/logo.png" alt="Safe Mining" className="h-10" />
          <span className="text-xl font-bold text-white tracking-tight">
            Safe <span className="text-brand-accent">Mining</span>
          </span>
        </motion.a>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-accent text-brand-bg px-6 py-2 rounded-md text-sm font-bold shadow-lg shadow-brand-accent/20"
          >
            Fale Conosco
          </motion.a>
        </div>

        {/* BOTÃO MOBILE */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-bg z-[60] flex flex-col p-6"
          >
            <div className="flex justify-between items-center">
              <a href="#" className="flex items-center space-x-3" onClick={() => setMobileMenuOpen(false)}>
                <img src="/logo.png" className="h-10" />
                <span className="text-xl font-bold text-white">Safe <span className="text-brand-accent">Mining</span></span>
              </a>
              <button onClick={() => setMobileMenuOpen(false)}><X className="w-8 h-8 text-white" /></button>
            </div>

            <div className="flex flex-col space-y-8 mt-16">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-4xl font-bold text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-brand-accent text-brand-bg px-8 py-4 rounded-md text-lg font-bold w-full mt-4 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fale Conosco
              </motion.a>
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
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fundo.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/40 via-brand-bg/60 to-brand-bg"></div>

      <div className="container-max relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center space-x-6 mb-6">
            <motion.img 
              src="/logo.png" className="h-20 md:h-28" 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            <span className="text-4xl md:text-7xl font-bold text-white tracking-tighter">
              Safe <span className="text-brand-accent">Mining</span>
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-serif text-white mb-6 italic">Segurança jurídica do subsolo à superfície</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg">Monitoramento automatizado e inteligência técnico-jurídica integrada</p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="inline-block bg-brand-accent text-brand-bg px-10 py-4 rounded font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(var(--brand-accent-rgb),0.3)] transition-all"
          >
            Solicitar Consultoria
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-20"
        >
          {[
            { icon: <FileText className="w-6 h-6" />, val: "500+", label: "Processos Monitorados" },
            { icon: <Shield className="w-6 h-6" />, val: "24/7", label: "Monitoramento Contínuo" },
            { icon: <Scale className="w-6 h-6" />, val: "100%", label: "Conformidade Regulatória" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="bg-brand-card/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center transition-colors"
            >
              <div className="mb-4 text-brand-accent">{stat.icon}</div>
              <p className="text-3xl font-bold text-white mb-1">{stat.val}</p>
              <p className="text-xs font-bold text-white/50 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
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
          <motion.div {...fadeInUp} className="space-y-8">
            <div>
              <p className="text-brand-accent font-bold text-xs uppercase tracking-[0.2em] mb-4">Sobre a Safe Mining</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight text-brand-bg">
                A união estratégica entre <br />
                <span className="text-brand-accent">Geologia</span> e <span className="text-brand-accent">Advocacia</span>
              </h2>
              <div className="space-y-6 text-brand-ink/80 text-lg leading-relaxed">
                <p>A Safe Mining nasceu da união estratégica entre a Geologia e a Advocacia, reunindo profissionais altamente qualificados para atuar de forma integrada na gestão técnica e jurídica de processos minerários.</p>
                <p>Essa parceria alia o conhecimento científico e técnico da geologia, essencial para a correta interpretação dos ativos minerais, à expertise jurídica especializada.</p>
                <p>A Safe Mining se posiciona como parceira estratégica para empresas e profissionais do setor mineral, promovendo uma mineração responsável e juridicamente segura.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="space-y-6">
            <motion.div variants={fadeInUp} {...cardHover} className="bg-white p-8 rounded-2xl border border-brand-accent/10 shadow-sm">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent mb-6"><Gem className="w-6 h-6" /></div>
              <h4 className="text-xl font-bold mb-4 text-brand-bg">Expertise Técnica</h4>
              <p className="text-brand-ink/70 leading-relaxed">Conhecimento científico em geociências aplicado ao Direito Minerário, com visão sistêmica dos projetos.</p>
            </motion.div>

            <motion.div variants={fadeInUp} {...cardHover} className="bg-white p-8 rounded-2xl border border-brand-accent/10 shadow-sm">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent mb-6"><Scale className="w-6 h-6" /></div>
              <h4 className="text-xl font-bold mb-4 text-brand-bg">Segurança Jurídica</h4>
              <p className="text-brand-ink/70 leading-relaxed">Advocacia especializada em Direito da Mineração com atuação consolidada junto à ANM.</p>
            </motion.div>
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
      id: 0, label: "Monitoramento e Alertas", icon: <Bell className="w-5 h-5" />, title: "Monitoramento e Alertas",
      items: ["Monitoramento de Direitos Minerários", "Alertas ao Cliente", "Comunicação à ANM solicitando acompanhamento", "Verificação de área livre em leilões"]
    },
    { 
      id: 1, label: "Guias e Taxas", icon: <Calculator className="w-5 h-5" />, title: "Guias e Taxas",
      items: ["Emissão de guias de pagamento da TAH", "Emissão de outras guias e taxas", "ART (Anotação de Responsabilidade Técnica)"]
    },
    { 
      id: 2, label: "Requerimentos", icon: <Layers className="w-5 h-5" />, title: "Requerimentos",
      items: ["Requerimento de Alvará de Pesquisa", "Desistência de Requerimento", "Requerimento de PLG", "Requerimento de Guia de Utilização (GU)", "Renúncia de Alvará"]
    },
    { 
      id: 3, label: "Relatórios e Declarações", icon: <FileText className="w-5 h-5" />, title: "Relatórios e Declarações",
      items: ["DIPEM", "Relatório Anual de Lavra (RAL)", "Pedido de prorrogação", "Relatório Final de Pesquisa (Positivo/Negativo)"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-brand-bg">
      <motion.div className="container-max" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Soluções para <span className="text-brand-accent italic">gestão minerária</span>
          </h2>
          <p className="text-brand-text-muted max-w-3xl mx-auto text-lg leading-relaxed">Oferecemos um conjunto integrado de serviços para garantir a segurança dos seus processos junto à ANM.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-3 px-6 py-3.5 rounded-full border transition-all font-semibold text-sm ${
                activeTab === tab.id ? 'bg-brand-accent text-brand-bg border-brand-accent' : 'bg-brand-card text-brand-text-muted border-white/5'
              }`}
            >
              {tab.icon} <span>{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Card Content */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-brand-card rounded-3xl border border-white/10 p-10 md:p-16 max-w-5xl mx-auto shadow-2xl"
          >
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent">{tabs[activeTab].icon}</div>
              <h3 className="text-3xl font-serif font-bold text-white">{tabs[activeTab].title}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {tabs[activeTab].items.map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex items-center space-x-4 bg-brand-card-inner p-5 rounded-xl border border-white/5"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                  <p className="text-lg text-brand-text font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

const Differentials = () => {
  const differentials = [
    { title: "Tecnologia de Ponta", desc: "Plataformas Jazida e Astrea para varredura automatizada diária.", icon: <Zap className="w-6 h-6" /> },
    { title: "Tempo Real", desc: "Se amanhã sair qualquer movimentação, a Safe Mining saberá antes.", icon: <Eye className="w-6 h-6" /> },
    { title: "Expertise Integrada", desc: "Combinação única de leitura técnica e jurídica em um único fluxo.", icon: <Brain className="w-6 h-6" /> },
    { title: "Resposta Imediata", desc: "Alertas instantâneos com orientação sobre o próximo passo.", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <section id="differentials" className="section-padding bg-brand-paper text-brand-ink">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp} className="space-y-8">
            <div>
              <p className="text-brand-accent font-bold text-xs uppercase tracking-[0.2em] mb-4">Nossos Diferenciais</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-brand-bg">Por que a <span className="text-brand-accent">Safe Mining?</span></h2>
              <p className="text-brand-ink/70 text-lg leading-relaxed">Usamos inteligência especializada em mineração para proteger seus ativos. Não monitoramos processos manualmente.</p>
            </div>
            <div className="bg-brand-bg p-8 rounded-2xl text-white italic relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-accent"></div>
              "O volume de prazos simultâneos é incompatível com gestão manual. Monitoramento especializado é proteção de ativo."
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {differentials.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: "rgba(var(--brand-accent-rgb), 0.5)" }}
                className="bg-white p-6 rounded-2xl border border-brand-accent/10 shadow-sm"
              >
                <div className="text-brand-accent mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-brand-bg">{item.title}</h4>
                <p className="text-brand-ink/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Technology = () => {
  return (
    <section id="tech" className="section-padding bg-brand-bg text-white">
      <div className="container-max">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Tecnologia de <span className="text-brand-accent italic">Ponta</span></h2>
          <p className="text-brand-text-muted max-w-2xl mx-auto text-lg leading-relaxed">Varredura automática e diária em tempo real com orientação técnica e jurídica.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {["JAZIDA", "ASTREA"].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 p-10 rounded-3xl border border-white/10 shadow-xl"
            >
              <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-8">
                {i === 0 ? <Layers className="w-10 h-10" /> : <Scale className="w-10 h-10" />}
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Plataforma {item}</h3>
              <p className="text-white/60 mb-8 leading-relaxed">Inteligência especializada garantindo conformidade total e detecção de eventos em tempo real.</p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-sm font-bold uppercase tracking-widest text-brand-accent">
                  <CheckCircle2 className="w-5 h-5" /> <span>Varredura Diária Automática</span>
                </li>
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="bg-white/5 p-12 rounded-3xl border border-white/10 text-center">
          <p className="text-xs font-bold text-brand-accent uppercase tracking-[0.3em] mb-12">Fluxo de Monitoramento</p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {[
              { label: "Varredura Diária", icon: <Search /> },
              { label: "Detecção do Evento", icon: <Bell /> },
              { label: "Análise Tec + Jur", icon: <Scale /> },
              { label: "Alerta ao Cliente", icon: <Mail /> },
              { label: "Relatório Mensal", icon: <FileText /> }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center space-y-4"
              >
                <div className="w-14 h-14 bg-brand-accent text-brand-bg rounded-full flex items-center justify-center shadow-lg shadow-brand-accent/20">
                  {step.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">{step.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
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
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-text mb-8">O Risco <span className="text-brand-accent italic">Regulatório</span></h2>
            <p className="text-brand-text-muted mb-10 text-lg leading-relaxed">Proteja seu investimento contra falhas processuais críticas.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {risks.map((risk, i) => (
                <motion.div key={i} whileHover={{ y: -5 }} className="bg-brand-card p-6 rounded-2xl border border-white/5">
                  <div className="text-brand-accent mb-4">{risk.icon}</div>
                  <h4 className="font-bold text-brand-text mb-2">{risk.title}</h4>
                  <p className="text-brand-text-muted text-sm leading-relaxed">{risk.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-brand-card p-10 rounded-3xl border border-white/10 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Prazos Críticos ANM</h3>
            <div className="space-y-4">
              {[
                { date: "Jan e Jul", task: "Emissão das guias da TAH" },
                { date: "Anual", task: "DIPEM - Declaração de Investimentos" },
                { date: "Anual", task: "RAL - Relatório Anual de Lavra" },
                { date: "Alvará", task: "Prorrogação do Alvará de Pesquisa" }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="px-3 py-1 bg-brand-accent text-brand-bg text-[10px] font-bold rounded uppercase">{item.date}</div>
                    <span className="text-sm font-medium text-white/80">{item.task}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const team = [
    {
      name: "Dra. Iraclézia G. de Araújo",
      role: "Geóloga | Doutora em Geociências – UFPE",
      desc: "Doutora em Geociências pela UFPE, com especialização em aplicação técnica ao Direito Minerário. Une visão geológica profunda com conhecimento regulatório único.",
      email: "iraclezia@safemining.com",
      phone: "(81) 99874-6158",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      name: "Dr. Philippe Martins",
      role: "Advogado | Direito da Mineração – Lima & Martins",
      desc: "Especialista em Direito da Mineração, sócio da Lima & Martins. Atuação consolidada junto à ANM e amplo domínio do Código de Mineração.",
      email: "pmartins@safemining.com",
      phone: "(31) 9168-6298",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  return (
    <section id="team" className="section-padding bg-brand-paper">
      <div className="container-max text-center">
        <motion.div {...fadeInUp} className="mb-16">
          <p className="text-brand-accent font-bold text-xs uppercase tracking-[0.2em] mb-4">Nossa Equipe</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-bg mb-6">Profissionais <span className="text-brand-accent">altamente qualificados</span></h2>
          <p className="text-brand-ink/70 max-w-3xl mx-auto text-lg leading-relaxed">Quando a ANM faz uma movimentação, a leitura técnica e jurídica acontecem em um único fluxo integrado.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-10 shadow-xl border border-brand-accent/5 flex flex-col text-left"
            >
              <div className="flex items-center space-x-5 mb-8">
                <div className="w-14 h-14 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent">{member.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-brand-bg">{member.name}</h3>
                  <p className="text-brand-accent font-medium text-sm">{member.role}</p>
                </div>
              </div>
              <p className="text-brand-ink/70 text-base leading-relaxed mb-10 flex-grow">{member.desc}</p>
              <div className="pt-8 border-t border-brand-accent/5 space-y-3">
                <div className="flex items-center space-x-3 text-brand-ink/50"><Mail className="w-4 h-4" /> <span className="text-sm font-medium">{member.email}</span></div>
                <div className="flex items-center space-x-3 text-brand-ink/50"><Phone className="w-4 h-4" /> <span className="text-sm font-medium">{member.phone}</span></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NextSteps = () => {
  const steps = [
    { id: 1, title: "Aceite da Proposta", desc: "Assinatura digital disponível para início imediato." },
    { id: 2, title: "Onboarding", desc: "Configuração dos processos nas plataformas em 5 dias úteis." },
    { id: 3, title: "Primeiro Relatório", desc: "Relatório consolidado em menos de 30 dias." }
  ];

  return (
    <section className="section-padding bg-brand-card/20">
      <div className="container-max">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Próximos <span className="text-brand-accent italic">Passos</span></h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <motion.div key={step.id} whileHover={{ scale: 1.05 }} className="relative bg-brand-card p-10 rounded-3xl border border-white/10 text-center">
              <div className="w-12 h-12 bg-brand-accent text-brand-bg rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">{step.id}</div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-brand-text-muted text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const handleSubmit = async (e) => {
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
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeInUp} className="space-y-10 text-white">
            <div>
              <p className="text-brand-accent font-bold text-xs uppercase tracking-[0.2em] mb-4">Contato</p>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Vamos <span className="text-brand-accent">conversar</span></h2>
              <p className="text-brand-text-muted text-lg leading-relaxed max-w-md">Entre em contato para uma consultoria personalizada.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-5">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-accent border border-white/5"><Globe className="w-6 h-6" /></div>
                <div><p className="text-xs font-bold text-white/50 uppercase tracking-widest">Website</p><p className="text-brand-accent font-medium">www.safemining.com</p></div>
              </div>
              <div className="flex items-center space-x-5">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-accent border border-white/5"><Mail className="w-6 h-6" /></div>
                <div><p className="text-xs font-bold text-white/50 uppercase tracking-widest">E-mail</p><p className="text-brand-accent font-medium">contato@safemining.com</p></div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            className="bg-white/5 p-10 rounded-3xl border border-white/10 shadow-2xl"
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-8">Envie uma mensagem</h3>      
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="checkbox" name="botcheck" className="hidden" />
              <input type="text" name="name" placeholder="Nome completo" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:border-brand-accent outline-none transition-all" />
              <input type="text" name="empresa" placeholder="Empresa" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:border-brand-accent outline-none transition-all" />
              <input type="email" name="email" placeholder="E-mail" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:border-brand-accent outline-none transition-all" />
              <textarea name="message" rows={4} placeholder="Como podemos ajudar?" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:border-brand-accent outline-none transition-all resize-none"></textarea>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-brand-accent text-brand-bg py-5 rounded-xl text-sm font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-brand-accent/20"
              >
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-bg py-20 border-t border-white/5">
      <div className="container-max text-center">
        <div className="flex justify-center items-center space-x-3 mb-8">
          <img src="/logo.png" className="h-10" />
          <span className="text-xl font-bold text-white">Safe <span className="text-brand-accent">Mining</span></span>
        </div>
        <div className="pt-8 border-t border-white/5 text-[10px] font-bold tracking-widest text-white/30 uppercase flex justify-between">
          <p>© 2026 SAFE MINING</p>
          <p>Developed by Codera</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-bg scroll-smooth bg-brand-bg">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Technology />
        <Risks />
        <Team />
        <NextSteps />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}
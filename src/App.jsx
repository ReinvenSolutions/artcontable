import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  CheckCircle, 
  Calculator, 
  FileText, 
  Briefcase, 
  Users, 
  ShieldCheck, 
  Globe, 
  MapPin,
  ArrowRight,
  Star,
  MessageCircle,
  TrendingUp,
  Award,
  Mail,
  Phone
} from 'lucide-react';

// Componente para animaciones al hacer scroll
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.1 });
    
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-stone-800 selection:bg-amber-200 selection:text-stone-900 overflow-x-hidden">
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/573005130067?text=¡Hola!%20Me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios%20contables." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all hover:scale-110 hover:-translate-y-1 flex items-center justify-center group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-white text-stone-800 px-4 py-2 rounded-2xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¡Hablemos por WhatsApp!
        </span>
      </a>

      {/* Navigation - Light & Glassy */}
      <nav 
        className={`fixed w-full z-40 transition-all duration-500 ${
          isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 flex items-center justify-center text-lg font-bold rounded-xl bg-amber-500 text-white shadow-md group-hover:scale-105 transition-transform">
              AC
            </div>
            <div className="flex flex-col leading-tight text-stone-900">
              <span className="font-bold tracking-[0.15em] text-lg">ART</span>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-stone-500">Contable</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Filosofía', 'Servicios', 'Visión', 'Perfil'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-sm font-medium tracking-wide text-stone-600 hover:text-amber-500 transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contacto')}
              className="px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all bg-stone-900 text-white hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-500/30"
            >
              Agendar Cita
            </button>
          </div>

          <button className="md:hidden z-50 p-2 bg-white rounded-full shadow-sm text-stone-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-[#FAFAFA] flex flex-col items-center justify-center gap-8 text-stone-900 z-40">
            {['Filosofía', 'Servicios', 'Visión', 'Perfil', 'Contacto'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-3xl font-medium text-stone-800 hover:text-amber-500 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section - Fresh, Light & Approachable */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#FAFAFA] overflow-hidden pt-20">
        {/* Soft Organic Background Blurs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-amber-200/40 rounded-full blur-[120px] mix-blend-multiply opacity-70"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-orange-100/50 rounded-full blur-[150px] mix-blend-multiply opacity-60"></div>
        <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] bg-rose-100/40 rounded-full blur-[100px] mix-blend-multiply opacity-50"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="md:w-1/2 space-y-8 text-center md:text-left">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-stone-100">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                  <span className="text-stone-600 text-xs font-bold tracking-wider uppercase">Contabilidad con Propósito</span>
                </div>
              </FadeIn>
              
              <FadeIn delay={200}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-stone-900 leading-[1.1] tracking-tight">
                  La tranquilidad de tener tus <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                    números en orden.
                  </span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={400}>
                <p className="text-stone-600 text-lg md:text-xl max-w-lg font-normal leading-relaxed mx-auto md:mx-0">
                  Acompañamos a emprendedores y empresas a crecer con bases financieras sólidas. Transparencia, cercanía y visión estratégica para tu negocio.
                </p>
              </FadeIn>
              
              <FadeIn delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                  <button 
                    onClick={() => scrollToSection('servicios')}
                    className="px-8 py-4 bg-stone-900 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-stone-800 flex items-center justify-center gap-2"
                  >
                    Nuestros Servicios <ArrowRight size={18} />
                  </button>
                  <button 
                    onClick={() => scrollToSection('perfil')}
                    className="px-8 py-4 bg-white text-stone-800 font-bold rounded-full transition-all border border-stone-200 shadow-sm hover:border-amber-500 hover:text-amber-600 flex items-center justify-center"
                  >
                    Conoce a Angie
                  </button>
                </div>
              </FadeIn>
            </div>
            
            {/* Soft, Aesthetic Image/Graphic area */}
            <div className="md:w-1/2 relative hidden md:block">
              <FadeIn delay={800}>
                <div className="relative w-full aspect-square max-w-lg mx-auto">
                   {/* Main Image Container with soft styling */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-amber-100 to-stone-50 rounded-[3rem] rotate-3 transform transition-transform hover:rotate-0 duration-500 shadow-2xl overflow-hidden border-8 border-white">
                      <img 
                        src="/angie-gonzalez.png" 
                        alt="Angie Gonzalez - Asesoría Financiera" 
                        className="w-full h-full object-cover opacity-90"
                      />
                   </div>
                   
                   {/* Floating Elements for a modern touch */}
                   <div className="absolute -left-8 top-1/4 bg-white p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex items-center gap-4 animate-[bounce_3s_infinite]">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <TrendingUp size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-stone-500 font-medium">Crecimiento</p>
                        <p className="text-stone-900 font-bold">+120%</p>
                      </div>
                   </div>

                   <div className="absolute -right-4 bottom-1/4 bg-white p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full bg-stone-200 border-2 border-white flex items-center justify-center text-[10px] overflow-hidden">
                             <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" />
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-stone-600 font-medium">Pymes Felices</p>
                   </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Warm & Friendly */}
      <section id="filosofia" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-3 block">Nuestra Esencia</span>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">¿Qué significa <span className="text-amber-500">ART</span>?</h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                Transformamos la experiencia contable. Dejamos atrás los tecnicismos aburridos para ofrecerte claridad, confianza y soluciones reales.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                letter: 'A',
                word: 'Accounting',
                es: 'Excelencia Contable',
                desc: 'Mantenemos tus números perfectos para que tú puedas concentrarte en lo que mejor sabes hacer: hacer crecer tu negocio.',
                icon: Calculator,
                bg: 'bg-orange-50',
                text: 'text-orange-600'
              },
              {
                letter: 'R',
                word: 'Reliability',
                es: 'Confianza Absoluta',
                desc: 'Somos tu equipo aliado. Protegemos tu información y garantizamos que todo esté al día, sin sorpresas ni dolores de cabeza.',
                icon: ShieldCheck,
                bg: 'bg-blue-50',
                text: 'text-blue-600'
              },
              {
                letter: 'T',
                word: 'Transparency',
                es: 'Transparencia Total',
                desc: 'Te explicamos tus finanzas en un idioma que entiendes. Sin letra pequeña, con comunicación directa y humana.',
                icon: CheckCircle,
                bg: 'bg-green-50',
                text: 'text-green-600'
              }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 150}>
                <div className="bg-[#FAFAFA] p-10 rounded-[2rem] hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 relative group h-full">
                  <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-8 ${item.text} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <item.icon size={30} strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">{item.word}</h3>
                  <p className="text-sm font-bold text-amber-500 uppercase tracking-wide mb-4">{item.es}</p>
                  
                  <p className="text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Subtle Background Letter */}
                  <div className="absolute right-6 top-6 text-7xl font-bold text-stone-100 group-hover:text-stone-50 transition-colors select-none pointer-events-none">
                    {item.letter}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Clean & Modern Cards */}
      <section id="servicios" className="py-24 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Servicios a tu medida</h2>
                <p className="text-stone-600 text-lg">
                  Todo lo que necesitas para que tu empresa esté al día con la DIAN y lista para escalar.
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Pymes & Emprendedores",
                items: ["Acompañamiento estratégico", "Asesoría para crecimiento"],
                icon: TrendingUp,
              },
              {
                title: "Nómina & Seg. Social",
                items: ["Gestión integral de nómina", "Afiliaciones y aportes"],
                icon: Users,
              },
              {
                title: "Gestión Contable",
                items: ["Registro de información", "Presentación de estados"],
                icon: Calculator,
              },
              {
                title: "Declaraciones Tributarias",
                items: ["Elaboración y revisión", "Cumplimiento normativo"],
                icon: Briefcase,
              },
              {
                title: "Trámites DIAN",
                items: ["Gestión de requerimientos", "Actualización de registros"],
                icon: ShieldCheck,
              },
              {
                title: "Formatos y Plantillas",
                items: ["Documentos administrativos", "Cartas y contratos básicos"],
                icon: FileText,
              }
            ].map((service, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-stone-100 transition-all duration-300 group h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-stone-50 rounded-2xl text-stone-700 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                       <service.icon size={26} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-4">{service.title}</h3>
                  <ul className="space-y-3 mt-auto">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                        <CheckCircle size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* International Vision - Soft Highlight Section */}
      <section id="vision" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-amber-50 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
            {/* Decorator circle */}
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-amber-200/50 rounded-full blur-3xl"></div>
            
            <div className="md:w-1/2 relative z-10">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-amber-600 text-xs font-bold uppercase tracking-wider mb-6">
                  <Globe size={14} /> Visión Global
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Contabilidad Local, <br/>Estándares Internacionales.</h2>
                <p className="text-stone-700 text-lg mb-8 leading-relaxed">
                  Porque tu visión no tiene límites, la nuestra tampoco. Nos capacitamos constantemente en normativas estadounidenses (US GAAP) para llevar tu contabilidad al siguiente nivel cuando decidas expandirte.
                </p>
              </FadeIn>
            </div>
            
            <div className="md:w-1/2 relative z-10 flex justify-center">
              <FadeIn delay={200}>
                <div className="relative p-2 bg-white rounded-3xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500 max-w-sm">
                   <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Oficina Moderna" className="rounded-2xl w-full h-auto object-cover" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section - Magazine Style */}
      <section id="perfil" className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-2/5">
              <FadeIn>
                 <div className="relative">
                    {/* Organic shape background */}
                    <div className="absolute inset-0 bg-stone-200 rounded-[4rem] transform -rotate-6 scale-105"></div>
                    <img 
                      src="/angie-gonzalez.png" 
                      alt="Angie Gonzalez" 
                      className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-xl relative z-10"
                    />
                    {/* Experience Badge */}
                    <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-[2rem] shadow-xl z-20 flex flex-col items-center justify-center transform rotate-3">
                      <span className="text-3xl font-extrabold">5+</span>
                      <span className="text-xs font-medium uppercase tracking-wider">Años Exp.</span>
                    </div>
                 </div>
              </FadeIn>
            </div>
            
            <div className="md:w-3/5 text-center md:text-left">
              <FadeIn delay={200}>
                <h3 className="text-sm font-bold text-amber-500 tracking-widest uppercase mb-4">Conoce a la experta</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Angie Gonzalez</h2>
                <h4 className="text-xl text-stone-500 font-medium mb-8">Contadora Pública & Fundadora</h4>
                
                <div className="space-y-6 text-stone-600 text-lg leading-relaxed mb-8">
                  <p>
                    "Mi misión es cambiar la forma en que los emprendedores ven la contabilidad. No tiene que ser un dolor de cabeza ni un trámite aburrido."
                  </p>
                  <p>
                    "Con ART Contable, quiero ofrecerte un espacio seguro donde puedas entender tus finanzas, tomar decisiones inteligentes y dormir tranquilo sabiendo que todo está en regla."
                  </p>
                </div>
                
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Fresh & Inviting */}
      <section id="contacto" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-stone-900 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-stone-800 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div className="text-white flex flex-col justify-center">
                <FadeIn>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Tomamos un café virtual?</h2>
                  <p className="text-stone-300 text-lg mb-12 font-light max-w-md">
                    Escríbenos para agendar tu primera asesoría. Es el momento perfecto para organizar el futuro de tu negocio.
                  </p>
                  
                  <div className="space-y-8">
                    <a href="mailto:contacto@artcontable.com" className="flex items-center gap-6 group cursor-pointer w-fit">
                      <div className="w-14 h-14 bg-stone-800 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-stone-400 uppercase tracking-wider">Email</p>
                        <p className="text-lg font-medium">contacto@artcontable.com</p>
                      </div>
                    </a>
                    
                    <a href="https://wa.me/573005130067?text=¡Hola!%20Me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios%20contables." className="flex items-center gap-6 group cursor-pointer w-fit">
                      <div className="w-14 h-14 bg-stone-800 rounded-2xl flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-stone-400 uppercase tracking-wider">WhatsApp</p>
                        <p className="text-lg font-medium">+57 300 513 0067</p>
                      </div>
                    </a>
                  </div>
                </FadeIn>
              </div>

              {/* Contact Form Container */}
              <div className="bg-white rounded-[2rem] p-8 shadow-2xl text-stone-900">
                <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                     <div className="space-y-1">
                       <label className="text-xs font-bold text-stone-500 uppercase px-1">Nombre</label>
                       <input type="text" className="w-full bg-[#FAFAFA] border-none p-4 rounded-xl focus:ring-2 focus:ring-amber-500 transition-shadow outline-none" />
                     </div>
                     <div className="space-y-1">
                       <label className="text-xs font-bold text-stone-500 uppercase px-1">Teléfono</label>
                       <input type="text" className="w-full bg-[#FAFAFA] border-none p-4 rounded-xl focus:ring-2 focus:ring-amber-500 transition-shadow outline-none" />
                     </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-500 uppercase px-1">Correo Electrónico</label>
                    <input type="email" className="w-full bg-[#FAFAFA] border-none p-4 rounded-xl focus:ring-2 focus:ring-amber-500 transition-shadow outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-500 uppercase px-1">Servicio de interés</label>
                    <select className="w-full bg-[#FAFAFA] border-none p-4 rounded-xl focus:ring-2 focus:ring-amber-500 transition-shadow outline-none text-stone-700">
                      <option>Selecciona una opción</option>
                      <option>Pymes & Emprendedores</option>
                      <option>Nómina & Seguridad Social</option>
                      <option>Declaraciones & Impuestos</option>
                      <option>Trámites DIAN</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <button type="button" className="w-full bg-amber-500 text-white font-bold py-4 rounded-xl hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-4">
                    Comenzar ahora
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAFAFA] text-stone-500 py-10 border-t border-stone-200">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center text-xs font-bold rounded-lg bg-stone-200 text-stone-700">
              AC
            </div>
            <span className="font-bold text-stone-800 tracking-wider">ART CONTABLE</span>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} ART Contable. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
};

export default App;

import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle, MessageCircle, Phone } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { serviceLandings } from '../content/serviceLandings';

const waBase =
  'https://wa.me/573005130067?text=';

export const ServiceLandingPage = () => {
  const { slug } = useParams();
  const data = serviceLandings[slug];

  if (!data) {
    return <Navigate to="/" replace />;
  }

  const waMessage = encodeURIComponent(
    `¡Hola! Me interesa el servicio: ${data.title}. ¿Podemos hablar?`
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-stone-800 selection:bg-amber-200 selection:text-stone-900 overflow-x-hidden">
      <a
        href={`${waBase}${waMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all hover:scale-110 hover:-translate-y-1 flex items-center justify-center group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-white text-stone-800 px-4 py-2 rounded-2xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¡Hablemos por WhatsApp!
        </span>
      </a>

      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-4">
        <div className="container mx-auto px-6 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-amber-600 font-medium text-sm transition-colors"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
          <Link to="/#servicios" className="text-sm font-medium text-stone-600 hover:text-amber-500">
            Todos los servicios
          </Link>
        </div>
      </nav>

      <header className="relative overflow-hidden bg-gradient-to-b from-amber-50/80 to-[#FAFAFA] pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <FadeIn>
            <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 block">
              {data.eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight mb-6">
              {data.title}
            </h1>
            {data.intro && (
              <p className="text-stone-600 text-lg md:text-xl leading-relaxed">{data.intro}</p>
            )}
            {data.quote && (
              <blockquote className="mt-8 pl-6 border-l-4 border-amber-500 text-stone-700 italic text-lg leading-relaxed">
                {data.quote}
              </blockquote>
            )}
          </FadeIn>
        </div>
      </header>

      <main className="container mx-auto px-6 pb-24 max-w-4xl">
        <div className="space-y-14">
          {data.sections.map((section, idx) => (
            <FadeIn key={idx} delay={idx * 80}>
              <section className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-stone-100">
                {section.title && (
                  <h2 className="text-2xl font-bold text-stone-900 mb-2">{section.title}</h2>
                )}
                {section.subtitle && (
                  <p className="text-amber-600 font-semibold text-sm uppercase tracking-wide mb-4">
                    {section.subtitle}
                  </p>
                )}
                {section.note && (
                  <p className="text-stone-500 text-sm mb-4 italic">{section.note}</p>
                )}
                {section.paragraphs &&
                  section.paragraphs.map((p, i) => (
                    <p key={i} className="text-stone-600 leading-relaxed mb-4 last:mb-0">
                      {p}
                    </p>
                  ))}
                {section.bullets && (
                  <ul className="space-y-4 mt-4">
                    {section.bullets.map((item, i) => (
                      <li key={i} className="flex gap-3 text-stone-700 leading-relaxed">
                        <CheckCircle
                          size={20}
                          className="text-amber-500 flex-shrink-0 mt-0.5"
                          strokeWidth={2}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="mt-16 bg-stone-900 rounded-[2rem] p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-amber-500/10" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Quieres hablar de este servicio?
              </h2>
              <p className="text-stone-300 mb-8 max-w-lg mx-auto">
                Agenda una asesoría y te contamos cómo podemos ayudarte con {data.title.toLowerCase()}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`${waBase}${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#20bd5a] transition-colors"
                >
                  <Phone size={20} />
                  WhatsApp
                </a>
                <Link
                  to="/#contacto"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-bold rounded-full hover:bg-amber-50 transition-colors"
                >
                  Ver contacto en el sitio
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </main>

      <footer className="bg-[#FAFAFA] text-stone-500 py-10 border-t border-stone-200">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80">
            <div className="w-8 h-8 flex items-center justify-center text-xs font-bold rounded-lg bg-stone-200 text-stone-700">
              AC
            </div>
            <span className="font-bold text-stone-800 tracking-wider">ART CONTABLE</span>
          </Link>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ART Contable. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

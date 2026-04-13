import { useEffect, useRef } from 'react';
import { 
  Utensils, 
  Truck, 
  ChefHat, 
  CheckCircle2, 
  Instagram, 
  Phone, 
  MapPin, 
  Star, 
  Calendar, 
  Users, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LOGO_URL = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGWLn0ME3vuA4EeHS6lZB5ua3w-1XLnk4bazZun1TE4C31XRXWgHtyAwAg9RFfGdBzB9poJekFBT6om3dxjwDflhwJox939GoCjxLzYqoU0i4wnIv9q-u7_NIrXEc9W5gmoMt6Na_713XQZPHvVkjioZyd3G-WsGXtxoxcYqjwobkCIu5ZgCtV-Uj0ctc/s320/logo%20ebe%20buffet.png";
const HERO_IMAGE = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuuXBhcZDdwdSzEFRz5PxvuynB3Vp-veOM5wHchi4XRJCDNXMzCm6jGjHykwhmG0XzF6-GaO2JA-bgCAW2RNxaqxgh5dpdA0DofLaCF7ou5y3KIK8HDsXhWHLKOsp_pqziJ5c58CHNI-Atb3y3lwXBflkLZeLtGKyTogUIqOXjeDt1kkocsAMuCU4ZxDs/s16000/hero.png";
const ABOUT_IMAGE = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1wTz1H3IK2ucbmUI13NJVFPB97RP0EzCVNm9OOo1SKJonqg3TkJzgTKdsXx-WvrD-6vMFXbGGCjG3yC4kfgi0sDCaEvgz_OEE20otGJrCdFjWgOnWlY2-PHr1UO7XxT11K0IOz0-Cb9lpT-eOqpv2ZRHdhW_m-6oKYS12mYw-lLMbr0y3bPLOGyG6pHg/s16000/sobre.png";

export default function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Scroll Reveal
      const revealElements = document.querySelectorAll(".reveal");
      revealElements.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      });

      // Bento Grid Stagger
      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 80%"
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const whatsappLink = "https://wa.me/5514998765544";

  return (
    <div ref={mainRef} className="overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={LOGO_URL} alt="Rancho do Ebe Avaré" className="h-12 w-auto" referrerPolicy="no-referrer" />
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-brown">
            <a href="#servicos" className="hover:text-brand-orange transition-colors">Serviços</a>
            <a href="#eventos" className="hover:text-brand-orange transition-colors">Eventos</a>
            <a href="#sobre" className="hover:text-brand-orange transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-brand-orange transition-colors">Contato</a>
          </nav>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-6">
            Orçamento
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt="Buffet Rancho do Ebe" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center hero-content">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
            Avaré/SP e Região
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-display mb-6 leading-[1.1]">
            Sabor do Campo com <br />
            <span className="italic text-brand-orange">Excelência Premium</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
            Do buffet corporativo ao evento dos seus sonhos. Levamos a tradição rústica e o profissionalismo estratégico para sua mesa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center">
              Falar com Especialista <ArrowRight size={18} />
            </a>
            <a href="#servicos" className="text-white font-medium border-b border-white/30 hover:border-white transition-all pb-1">
              Conheça nossos serviços
            </a>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="bg-brand-brown text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="reveal">
              <div className="text-3xl md:text-4xl font-display text-brand-orange mb-1">15+</div>
              <div className="text-xs uppercase tracking-widest opacity-70">Anos de Tradição</div>
            </div>
            <div className="reveal">
              <div className="text-3xl md:text-4xl font-display text-brand-orange mb-1">2k+</div>
              <div className="text-xs uppercase tracking-widest opacity-70">Eventos Realizados</div>
            </div>
            <div className="reveal">
              <div className="text-3xl md:text-4xl font-display text-brand-orange mb-1">100%</div>
              <div className="text-xs uppercase tracking-widest opacity-70">Qualidade Garantida</div>
            </div>
            <div className="reveal">
              <div className="text-3xl md:text-4xl font-display text-brand-orange mb-1">Avaré</div>
              <div className="text-xs uppercase tracking-widest opacity-70">E Região Atendida</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl text-brand-brown mb-4">Nossas Soluções Gastronômicas</h2>
            <p className="text-brand-brown/60 max-w-2xl mx-auto">
              Estrutura completa para atender desde pequenas equipes até grandes indústrias e eventos sociais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="reveal group bg-brand-cream p-8 rounded-3xl border border-brand-brown/5 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6 group-hover:scale-110 transition-transform">
                <Utensils size={28} />
              </div>
              <h3 className="text-2xl text-brand-brown mb-4">Marmitex Premium</h3>
              <p className="text-brand-brown/70 mb-6 text-sm leading-relaxed">
                Entregas em embalagens descartáveis (P, M e G). Opções completas com refrigerante e sobremesa inclusos para sua conveniência.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-xs font-medium text-brand-green">
                  <CheckCircle2 size={14} /> Tamanhos P, M e G
                </li>
                <li className="flex items-center gap-2 text-xs font-medium text-brand-green">
                  <CheckCircle2 size={14} /> Logística Própria
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="reveal group bg-brand-brown text-white p-8 rounded-3xl shadow-2xl shadow-brand-brown/20">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6 group-hover:scale-110 transition-transform">
                <Truck size={28} />
              </div>
              <h3 className="text-2xl mb-4">Comida Transportada</h3>
              <p className="text-white/70 mb-6 text-sm leading-relaxed">
                Preparamos em nosso restaurante e levamos até o buffet do seu refeitório. Ideal para empresas que buscam sabor caseiro com logística profissional.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-xs font-medium text-brand-orange">
                  <CheckCircle2 size={14} /> Padrão Industrial
                </li>
                <li className="flex items-center gap-2 text-xs font-medium text-brand-orange">
                  <CheckCircle2 size={14} /> Controle Térmico Rigoroso
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="reveal group bg-brand-cream p-8 rounded-3xl border border-brand-brown/5 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6 group-hover:scale-110 transition-transform">
                <ChefHat size={28} />
              </div>
              <h3 className="text-2xl text-brand-brown mb-4">Cozinha na Empresa</h3>
              <p className="text-brand-brown/70 mb-6 text-sm leading-relaxed">
                Montamos nossa cozinha industrial completa dentro da sua empresa. Gestão total do refeitório com equipe especializada.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-xs font-medium text-brand-green">
                  <CheckCircle2 size={14} /> Gestão de Equipe
                </li>
                <li className="flex items-center gap-2 text-xs font-medium text-brand-green">
                  <CheckCircle2 size={14} /> Cardápios Estratégicos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section id="eventos" className="section-padding bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl text-brand-brown mb-4">Onde o Ebe se Faz Presente</h2>
              <p className="text-brand-brown/60">
                De celebrações íntimas a grandes eventos corporativos e do agronegócio.
              </p>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2">
              Ver todos os eventos <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: "⛪️", label: "Casamentos" },
              { icon: "🎂", label: "Aniversários" },
              { icon: "🥳", label: "Confraternização" },
              { icon: "👶", label: "Chá Revelação" },
              { icon: "👰", label: "Noivados" },
              { icon: "💍", label: "Bodas" },
              { icon: "☕️", label: "Coffee Break" },
              { icon: "🚜", label: "Evento Agro" },
              { icon: "🏠", label: "Ebe na sua casa" },
              { icon: "⭐", label: "Ebe no seu evento" },
              { icon: "🍗", label: "Carreta de Churrasco" },
              { icon: "🍽️", label: "Eventos Sociais" },
            ].map((item, idx) => (
              <div key={idx} className="reveal bg-white p-6 rounded-2xl text-center border border-brand-brown/5 hover:border-brand-orange/30 transition-all group">
                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
                <div className="text-xs font-bold text-brand-brown uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Differentials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl text-brand-brown mb-4">Por que Escolher o Rancho do Ebe?</h2>
            <p className="text-brand-brown/60">Diferenciais que transformam sua experiência gastronômica.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px] bento-grid">
            <div className="bento-item md:col-span-2 md:row-span-2 bg-brand-brown rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800" 
                alt="Qualidade" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center text-white mb-4">
                  <Star fill="currentColor" />
                </div>
                <h3 className="text-3xl text-white mb-2">Qualidade Inquestionável</h3>
                <p className="text-white/70 max-w-md">Ingredientes selecionados e processos rigorosos de higiene para garantir o melhor sabor e segurança alimentar.</p>
              </div>
            </div>

            <div className="bento-item md:col-span-2 bg-brand-green rounded-3xl p-8 flex flex-col justify-center text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Clock size={20} />
                </div>
                <h3 className="text-xl">Pontualidade Britânica</h3>
              </div>
              <p className="text-white/70 text-sm">Entendemos que o tempo é crucial em eventos e empresas. Nosso compromisso com o horário é absoluto.</p>
            </div>

            <div className="bento-item bg-brand-orange rounded-3xl p-8 flex flex-col justify-center text-white">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <Users size={20} />
              </div>
              <h3 className="text-xl mb-2">Equipe Pro</h3>
              <p className="text-white/80 text-xs">Profissionais treinados para servir com discrição e elegância.</p>
            </div>

            <div className="bento-item bg-brand-cream border border-brand-brown/10 rounded-3xl p-8 flex flex-col justify-center">
              <div className="w-10 h-10 bg-brand-brown/10 rounded-lg flex items-center justify-center mb-4 text-brand-brown">
                <Calendar size={20} />
              </div>
              <h3 className="text-xl text-brand-brown mb-2">Flexibilidade</h3>
              <p className="text-brand-brown/60 text-xs">Cardápios personalizados para cada tipo de necessidade e orçamento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section-padding bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal order-2 md:order-1">
              <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4 block">Nossa História</span>
              <h2 className="text-3xl md:text-5xl text-brand-brown mb-6 leading-tight">Tradição que se <br />Renova a Cada Prato</h2>
              <div className="space-y-4 text-brand-brown/70 leading-relaxed">
                <p>
                  O Rancho do Ebe nasceu da paixão pela culinária rústica e do desejo de oferecer um serviço de buffet que unisse a hospitalidade do campo com o profissionalismo exigido pelo mercado corporativo.
                </p>
                <p>
                  Localizados em Avaré/SP, nos tornamos referência regional pela qualidade de nossos ingredientes e pela capacidade logística de atender grandes demandas sem perder o toque artesanal.
                </p>
                <p className="font-medium text-brand-brown italic">
                  "Nosso compromisso não é apenas servir comida, mas criar momentos memoráveis através do paladar."
                </p>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-display text-brand-brown">Ebe Buffet</span>
                  <span className="text-xs text-brand-brown/50 uppercase tracking-tighter">Fundador & Chef</span>
                </div>
                <div className="h-12 w-px bg-brand-brown/20"></div>
                <img src={LOGO_URL} alt="Logo" className="h-10 opacity-50" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="reveal order-1 md:order-2 relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-brand-orange/20 rounded-3xl z-0"></div>
              <img 
                src={ABOUT_IMAGE} 
                alt="Sobre o Rancho do Ebe" 
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl text-brand-brown mb-4">O que dizem nossos clientes</h2>
            <div className="flex justify-center gap-1 text-brand-orange">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ricardo Santos",
                role: "Diretor Industrial",
                text: "O Rancho do Ebe gerencia nosso refeitório há 3 anos. A qualidade da comida transportada é impecável e a equipe é extremamente profissional."
              },
              {
                name: "Mariana Oliveira",
                role: "Noiva",
                text: "Meu casamento foi perfeito! Todos os convidados elogiaram o buffet. O toque rústico combinou exatamente com o que queríamos."
              },
              {
                name: "Fernando Costa",
                role: "Produtor Rural",
                text: "A carreta de churrasco no nosso evento agro foi o destaque. Comida farta, saborosa e serviço muito ágil."
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="reveal bg-brand-cream p-8 rounded-3xl border border-brand-brown/5">
                <p className="text-brand-brown/70 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-brown rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-brand-brown">{testimonial.name}</div>
                    <div className="text-xs text-brand-brown/50">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contato" className="section-padding">
        <div className="max-w-5xl mx-auto bg-brand-green rounded-[40px] p-8 md:p-16 text-center text-white relative overflow-hidden reveal">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl mb-6">Pronto para transformar <br />seu próximo evento?</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-10">
              Solicite um orçamento personalizado agora mesmo. Nossa equipe está pronta para planejar a melhor experiência gastronômica para você.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 px-10 py-4">
                <Phone size={20} /> Chamar no WhatsApp
              </a>
              <div className="flex flex-col items-start text-left">
                <span className="text-xs uppercase tracking-widest opacity-60">Atendimento Rápido</span>
                <span className="text-lg font-medium">+55 14 99876-5544</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <img src={LOGO_URL} alt="Rancho do Ebe" className="h-16 mb-6 brightness-0 invert" referrerPolicy="no-referrer" />
              <p className="text-white/50 max-w-sm leading-relaxed">
                Excelência em buffet para empresas e eventos sociais em Avaré e toda a região. Tradição rústica com gestão profissional.
              </p>
            </div>
            
            <div>
              <h4 className="text-brand-orange uppercase text-xs font-bold tracking-widest mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#eventos" className="hover:text-white transition-colors">Eventos</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-brand-orange uppercase text-xs font-bold tracking-widest mb-6">Siga-nos</h4>
              <div className="flex gap-4 mb-6">
                <a href="https://www.instagram.com/ranchodoebeavare" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-all">
                  <Instagram size={20} />
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-all">
                  <Phone size={20} />
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={18} className="text-brand-orange shrink-0" />
                <span>Avaré/SP e Região Atendida</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
            <p>© Copyright 2026 - Rancho do Ebe Avaré</p>
            <div className="flex gap-6">
              <span>Política de Privacidade</span>
              <span>Termos de Uso</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

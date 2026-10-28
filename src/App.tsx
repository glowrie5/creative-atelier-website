import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Menu,
  Plus,
  X,
} from 'lucide-react'
import OlissCaseStudy from './pages/OlissCaseStudy'
import GemsByMimaCaseStudy from './pages/GemsByMimaCaseStudy'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    number: '01',
    title: 'Brand identity',
    description:
      'A distinct visual world for your business. We shape the look, feel, and personality that make your brand recognisable.',
    tags: 'Visual identity · Art direction · Brand guidelines',
  },
  {
    number: '02',
    title: 'Digital experiences',
    description:
      'Thoughtfully designed websites that bring your business to life, tell your story, and make it easy for customers to take action.',
    tags: 'Website design · Frontend development · Landing pages',
  },
  {
    number: '03',
    title: 'Content strategy',
    description:
      'A clear content direction that gives your brand something meaningful to say and a consistent way to say it.',
    tags: 'Content pillars · Strategy · Social media direction',
  },
  {
    number: '04',
    title: 'Digital brand setup',
    description:
      'The foundations your business needs to show up confidently and consistently across its digital touchpoints.',
    tags: 'Brand audit · Profile setup · Digital brand kit',
  },
]

const projects = [
  {
    number: '01',
    name: 'Oliss Scent n Strands',
    category: 'Brand identity · Digital experience',
    description: 'A sensory world for scent, strands and self-expression.',
    className: 'oliss-art',
    label: 'SCENT / STRANDS / LIFESTYLE',
  },
  {
    number: '02',
    name: 'Gems by Mima',
    category: 'E-commerce · Art direction',
    description: 'An expressive digital storefront for everyday luxury.',
    className: 'gems-art',
    label: 'OBJECTS TO TREASURE',
  },
]

const process = [
  {
    number: '01',
    title: 'Discover',
    text: 'First, we get curious. We learn about your business, your people, your goals and what makes you different.',
  },
  {
    number: '02',
    title: 'Define',
    text: 'We find the direction. Together, we establish the strategy, creative concept and priorities for your project.',
  },
  {
    number: '03',
    title: 'Design',
    text: 'Ideas become tangible. We shape the visuals, build the experience and refine the details that make it yours.',
  },
  {
    number: '04',
    title: 'Deliver',
    text: 'Time to meet the world. We bring everything together, prepare your launch and give your brand a confident start.',
  },
]

function HomePage() {
  const root = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState<number | null>(0)
  const closeMenu = () => {
  setMenuOpen(false)
}

useEffect(() => {
  const ctx = gsap.context(() => {
    const isMobile = window.matchMedia('(max-width: 650px)').matches

    if (isMobile) {
      // Ensure the hero is visible on mobile Safari.
      gsap.set(
        '.hero-kicker, .hero-line, .hero-copy, .hero-actions, .hero-art',
        {
          clearProps: 'all',
          opacity: 1,
          visibility: 'visible',
          y: 0,
          yPercent: 0,
          scale: 1,
        },
      )
    } else {
      // Keep the existing desktop hero animation.
      const intro = gsap.timeline({
        defaults: { ease: 'power3.out' },
      })

      intro
        .from('.hero-kicker', {
          y: 18,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          '.hero-line',
          {
            yPercent: 110,
            opacity: 0,
            duration: 1,
            stagger: 0.13,
          },
          '-=0.3',
        )
        .from(
          '.hero-copy, .hero-actions',
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
          },
          '-=0.45',
        )
        .from(
          '.hero-art',
          {
            scale: 0.94,
            opacity: 0,
            duration: 1,
          },
          '-=0.65',
        )
    }

    // Animate the sections as they enter the viewport.
    gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
      gsap.from(element, {
        y: 36,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 88%',
          once: true,
        },
      })
    })

    gsap.utils.toArray<HTMLElement>('.service-row').forEach((element) => {
      gsap.from(element, {
        x: -20,
        opacity: 0,
        duration: 0.65,
        scrollTrigger: {
          trigger: element,
          start: 'top 92%',
          once: true,
        },
      })
    })

    gsap.to('.orbit-word', {
      rotate: 360,
      duration: 28,
      repeat: -1,
      ease: 'none',
    })
  }, root)

  return () => ctx.revert()
}, [])


  return (
    <div ref={root} className="site-shell">
      <div className="announcement">
        <span className="announcement-dot" />
        AN INDEPENDENT CREATIVE STUDIO FOR AMBITIOUS BRANDS
        <span className="announcement-year">EST. 2026</span>
      </div>

      <header className="navbar">
        <a className="brand-lockup" href="#home" onClick={closeMenu}>
          <span className="brand-symbol">ca.</span>
          <span className="brand-name">
            THE CREATIVE
            <br />
            ATELIER<span className="brand-period">.</span>
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#studio" onClick={closeMenu}>Studio</a>
          <a href="#services" onClick={closeMenu}>What we do</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#process" onClick={closeMenu}>Our approach</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero section-pad" id="home">
          <div className="hero-topline">
            <span className="hero-kicker">
              STRATEGY MEETS
              <br />
              CREATIVE EXPRESSION.
            </span>
            <span className="hero-coordinate">CREATIVE STUDIO / 001</span>
          </div>

          <div className="hero-layout">
            <div className="hero-main">
              <h1 className="hero-title">
                <span className="hero-line">WE MAKE</span>
                <span className="hero-line">
                  BRANDS <em>mean</em>
                </span>
                <span className="hero-line">SOMETHING<span className="hero-star">✳</span></span>
                <span className="hero-line">MORE.</span>
              </h1>

              <div className="hero-bottom">
                <p className="hero-copy">
                  We build distinctive identities, digital experiences and
                  content directions for businesses ready to become more.
                </p>
                <div className="hero-actions">
                  <a href="#work" className="button button-dark">
                    Explore our work <ArrowDownRight size={17} />
                  </a>
                  <a href="#studio" className="text-link">
                    Get to know us <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>

      <div className="hero-art brand-logo-display">
  <img
    src="/the-creative-atelier-logo2.jpg"
    alt="The Creative Atelier logo"
    className="brand-logo-image"
  />
</div>
          </div>

          <div className="hero-footerline">
            <span>INDEPENDENT THINKING. INTENTIONAL DESIGN.</span>
            <a href="#studio">SCROLL TO EXPLORE <ArrowDownRight size={14} /></a>
          </div>
        </section>

        <section className="intro-section section-pad" id="studio">
          <div className="section-eyebrow reveal">
            <span>01 / A LITTLE ABOUT US</span>
            <Asterisk size={19} />
            <span>THE STUDIO</span>
          </div>

          <div className="intro-content reveal">
            <p className="intro-small">
              WE BELIEVE EVERY BRAND HAS A STORY WORTH TELLING.
            </p>
            <h2>
              Not just another
              <br />
              <span>pretty picture.</span>
              <br />
              A whole <em>feeling.</em>
            </h2>
            <div className="intro-bottom">
              <p>
                The Creative Atelier is an independent creative studio working
                at the intersection of brand identity, digital design and
                thoughtful storytelling. We help businesses find their voice,
                build their presence and create experiences people remember.
              </p>
            </div>
          </div>

          <div className="intro-stamp" aria-hidden="true">
            <span>THOUGHTFUL</span>
            <strong>✳</strong>
            <span>BY DESIGN</span>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="section-eyebrow reveal">
            <span>02 / WHAT WE BRING</span>
            <Asterisk size={19} />
            <span>OUR SERVICES</span>
          </div>

          <div className="services-heading reveal">
            <h2>
              Good ideas.
              <br />
              <em>Better execution.</em>
            </h2>
            <p>
              From your first brand impression to your next digital chapter,
              we bring the pieces together.
            </p>
          </div>

          <div className="services-list">
            {services.map((service, index) => (
              <div
                className={`service-row ${activeService === index ? 'service-active' : ''}`}
                key={service.number}
              >
                <button
                  className="service-trigger"
                  onClick={() =>
                    setActiveService(activeService === index ? null : index)
                  }
                  aria-expanded={activeService === index}
                >
                  <span className="service-number">{service.number}</span>
                  <span className="service-title">{service.title}</span>
                  <span className="service-plus">
                    {activeService === index ? <X size={19} /> : <Plus size={19} />}
                  </span>
                </button>
                <div className="service-details">
                  <p>{service.description}</p>
                  <span>{service.tags}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="services-bottom reveal">
            <span>SMALL STUDIO. BIG-PICTURE THINKING.</span>
            <a href="#contact" className="text-link">
              Have a project in mind? <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-eyebrow reveal">
            <span>03 / SELECTED PROJECTS</span>
            <Asterisk size={19} />
            <span>THE WORK</span>
          </div>

          <div className="work-heading reveal">
            <h2>
              Ideas made
              <br />
              <em>visible.</em>
            </h2>
            <p>
              A growing collection of brand worlds, digital experiences and
              creative explorations.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.number}>
                <a
  className={`project-art ${project.className}`}
  href={
    project.className === 'oliss-art'
      ? '/work/oliss-scent-n-strands'
      : '/work/gems-by-mima'
  }
  aria-label={`View the ${project.name} case study`}
>
                  <div className="project-art-top">
                    <span>{project.number} / SELECTED WORK</span>
                    <ArrowUpRight size={19} />
                  </div>

                {project.className === 'oliss-art' ? (
  <div className="project-cover-image">
    <img
      src="/projects/oliss/main Logo.png"
      alt="Oliss Scent n Strands brand identity and creative direction"
    />
  </div>
                  ) : (
                    <div className="project-cover-image gems-logo-cover">
  <img
    src="/projects/gems-by-mima/gemsbymima logo.jpg"
    alt="Gems by Mima logo"
  />
</div>
                  )}

                  <div className="project-art-bottom">
                    <span>{project.label}</span>
                    <span>↗</span>
                  </div>
                </a>

                <div className="project-info">
                  <div>
                    <span className="project-category">{project.category}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <a
  href={
    project.className === 'oliss-art'
      ? '/work/oliss-scent-n-strands'
      : '/work/gems-by-mima'
  }
  className="project-link"
  aria-label={`View the ${project.name} case study`}
>
  <ArrowUpRight size={21} />
</a>
                </div>
              </article>
            ))}
          </div>

          <div className="work-note reveal">
            <Asterisk size={19} />
            <p>
              These visual previews are creative presentations of the projects.
              The portfolio will grow as more work is completed.
            </p>
          </div>
        </section>

        <section className="manifesto-section">
          <div className="manifesto-inner section-pad reveal">
            <span className="manifesto-kicker">A NOTE FROM THE ATELIER</span>
            <h2>
              We don't believe
              <br />
              in <em>more of the same.</em>
            </h2>
            <div className="manifesto-bottom">
              <span className="manifesto-star">✳</span>
              <p>
                We believe in asking better questions, making intentional
                choices and creating work that feels like it could only belong
                to you. Less noise. More meaning. Always with purpose.
              </p>
              <span className="manifesto-signature">The Atelier.</span>
            </div>
          </div>
          <span className="manifesto-decoration" aria-hidden="true">CA.</span>
        </section>

        <section className="process-section section-pad" id="process">
          <div className="section-eyebrow reveal">
            <span>04 / HOW WE WORK</span>
            <Asterisk size={19} />
            <span>THE APPROACH</span>
          </div>

          <div className="process-heading reveal">
            <h2>
              A little method.
              <br />
              A lot of <em>intention.</em>
            </h2>
            <p>
              Good work doesn't happen by accident. Here's how we take an idea
              from a conversation to something real.
            </p>
          </div>

          <div className="process-grid">
            {process.map((step) => (
              <article className="process-card reveal" key={step.number}>
                <div className="process-card-top">
                  <span>{step.number}</span>
                  <ArrowDownRight size={19} />
                </div>
                <div className="process-symbol">
                  {step.number === '01' && <span className="symbol-circle" />}
                  {step.number === '02' && <span className="symbol-square" />}
                  {step.number === '03' && <span className="symbol-diamond" />}
                  {step.number === '04' && <span className="symbol-star">✳</span>}
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <div className="process-footer reveal">
            <span>NO GUESSWORK. NO COOKIE-CUTTER THINKING.</span>
            <span>JUST GOOD CREATIVE WORK.</span>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-top reveal">
            <span>05 / YOUR TURN</span>
            <span>LET'S MAKE IT MEAN SOMETHING.</span>
          </div>

          <div className="contact-main reveal">
            <h2>
              Shall we
              <br />
              make <em>something</em>
              <br />
              matter?
            </h2>
            <div className="contact-aside">
              <span className="contact-asterisk">✳</span>
              <p>
                Have a business to build, a brand to rethink, or an idea you've
                been sitting on? We'd love to hear about it.
              </p>
              <a
                className="button button-cream"
                href="https://wa.me/2348100388744?text=Hello%20The%20Creative%20Atelier!%20I%27d%20love%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
              >
                Start a conversation <ArrowUpRight size={17} />
              </a>
              <span className="contact-note">
                NO PRESSURE. JUST A GOOD CONVERSATION.
              </span>
            </div>
          </div>

          <div className="contact-bottom">
            <span>GOOD THINGS START SOMEWHERE.</span>
          </div>
        </section>
      </main>

  
<footer className="footer section-pad" id="footer">
  <div className="footer-main">
    
    <div className="footer-brand-column">
      <a className="footer-brand" href="#home">
        <span className="footer-symbol">ca.</span>
        <span>THE CREATIVE ATELIER</span>
      </a>

      <p className="footer-description">
        Independent thinking. Intentional design.
        <br />
        Building brands with meaning and purpose.
      </p>

      <a
        className="footer-email"
        href="mailto:thecreativeatelier1@gmail.com"
      >
        thecreativeatelier1@gmail.com
        <ArrowUpRight size={16} />
      </a>
    </div>

    {/* QUICK NAVIGATION */}
    <div className="footer-links-column">
      <span className="footer-heading">EXPLORE</span>

      <a href="#studio">The studio</a>
      <a href="#services">What we do</a>
      <a href="#work">Selected work</a>
      <a href="#process">Our approach</a>
      <a href="#contact">Get in touch</a>
    </div>

    {/* SOCIAL MEDIA */}
    <div className="footer-links-column">
      <span className="footer-heading">FIND US ONLINE</span>

      <a
        href="https://www.instagram.com/thecreativeatelierr/"
        target="_blank"
        rel="noreferrer"
      >
        Instagram <ArrowUpRight size={15} />
      </a>

      <a
        href="https://www.tiktok.com/@thecreativeatelier"
        target="_blank"
        rel="noreferrer"
      >
        TikTok <ArrowUpRight size={15} />
      </a>

      <a
        href="https://wa.me/2348100388744?text=Hello%20The%20Creative%20Atelier!%20I%27d%20love%20to%20discuss%20a%20project."
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp <ArrowUpRight size={15} />
      </a>
    </div>
  </div>

  {/* COPYRIGHT AND BOTTOM BAR */}
  <div className="footer-bottom">
    <span>
      © {new Date().getFullYear()} THE CREATIVE ATELIER
    </span>

    <span className="footer-made">
      MADE WITH INTENTION <Asterisk size={13} />
    </span>

    <a href="#home" className="footer-back-top">
      BACK TO THE TOP ↑
    </a>
  </div>
</footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/work/oliss-scent-n-strands"
          element={<OlissCaseStudy />} />

        <Route
          path="/work/gems-by-mima"
          element={<GemsByMimaCaseStudy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
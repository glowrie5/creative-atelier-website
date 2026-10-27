import { ArrowLeft, ArrowUpRight, ArrowRight, Asterisk } from 'lucide-react'
import { Link } from 'react-router-dom'
const deliverables = [
{
number: '01',
title: 'Brand Identity Kit',
description:
'A cohesive visual identity built around Oliss’s world of fragrance, hair, lifestyle and self-expression.',
tags: 'Visual direction · Brand colours · Typography · Identity',
file: '/projects/oliss/Brand identity kit.pdf',
},
{
number: '02',
title: 'Social Media Brand Kit',
description:
'A visual system for presenting Oliss consistently across social platforms, from profile styling to content presentation.',
tags: 'Profile direction · Feed style · Stories · Visual consistency',
file: '/projects/oliss/Social Media Brand Kit.pdf',
},
{
number: '03',
title: 'Content Strategy',
description:
'A content direction designed to showcase the products, educate the audience, build trust and encourage orders.',
tags: 'Content pillars · Content mix · Brand storytelling',
file: '/projects/oliss/Content Strategy.pdf',
},
{
number: '04',
title: 'Content Calendar',
description:
'A planning framework to help organise content ideas and maintain a consistent brand presence.',
tags: 'Content planning · Publishing direction',
file: '/projects/oliss/Content_Calendar.pdf',
},
]

export default function OlissCaseStudy() {
  return (
    <main className="case-page oliss-case">
      <header className="case-nav">
        <Link to="/" className="case-brand">
          <span className="case-brand-symbol">ca.</span>
          <span>
            THE CREATIVE
            <br />
            ATELIER.
          </span>
        </Link>

        <Link to="/#work" className="case-back">
          <ArrowLeft size={15} />
          BACK TO SELECTED WORK
        </Link>
      </header>

      <section className="case-hero">
        <div className="case-eyebrow">
          <span>SELECTED PROJECT / 001</span>
          <span>BRAND IDENTITY & DIGITAL EXPERIENCE</span>
        </div>

        <p className="case-overline">THE ART OF</p>
        <h1 className="case-title">
          OLISS
          <span>Scent n Strands</span>
        </h1>

        <p className="case-intro">
          A considered brand world bringing fragrance, hair and lifestyle
          together through visual identity, thoughtful content and a digital
          shopping experience.
        </p>

        <div className="case-meta">
          <div>
            <span>INDUSTRY</span>
            <p>Beauty · Fragrance · Hair</p>
          </div>
          <div>
            <span>SERVICES</span>
            <p>Branding · Content · Website</p>
          </div>
          <div>
            <span>PROJECT STATUS</span>
            <p>Website launched</p>
          </div>
        </div>
      </section>

      <section className="case-artwork oliss-case-art">
        <span className="case-art-label">SCENT / STRANDS / LIFESTYLE</span>
        <div className="case-art-centre">
          <span>THE ART OF</span>
          <strong>OLISS</strong>
          <span>SCENT & STRANDS</span>
        </div>
        <span className="case-art-footer">A STUDY IN SENSORY IDENTITY</span>
      </section>

      <section className="case-overview">
        <div className="case-section-label">
          <span>01 / THE BRIEF</span>
          <Asterisk size={19} />
        </div>

        <div className="case-overview-grid">
          <h2>
            More than
            <br />
            <em>a product.</em>
          </h2>

          <div>
            <p>
              Oliss Scent n Strands brings together fragrances and hair
              products under a lifestyle-led brand. The creative direction
              needed to make these product categories feel connected while
              giving the business a recognisable digital presence.
            </p>

            <p>
              The work focused on building a consistent brand identity,
              developing a social media visual system, planning content and
              creating a website where customers can explore the brand and
              order through WhatsApp.
            </p>
          </div>
        </div>
      </section>

    <section className="case-deliverables" id="brand-assets">
  <div className="case-section-label">
    <span>02 / THE CREATIVE WORK</span>
    <Asterisk size={19} />
  </div>

  <div className="case-deliverables-heading">
    <h2>
      Built with
      <br />
      <em>intention.</em>
    </h2>

<p>
  Each deliverable was created to give Oliss a clearer, more
  consistent way to present itself and connect with its audience.
  Explore the work behind the brand below.
</p>

  </div>

  <div className="case-deliverables-list">
    {deliverables.map((item) => (
      <article className="case-deliverable" key={item.number}>
        <span className="case-deliverable-number">
          {item.number}
        </span>

    <div className="case-deliverable-content">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span className="case-tags">{item.tags}</span>

      <a
        href={item.file}
        target="_blank"
        rel="noreferrer"
        className="case-document-link"
      >
        View document
        <span aria-hidden="true">↗</span>
      </a>
    </div>

    <Asterisk
      className="case-deliverable-star"
      size={22}
    />
  </article>
))}

  </div>
</section>

      <section className="case-website">
        <div className="case-section-label">
          <span>03 / THE DIGITAL EXPERIENCE</span>
          <Asterisk size={19} />
        </div>

        <div className="case-website-grid">
          <div>
            <p className="case-overline">DESIGNED & DEVELOPED</p>
            <h2>
              A digital home
              <br />
              for <em>Oliss.</em>
            </h2>
          </div>

          <div>
            <p>
              The Oliss website brings the brand into a dedicated digital
              storefront. Customers can explore the products and continue
              their purchase journey through WhatsApp.
            </p>

            <a
              className="case-button"
              href="https://olis-scent-n-strands.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Explore the live website <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <a
          className="case-website-preview"
          href="https://olis-scent-n-strands.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <span>OLISS SCENT N STRANDS</span>
            <strong>Discover your next signature.</strong>
            <span>VISIT WEBSITE ↗</span>
          </div>
        </a>
      </section>

      <section className="case-outcome">
        <span className="case-overline">THE RESULT</span>
        <h2>
          One brand.
          <br />
          A more <em>connected</em> experience.
        </h2>
        <p>
          A unified brand identity, a social media direction, a content
          framework and a live website—all created to help Oliss show up more
          consistently online.
        </p>
      </section>

      <nav className="case-next-project">
        <Link to="/" className="case-back-link">
          <ArrowLeft size={16} /> Back to home
        </Link>

        <Link to="/work/gems-by-mima" className="case-next-link">
          <span>NEXT PROJECT</span>
          <strong>Gems by Mima</strong>
          <ArrowRight size={18} />
        </Link>
      </nav>
     

      <footer className="case-footer">
        <Link to="/" className="case-footer-brand">
          THE CREATIVE ATELIER.
        </Link>
        <span>INDEPENDENT THINKING. INTENTIONAL DESIGN.</span>
      </footer>
    </main>
  )
}
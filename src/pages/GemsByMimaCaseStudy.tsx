import { ArrowLeft, ArrowRight, Asterisk } from 'lucide-react'
import { Link } from 'react-router-dom'

const deliverables = [
  {
    number: '01',
    title: 'Brand Identity Kit',
    description:
      'A visual identity direction created for a jewellery and accessories brand centred on style, expression and everyday treasures.',
    tags: 'Visual direction · Brand colours · Typography · Identity',
    file: '/projects/gems-by-mima/Branding Identity Kit.pdf',
  },
  {
    number: '02',
    title: 'Social Media Brand Kit',
    description:
      'A social media visual system designed to give the brand a recognisable, cohesive presence across its digital platforms.',
    tags: 'Profile direction · Feed style · Stories · Visual consistency',
    file: '/projects/gems-by-mima/Social Media Brand Kit.pdf',
  },
  {
    number: '03',
    title: 'Content Strategy',
    description:
      'A content framework focused on product discovery, styling inspiration, brand storytelling, trust and audience engagement.',
    tags: 'Content pillars · Content mix · Brand storytelling',
    file: '/projects/gems-by-mima/content strategy.pdf',
  },
  {
    number: '04',
    title: 'Content Calendar',
    description:
      'A planning framework to organise content ideas and support consistent communication with the brand’s audience.',
    tags: 'Content planning · Publishing direction',
    file: '/projects/gems-by-mima/Content_Calendar.pdf',
  },
]

export default function GemsByMimaCaseStudy() {
  return (
    <main className="case-page gems-case">
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
          <span>SELECTED PROJECT / 002</span>
          <span>BRAND IDENTITY & CREATIVE DIRECTION</span>
        </div>

        <p className="case-overline">THE LITTLE THINGS</p>
        <h1 className="case-title">
          GEMS
          <span>by Mima</span>
        </h1>

        <p className="case-intro">
          An expressive brand direction for jewellery and accessories,
          bringing together visual identity, social media design and a
          considered content strategy.
        </p>

        <div className="case-meta">
          <div>
            <span>INDUSTRY</span>
            <p>Jewellery · Accessories</p>
          </div>
          <div>
            <span>SERVICES</span>
            <p>Branding · Content Strategy</p>
          </div>
          <div>
            <span>PROJECT STATUS</span>
            <p>Website in progress</p>
          </div>
        </div>
      </section>

      <section className="case-artwork gems-case-art">
        <span className="case-art-label">OBJECTS TO TREASURE</span>
        <div className="case-art-centre">
          <span>THE LITTLE THINGS</span>
          <strong>GEMS</strong>
          <em>by Mima</em>
        </div>
        <span className="case-art-footer">EVERYDAY TREASURES</span>
      </section>

      <section className="case-overview">
        <div className="case-section-label">
          <span>01 / THE BRIEF</span>
          <Asterisk size={19} />
        </div>

        <div className="case-overview-grid">
          <h2>
            Everyday pieces.
            <br />
            <em>Distinctive style.</em>
          </h2>

          <div>
            <p>
              Gems by Mima is a jewellery and accessories brand offering
              pieces such as watches, necklaces, bracelets, anklets and
              earrings.
            </p>

            <p>
              The creative work focused on giving the brand a distinctive
              visual identity, establishing a consistent social media
              direction and developing a content strategy that connects
              products with style, lifestyle and self-expression.
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
      Details that
      <br />
      <em>make a difference.</em>
    </h2>
    <p>
      A considered creative foundation to help the brand communicate
      consistently and present its products with personality.
    </p>
  </div>

  <div className="case-deliverables-list">
    {deliverables.map((item) => (
      <article className="case-deliverable" key={item.number}>
        <span className="case-deliverable-number">{item.number}</span>

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

        <Asterisk className="case-deliverable-star" size={22} />
      </article>
    ))}
  </div>
</section>

      <section className="case-website gems-website">
        <div className="case-section-label">
          <span>03 / WHAT'S NEXT</span>
          <Asterisk size={19} />
        </div>

        <div className="case-website-grid">
          <div>
            <p className="case-overline">CURRENTLY IN PROGRESS</p>
            <h2>
              A digital home
              <br />
              for <em>Gems by Mima.</em>
            </h2>
          </div>

          <div>
            <p>
              The website is the next part of the brand’s digital experience.
              It is being developed to bring the products together in one
              place and support a smoother customer shopping journey.
            </p>

            <span className="case-status">
              <span />
              WEBSITE DEVELOPMENT IN PROGRESS
            </span>
          </div>
        </div>

        <div className="gems-website-preview">
          <span>GEMS BY MIMA</span>
          <strong>Everyday treasures.</strong>
          <em>A new digital experience is taking shape.</em>
          <span className="gems-preview-status">COMING TO LIFE</span>
        </div>
      </section>

      <section className="case-outcome">
        <span className="case-overline">THE CREATIVE DIRECTION</span>
        <h2>
          A clearer identity.
          <br />
          A more <em>intentional</em> presence.
        </h2>
        <p>
          With the identity, social media brand kit and content strategy
          established, Gems by Mima has a creative foundation to build on as
          its digital presence continues to grow.
        </p>
      </section>

      <nav className="case-next-project">
        <Link to="/" className="case-back-link">
          <ArrowLeft size={16} /> Back to home
        </Link>

        <Link to="/work/oliss-scent-n-strands" className="case-next-link">
          <span>PREVIOUS PROJECT</span>
          <strong>Oliss Scent n Strands</strong>
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
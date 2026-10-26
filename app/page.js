import Image from "next/image";
import Header from "@/components/Header";
import Motion from "@/components/Motion";
import {
  CalendarIcon,
  ChatIcon,
  FacebookIcon,
  HeartIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  SparkIcon,
  UsersIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "@/components/Icons";
import {
  aboutPoints,
  contact,
  kundaliniRequirements,
  navItems,
  onlineFeatures,
  pillars,
  products,
  programs,
  shaktifatBenefits,
  waLink,
} from "@/lib/content";

const external = { target: "_blank", rel: "noopener noreferrer" };
const featureIcons = { heart: HeartIcon, spark: SparkIcon, chat: ChatIcon, users: UsersIcon };

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <Motion />

      <main id="main">
        {/* Hero */}
        <section id="home" className="hero" aria-labelledby="hero-title">
          <div className="hero-media">
            <picture>
              <source media="(max-width: 860px)" srcSet="/images/hero-mobile.webp" width="480" height="600" />
              {/* Desktop crop fills the full hero height, so the full-width source is always needed. */}
              <img
                src="/images/hero-1375.webp"
                width="1375"
                height="600"
                alt="A TejaSurya guide dressed in white meditating in a cosmic scene with planets"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">TejaSurya Meditation &amp; Yoga</h1>
              <p className="hero-lead">
                Raja Yoga meditation, prana energy healing, and an introduction to chakras and kundalini, to discover your
                true self.
              </p>
              <p className="hero-note">
                For all religions and beliefs · <span className="nowrap">Denpasar, Bali</span>
              </p>
              <div className="btn-row">
                <a className="btn btn-gold" href="#programs">
                  View Programs
                </a>
                <a className="btn btn-ghost" href={waLink("Hello TejaSurya, I would like a consultation.")} {...external}>
                  <WhatsAppIcon />
                  Consult via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section" aria-labelledby="about-title">
          <div className="container about-grid">
            <div className="about-copy" data-reveal>
              <h2 id="about-title">About TejaSurya</h2>
              <p className="lead">
                TejaSurya energy is divine energy: subtle, pure and full of love, flowing through the chakras, nadis and
                layers of the body to open the spiritual path.
              </p>
              <ul className="about-points">
                {aboutPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="about-org">Guided by Yayasan TejaSurya (TejaSurya Foundation), Denpasar, Bali.</p>
            </div>

            <ul className="pillar-grid" data-reveal-group aria-label="Core teachings of TejaSurya">
              {pillars.map((p) => (
                <li key={p.title} className="pillar">
                  <Image src={p.image} alt={p.alt} width={800} height={450} loading="lazy" />
                  <div className="pillar-body">
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Programmes */}
        <section id="programs" className="section section-tint" aria-labelledby="programs-title">
          <div className="container fill">
            <div className="program-head" data-reveal>
              <h2 id="programs-title">Meditation &amp; Yoga Programs</h2>
              <ul className="chips" aria-label="Program terms">
                <li>About 4 months per stage</li>
                <li>Donation IDR 100,000 / month</li>
                <li>Shaktifat not included</li>
              </ul>
            </div>

            <div className="program-grid" data-reveal-group>
              {programs.map((program) => (
                <article key={program.id} className="program-card" aria-labelledby={`p-${program.id}`}>
                  <div className="program-media">
                    <Image src={program.image} alt={program.alt} width={800} height={450} loading="lazy" />
                  </div>
                  <div className="program-body">
                    <h3 id={`p-${program.id}`}>{program.title}</h3>
                    <p className="program-intro">{program.intro}</p>
                    <ol className="stages">
                      {program.stages.map((stage, i) => (
                        <li key={stage}>
                          <span className="stage-index" aria-hidden="true">
                            {i + 1}
                          </span>
                          <span>
                            <span className="visually-hidden">Stage {i + 1}: </span>
                            {stage}
                          </span>
                        </li>
                      ))}
                    </ol>
                    <a className="btn btn-purple btn-sm" href={waLink(program.wa)} {...external}>
                      <WhatsAppIcon width="18" height="18" />
                      Ask via WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Shaktifat */}
        <section id="shaktifat" className="section section-dark" aria-labelledby="shaktifat-title">
          <div className="container split">
            <div className="split-media" data-reveal>
              <Image
                src="/images/shaktifat.webp"
                alt="Illustration of divine light radiating through the Antahkarana channel of the head"
                width={800}
                height={450}
                loading="lazy"
              />
            </div>
            <div className="split-body" data-reveal>
              <h2 id="shaktifat-title">Shaktifat</h2>
              <p className="split-lead">
                TejaSurya initiation that channels divine energy into a person by opening the Antahkarana path, performed
                personally by a TejaSurya guide.
              </p>
              <ul className="check-list">
                {shaktifatBenefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="kundalini-card">
                <h3>Kundalini Shaktifat</h3>
                <p>For advanced members preparing for Kundalini awakening. Requirements:</p>
                <ol className="req-list">
                  {kundaliniRequirements.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ol>
              </div>
              <div className="split-foot">
                <a
                  className="btn btn-gold"
                  href={waLink("Hello TejaSurya, I would like to ask about Shaktifat.")}
                  {...external}
                >
                  <WhatsAppIcon />
                  Ask about Shaktifat
                </a>
                <p className="fee-note">One-time fee; contact us for the current amount.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Online meditation */}
        <section id="online" className="section section-online" aria-labelledby="online-title">
          <div className="container split">
            <div className="split-media online-media" data-reveal>
              <Image
                src="/images/meditasi-online.webp"
                alt="Illustration of a group meditating together in light"
                width={800}
                height={450}
                loading="lazy"
              />
              <div className="schedule-card">
                <span className="schedule-icon">
                  <CalendarIcon />
                </span>
                <div>
                  <p className="schedule-day">Every Saturday</p>
                  <p className="schedule-time">8.30 until finish</p>
                  <p className="schedule-tag">Universal Meditation</p>
                </div>
              </div>
            </div>
            <div className="split-body" data-reveal>
              <h2 id="online-title">Online Meditation</h2>
              <p className="split-lead">
                Sit together and calm the mind from anywhere, creating space to connect with yourself and with
                others.
              </p>
              <ul className="feature-grid">
                {onlineFeatures.map((f) => {
                  const Icon = featureIcons[f.icon];
                  return (
                    <li key={f.title}>
                      <span className="feature-icon">
                        <Icon />
                      </span>
                      <span>
                        <strong>{f.title}</strong>
                        {f.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="btn-row">
                <a
                  className="btn btn-purple"
                  href={waLink("Online Meditation Registration\nName:\nAddress:\nPhone:")}
                  {...external}
                >
                  <WhatsAppIcon />
                  Register via WhatsApp
                </a>
                <a className="btn btn-outline" href={contact.youtube} {...external}>
                  <YouTubeIcon />
                  YouTube Channel
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="section section-tint" aria-labelledby="products-title">
          <div className="container fill">
            <div className="program-head" data-reveal>
              <h2 id="products-title">TejaSurya Products</h2>
              <ul className="chips" aria-label="Ordering terms">
                <li>Shipping to Bali &amp; Java included</li>
                <li>Bank transfer</li>
                <li>Order via WhatsApp</li>
              </ul>
            </div>
            <ul className="product-grid" data-reveal-group>
              {products.map((p) => (
                <li key={p.name} className="product">
                  <div className="product-media">
                    <Image src={p.image} alt={p.alt} width={440} height={440} loading="lazy" />
                  </div>
                  <div className="product-body">
                    <h3>{p.name}</h3>
                    <p className="product-meta">{p.meta}</p>
                    <p>{p.text}</p>
                    <div className="product-foot">
                      <p className="price">{p.price}</p>
                      <a
                        className="btn btn-purple btn-sm"
                        href={waLink(`Hello TejaSurya, I would like to order the ${p.name}.`)}
                        aria-label={`Order the ${p.name} via WhatsApp`}
                        {...external}
                      >
                        <WhatsAppIcon width="18" height="18" />
                        Order
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section section-dark section-contact" aria-labelledby="contact-title">
          <div className="container split">
            <div className="split-media contact-media" data-reveal>
              <picture>
                <source media="(max-width: 600px)" srcSet="/images/bali-sunset-600.webp" />
                <img
                  src="/images/bali-sunset-992.webp"
                  width="992"
                  height="508"
                  alt="Sunset over a beach in Bali"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="consult-badge">
                <Image
                  src="/images/konsultasi.webp"
                  alt="A TejaSurya guide in white seated in meditation"
                  width={194}
                  height={201}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="split-body" data-reveal>
              <h2 id="contact-title">Spiritual Consultation</h2>
              <p className="script-line">With Wayan Eka</p>
              <address className="contact-cards">
                <div className="contact-card contact-card-wide">
                  <span className="contact-icon">
                    <PinIcon />
                  </span>
                  <span>
                    <span className="contact-label">Address</span>
                    {contact.address[0]}, {contact.address[1]}
                  </span>
                </div>
                <a className="contact-card" href={contact.phoneHref}>
                  <span className="contact-icon">
                    <PhoneIcon />
                  </span>
                  <span>
                    <span className="contact-label">Phone</span>
                    {contact.phoneDisplay}
                  </span>
                </a>
                <a className="contact-card" href={waLink()} {...external}>
                  <span className="contact-icon">
                    <WhatsAppIcon />
                  </span>
                  <span>
                    <span className="contact-label">WhatsApp</span>
                    {contact.phoneDisplay}
                  </span>
                </a>
                <a className="contact-card contact-card-wide" href={`mailto:${contact.email}`}>
                  <span className="contact-icon">
                    <MailIcon />
                  </span>
                  <span>
                    <span className="contact-label">Email</span>
                    {contact.email}
                  </span>
                </a>
                <a className="contact-card" href={contact.facebook} {...external}>
                  <span className="contact-icon">
                    <FacebookIcon />
                  </span>
                  <span>
                    <span className="contact-label">Facebook</span>
                    meditasitejasurya
                  </span>
                </a>
                <a className="contact-card" href={contact.youtube} {...external}>
                  <span className="contact-icon">
                    <YouTubeIcon />
                  </span>
                  <span>
                    <span className="contact-label">YouTube</span>
                    TejaSurya Channel
                  </span>
                </a>
              </address>
              <a className="btn btn-gold" href={waLink("Hello TejaSurya, I would like a consultation.")} {...external}>
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <img src="/images/logo.webp" alt="TejaSurya" width="253" height="73" loading="lazy" className="footer-logo" />
          <nav aria-label="Footer navigation">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <p>© 2006–2026 Yayasan TejaSurya</p>
        </div>
      </footer>
    </>
  );
}

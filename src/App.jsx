import React from 'react'
import './App.css'

const skills = {
  'Programming Languages': ['Java', 'Python', 'SQL'],
  'Frameworks & Libraries': ['Spring Boot', 'Hibernate', 'React.js', 'FastAPI', 'Flask'],
  'Data Science & ML': ['NumPy', 'Pandas', 'scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
  'Databases & Tools': ['MySQL', 'Git', 'GitHub', 'Postman'],
  'Core Concepts': ['DSA', 'OOP', 'REST APIs', 'Data Preprocessing', 'AI / ML'],
}

const projects = [
  {
    title: 'Snap Search',
    subtitle: 'AI Fashion Discovery & Styling Platform',
    date: 'Jun 2026',
    description: 'AI-powered fashion discovery platform for image-based product search and recommendations, with AI-assisted styling and wishlist management.',
    tech: ['React.js', 'FastAPI', 'Firebase', 'Cloudinary', 'Groq AI', 'SerpAPI'],
    github: 'https://github.com/dip-kale/SnapSearch',
    featured: true,
  },
  {
    title: 'Program Outcome Assessment & Mapping System',
    subtitle: 'Academic Outcome Evaluation Platform',
    date: 'Jan 2026',
    description: 'Web platform for CO–PO mapping and academic outcome evaluation. Processes CSV data, automates outcome calculations, validates uploads and generates standardized PDF reports.',
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Git'],
    github: 'https://github.com/dip-kale/Program-Outcome-Assessment-Mapping-System',
    featured: true,
  },
  {
    title: 'Office Track',
    subtitle: 'Employee Management System',
    date: 'Jul 2025',
    description: 'Employee portal with authentication and CRUD operations for employee records, backed by Spring Boot APIs and MySQL with a responsive React interface.',
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Git'],
    github: 'https://github.com/dip-kale/Office_track',
  },
  {
    title: 'Data2Pdf',
    subtitle: 'Data to PDF Reporting Platform',
    date: 'Sep 2025',
    description: 'CSV upload and validation workflow that processes structured data in Spring Boot and generates customized PDF reports through an integrated React frontend.',
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Git'],
    github: 'https://github.com/dip-kale/Data2Pdf',
  },
]

const socials = {
  github: 'https://github.com/dip-kale',
  linkedin: 'https://linkedin.com/in/dip-kale',
  email: 'mailto:dipkale04@gmail.com',
}

function Icon({ name, size = 20 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' }
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    external: <><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"/></>,
    map: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></>,
    graduation: <><path d="m2 10 10-5 10 5-10 5L2 10Z"/><path d="M6 12.5V17c3.2 2.4 8.8 2.4 12 0v-4.5M22 10v6"/></>,
    github: <><path d="M15 22v-4c0-1 .3-1.8 1-2.5 3.3-.4 5-1.7 5-5.5 0-1.1-.4-2.1-1-3 .1-.3.4-1.5-.1-3.1 0 0-.8-.3-3 1.1a10.5 10.5 0 0 0-5.8 0C8.9 3.6 8.1 3.9 8.1 3.9c-.5 1.6-.2 2.8-.1 3.1-.6.9-1 1.9-1 3 0 3.8 1.7 5.1 5 5.5.7.7 1 1.5 1 2.5v4"/><path d="M9 18c-4.5 2-4.5-2-6-2"/></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 11v5M8 8v.01M12 16v-5M12 13c0-1.7 1-2 2-2s2 .7 2 2v3"/></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></>,
    sparkle: <><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></>,
    code: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>,
    layers: <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>,
  }
  return <svg {...common}>{paths[name]}</svg>
}

function Header() {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'nav-wrap scrolled' : 'nav-wrap'}>
      <div className="nav container">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">DK</span>
          <strong>Dip Kale</strong>
        </a>
        <button className="menu-btn" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">
          <Icon name={open ? 'close' : 'menu'} />
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>
          ))}
          <a className="nav-cta" href="/Resume.pdf" download onClick={() => setOpen(false)}>
            Resume <Icon name="download" size={16} />
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" />
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />
      <div className="container hero-content">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> Software Development Intern · Pune, India
          </div>
          <h1>
            Building <em>useful</em><br />
            digital experiences.
          </h1>
          <p className="hero-lead">
            I'm Dip Kale, a software developer focused on Java, Python, full-stack web development and AI/ML-driven applications.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              Explore my work <Icon name="arrow" />
            </a>
            <a className="btn ghost" href="/Resume.pdf" download>
              Download CV <Icon name="download" size={18} />
            </a>
          </div>
          <div className="social-row">
            <a href={socials.github} target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a>
            <a href={socials.email}><Icon name="mail" /> Email</a>
          </div>
        </div>
        <div className="hero-card-wrap">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-card">
            <div className="card-top">
              <span>PORTFOLIO / 2026</span>
              <span>01 — 06</span>
            </div>
            <img src="/photo.png" alt="Dip Kale" />
            <div className="hero-card-caption">
              <span>Dip Kale</span>
              <small>Software Developer</small>
            </div>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-cue">
        Scroll to explore <span>↓</span>
      </a>
    </section>
  )
}

function SectionHeading({ kicker, title, text }) {
  return (
    <div className="section-heading">
      <div>
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
      </div>
      {text && <p>{text}</p>}
    </div>
  )
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeading
          kicker="01 / ABOUT"
          title={<>Curious by nature.<br /><em>Practical by design.</em></>}
          text="A software development intern who enjoys turning ideas into clean, reliable products."
        />
        <div className="about-grid">
          <div className="about-photo">
            <img src="/photo.png" alt="Dip Kale" />
            <div className="photo-label">DIP KALE / PUNE, INDIA</div>
          </div>
          <div className="about-copy">
            <p className="large-copy">
              I build web applications, work with REST APIs and databases, and explore data-driven and AI/ML features.
            </p>
            <p>
              My current focus is writing maintainable software while learning through real-world development. I enjoy moving between frontend interfaces, backend services and the data layer to understand the complete product.
            </p>
            <div className="quick-facts">
              <div><span>Education</span><strong>B.E. — ENTC</strong></div>
              <div><span>CGPA</span><strong>8.38 / 10</strong></div>
              <div><span>Focus</span><strong>Full Stack + AI/ML</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const iconMap = ['code', 'layers', 'sparkle', 'briefcase', 'graduation']
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeading
          kicker="02 / SKILLS"
          title={<>Tools I use to<br /><em>build & solve.</em></>}
          text="A resume-aligned toolkit spanning software development, data and machine learning."
        />
        <div className="skills-grid">
          {Object.entries(skills).map(([group, items], index) => (
            <div className="skill-group" key={group}>
              <div className="skill-header">
                <div className="skill-icon"><Icon name={iconMap[index]} size={22} /></div>
                <div className="skill-index">0{index + 1}</div>
              </div>
              <h3>{group}</h3>
              <div className="skill-tags">
                {items.map(item => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <SectionHeading kicker="03 / EXPERIENCE" title={<>Learning by<br /><em>shipping.</em></>} />
        <div className="timeline">
          <div className="timeline-line" />
          <article className="experience-card">
            <div className="timeline-dot" />
            <div className="experience-meta">
              <span>May 2026 — Present</span>
              <span>Software Development Intern</span>
            </div>
            <div className="experience-main">
              <h3>Softcurious Technologies</h3>
              <p>
                Contribute to real-world web application development using ReactJS, Python and related technologies while supporting full-stack features.
              </p>
              <ul>
                {[
                  'Participate in implementation, testing, debugging and refinement across the software development lifecycle.',
                  'Troubleshoot application issues to improve functionality and user experience.',
                  'Work with Git, MySQL and REST API integration.',
                ].map(x => (
                  <li key={x}><Icon name="check" size={17} />{x}</li>
                ))}
              </ul>
            </div>
            <div className="experience-stack">
              ReactJS · Python · Git · MySQL · REST APIs
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeading
          kicker="04 / SELECTED WORK"
          title={<>Projects that<br /><em>solve problems.</em></>}
          text="A mix of full-stack systems, reporting workflows and AI-powered product discovery."
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.title}>
              <div className="project-number">0{index + 1}</div>
              <div className="project-date">{project.date}</div>
              <div className="project-content">
                <div>
                  <span className="project-type">{project.subtitle}</span>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>
                <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                  View on GitHub <Icon name="arrow" size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <SectionHeading kicker="05 / EDUCATION" title={<>The foundation<br /><em>behind the work.</em></>} />
        <div className="education-grid">
          <div className="education-list">
            <article>
              <span className="edu-year">2022 — 2026</span>
              <div>
                <h3>B.E. Electronics & Telecommunication Engineering</h3>
                <p>Smt. Kashibai Navale College of Engineering, Pune</p>
              </div>
              <strong>8.38 CGPA</strong>
            </article>
            <article>
              <span className="edu-year">2022</span>
              <div>
                <h3>Class XII — HSC</h3>
                <p>Sadashivrao Mane Vidyalaya, Akluj</p>
              </div>
              <strong>68.83%</strong>
            </article>
            <article>
              <span className="edu-year">2020</span>
              <div>
                <h3>Class X — SSC</h3>
                <p>Jijamata English Medium School, Sarati</p>
              </div>
              <strong>92.20%</strong>
            </article>
          </div>
          <div className="cert-card">
            <Icon name="graduation" size={28} />
            <span className="kicker">CERTIFICATIONS</span>
            <h3>Continuous learning,<br />one skill at a time.</h3>
            <ul>
              <li>Java Full Stack Development Certification <small>2025</small></li>
              <li>AI & Machine Learning Certification <small>2026</small></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const phone = '+919545945249'
  const whatsappNumber = '919545945249'
  const whatsappMessage = encodeURIComponent("Hi Dip! I came across your portfolio and would like to connect.")

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-inner">
        <div>
          <span className="kicker">06 / CONTACT</span>
          <h2>Let's build something<br /><em>worth talking about.</em></h2>
          <p>I'm open to software development opportunities, internships and conversations about building useful products.</p>
        </div>
        <div className="contact-actions">
          <a className="contact-email" href={socials.email}>
            dipkale04@gmail.com <Icon name="arrow" />
          </a>

          <div className="contact-details">
            <span><Icon name="map" /> Pune, Maharashtra</span>
          </div>

          <div className="phone-actions">
            <a
              className="phone-btn call-btn"
              href={`tel:${phone}`}
              aria-label="Call Dip Kale"
            >
              <Icon name="phone" size={18} />
              <div className="phone-btn-text">
                <small>Call me</small>
                <strong>+91 95459 45249</strong>
              </div>
            </a>

            <a
              className="phone-btn whatsapp-btn"
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <div className="phone-btn-text">
                <small>WhatsApp</small>
                <strong>Chat with me</strong>
              </div>
            </a>
          </div>

          <div className="contact-socials">
            <a href={socials.github} target="_blank" rel="noreferrer">GitHub <Icon name="external" size={15} /></a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn <Icon name="external" size={15} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.section, .project-card, .experience-card, .skill-group, .education-list article').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer>
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Dip Kale</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
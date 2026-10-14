import { useMemo, useState, type FormEvent } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  MousePointer2,
  Send,
  Sparkles,
  WandSparkles,
  Workflow,
  Wrench,
  Zap,
  
} from 'lucide-react';

import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SectionTitle from './components/SectionTitle';

import {
  availableForWork,
  contact,
  projects,
  skills,
} from './data/portfolio';

import './styles.css';

const services = [
  {
    icon: MonitorSmartphone,
    number: '01',
    title: 'Business websites',
    text: 'A clear, credible online home that helps customers understand your business and take the next step.',
  },
  {
    icon: Layers3,
    number: '02',
    title: 'Portfolio websites',
    text: 'A thoughtful showcase for developers, designers, photographers, filmmakers and other creatives.',
  },
  {
    icon: Zap,
    number: '03',
    title: 'Landing pages',
    text: 'Focused, persuasive pages for a product, campaign or service—with a clear call to action.',
  },
  {
    icon: WandSparkles,
    number: '04',
    title: 'Website redesign',
    text: 'Give an outdated interface a more modern visual system, clearer structure and responsive layout.',
  },
  {
    icon: Code2,
    number: '05',
    title: 'Responsive development',
    text: 'Interfaces designed to feel natural and usable across phones, tablets, laptops and desktops.',
  },
  {
    icon: Wrench,
    number: '06',
    title: 'Website maintenance',
    text: 'Front-end improvements, bug fixes and UI updates to keep your website in good shape.',
  },
];

const process = [
  {
    n: '01',
    title: 'Discovery',
    text: 'Understand your goals, audience and requirements.',
  },
  {
    n: '02',
    title: 'Design & planning',
    text: 'Shape the layout, content structure and user experience.',
  },
  {
    n: '03',
    title: 'Development',
    text: 'Build with React, Tailwind CSS and reusable components.',
  },
  {
    n: '04',
    title: 'Testing & delivery',
    text: 'Check responsiveness, functionality and usability before handover.',
  },
];

const filters = ['All', 'Websites', 'Applications', 'UI Projects'] as const;

function hasUrl(value: string) {
  return /^https?:\/\//i.test(value);
}

export default function App() {
  const [filter, setFilter] =
    useState<(typeof filters)[number]>('All');

  const [form, setForm] = useState({
    name: '',
    email: '',
    type: '',
    budget: '',
    description: '',
  });

  const [notice, setNotice] = useState<{
    kind: 'success' | 'error' | 'info';
    text: string;
  } | null>(null);

  const visibleProjects = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter(
            (project) => project.category === filter
          ),
    [filter]
  );

  async function submitForm(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  setNotice(null);

  if (
    !form.name.trim() ||
    !form.email.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ||
    !form.type ||
    form.description.trim().length < 15
  ) {
    setNotice({
      kind: 'error',
      text: 'Please complete the required fields and use a valid email. Project details should be at least 15 characters.',
    });

    return;
  }

  try {
    const response = await fetch('https://formspree.io/f/xgaonbkn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: form.name.trim(),
        email: form.email.trim(),
        project_type: form.type,
        budget: form.budget || 'Not specified',
        message: form.description.trim(),
      }),
    });

    if (response.ok) {
      setNotice({
        kind: 'success',
        text: 'Thank you for your inquiry! Your message has been submitted successfully.',
      });

      setForm({
        name: '',
        email: '',
        type: '',
        budget: '',
        description: '',
      });
    } else {
      setNotice({
        kind: 'error',
        text: 'Your message could not be sent. Please try again or contact me directly by email.',
      });
    }
  } catch {
    setNotice({
      kind: 'error',
      text: 'Unable to connect right now. Please check your internet connection and try again.',
    });
  }
}
  const socialLinks = [
    {
      label: 'GitHub',
      url: contact.github,
      icon: Github,
    },
    {
      label: 'LinkedIn',
      url: contact.linkedin,
      icon: Linkedin,
    },
    {
      label: 'Email',
      url: contact.email ? `mailto:${contact.email}` : '',
      icon: Mail,
    },
    {
      label: 'WhatsApp',
      url: contact.whatsapp,
      icon: MessageCircle,
    }
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* Hero section */}
        <section className="hero section-dark" id="home">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="availability">
                {availableForWork && (
                  <>
                    <span className="status-dot" />
                    Available for freelance projects
                  </>
                )}
              </div>

              <p className="hero-intro">
                HELLO, I'M AWE DAMILOLA RACHEAL
              </p>

              <h1>
                I build digital experiences that make{' '}
                <span>businesses stand out.</span>
              </h1>

              <p className="hero-description">
                I’m a front-end developer specializing in React and
                Tailwind CSS. I build responsive, user-friendly
                websites that combine clean code with thoughtful
                design.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href="#projects"
                >
                  View my projects <ArrowDown size={16} />
                </a>

                <a
                  className="button button-ghost"
                  href="#contact"
                >
                  Let’s work together <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="hero-footnote">
                <span>BASED IN IBADAN, NIGERIA</span>
                <span className="footnote-line" />
                <span>AVAILABLE WORLDWIDE</span>
              </div>
            </div>

            <div
              className="hero-art"
              aria-label="Decorative code editor and website preview"
            >
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />

              <div className="code-window">
                <div className="window-bar">
                  <span className="window-dots">
                    <i />
                    <i />
                    <i />
                  </span>

                  <span>adr.dev / App.tsx</span>
                  <span>TSX</span>
                </div>

                <div className="code-content">
                  <div className="code-line">
                    <em>01</em>
                    <span>
                      <b>const</b> <strong>developer</strong> = {'{'}
                    </span>
                  </div>

                  <div className="code-line">
                    <em>02</em>
                    <span>
                      &nbsp;&nbsp;name: <i>'Damilola'</i>,
                    </span>
                  </div>

                  <div className="code-line">
                    <em>03</em>
                    <span>
                      &nbsp;&nbsp;stack: [<i>'React'</i>,
                    </span>
                  </div>

                  <div className="code-line">
                    <em>04</em>
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <i>'Tailwind CSS'</i>],
                    </span>
                  </div>

                  <div className="code-line">
                    <em>05</em>
                    <span>
                      &nbsp;&nbsp;focus: <i>'Thoughtful UI'</i>
                    </span>
                  </div>

                  <div className="code-line">
                    <em>06</em>
                    <span>{'}'};</span>
                  </div>

                  <div className="code-line code-spacer">
                    <em>07</em>
                    <span />
                  </div>

                  <div className="code-line">
                    <em>08</em>
                    <span>
                      <b>export default</b>{' '}
                      <strong>function</strong> <i>Build()</i> {'{'}
                    </span>
                  </div>

                  <div className="code-line">
                    <em>09</em>
                    <span>
                      &nbsp;&nbsp;<b>return</b>{' '}
                      <strong>beautifulThings</strong>();
                    </span>
                  </div>

                  <div className="code-line">
                    <em>10</em>
                    <span>{'}'}</span>
                  </div>
                </div>

                <div className="code-status">
                  <span>
                    <span className="status-dot" />
                    All systems go
                  </span>

                  <span>UTF-8&nbsp; · &nbsp;Spaces: 2</span>
                </div>
              </div>

              <div className="floating-chip chip-react">
                <Braces size={17} />
                <span>
                  React
                  <small>Component-driven</small>
                </span>
              </div>

              <div className="floating-chip chip-responsive">
                <MonitorSmartphone size={17} />
                <span>
                  Responsive
                  <small>Every screen</small>
                </span>
              </div>

              <div className="mini-browser">
                <div className="mini-browser-top">
                  <span />
                  <span />
                  <span />
                  <i>your-next-idea.dev</i>
                </div>

                <div className="mini-browser-body">
                  <div className="mini-label">
                    A BETTER DIGITAL PRESENCE
                  </div>

                  <div className="mini-headline">
                    Make your
                    <br />
                    <b>next move.</b>
                  </div>

                  <div className="mini-lines">
                    <i />
                    <i />
                  </div>

                  <div className="mini-cta">
                    Explore the work <ArrowUpRight size={11} />
                  </div>

                  <div className="mini-shape" />
                </div>
              </div>

              <div className="art-caption">
                <span>DESIGN MINDED.</span>
                <span>DEVELOPER BUILT.</span>
              </div>
            </div>
          </div>

          <a href="#about" className="scroll-cue container">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line" />
            <ArrowDown size={14} />
          </a>
        </section>

        {/* Intro strip */}
        <section className="intro-strip">
          <div className="container intro-strip-inner">
            <span>GOOD DESIGN SHOULD FEEL EFFORTLESS.</span>
            <span className="strip-star">✳</span>
            <span>GOOD CODE SHOULD LAST.</span>
            <span className="strip-star">✳</span>
            <span>LET’S BUILD SOMETHING USEFUL.</span>
          </div>
        </section>

        {/* About section */}
        <section className="section section-paper" id="about">
          <div className="container about-grid">
            <div className="about-side">
              <span className="eyebrow">A LITTLE ABOUT ME</span>

              <div className="about-monogram">
                ADR<span className='monogram-dev'> .dev</span>
                <small>DESIGN × DEVELOPMENT</small>
              </div>

              <div className="about-location">
                <span className="status-dot" />
                Ibadan, Nigeria
                <span className="location-separator">/</span>
                Open to remote projects
              </div>
            </div>

            <div className="about-main">
              <SectionTitle
                eyebrow="THE PERSON BEHIND THE PIXELS"
                title="A little about me."
              />

              <p className="about-lead">
                I’m a front-end developer passionate about turning
                ideas into polished, functional websites.
              </p>

              <p>
                I enjoy building clean interfaces, solving development
                problems, and creating responsive experiences that
                work beautifully across devices. My focus is on React,
                Tailwind CSS, reusable components, maintainable code
                and user-friendly design.
              </p>

              <div className="highlight-list">
                <div>
                  <Check size={16} />
                  <span>Focused on responsive design</span>
                </div>

                <div>
                  <Check size={16} />
                  <span>Component-based development</span>
                </div>

                <div>
                  <Check size={16} />
                  <span>Clean, maintainable code</span>
                </div>

                <div>
                  <Check size={16} />
                  <span>Always learning and improving</span>
                </div>
              </div>

              <a className="text-link" href="#contact">
                Tell me about your project <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Skills section */}
        <section className="section section-soft" id="skills">
          <div className="container">
            <SectionTitle
              eyebrow="TOOLS OF THE TRADE"
              title="My toolkit."
              description="The technologies and practices I use to turn a good idea into a useful, polished interface."
            />

            <div className="skills-grid">
              {skills.map((group, index) => (
                <article className="skill-group" key={group.title}>
                  <div className="skill-group-top">
                    <span className="skill-index">
                      0{index + 1}
                    </span>

                    {index === 0 ? (
                      <Code2 />
                    ) : index === 1 ? (
                      <Workflow />
                    ) : (
                      <MousePointer2 />
                    )}
                  </div>

                  <h3>{group.title}</h3>

                  <div className="skill-pills">
                    {group.items.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="skills-note">
              <Sparkles size={17} />
              <p>
                My toolkit keeps evolving. I care just as much about
                choosing the right approach as I do about learning
                the next tool.
              </p>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section
          className="section section-dark projects-section"
          id="projects"
        >
          <div className="container">
            <div className="projects-header">
              <SectionTitle
                eyebrow="SELECTED WORK & PRACTICE"
                title="Built with purpose."
                description="A selection of projects that reflect how I approach interface design, functionality and responsive development."
                light
              />

              <a
                className="text-link text-link-light"
                href="#contact"
              >
                Have something in mind? <ArrowUpRight size={16} />
              </a>
            </div>

            <div
              className="project-filter"
              role="group"
              aria-label="Filter projects"
            >
              {filters.map((item) => (
                <button
                  key={item}
                  className={
                    filter === item ? 'filter-active' : ''
                  }
                  onClick={() => setFilter(item)}
                  aria-pressed={filter === item}
                >
                  {item}

                  <span>
                    {item === 'All'
                      ? projects.length
                      : projects.filter(
                          (project) => project.category === item
                        ).length}
                  </span>
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {visibleProjects.map((project) => (
                <ProjectCard
                  key={project.number}
                  project={project}
                />
              ))}
            </div>

          </div>
        </section>

        {/* Services section */}
        <section className="section section-paper" id="services">
          <div className="container">
            <SectionTitle
              eyebrow="WAYS WE CAN WORK TOGETHER"
              title="How I can help."
              description="From a first idea to a much-needed refresh, I can help make your online presence feel considered and work smoothly."
            />

            <div className="services-grid">
              {services.map(
                ({ icon: Icon, number, title, text }) => (
                  <article className="service-item" key={number}>
                    <div className="service-top">
                      <span>{number}</span>
                      <Icon size={22} strokeWidth={1.6} />
                    </div>

                    <h3>{title}</h3>
                    <p>{text}</p>

                    <a href="#contact">
                      Discuss your project{' '}
                      <ArrowUpRight size={15} />
                    </a>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* Process section */}
        <section className="section process-section">
          <div className="container process-layout">
            <div className="process-intro">
              <SectionTitle
                eyebrow="A CLEAR, COLLABORATIVE WORKFLOW"
                title="From first idea to finished interface."
                description="A practical process, with communication at every stage—so the result works for you and the people using it."
              />

              <div className="process-mark">
                <span>IDEA</span>
                <ArrowRight />
                <span>INTERFACE</span>
                <ArrowRight />
                <span>IMPACT</span>
              </div>
            </div>

            <div className="process-list">
              {process.map((item) => (
                <article className="process-row" key={item.n}>
                  <span className="process-number">{item.n}</span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                  <ArrowUpRight
                    className="process-arrow"
                    size={18}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section
          className="contact-section section-dark"
          id="contact"
        >
          <div className="container contact-layout">
            <div className="contact-copy">
              <SectionTitle
                eyebrow="LET’S MAKE IT REAL"
                title="Have a project in mind?"
                description="Let’s discuss how I can help bring your idea to life."
                light
              />

              <div className="contact-details">
                <span className="contact-label">
                  THE BEST WAY TO START
                </span>

                <p>
                  Tell me a little about what you’re building, what
                  you need help with, and where you want to take it.
                </p>

                <div className="contact-shortcuts">
                  {socialLinks.map(({ label, url, icon: Icon }) => {
                    const valid =
                      (label === 'Email' &&
                        contact.email.includes('@')) ||
                      (label !== 'Email' && hasUrl(url));

                    if (!valid) {
                      return (
                        <span
                          key={label}
                          className="contact-unset"
                          title={`Configure ${label} in src/data/portfolio.ts`}
                        >
                          <Icon size={16} />
                          {label} · add link
                        </span>
                      );
                    }

                    return (
                      <a
                        key={label}
                        href={
                          label === 'Email'
                            ? `mailto:${contact.email}`
                            : url
                        }
                        target={
                          label === 'Email' ? undefined : '_blank'
                        }
                        rel="noreferrer"
                      >
                        <Icon size={16} />
                        {label}
                        <ArrowUpRight size={13} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="contact-form-wrap">
              <div className="form-heading">
                <span>PROJECT INQUIRY</span>
              </div>

              <form onSubmit={submitForm} noValidate>
                <div className="form-row">
                  <label>
                    Full name

                    <input
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value,
                        })
                      }
                      autoComplete="name"
                      placeholder="Your name"
                      required
                    />
                  </label>

                  <label>
                    Email address

                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email: e.target.value,
                        })
                      }
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    Project type

                    <select
                      value={form.type}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          type: e.target.value,
                        })
                      }
                      required
                    >
                      <option value="">Choose a project</option>
                      <option>Business website</option>
                      <option>Portfolio website</option>
                      <option>Landing page</option>
                      <option>Website redesign</option>
                      <option>Responsive web development</option>
                      <option>Website maintenance</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label>
                    Estimated budget{' '}
                    <span className="optional">OPTIONAL</span>

                    <select
                      value={form.budget}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          budget: e.target.value,
                        })
                      }
                    >
                      <option value="">Prefer to discuss</option>
                      <option>Under ₦100,000</option>
                      <option>₦100,000–₦250,000</option>
                      <option>₦250,000–₦500,000</option>
                      <option>₦500,000+</option>
                      <option>International / USD budget</option>
                    </select>
                  </label>
                </div>

                <label>
                  Tell me about your project

                  <textarea
                    value={form.description}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        description: e.target.value,
                      })
                    }
                    placeholder="What are you hoping to build? Share any goals, ideas or timelines..."
                    rows={4}
                    required
                    minLength={15}
                  />
                </label>

                {notice && (
                  <div
                    className={`form-notice notice-${notice.kind}`}
                    role="status"
                  >
                    {notice.text}
                  </div>
                )}

                <button
                  className="button button-primary form-submit"
                  type="submit"
                >
                  Send message <Send size={16} />
                </button>

              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <a className="brand" href="#home">
                ADR<span className="brand-dot">.</span><span className="brand-dev">dev</span>
              </a>

              <p>
                Building thoughtful digital experiences,
                <br />
                one interface at a time.
              </p>
            </div>

            <div className="footer-nav">
              <span className="footer-label">EXPLORE</span>

              <div>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
              </div>
            </div>

            <div className="footer-social">
              <span className="footer-label">SAY HELLO</span>

              <div>
                {socialLinks.map(({ label, url, icon: Icon }) => {
                  const valid =
                    label === 'Email'
                      ? contact.email.includes('@')
                      : hasUrl(url);

                  return valid ? (
                    <a
                      key={label}
                      href={
                        label === 'Email'
                          ? `mailto:${contact.email}`
                          : url
                      }
                      target={
                        label === 'Email' ? undefined : '_blank'
                      }
                      rel="noreferrer"
                      aria-label={label}
                    >
                      <Icon size={17} />
                    </a>
                  ) : (
                    <span
                      key={label}
                      title={`Configure ${label} in src/data/portfolio.ts`}
                    >
                      <Icon size={17} />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} ADR.dev · Awe Damilola
              Racheal
            </span>

            <a href="#home">Back to top ↑</a>

            <span>
              DESIGNED WITH INTENTION. BUILT WITH CODE.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
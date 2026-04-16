import React, { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

const content = {
  en: {
    orgName: "Kshatriya Freedom Fighters & Human Rights Association",
    tagline: "Honoring the Legacy of Valor, Protecting the Rights of Humanity",
    nav: {
      home: "Home",
      about: "About Us",
      mission: "Our Mission",
      vision: "Our Vision",
      services: "Services",
      contact: "Contact Us",
      privacy: "Privacy Policy",
      gallery: "Gallery",
      faq: "FAQs"
    },
    hero: {
      title: "Protecting Fundamental Human Rights",
      subtitle: "Join us in our journey towards a society where every individual's dignity is preserved and protected.",
      cta: "Learn More"
    },
    news: "Latest News: New awareness program launched for rural areas. | Volunteer applications are open for 2026. | Join us for the Global Rights Summit next month.",
    about: {
      title: "About Our Association",
      description: "The Kshatriya Freedom Fighters & Human Rights Association is dedicated to honoring the heroic legacy of Kshatriya warriors who fought for India's independence while simultaneously advocating for the fundamental rights of all citizens today. We bridge the gap between historical valor and modern justice.",
      background: "Our association was formed to bring together the descendants and admirers of great Kshatriya freedom fighters like Babu Kunwar Singh, Ram Prasad Bismil, and countless others who sacrificed their lives for the motherland. We aim to carry forward their torch of liberty by protecting human rights in the contemporary world."
    },
    mission: {
      title: "Our Mission",
      statement: "To empower individuals and communities to claim their rights and advocate for systemic change through education, legal support, and global solidarity.",
      objectives: [
        "Provide legal aid to victims of human rights violations.",
        "Organize educational workshops on constitutional rights.",
        "Advocate for policy changes at local and national levels.",
        "Create a support network for human rights defenders."
      ]
    },
    vision: {
      title: "Our Vision",
      statement: "A society where the spirit of 'Kshatriya Dharma' (righteous duty) inspires everyone to stand up against injustice and where every individual's rights are naturally respected.",
      impact: "We envision a future where the courage of our ancestors serves as a foundation for a modern, just, and equitable society."
    },
    services: {
      title: "Our Programs & Services",
      list: [
        { title: "Legal Advocacy", desc: "Expert legal assistance for those whose rights have been compromised." },
        { title: "Right to Education", desc: "Ensuring every child has access to quality education without discrimination." },
        { title: "Women's Empowerment", desc: "Programs focusing on the social, economic, and legal rights of women." },
        { title: "Environmental Justice", desc: "Fighting for the right to a clean and safe environment for all communities." }
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "We are here to help and listen to your concerns.",
      form: {
        name: "Full Name",
        email: "Email Address",
        message: "Your Message",
        submit: "Send Message"
      },
      info: {
        address: "123, Liberty Tower, MG Road, New Delhi, India",
        phone: "+91 11 2345 6789",
        email: "info@hra-bharat.org"
      }
    },
    footer: {
      about: "Honoring our heroes, protecting our future. Dedicated to Kshatriya legacy and universal rights.",
      quickLinks: "Quick Links",
      reachUs: "Reach Us",
      copyright: "© 2026 Kshatriya Freedom Fighters & Human Rights Association. All Rights Reserved."
    }
  },
  hi: {
    orgName: "क्षत्रिय स्वतंत्रता सेनानी एवं मानवाधिकार एसोसिएशन",
    tagline: "वीरता की विरासत का सम्मान, मानवता के अधिकारों की रक्षा",
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      mission: "हमारा लक्ष्य",
      vision: "हमारा दृष्टिकोण",
      services: "सेवाएं",
      contact: "संपर्क करें",
      privacy: "गोपनीयता नीति",
      gallery: "गैलरी",
      faq: "एफएक्यू"
    },
    hero: {
      title: "मौलिक मानवाधिकारों की रक्षा",
      subtitle: "एक ऐसे समाज की ओर हमारी यात्रा में शामिल हों जहाँ प्रत्येक व्यक्ति की गरिमा सुरक्षित और संरक्षित हो।",
      cta: "अधिक जानें"
    },
    news: "ताज़ा समाचार: ग्रामीण क्षेत्रों के लिए नया जागरूकता कार्यक्रम शुरू। | 2026 के लिए स्वयंसेवक आवेदन खुले हैं। | अगले महीने ग्लोबल राइट्स समिट में हमारे साथ जुड़ें।",
    about: {
      title: "हमारे एसोसिएशन के बारे में",
      description: "क्षत्रिय स्वतंत्रता सेनानी एवं मानवाधिकार एसोसिएशन उन क्षत्रिय नायकों की वीरतापूर्ण विरासत को सम्मानित करने के लिए समर्पित है जिन्होंने भारत की स्वतंत्रता के लिए लड़ाई लड़ी, साथ ही आज सभी नागरिकों के मौलिक अधिकारों की वकालत करते हैं। हम ऐतिहासिक वीरता और आधुनिक न्याय के बीच की खाई को पाटते हैं।",
      background: "हमारा एसोसिएशन बाबू कुंवर सिंह, राम प्रसाद बिस्मिल और मातृभूमि के लिए अपने प्राणों की आहुति देने वाले अनगिनत अन्य महान क्षत्रिय स्वतंत्रता सेनानियों के वंशजों और प्रशंसकों को एक साथ लाने के लिए बनाया गया था। हमारा लक्ष्य समकालीन दुनिया में मानवाधिकारों की रक्षा करके उनकी स्वतंत्रता की मशाल को आगे ले जाना है।"
    },
    mission: {
      title: "हमारा लक्ष्य",
      statement: "शिक्षा, कानूनी सहायता और वैश्विक एकजुटता के माध्यम से व्यक्तियों और समुदायों को उनके अधिकारों का दावा करने और प्रणालीगत परिवर्तन की वकालत करने के लिए सशक्त बनाना।",
      objectives: [
        "मानवाधिकार उल्लंघन के पीड़ितों को कानूनी सहायता प्रदान करना।",
        "संवैधानिक अधिकारों पर शैक्षिक कार्यशालाएं आयोजित करना।",
        "स्थानीय और राष्ट्रीय स्तर पर नीति परिवर्तन की वकालत करना।",
        "मानवाधिकार रक्षकों के लिए एक सहायता नेटवर्क बनाना।"
      ]
    },
    vision: {
      title: "हमारा दृष्टिकोण",
      statement: "एक ऐसा समाज जहाँ 'क्षत्रिय धर्म' (धर्मी कर्तव्य) की भावना सभी को अन्याय के विरुद्ध खड़े होने के लिए प्रेरित करती है और जहाँ प्रत्येक व्यक्ति के अधिकारों का स्वाभाविक रूप से सम्मान किया जाता है।",
      impact: "हम एक ऐसे भविष्य की कल्पना करते हैं जहाँ हमारे पूर्वजों का साहस एक आधुनिक, न्यायपूर्ण और न्यायसंगत समाज के लिए आधार के रूप में कार्य करे।"
    },
    services: {
      title: "हमारे कार्यक्रम और सेवाएं",
      list: [
        { title: "कानूनी वकालत", desc: "उन लोगों के लिए विशेषज्ञ कानूनी सहायता जिनके अधिकारों से समझौता किया गया है।" },
        { title: "शिक्षा का अधिकार", desc: "यह सुनिश्चित करना कि प्रत्येक बच्चे की बिना किसी भेदभाव के गुणवत्तापूर्ण शिक्षा तक पहुँच हो।" },
        { title: "महिला सशक्तिकरण", desc: "महिलाओं के सामाजिक, आर्थिक और कानूनी अधिकारों पर केंद्रित कार्यक्रम।" },
        { title: "पर्यावरण न्याय", desc: "सभी समुदायों के लिए स्वच्छ और सुरक्षित वातावरण के अधिकार के लिए लड़ना।" }
      ]
    },
    contact: {
      title: "संपर्क करें",
      subtitle: "हम आपकी मदद करने और आपकी चिंताओं को सुनने के लिए यहाँ हैं।",
      form: {
        name: "पूरा नाम",
        email: "ईमेल पता",
        message: "आपका संदेश",
        submit: "संदेश भेजें"
      },
      info: {
        address: "123, लिबर्टी टावर, एमजी रोड, नई दिल्ली, भारत",
        phone: "+91 11 2345 6789",
        email: "info@hra-bharat.org"
      }
    },
    footer: {
      about: "अपने नायकों का सम्मान, अपने भविष्य की रक्षा। क्षत्रिय विरासत और सार्वभौमिक अधिकारों के लिए समर्पित।",
      quickLinks: "त्वरित लिंक",
      reachUs: "हम तक पहुँचें",
      copyright: "© 2026 क्षत्रिय स्वतंत्रता सेनानी एवं मानवाधिकार एसोसिएशन। सर्वाधिकार सुरक्षित।"
    }
  }
}

function App() {
  const [lang, setLang] = useState('hi') // Default to Hindi as per request style
  const [page, setPage] = useState('home')
  const t = content[lang]

  const NavItem = ({ id, label }) => (
    <span 
      className={`nav-item ${page === id ? 'active' : ''}`} 
      onClick={() => { setPage(id); window.scrollTo(0,0); }}
    >
      {label}
    </span>
  )

  const renderPage = () => {
    switch(page) {
      case 'home':
        return (
          <div className="animate-slide">
            <section className="hero-slider">
              <div className="container hero-text">
                <span className="hindi-text" style={{ fontSize: '1.2rem', color: 'var(--primary-saffron)' }}>
                  {content.hi.hero.title}
                </span>
                <h2>{t.hero.title}</h2>
                <p>{t.hero.subtitle}</p>
                <button className="btn btn-saffron" onClick={() => setPage('about')}>{t.hero.cta}</button>
              </div>
            </section>
            
            <section className="section-padding">
              <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <h3 className="hindi-text">{content.hi.about.title}</h3>
                  <h2>{t.about.title}</h2>
                </div>
                <div className="contact-container">
                  <div className="card">
                    <p>{t.about.description}</p>
                  </div>
                  <div className="card" style={{ background: 'var(--primary-blue)', color: 'white' }}>
                    <h3 style={{ color: 'var(--primary-saffron)' }}>{t.mission.title}</h3>
                    <p>{t.mission.statement}</p>
                    <button className="btn btn-saffron" style={{ marginTop: '1.5rem' }} onClick={() => setPage('mission')}>{t.hero.cta}</button>
                  </div>
                </div>
              </div>
            </section>

            <section className="section-padding bg-gray">
              <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>{t.services.title}</h2>
                <div className="footer-grid">
                  {t.services.list.map((s, i) => (
                    <div className="card" key={i}>
                      <h4 style={{ color: 'var(--primary-blue)' }}>{s.title}</h4>
                      <p style={{ fontSize: '0.9rem' }}>{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )
      case 'about':
        return (
          <div className="container section-padding animate-slide">
             <h3 className="hindi-text" style={{ color: 'var(--primary-saffron)' }}>{content.hi.about.title}</h3>
             <h1>{t.about.title}</h1>
             <div className="card" style={{ marginTop: '2rem' }}>
               <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>{t.about.description}</p>
               <p>{t.about.background}</p>
             </div>
          </div>
        )
      case 'mission':
        return (
          <div className="container section-padding animate-slide">
             <h3 className="hindi-text" style={{ color: 'var(--primary-saffron)' }}>{content.hi.mission.title}</h3>
             <h1>{t.mission.title}</h1>
             <div className="card" style={{ marginTop: '2rem' }}>
               <p style={{ fontSize: '1.2rem', marginBottom: '2rem', fontStyle: 'italic' }}>"{t.mission.statement}"</p>
               <h3>Objectives:</h3>
               <ul style={{ marginTop: '1rem' }}>
                 {t.mission.objectives.map((obj, i) => (
                   <li key={i} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                     <span style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>✓</span> {obj}
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        )
      case 'vision':
        return (
          <div className="container section-padding animate-slide">
             <h3 className="hindi-text" style={{ color: 'var(--primary-saffron)' }}>{content.hi.vision.title}</h3>
             <h1>{t.vision.title}</h1>
             <div className="card" style={{ marginTop: '2rem', borderLeft: '5px solid var(--primary-saffron)' }}>
               <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>{t.vision.statement}</p>
               <h3 style={{ borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>Future Impact:</h3>
               <p>{t.vision.impact}</p>
             </div>
          </div>
        )
      case 'services':
        return (
          <div className="container section-padding animate-slide">
            <h1>{t.services.title}</h1>
            <div className="footer-grid" style={{ marginTop: '3rem' }}>
              {t.services.list.map((s, i) => (
                <div className="card" key={i}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏛️</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )
      case 'contact':
        return (
          <div className="container section-padding animate-slide">
            <h1>{t.contact.title}</h1>
            <p style={{ marginBottom: '3rem' }}>{t.contact.subtitle}</p>
            <div className="contact-container">
              <div className="card">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label>{t.contact.form.name}</label>
                    <input type="text" placeholder={t.contact.form.name} />
                  </div>
                  <div className="form-group">
                    <label>{t.contact.form.email}</label>
                    <input type="email" placeholder={t.contact.form.email} />
                  </div>
                  <div className="form-group">
                    <label>{t.contact.form.message}</label>
                    <textarea rows="5" placeholder={t.contact.form.message}></textarea>
                  </div>
                  <button className="btn btn-blue">{t.contact.form.submit}</button>
                </form>
              </div>
              <div className="card" style={{ background: 'var(--bg-light)' }}>
                <h3>Reach Us</h3>
                <div style={{ marginTop: '2rem' }}>
                  <p><strong>Address:</strong><br/>{t.contact.info.address}</p><br/>
                  <p><strong>Phone:</strong><br/>{t.contact.info.phone}</p><br/>
                  <p><strong>Email:</strong><br/>{t.contact.info.email}</p>
                </div>
              </div>
            </div>
          </div>
        )
      case 'privacy':
        return (
          <div className="container section-padding animate-slide">
            <h1>{t.nav.privacy}</h1>
            <div className="card" style={{ marginTop: '2rem' }}>
              <p>Your privacy is important to us. This privacy policy document outlines the types of personal information that is received and collected by the Human Rights Association and how it is used.</p>
              <h3 style={{ marginTop: '2rem' }}>Information Collection</h3>
              <p>We may collect information you provide directly to us through forms, such as your name and email address, only to respond to your inquiries.</p>
              <h3 style={{ marginTop: '2rem' }}>Data Security</h3>
              <p>We implement a variety of security measures to maintain the safety of your personal information.</p>
            </div>
          </div>
        )
      case 'gallery':
        return (
          <div className="container section-padding animate-slide">
            <h1>{t.nav.gallery}</h1>
            <div className="footer-grid" style={{ marginTop: '2rem' }}>
              {[1,2,3,4,5,6].map(i => (
                <div className="card" key={i} style={{ padding: 0, overflow: 'hidden', height: '200px' }}>
                  <img src={`https://images.unsplash.com/photo-${1512 * i + 123456}?auto=format&fit=crop&q=80&w=400`} alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        )
      case 'faq':
        return (
          <div className="container section-padding animate-slide">
            <h1>{t.nav.faq}</h1>
            <div style={{ marginTop: '2rem' }}>
              {[1,2,3].map(i => (
                <div className="card" key={i} style={{ marginBottom: '1rem' }}>
                  <h4 style={{ color: 'var(--primary-saffron)' }}>Question {i}: How can I volunteer?</h4>
                  <p>To volunteer, please visit our contact page and send us a message with your background and area of interest.</p>
                </div>
              ))}
            </div>
          </div>
        )
      default:
        return <div>Page not found</div>
    }
  }

  return (
    <div className="app-root">
      <div className="top-bar">
        <div className="container top-bar-content">
          <div>📞 {t.contact.info.phone} | ✉️ {t.contact.info.email}</div>
          <button className="lang-toggle" onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}>
            {lang === 'en' ? 'हिंदी में बदलें' : 'SWITCH TO ENGLISH'}
          </button>
        </div>
      </div>

      <header className="main-header">
        <div className="container header-inner">
          <div className="logo" style={{ background: 'none' }}>
             <img src={logo} alt="KFF & HRA Logo" style={{ height: '100px', width: 'auto', borderRadius: '50%' }} />
          </div>
          <div className="org-names">
            <h1 className="hindi-text" style={{ color: 'var(--primary-saffron)', fontSize: '1.4rem' }}>{content.hi.orgName}</h1>
            <h1>{t.orgName}</h1>
            <p style={{ color: 'var(--text-muted)' }}>{t.tagline}</p>
          </div>
          <button className="btn btn-saffron" onClick={() => setPage('contact')}>{t.nav.contact}</button>
        </div>
      </header>

      <nav className="nav-bar">
        <div className="container nav-links">
          <NavItem id="home" label={t.nav.home} />
          <NavItem id="about" label={t.nav.about} />
          <NavItem id="mission" label={t.nav.mission} />
          <NavItem id="vision" label={t.nav.vision} />
          <NavItem id="services" label={t.nav.services} />
          <NavItem id="gallery" label={t.nav.gallery} />
          <NavItem id="faq" label={t.nav.faq} />
          <NavItem id="contact" label={t.nav.contact} />
        </div>
      </nav>

      <div className="news-marquee">
        <div className="marquee-text">
          {t.news}
        </div>
      </div>

      <main>
        {renderPage()}
      </main>

      <footer className="main-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>{t.nav.about}</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>{t.footer.about}</p>
            </div>
            <div className="footer-col">
              <h3>{t.footer.quickLinks}</h3>
              <ul className="footer-links">
                <li><a onClick={() => setPage('home')}>{t.nav.home}</a></li>
                <li><a onClick={() => setPage('about')}>{t.nav.about}</a></li>
                <li><a onClick={() => setPage('privacy')}>{t.nav.privacy}</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>{t.footer.reachUs}</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                {t.contact.info.address}<br/><br/>
                Phone: {t.contact.info.phone}<br/>
                Email: {t.contact.info.email}
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

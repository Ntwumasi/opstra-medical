'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="logo-text">OPSTRA</div>
              <div className="logo-subtext">MEDICAL GROUP</div>
            </div>
            <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
              <ul className="nav-list">
                <li><Link href="#about">About Us</Link></li>
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#patients">For Patients</Link></li>
                <li><Link href="#contact">Contact</Link></li>
                <li><a href="https://wa.me/5555555555" className="btn-nav">Book Appointment</a></li>
              </ul>
            </nav>
            <button
              className="mobile-menu-toggle"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-shape"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Personalized,<br/>High-Quality Care for<br/>You and Your Family</h1>
              <p>At Opstra Medical Group, our team of skilled physicians and nurses work together to support your health at every stage of life. We offer modern, patient-centered healthcare in Ghana—focused on prevention, treatment, and compassionate care in a welcoming, tech-enabled environment.</p>
              <a href="https://wa.me/5555555555" className="btn btn-primary">Book an Appointment</a>
            </div>
            <div className="hero-image">
              <img src="/doctor-hero.jpg" alt="Professional healthcare provider" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-layout">
            <div className="about-image">
              <img src="/team-doctors.jpg" alt="Medical team" />
            </div>
            <div className="about-content">
              <h2>Who We Are</h2>
              <p className="about-intro">At Opstra Medical Group, we believe that everyone deserves access to compassionate, high-quality healthcare. Based in Accra, we provide evidence-based medical care that is personalized, affordable, and delivered with the patient's needs in mind.</p>

              <div className="about-features">
                {['Excellence', 'Compassion', 'Innovation', 'Integrity'].map((value, index) => (
                  <div className="feature-item" key={index}>
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div className="feature-text">
                      <h4>{value}</h4>
                      <p>We {value === 'Excellence' ? 'uphold the highest standards of care' : value === 'Compassion' ? 'care deeply about the people we serve' : value === 'Innovation' ? 'use modern technology to improve outcomes' : 'act with transparency and honesty'}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href="#services" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Healthcare Services</h2>
          </div>

          <div className="services-grid">
            {[
              { title: 'General Practice', desc: 'Primary medical care for people of all ages, from everyday illnesses to chronic condition management.', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' },
              { title: 'Preventive Health', desc: 'Stay ahead of illness with proactive screenings, lifestyle advice, and health education.', icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
              { title: 'Specialist Services', desc: 'Expert care from trusted specialists including Urology, ENT, Surgery, Internal Medicine, and more.', icon: 'M9 11l3 3L22 4', dark: true },
              { title: 'Cardiology', desc: 'Expert heart health care including ECG, echocardiogram, hypertension and cholesterol management.', icon: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' },
              { title: 'Women\'s Health', desc: 'Comprehensive gynecological care from adolescence through menopause with expert support.', icon: 'M9 21 M20 21' },
              { title: 'Mental Health', desc: 'Compassionate, discreet mental health support in a judgment-free space for all ages.', icon: 'M12 12' },
            ].map((service, index) => (
              <div className={`service-card ${service.dark ? 'service-card-dark' : ''}`} key={index}>
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={service.icon}></path>
                  </svg>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="appointment-section">
        <div className="container">
          <div className="appointment-layout">
            <div className="appointment-content">
              <h2>How to Book An Appointment</h2>
              <p className="lead-text">Getting the care you need is simple and convenient at Opstra Medical Group.</p>

              <ul className="appointment-list">
                <li><span className="list-number">01</span><span className="list-text">Call us directly at 5555555555</span></li>
                <li><span className="list-number">02</span><span className="list-text">Send us a message on WhatsApp</span></li>
                <li><span className="list-number">03</span><span className="list-text">Fill out our online booking form</span></li>
                <li><span className="list-number">04</span><span className="list-text">Walk into our clinic - we welcome walk-ins</span></li>
              </ul>

              <a href="https://wa.me/5555555555" className="btn btn-primary">Book Now</a>
            </div>
            <div className="appointment-image">
              <img src="/patient-smiling.jpg" alt="Happy patient" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?<br/>Book With Our Form</h2>
            <p>Schedule your appointment today and experience quality healthcare that puts you first.</p>

            <div className="cta-form">
              <div className="form-row">
                <input type="text" placeholder="Your Name" className="form-input" />
                <input type="email" placeholder="Email Address" className="form-input" />
              </div>
              <div className="form-row">
                <input type="tel" placeholder="Phone Number" className="form-input" />
                <select className="form-input">
                  <option>Select Service</option>
                  <option>General Practice</option>
                  <option>Preventive Health</option>
                  <option>Specialist Services</option>
                  <option>Cardiology</option>
                  <option>Women&apos;s Health</option>
                  <option>Mental Health</option>
                </select>
              </div>
              <button type="submit" className="btn btn-submit">Submit Request</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-content">
            <div className="quote-icon">&quot;</div>
            <blockquote>
              <p>The care and attention I received at Opstra Medical Group was exceptional. The doctors took time to understand my concerns and provided comprehensive treatment. I highly recommend them to anyone seeking quality healthcare in Accra.</p>
              <cite>— Patient Testimonial</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* For Patients Section */}
      <section id="patients" className="for-patients">
        <div className="container">
          <div className="section-header">
            <h2>For Patients</h2>
          </div>

          <div className="patients-grid">
            {[
              { title: 'Insurance & Payment', desc: 'We accept major private insurance schemes and serve corporate partners.', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
              { title: 'Patient Forms', desc: 'Download and complete forms before your visit to save time.', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' },
              { title: 'What to Expect', desc: 'Friendly staff, minimal wait times, and thorough consultations.', icon: 'M12 12' },
            ].map((item, index) => (
              <div className="patient-card" key={index}>
                <div className="patient-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={item.icon}></path>
                  </svg>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href="#" className="link-arrow">Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <h2>We&apos;re Here To Help You</h2>
              <p>Get in touch with us today. We&apos;re ready to assist you with your healthcare needs.</p>

              <div className="contact-details">
                {[
                  { title: 'Location', text: 'Asylum Down, Accra', icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' },
                  { title: 'Phone & WhatsApp', text: '5555555555', icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' },
                  { title: 'Email', text: 'info@opstramedical.com', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' },
                  { title: 'Hours', text: 'Mon–Fri: 8:00 AM – 8:00 PM\nSat: 9:00 AM – 5:00 PM', icon: 'M12 12' },
                ].map((item, index) => (
                  <div className="contact-item" key={index}>
                    <div className="contact-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d={item.icon}></path>
                      </svg>
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      <p style={{ whiteSpace: 'pre-line' }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-actions">
              <a href="https://wa.me/5555555555" className="btn btn-primary btn-large">Book Appointment</a>
              <a href="#" className="btn btn-secondary btn-large">Get Directions</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="logo">
                <div className="logo-text">OPSTRA</div>
                <div className="logo-subtext">MEDICAL GROUP</div>
              </div>
              <p>Personalized, High-Quality Care for You and Your Family</p>
              <div className="social-links">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a href="#" aria-label={social} key={social}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="#about">About Us</Link></li>
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#patients">For Patients</Link></li>
                <li><Link href="#contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#">General Practice</a></li>
                <li><a href="#">Preventive Health</a></li>
                <li><a href="#">Specialist Services</a></li>
                <li><a href="#">Cardiology</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <ul>
                <li>Asylum Down, Accra</li>
                <li>Tel: 5555555555</li>
                <li>info@opstramedical.com</li>
                <li>Mon–Fri: 8AM – 8PM</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Opstra Medical Group. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

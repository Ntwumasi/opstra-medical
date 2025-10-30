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
      <section className="hero" style={{backgroundImage: 'url(/doctor-hero.jpg)'}}>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text-card">
              <h1>Personalized,<br/>High-Quality Care for<br/>You and Your Family</h1>
              <p>At Opstra Medical Group, our team of skilled physicians and nurses work together to support your health at every stage of life. We offer modern, patient-centered healthcare in Ghana—focused on prevention, treatment, and compassionate care in a welcoming, tech-enabled environment.</p>
              <a href="https://wa.me/5555555555" className="btn btn-primary">Book an Appointment</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-layout">
            <div className="about-images">
              <img src="/doctor-hero.jpg" alt="Doctor" className="about-image-large" />
              {/* <img src="/team-doctors.jpg" alt="Medical Team" className="about-image-overlay" /> */}
            </div>

            <div className="about-content">
              <h3 className="section-label">About Us</h3>
              <h2>Who We Are</h2>
              <p className="about-description">At Opstra Medical Group, we believe that everyone deserves access to compassionate, high-quality healthcare. Based in Accra, Ghana, we are committed to providing personalized, evidence-based medical services that are affordable and focused on the unique needs of each patient.</p>

              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="about-feature-text">
                    <h4>Quality of Care Services</h4>
                    <p>Delivering personalized, patient-centered healthcare you can trust.</p>
                  </div>
                </div>

                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="about-feature-text">
                    <h4>Standards of Treatment</h4>
                    <p>Evidence-based, world-class medical care for every patient.</p>
                  </div>
                </div>

                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  </div>
                  <div className="about-feature-text">
                    <h4>Infection Prevention</h4>
                    <p>Prioritizing your safety with strict hygiene and control measures</p>
                  </div>
                </div>

                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div className="about-feature-text">
                    <h4>24/7 Working Time</h4>
                    <p>Reliable, round-the-clock care — whenever you need us</p>
                  </div>
                </div>
              </div>

              <div className="about-highlights">
                <p><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> 24 Hours Emergency Assistance Call Us</p>
                <p><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> We are committed to providing healthcare service</p>
                <p><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Really know the true needs and expectations of patients</p>
              </div>

              <a href="#contact" className="btn btn-cyan">More About Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="services-header">
            <h3 className="section-label-center">Healthcare Services</h3>
            <h2 className="services-title">Our Healthcare Service</h2>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3>General Practice</h3>
              <p>Comprehensive primary care for all ages. We diagnose, treat, and manage chronic conditions, vaccinations, and preventive health.</p>
              <a href="#" className="service-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Preventive Health & Wellness</h3>
              <p>Regular health screenings, lifestyle counseling, and early detection services to keep you healthy.</p>
              <a href="#" className="service-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Specialist Services</h3>
              <p>Access to specialists for consultations, diagnostics, and targeted treatments tailored to your needs.</p>
              <a href="#" className="service-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>General Surgery</h3>
              <p>Safe, modern surgical care for a range of procedures—from minor operations to complex interventions.</p>
              <a href="#" className="service-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            <div className="service-card service-card-featured">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3>Family Medicine & Pediatrics</h3>
              <p>Caring for families—from infants to adults. Vaccinations, growth monitoring, and health education for all ages.</p>
              <a href="#" className="service-link-featured">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3>Telemedicine Services</h3>
              <p>Virtual consultations for convenience, follow-ups, and medical advice from the comfort of your home.</p>
              <a href="#" className="service-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <div className="services-appointment">
            <div className="appointment-banner">
              <div className="appointment-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div className="appointment-text">
                <h3>Open for Appointments</h3>
                <p>We will be happy to answer all your questions</p>
              </div>
              <a href="https://wa.me/5555555555" className="btn btn-cyan">Book Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="directory-section">
        <div className="container">
          <div className="directory-layout">
            <div className="directory-content">
              <h3 className="section-label">Healthcare Directory</h3>
              <h2>A Comprehensive Directory For Your Health Care</h2>
              <p className="directory-description">Easily connect with healthcare professionals and services through our comprehensive directory. Book appointments, check availability, and manage your healthcare journey all in one place.</p>

              <div className="directory-features">
                <div className="directory-feature directory-feature-highlighted">
                  <div className="directory-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div className="directory-feature-text">
                    <h4>Book an Appointment</h4>
                    <p>Schedule your visit with our easy online booking system. Choose your preferred doctor and time slot.</p>
                  </div>
                </div>

                <div className="directory-feature">
                  <div className="directory-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 11l3 3L22 4"></path>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                  </div>
                  <div className="directory-feature-text">
                    <h4>Conduct Checkup</h4>
                    <p>Comprehensive health examinations with state-of-the-art diagnostic equipment and expert analysis.</p>
                  </div>
                </div>

                <div className="directory-feature">
                  <div className="directory-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="directory-feature-text">
                    <h4>Further Treatment</h4>
                    <p>Personalized treatment plans and follow-up care to ensure your complete recovery and wellness.</p>
                  </div>
                </div>

                <div className="directory-feature">
                  <div className="directory-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                      <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>
                  </div>
                  <div className="directory-feature-text">
                    <h4>Prescribe & Payment</h4>
                    <p>Digital prescriptions and flexible payment options for your convenience and peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="directory-image">
              <img src="/doctor-hero.jpg" alt="Healthcare Professional" className="directory-image-main" />
              {/* <img src="/patient-smiling.jpg" alt="Patient" className="directory-image-overlay" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        {/* <div className="trust-section-bg" style={{backgroundImage: 'url(/trust-us.jpg)'}}></div> */}
        <div className="container trust-section-container">
          <div className="trust-layout">
            <div className="trust-content">
              <h3 className="section-label-white">Opstra Medical Group</h3>
              <h2>Trust Us To Be There To Help<br/>All & Make Things Well Again</h2>
              <p>At Opstra Medical Group, we believe that everyone deserves access to compassionate, high-quality healthcare. Based in Accra, Ghana, we are committed to providing personalized, evidence-based medical services that are affordable and focused on the unique needs of each patient.</p>
              <a href="#contact" className="btn btn-cyan">Get Started</a>
            </div>

            <div className="trust-cards">
              <div className="trust-card trust-card-white">
                <div className="trust-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h4>Medical Advices &<br/>Check Ups</h4>
              </div>

              <div className="trust-card trust-card-dark">
                <div className="trust-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h4>Trusted Medical<br/>Treatment</h4>
              </div>

              <div className="trust-card trust-card-dark">
                <div className="trust-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <h4>Emergency Help<br/>Available 24/7</h4>
              </div>

              <div className="trust-card trust-card-cyan">
                <div className="trust-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                  </svg>
                </div>
                <h4>Medical Research<br/>Professionals</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment + Form Section */}
      <section className="appointment-form-section">
        <div className="container">
          <div className="appointment-form-layout">
            <div className="appointment-image-section">
              <img src="/team-doctors.jpg" alt="Medical team" />
              <div className="appointment-overlay">
                <div className="overlay-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h3>Make Appointment & Take<br/>Care Of Your Healthy Life</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              </div>
            </div>

            <div className="form-section">
              <h2>Book With Our Form</h2>
              <form className="booking-form">
                <input type="text" placeholder="Your Name" className="form-input-white" />
                <div className="form-row-inline">
                  <input type="tel" placeholder="Phone" className="form-input-white" />
                  <input type="email" placeholder="Your E-mail" className="form-input-white" />
                </div>
                <textarea placeholder="Message" rows={4} className="form-input-white form-textarea"></textarea>
                <button type="submit" className="btn btn-cyan btn-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section-new">
        <div className="container">
          <h3 className="section-label-center">Testimonials</h3>
          <h2 className="testimonial-title">What Patients Say About Us</h2>
          <div className="testimonial-content-new">
            <div className="quote-mark">&ldquo;</div>
            <blockquote>
              <p>Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint eiusmod tempor incididunt ut labore et dolore magna alique</p>
            </blockquote>
            <div className="testimonial-author">
              <img src="/patient-smiling.jpg" alt="Daniel Thompson" className="author-image" />
              <p className="author-name">Daniel Thompson</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="newsletter-text">
              <h3>Subscribe To Our Newsletter</h3>
              <p>Join our community for health advice, updates, and special announcements</p>
            </div>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" className="newsletter-input" />
              <button type="submit" className="btn btn-cyan">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content-new">
            <div className="footer-section-main">
              <div className="logo">
                <div className="logo-text">OPSTRA</div>
                <div className="logo-subtext">MEDICAL GROUP</div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <div className="social-links">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a href="#" aria-label={social} key={social} className="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-section">
              <h4>Contact Details</h4>
              <ul className="footer-contact">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Jl. Raya Kuta No.70,<br/>Kuta</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>support@domain.com</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>8 AM - 5 PM, Monday - Saturday</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>(+021) 2335 278</span>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Other Pages</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="#about">About Us</Link></li>
                <li><Link href="#services">Our Services</Link></li>
                <li><Link href="#patients">For Patient</Link></li>
                <li><Link href="#contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Make Appointment</h4>
              <div className="footer-call">
                <div className="call-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="call-label">Call Us</p>
                  <p className="call-number">(+021) 2335 278</p>
                </div>
              </div>
              <p className="footer-desc">Lorem ipsum dolor sit, consectetur adipiscing elit, sed do et euismod</p>
            </div>
          </div>

          <div className="footer-bottom-new">
            <p>Medical & Healthcare Template Kit By Belmiz</p>
            <p>Copyright © 2021 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

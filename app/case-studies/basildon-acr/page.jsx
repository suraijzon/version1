import Link from 'next/link';
import '@/src/styles/CaseStudyPage.css';

export const metadata = {
  title: 'Basildon ACR Case Study | ZonzocTech',
  description: 'How ZonzocTech helped Basildon ACR establish a strong online presence and generate consistent leads through a full website redesign and local SEO.',
  alternates: { canonical: 'https://zonzoctech.com/case-studies/basildon-acr' },
};

export default function BasildonACRCaseStudy() {
  return (
    <div className="cs__wrapper">

      {/* HERO */}
      <section className="cs__hero">
        <div className="cs__hero_inner">
          <span className="cs__eyebrow">Case Study</span>
          <h1 className="cs__hero_title">Basildon ACR</h1>
          <p className="cs__hero_sub">
            Full website redesign and local SEO for a UK-based air conditioning &amp; refrigeration specialist — turning zero online presence into a consistent lead pipeline.
          </p>
          <div className="cs__tags">
            <span className="cs__tag">Website Design</span>
            <span className="cs__tag">Local SEO</span>
            <span className="cs__tag">Lead Generation</span>
            <span className="cs__tag">Performance Optimisation</span>
          </div>
          <div className="cs__hero_links">
            <a href="https://basildonacr.co.uk" target="_blank" rel="noopener noreferrer" className="cs__live_btn">
              View Live Site ↗
            </a>
            <Link href="/contact" className="cs__outline_btn">Start Your Project</Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="cs__section">
        <div className="cs__container">
          <div className="cs__gallery">
            <img src="/images/projects/basildon-acr-1.png" alt="Basildon ACR homepage" className="cs__gallery_img" />
            <img src="/images/projects/basildon-acr-2.png" alt="Basildon ACR services page" className="cs__gallery_img" />
            <img src="/images/projects/basildon-acr-3.png" alt="Basildon ACR contact page" className="cs__gallery_img" />
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="cs__section cs__section--alt">
        <div className="cs__container">
          <h2 className="cs__heading">The Challenge</h2>
          <p className="cs__subtext">
            Basildon ACR had years of expertise but no digital footprint. Every new customer came through word of mouth, and competitors with modern websites were winning the jobs.
          </p>
          <div className="cs__challenge_grid">
            <div className="cs__challenge_box">
              <h3>Problems We Found</h3>
              <ul>
                <li>No website — completely invisible online</li>
                <li>Zero Google Business presence or local rankings</li>
                <li>Losing enquiries to competitors with basic web presence</li>
                <li>No way for potential customers to verify credibility</li>
                <li>No structured way to capture and respond to leads</li>
              </ul>
            </div>
            <div className="cs__challenge_box">
              <h3>Our Goals</h3>
              <ul>
                <li>Build a fast, professional website from scratch</li>
                <li>Rank on Google for local HVAC and ACR searches</li>
                <li>Create a clear service structure with easy quote requests</li>
                <li>Establish trust through credentials, reviews, and imagery</li>
                <li>Generate consistent inbound enquiries within 90 days</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILT */}
      <section className="cs__section">
        <div className="cs__container">
          <h2 className="cs__heading">What We Built</h2>
          <p className="cs__subtext">
            A complete digital foundation — designed to rank, convert, and scale.
          </p>
          <div className="cs__built_grid">
            <div className="cs__built_item">
              <div className="cs__built_icon">🌐</div>
              <h4>Modern Responsive Website</h4>
              <p>Fast-loading, mobile-first website built with clean code and structured service pages covering installation, maintenance, and emergency callouts.</p>
            </div>
            <div className="cs__built_item">
              <div className="cs__built_icon">📍</div>
              <h4>Local SEO Setup</h4>
              <p>Google Business Profile optimisation, local keyword targeting, structured data markup, and location-specific landing pages to dominate Essex search results.</p>
            </div>
            <div className="cs__built_item">
              <div className="cs__built_icon">📋</div>
              <h4>Quote Request System</h4>
              <p>Integrated contact and quote forms with service selection, direct email delivery, and clear calls-to-action on every page.</p>
            </div>
            <div className="cs__built_item">
              <div className="cs__built_icon">⚡</div>
              <h4>Performance Optimisation</h4>
              <p>Image compression, lazy loading, and caching strategies delivering 95+ Lighthouse scores for speed and accessibility.</p>
            </div>
            <div className="cs__built_item">
              <div className="cs__built_icon">🔒</div>
              <h4>SSL &amp; Security</h4>
              <p>Full SSL certificate setup, secure hosting configuration, and automated uptime monitoring to keep the site always online.</p>
            </div>
            <div className="cs__built_item">
              <div className="cs__built_icon">📸</div>
              <h4>Portfolio &amp; Credentials</h4>
              <p>Project gallery, certifications display, and client testimonial section to build immediate trust with new visitors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="cs__section cs__section--dark">
        <div className="cs__container">
          <h2 className="cs__heading cs__heading--white">The Results</h2>
          <p className="cs__subtext cs__subtext--white">
            Within 90 days of launch, Basildon ACR went from invisible to consistently booked.
          </p>
          <div className="cs__results_grid">
            <div className="cs__result_card">
              <div className="cs__result_number">3×</div>
              <div className="cs__result_label">More monthly enquiries vs word-of-mouth alone</div>
            </div>
            <div className="cs__result_card">
              <div className="cs__result_number">Page 1</div>
              <div className="cs__result_label">Google ranking for key local HVAC searches</div>
            </div>
            <div className="cs__result_card">
              <div className="cs__result_number">95+</div>
              <div className="cs__result_label">Lighthouse performance score at launch</div>
            </div>
            <div className="cs__result_card">
              <div className="cs__result_number">90</div>
              <div className="cs__result_label">Days from zero presence to first organic leads</div>
            </div>
          </div>
        </div>
      </section>

      {/* EXTRA GALLERY */}
      <section className="cs__section cs__section--alt">
        <div className="cs__container">
          <h2 className="cs__heading">More Screens</h2>
          <div className="cs__gallery">
            <img src="/images/projects/basildon-acr-4.png" alt="Basildon ACR mobile view" className="cs__gallery_img" />
            <img src="/images/projects/basildon-acr-5.png" alt="Basildon ACR services detail" className="cs__gallery_img" />
            <img src="/images/projects/basildon-acr-6.png" alt="Basildon ACR about page" className="cs__gallery_img" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cs__cta_section">
        <div className="cs__container">
          <h2 className="cs__cta_heading">Ready to Build Your Online Presence?</h2>
          <p className="cs__cta_text">
            Whether you're starting from scratch or need a complete redesign, we'll get you ranking and converting in months, not years.
          </p>
          <Link href="/contact" className="cs__cta_btn">Start Your Project →</Link>
        </div>
      </section>

    </div>
  );
}

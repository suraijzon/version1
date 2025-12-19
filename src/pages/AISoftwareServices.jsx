import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/AISoftwareServices.css';

const AISoftwareServices = () => {
  const services = [
    {
      title: "Custom AI Software Solutions",
      description: "Tailored AI applications built to solve your specific business challenges."
    },
    {
      title: "Business Process Automation",
      description: "Intelligent automation that reduces manual work and increases efficiency."
    },
    {
      title: "AI-Powered Data Analysis",
      description: "Extract meaningful insights from your data with advanced analytics."
    },
    {
      title: "GPT & LLM-Based Systems",
      description: "Leverage large language models for intelligent communication and processing."
    },
    {
      title: "Predictive Analytics Tools",
      description: "Forecast trends and make data-driven decisions with confidence."
    },
    {
      title: "AI Decision-Support Systems",
      description: "Empower your team with intelligent recommendations and insights."
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Business & Data Analysis",
      description: "We identify high-impact AI opportunities based on your workflows and data."
    },
    {
      number: 2,
      title: "Solution Design",
      description: "We design software architecture, AI logic, and integrations aligned with your goals."
    },
    {
      number: 3,
      title: "Development & Integration",
      description: "We build the AI software and integrate it with your existing systems."
    },
    {
      number: 4,
      title: "Testing & Optimization",
      description: "We test for accuracy, performance, security, and real-world usage."
    },
    {
      number: 5,
      title: "Deployment & Support",
      description: "We deploy, monitor, and continuously optimize your AI software."
    }
  ];

  const faqs = [
    {
      question: "What types of AI software do you develop?",
      answer: "We develop custom AI software including automation systems, analytics platforms, internal tools, and AI-powered business applications."
    },
    {
      question: "Can AI software integrate with existing systems?",
      answer: "Yes. We specialize in integrating AI software with CRMs, ERPs, databases, and third-party platforms."
    },
    {
      question: "Is AI software development secure?",
      answer: "Security is built into every stage — from data handling to access control and deployment."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes. We offer ongoing optimization, monitoring, and enhancements after launch."
    }
  ];

  return (
    <div className="zt__page_wrapper">
      <Navbar />

      {/* Hero Section */}
      <section className="zt__hero_section">
        <div className="zt__hero_content">
          <h1 className="zt__hero_title">
            Custom AI Software Development That Automates, Scales, and Delivers Results
          </h1>
          <p className="zt__hero_subtitle">
            We provide AI software development services that help businesses automate operations, 
            improve decision-making, and build intelligent systems tailored to their unique workflows.
          </p>
          <a href="#contact" className="zt__cta_button">
            👉 Get a Free AI Software Consultation
          </a>
        </div>
      </section>

      {/* Main Content */}
      <div className="zt__main_container">
        
        {/* What Is AI Software Development */}
        <section className="zt__section">
          <h2 className="zt__section_title">What Is AI Software Development?</h2>
          <p className="zt__section_text">
            AI software development involves creating custom software solutions powered by artificial 
            intelligence to analyze data, automate processes, and enhance business efficiency. Unlike 
            off-the-shelf tools, custom AI software is designed around your specific data, systems, and goals.
          </p>
          <div className="zt__highlight_box">
            <strong>Our AI software solutions are built for real-world business use, not experiments.</strong>
          </div>
        </section>

        {/* Who Needs This */}
        <section className="zt__section">
          <h2 className="zt__section_title">Who Needs AI Software Development?</h2>
          <p className="zt__section_text">This service is ideal for:</p>
          <ul className="zt__custom_list">
            <li>Businesses looking to automate complex processes</li>
            <li>Companies with large data sets needing intelligent insights</li>
            <li>Enterprises building internal AI tools</li>
            <li>Startups developing AI-powered products</li>
            <li>Organizations replacing manual or inefficient systems</li>
          </ul>
          <p className="zt__section_text">
            If your business relies on repetitive tasks, disconnected systems, or slow decision-making, 
            AI software development can transform how you operate.
          </p>
        </section>

        {/* Problems We Solve */}
        <section className="zt__section">
          <h2 className="zt__section_title">Problems We Solve with AI Software</h2>
          <ul className="zt__custom_list">
            <li>Manual workflows consuming time and resources</li>
            <li>Disconnected systems and data silos</li>
            <li>Limited insights from existing data</li>
            <li>Human-dependent processes that don't scale</li>
            <li>Software that cannot adapt to growth</li>
          </ul>
          <p className="zt__section_text">
            We build AI-powered software that works quietly in the background to improve efficiency and accuracy.
          </p>
        </section>

        {/* Our Services */}
        <section className="zt__section" id="services">
          <h2 className="zt__section_title">Our AI Software Development Services</h2>
          <p className="zt__section_text">
            We deliver end-to-end AI software development solutions, including:
          </p>
          <div className="zt__services_grid">
            {services.map((service, index) => (
              <div key={index} className="zt__service_card">
                <h3 className="zt__service_title">{service.title}</h3>
                <p className="zt__service_text">{service.description}</p>
              </div>
            ))}
          </div>
          <p className="zt__section_text" style={{ marginTop: '2rem' }}>
            Each solution is engineered for stability, performance, and long-term value.
          </p>
        </section>

        {/* Comparison Table */}
        <section className="zt__section">
          <h2 className="zt__section_title">AI Software vs Traditional Software</h2>
          <p className="zt__section_text">AI-powered software goes beyond fixed rules.</p>
          <table className="zt__comparison_table">
            <thead>
              <tr>
                <th>Traditional Software</th>
                <th>AI Software</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Manual rules</td>
                <td>Intelligent decision-making</td>
              </tr>
              <tr>
                <td>Static workflows</td>
                <td>Adaptive automation</td>
              </tr>
              <tr>
                <td>Limited insights</td>
                <td>Predictive analytics</td>
              </tr>
              <tr>
                <td>Human-dependent</td>
                <td>Scales with data</td>
              </tr>
            </tbody>
          </table>
          <p className="zt__section_text">
            This is why businesses are moving toward custom AI software development.
          </p>
        </section>

        {/* Process */}
        <section className="zt__section" id="process">
          <h2 className="zt__section_title">Our AI Software Development Process</h2>
          <div className="zt__process_steps">
            {processSteps.map((step) => (
              <div key={step.number} className="zt__process_step">
                <div className="zt__step_number">{step.number}</div>
                <div className="zt__step_content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="zt__section">
          <h2 className="zt__section_title">Technologies We Use</h2>
          <ul className="zt__custom_list">
            <li>AI & machine learning frameworks</li>
            <li>GPT & large language model integrations</li>
            <li>Secure backend systems</li>
            <li>Cloud-based infrastructure</li>
            <li>APIs & data processing pipelines</li>
          </ul>
          <p className="zt__section_text" style={{ fontStyle: 'italic' }}>
            (Technology choices depend on your business needs — not trends.)
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="zt__section" id="why-us">
          <h2 className="zt__section_title">Why Choose ZonzocTech for AI Software Development?</h2>
          <ul className="zt__custom_list">
            <li>Proven AI-first development approach</li>
            <li>Strong engineering & automation expertise</li>
            <li>Business-focused problem solving</li>
            <li>Secure and scalable software architecture</li>
            <li>Transparent communication & long-term support</li>
          </ul>
          <div className="zt__highlight_box">
            <strong>We build AI software that solves real business problems, not buzzword-driven projects.</strong>
          </div>
        </section>

        {/* FAQ */}
        <section className="zt__section" id="faq">
          <h2 className="zt__section_title">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="zt__faq_item">
              <h3 className="zt__faq_question">{faq.question}</h3>
              <p className="zt__faq_answer">{faq.answer}</p>
            </div>
          ))}
        </section>

        {/* Final CTA */}
        <section className="zt__section zt__final_cta" id="contact">
          <h2>Ready to Build Intelligent AI Software?</h2>
          <p>
            If you're planning to build custom AI software or upgrade your existing systems with 
            artificial intelligence, let's discuss your goals.
          </p>
          <a href="#" className="zt__cta_button">
            👉 Get a Free AI Software Consultation
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AISoftwareServices;
import React from 'react';
import '../styles/whoweare.css';

const WhoWeAreSection = () => {
  const cmsplatforms = [
    { name: 'WordPress', icon: 'fa-brands fa-wordpress' },
    { name: 'Joomla', icon: 'fa-brands fa-joomla' },
    { name: 'Drupal', icon: 'fa-brands fa-drupal' },
    { name: 'Strapi', icon: 'fa-solid fa-code' },
    { name: 'Typo3', icon: 'fa-brands fa-typo3' },
    { name: 'Magento', icon: 'fa-brands fa-magento' },
    { name: 'Grav', icon: 'fa-brands fa-grav' },
    { name: 'Ghost', icon: 'fa-solid fa-ghost' },
    { name: 'Umbraco', icon: 'fa-brands fa-umbraco' },
    { name: 'Squarespace', icon: 'fa-brands fa-squarespace' },
    {name: 'Webflow', icon: 'fa-brands fa-webflow' }
  ];

  const programmingLanguages = [
    { name: 'PHP', icon: 'fa-brands fa-php' },
    { name: 'Java', icon: 'fa-brands fa-java' },
    { name: 'JavaScript', icon: 'fa-brands fa-js' },
    { name: 'TypeScript', icon: 'fa-brands fa-js' },
    { name: 'Python', icon: 'fa-brands fa-python' },
    { name: 'C#', icon: 'fa-solid fa-code' },
    { name: 'C++', icon: 'fa-solid fa-code' },
    { name: 'Kotlin', icon: 'fa-solid fa-code' },
    { name: 'Swift', icon: 'fa-brands fa-swift' },
    { name: 'Go', icon: 'fa-brands fa-golang' },
    { name: 'Ruby', icon: 'fa-solid fa-gem' }
  ];

  const containerization = [
    { name: 'Docker', icon: 'fa-brands fa-docker' },
    { name: 'Kubernetes', icon: 'fa-solid fa-dharmachakra' },
    { name: 'AWS ECS', icon: 'fa-brands fa-aws' }
  ];

  const cicd = [
    { name: 'Jenkins', icon: 'fa-brands fa-jenkins' },
    { name: 'GitHub Actions', icon: 'fa-brands fa-github' },
    { name: 'GitLab CI/CD', icon: 'fa-brands fa-gitlab' },
    { name: 'CircleCI', icon: 'fa-solid fa-circle' }
  ];

  const ecommerce = [
    { name: 'Shopify', icon: 'fa-brands fa-shopify' },
    { name: 'WooCommerce', icon: 'fa-brands fa-wordpress' },
    { name: 'Magento', icon: 'fa-brands fa-magento' },
    { name: 'OpenCart', icon: 'fa-solid fa-cart-shopping' }
  ];

  const frameworks = [
    { name: 'Laravel', icon: 'fa-brands fa-laravel' },
    { name: 'Symfony', icon: 'fa-brands fa-symfony' },
    { name: 'Spring Boot', icon: 'fa-solid fa-leaf' },
    { name: 'Express.js', icon: 'fa-brands fa-node-js' },
    { name: 'Vue.js', icon: 'fa-brands fa-vuejs' },
    { name: 'React.js', icon: 'fa-brands fa-react' },
    { name: 'Next.js', icon: 'fa-solid fa-n' },
    { name: 'Nuxt.js', icon: 'fa-brands fa-vuejs' },
    { name: 'Node.js', icon: 'fa-brands fa-node' },
    { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
  ];

  const webServers = [
    { name: 'LiteSpeed', icon: 'fa-solid fa-server' },
    { name: 'Tomcat', icon: 'fa-solid fa-cat' },
    { name: 'Caddy', icon: 'fa-solid fa-golf-ball-tee' },
    { name: 'Go', icon: 'fa-brands fa-golang' }
  ];

  const monitoring = [
    { name: 'Grafana', icon: 'fa-solid fa-chart-line' },
    { name: 'Prometheus', icon: 'fa-solid fa-fire' },
    { name: 'Kibana', icon: 'fa-solid fa-chart-bar' },
    { name: 'SQL', icon: 'fa-solid fa-database' }
  ];

  const cloudSecurity = [
    { name: 'Cloudflare', icon: 'fa-brands fa-cloudflare' },
    { name: 'SSL Certificates', icon: 'fa-solid fa-lock' },
    { name: 'SEO & Speed Optimization', icon: 'fa-brands fa-google' },
    { name: 'Java', icon: 'fa-brands fa-java' }
  ];

  const hostingProviders = [
    { name: 'Bluehost', icon: 'fa-solid fa-server' },
    { name: 'GoDaddy', icon: 'fa-solid fa-globe' },
    { name: 'Hostinger', icon: 'fa-solid fa-h' },
    { name: 'SiteGround', icon: 'fa-solid fa-server' },
    { name: 'HostGator', icon: 'fa-solid fa-server' },
    { name: 'AWS', icon: 'fa-brands fa-aws' },
    { name: 'Google Cloud', icon: 'fa-brands fa-google' },
    { name: 'Microsoft Azure', icon: 'fa-brands fa-microsoft' },
    { name: 'DigitalOcean', icon: 'fa-brands fa-digital-ocean' },
    { name: 'Linode', icon: 'fa-solid fa-cloud' }
  ];

  const databases = [
    { name: 'MySQL', icon: 'fa-solid fa-database' },
    { name: 'PostgreSQL', icon: 'fa-solid fa-database' },
    { name: 'MongoDB', icon: 'fa-solid fa-leaf' },
    { name: 'SQLite', icon: 'fa-solid fa-database' },
    { name: 'Redis', icon: 'fa-solid fa-database' },
    { name: 'Elasticsearch', icon: 'fa-solid fa-magnifying-glass' },
    { name: 'Firebase', icon: 'fa-solid fa-fire' }
  ];

  return (
    <section className="whoweare-section">
      <div className="whoweare-container">
        {/* Header Text */}
        <div className="whoweare-header">
          <h2 className="whoweare-title">
            Who We Are & Why Choose <span className="highlight">Zonzoctech</span>
          </h2>
          <p className="whoweare-description">
            At Zonzoctech, we're more than just a digital agency—we're your growth partner. 
            With over a decade of experience, we specialize in building modern websites, 
            boosting visibility through smart SEO, and integrating cutting-edge AI technologies 
            to future-proof your business.
          </p>
        </div>

        {/* Row 1: CMS Platforms | Programming Languages | Hosting Providers */}
        <div className="tech-categories-grid">
          <div className="tech-category-card">
            <h3 className="category-title">CMS Platforms</h3>
            <div className="tech-icons-wrapper">
              {cmsplatforms.map((tech, index) => (
                <div key={index} className="tech-item">
                  <div className="tech-icon-circle">
                    <i className={tech.icon}></i>
                  </div>
                  <p className="tech-label">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-category-card">
            <h3 className="category-title">Programming Languages</h3>
            <div className="tech-icons-wrapper languages-grid">
              {programmingLanguages.map((tech, index) => (
                <div key={index} className="tech-item">
                  <div className="tech-icon-circle">
                    <i className={tech.icon}></i>
                  </div>
                  <p className="tech-label">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-category-card hosting-card">
            <h3 className="category-title">Hosting Providers</h3>
            <div className="tech-icons-wrapper hosting-grid">
              {hostingProviders.map((tech, index) => (
                <div key={index} className="tech-item">
                  <div className="tech-icon-circle">
                    <i className={tech.icon}></i>
                  </div>
                  <p className="tech-label">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: CI/CD & Automation | E-Commerce Platforms | Containerization & Deployments */}
        <div className="tech-categories-grid">
          <div className="tech-category-card">
            <h3 className="category-title">CI/CD & Automation</h3>
            <div className="tech-icons-wrapper">
              {cicd.map((tech, index) => (
                <div key={index} className="tech-item">
                  <div className="tech-icon-circle">
                    <i className={tech.icon}></i>
                  </div>
                  <p className="tech-label">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-category-card">
            <h3 className="category-title">E-Commerce Platforms</h3>
            <div className="tech-icons-wrapper">
              {ecommerce.map((tech, index) => (
                <div key={index} className="tech-item">
                  <div className="tech-icon-circle">
                    <i className={tech.icon}></i>
                  </div>
                  <p className="tech-label">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-category-card">
            <h3 className="category-title">Containerization & Deployments</h3>
            <div className="tech-icons-wrapper">
              {containerization.map((tech, index) => (
                <div key={index} className="tech-item">
                  <div className="tech-icon-circle">
                    <i className={tech.icon}></i>
                  </div>
                  <p className="tech-label">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3: Cloud & Security | Web Servers | Monitoring & Analytics */}
<div className="tech-categories-grid">
  <div className="tech-category-card">
    <h3 className="category-title">Cloud & Security</h3>
    <div className="tech-icons-wrapper">
      {cloudSecurity.map((tech, index) => (
        <div key={index} className="tech-item">
          <div className="tech-icon-circle">
            <i className={tech.icon}></i>
          </div>
          <p className="tech-label">{tech.name}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="tech-category-card">
    <h3 className="category-title">Web Servers</h3>
    <div className="tech-icons-wrapper">
      {webServers.map((tech, index) => (
        <div key={index} className="tech-item">
          <div className="tech-icon-circle">
            <i className={tech.icon}></i>
          </div>
          <p className="tech-label">{tech.name}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="tech-category-card">
    <h3 className="category-title">Monitoring & Analytics</h3>
    <div className="tech-icons-wrapper">
      {monitoring.map((tech, index) => (
        <div key={index} className="tech-item">
          <div className="tech-icon-circle">
            <i className={tech.icon}></i>
          </div>
          <p className="tech-label">{tech.name}</p>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Row 4: Frameworks & Libraries | Databases */}
<div className="tech-categories-grid two-columns">
  <div className="tech-category-card">
    <h3 className="category-title">Frameworks & Libraries</h3>
    <div className="tech-icons-wrapper frameworks-grid">
      {frameworks.map((tech, index) => (
        <div key={index} className="tech-item">
          <div className="tech-icon-circle">
            <i className={tech.icon}></i>
          </div>
          <p className="tech-label">{tech.name}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="tech-category-card">
    <h3 className="category-title">Databases</h3>
    <div className="tech-icons-wrapper databases-grid">
      {databases.map((tech, index) => (
        <div key={index} className="tech-item">
          <div className="tech-icon-circle">
            <i className={tech.icon}></i>
          </div>
          <p className="tech-label">{tech.name}</p>
        </div>
      ))}
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default WhoWeAreSection;
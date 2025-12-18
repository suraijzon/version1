import React from 'react';
import '../styles/whoweare.css';

// Import all SVG icons with .default for proper webpack handling
const importIcon = (iconName) => {
  try {
    return require(`../assets/icons/${iconName}.svg`).default || require(`../assets/icons/${iconName}.svg`);
  } catch (e) {
    console.error(`Failed to load icon: ${iconName}`);
    return null;
  }
};

const WhoWeAreSection = () => {
  const cmsplatforms = [
    { name: 'WordPress', icon: 'wordpress' },
    { name: 'Joomla', icon: 'joomla' },
    { name: 'Drupal', icon: 'drupal' },
    { name: 'Strapi', icon: 'strapi' },
    { name: 'Typo3', icon: 'magento' },
    { name: 'Magento', icon: 'magento' },
    { name: 'Grav', icon: 'grav' },
    { name: 'Ghost', icon: 'ghost' },
    { name: 'Umbraco', icon: 'umbraco' },
    { name: 'Squarespace', icon: 'squarespace' },
    { name: 'Webflow', icon: 'webflow' }
  ];

  const programmingLanguages = [
    { name: 'PHP', icon: 'php' },
    { name: 'Java', icon: 'java' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Python', icon: 'python' },
    { name: 'C#', icon: 'csharp' },
    { name: 'C++', icon: 'cpp' },
    { name: 'Kotlin', icon: 'kotlin' },
    { name: 'Swift', icon: 'swift' },
    { name: 'Go', icon: 'go' },
    { name: 'Ruby', icon: 'ruby' }
  ];

  const containerization = [
    { name: 'Docker', icon: 'docker' },
    { name: 'Kubernetes', icon: 'kubernetes' },
    { name: 'AWS ECS', icon: 'aws' }
  ];

  const cicd = [
    { name: 'Jenkins', icon: 'jenkins' },
    { name: 'GitHub Actions', icon: 'github' },
    { name: 'GitLab CI/CD', icon: 'gitlab' },
    { name: 'CircleCI', icon: 'circleci' }
  ];

  const ecommerce = [
    { name: 'Shopify', icon: 'shopify' },
    { name: 'WooCommerce', icon: 'woocommerce' },
    { name: 'Magento', icon: 'magento' },
    { name: 'OpenCart', icon: 'opencart' }
  ];

  const frameworks = [
    { name: 'Laravel', icon: 'laravel' },
    { name: 'Symfony', icon: 'symfony' },
    { name: 'Spring Boot', icon: 'springboot' },
    { name: 'Express.js', icon: 'express' },
    { name: 'Vue.js', icon: 'vue' },
    { name: 'React.js', icon: 'react' },
    { name: 'Next.js', icon: 'next' },
    { name: 'Nuxt.js', icon: 'nuxt' },
    { name: 'Node.js', icon: 'node' },
    { name: 'Bootstrap', icon: 'bootstrap' }
  ];

  const webServers = [
    { name: 'LiteSpeed', icon: 'lightning' },
    { name: 'Tomcat', icon: 'tomcat' },
    { name: 'Caddy', icon: 'ruby' },
    { name: 'Go', icon: 'go' }
  ];

  const monitoring = [
    { name: 'Grafana', icon: 'grafana' },
    { name: 'Prometheus', icon: 'prometheus' },
    { name: 'Kibana', icon: 'kibana' },
    { name: 'SQL', icon: 'sql' }
  ];

  const cloudSecurity = [
    { name: 'Cloudflare', icon: 'cloudflare' },
    { name: 'SSL Certificates', icon: 'ssl' },
    { name: 'SEO & Speed Optimization', icon: 'seo' },
    { name: 'Java', icon: 'java' }
  ];

  const hostingProviders = [
    { name: 'Bluehost', icon: 'bluehost' },
    { name: 'GoDaddy', icon: 'godaddy' },
    { name: 'Hostinger', icon: 'ruby' },
    { name: 'SiteGround', icon: 'ruby' },
    { name: 'HostGator', icon: 'hostgator' },
    { name: 'AWS', icon: 'aws' },
    { name: 'Google Cloud', icon: 'google-cloud' },
    { name: 'Microsoft Azure', icon: 'microsoft-azure' },
    { name: 'DigitalOcean', icon: 'digitalocean' },
    { name: 'Linode', icon: 'linode' }
  ];

  const databases = [
    { name: 'MySQL', icon: 'mysql' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'SQLite', icon: 'sqlite' },
    { name: 'Redis', icon: 'redis' },
    { name: 'Elasticsearch', icon: 'elasticsearch' },
    { name: 'Firebase', icon: 'firebase' }
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
          <h3 className='technologystack'>OUR TECHNOLOGY STACK</h3>
        </div>

        {/* Row 1: CMS Platforms | Programming Languages | Hosting Providers */}
        <div className="tech-categories-grid">
          <div className="tech-category-card">
            <h3 className="category-title">CMS Platforms</h3>
            <div className="tech-icons-wrapper">
              {cmsplatforms.map((tech, index) => (
                <div key={index} className="tech-item">
                  <div className="tech-icon-circle">
                    <img 
                      src={importIcon(tech.icon)} 
                      alt={tech.name} 
                      className="tech-svg-icon"
                    />
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
                    <img 
                      src={importIcon(tech.icon)} 
                      alt={tech.name} 
                      className="tech-svg-icon"
                    />
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
                    <img 
                      src={importIcon(tech.icon)} 
                      alt={tech.name} 
                      className="tech-svg-icon"
                    />
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
                    <img 
                      src={importIcon(tech.icon)} 
                      alt={tech.name} 
                      className="tech-svg-icon"
                    />
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
                    <img 
                      src={importIcon(tech.icon)} 
                      alt={tech.name} 
                      className="tech-svg-icon"
                    />
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
                    <img 
                      src={importIcon(tech.icon)} 
                      alt={tech.name} 
                      className="tech-svg-icon"
                    />
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
                    <img 
                      src={importIcon(tech.icon)} 
                      alt={tech.name} 
                      className="tech-svg-icon"
                    />
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
                    <img 
                      src={importIcon(tech.icon)} 
                      alt={tech.name} 
                      className="tech-svg-icon"
                    />
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
                    <img 
                      src={importIcon(tech.icon)} 
                      alt={tech.name} 
                      className="tech-svg-icon"
                    />
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
                    <img 
                      src={importIcon(tech.icon)} 
                      alt={tech.name} 
                      className="tech-svg-icon"
                    />
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
                    <img 
                      src={importIcon(tech.icon)} 
                      alt={tech.name} 
                      className="tech-svg-icon"
                    />
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
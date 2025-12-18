import React from 'react';
import '../styles/whoweare.css';

const WhoWeAreSection = () => {
  const cmsplatforms = [
    { name: 'WordPress', svg: require('../assets/icons/wordpress.svg') },
    { name: 'Joomla', svg: require('../assets/icons/joomla.svg') },
    { name: 'Drupal', svg: require('../assets/icons/drupal.svg') },
    { name: 'Strapi', svg: require('../assets/icons/strapi.svg') },
    { name: 'Typo3', svg: require('../assets/icons/typo3.svg') },
    { name: 'Magento', svg: require('../assets/icons/magento.svg') },
    { name: 'Grav', svg: require('../assets/icons/grav.svg') },
    { name: 'Ghost', svg: require('../assets/icons/ghost.svg') },
    { name: 'Umbraco', svg: require('../assets/icons/umbraco.svg') },
    { name: 'Squarespace', svg: require('../assets/icons/squarespace.svg') },
    { name: 'Webflow', svg: require('../assets/icons/webflow.svg') }
  ];

  const programmingLanguages = [
    { name: 'PHP', svg: require('../assets/icons/php.svg') },
    { name: 'Java', svg: require('../assets/icons/java.svg') },
    { name: 'JavaScript', svg: require('../assets/icons/javascript.svg') },
    { name: 'TypeScript', svg: require('../assets/icons/typescript.svg') },
    { name: 'Python', svg: require('../assets/icons/python.svg') },
    { name: 'C#', svg: require('../assets/icons/csharp.svg') },
    { name: 'C++', svg: require('../assets/icons/cpp.svg') },
    { name: 'Kotlin', svg: require('../assets/icons/kotlin.svg') },
    { name: 'Swift', svg: require('../assets/icons/swift.svg') },
    { name: 'Go', svg: require('../assets/icons/go.svg') },
    { name: 'Ruby', svg: require('../assets/icons/ruby.svg') }
  ];

  const containerization = [
    { name: 'Docker', svg: require('../assets/icons/docker.svg') },
    { name: 'Kubernetes', svg: require('../assets/icons/kubernetes.svg') },
    { name: 'AWS ECS', svg: require('../assets/icons/aws.svg') }
  ];

  const cicd = [
    { name: 'Jenkins', svg: require('../assets/icons/jenkins.svg') },
    { name: 'GitHub Actions', svg: require('../assets/icons/github.svg') },
    { name: 'GitLab CI/CD', svg: require('../assets/icons/gitlab.svg') },
    { name: 'CircleCI', svg: require('../assets/icons/circleci.svg') }
  ];

  const ecommerce = [
    { name: 'Shopify', svg: require('../assets/icons/shopify.svg') },
    { name: 'WooCommerce', svg: require('../assets/icons/woocommerce.svg') },
    { name: 'Magento', svg: require('../assets/icons/magento.svg') },
    { name: 'OpenCart', svg: require('../assets/icons/opencart.svg') }
  ];

  const frameworks = [
    { name: 'Laravel', svg: require('../assets/icons/laravel.svg') },
    { name: 'Symfony', svg: require('../assets/icons/symfony.svg') },
    { name: 'Spring Boot', svg: require('../assets/icons/springboot.svg') },
    { name: 'Express.js', svg: require('../assets/icons/express.svg') },
    { name: 'Vue.js', svg: require('../assets/icons/vue.svg') },
    { name: 'React.js', svg: require('../assets/icons/react.svg') },
    { name: 'Next.js', svg: require('../assets/icons/next.svg') },
    { name: 'Nuxt.js', svg: require('../assets/icons/nuxt.svg') },
    { name: 'Node.js', svg: require('../assets/icons/node.svg') },
    { name: 'Bootstrap', svg: require('../assets/icons/bootstrap.svg') }
  ];

  const webServers = [
    { name: 'LiteSpeed', svg: require('../assets/icons/litespeed.svg') },
    { name: 'Tomcat', svg: require('../assets/icons/tomcat.svg') },
    { name: 'Caddy', svg: require('../assets/icons/caddy.svg') },
    { name: 'Go', svg: require('../assets/icons/go.svg') }
  ];

  const monitoring = [
    { name: 'Grafana', svg: require('../assets/icons/grafana.svg') },
    { name: 'Prometheus', svg: require('../assets/icons/prometheus.svg') },
    { name: 'Kibana', svg: require('../assets/icons/kibana.svg') },
    { name: 'SQL', svg: require('../assets/icons/sql.svg') }
  ];

  const cloudSecurity = [
    { name: 'Cloudflare', svg: require('../assets/icons/cloudflare.svg') },
    { name: 'SSL Certificates', svg: require('../assets/icons/ssl.svg') },
    { name: 'SEO & Speed Optimization', svg: require('../assets/icons/seo.svg') },
    { name: 'Java', svg: require('../assets/java.svg') }
  ];

  const hostingProviders = [
    { name: 'Bluehost', svg: require('../assets/icons/bluehost.svg') },
    { name: 'GoDaddy', svg: require('../assets/icons/godaddy.svg') },
    { name: 'Hostinger', svg: require('../assets/icons/hostinger.svg') },
    { name: 'SiteGround', svg: require('../assets/icons/siteground.svg') },
    { name: 'HostGator', svg: require('../assets/icons/hostgator.svg') },
    { name: 'AWS', svg: require('../assets/icons/aws.svg') },
    { name: 'Google Cloud', svg: require('../assets/icons/googlecloud.svg') },
    { name: 'Microsoft Azure', svg: require('../assets/icons/azure.svg') },
    { name: 'DigitalOcean', svg: require('../assets/icons/digitalocean.svg') },
    { name: 'Linode', svg: require('../assets/icons/linode.svg') }
  ];

  const databases = [
    { name: 'MySQL', svg: require('../assets/icons/mysql.svg') },
    { name: 'PostgreSQL', svg: require('../assets/icons/postgresql.svg') },
    { name: 'MongoDB', svg: require('../assets/icons/mongodb.svg') },
    { name: 'SQLite', svg: require('../assets/icons/sqlite.svg') },
    { name: 'Redis', svg: require('../assets/icons/redis.svg') },
    { name: 'Elasticsearch', svg: require('../assets/icons/elasticsearch.svg') },
    { name: 'Firebase', svg: require('../assets/icons/firebase.svg') }
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
                    <img src={tech.svg} alt={tech.name} className="tech-svg-icon" />
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
                    <img src={tech.svg} alt={tech.name} className="tech-svg-icon" />
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
                    <img src={tech.svg} alt={tech.name} className="tech-svg-icon" />
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
                    <img src={tech.svg} alt={tech.name} className="tech-svg-icon" />
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
                    <img src={tech.svg} alt={tech.name} className="tech-svg-icon" />
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
                    <img src={tech.svg} alt={tech.name} className="tech-svg-icon" />
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
                    <img src={tech.svg} alt={tech.name} className="tech-svg-icon" />
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
                    <img src={tech.svg} alt={tech.name} className="tech-svg-icon" />
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
                    <img src={tech.svg} alt={tech.name} className="tech-svg-icon" />
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
                    <img src={tech.svg} alt={tech.name} className="tech-svg-icon" />
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
                    <img src={tech.svg} alt={tech.name} className="tech-svg-icon" />
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
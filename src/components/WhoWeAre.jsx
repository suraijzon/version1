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
  const categories = [
    {
      title: 'Programming Languages',
      items: [
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
      ]
    },
    {
      title: 'Containerization & Deployments',
      items: [
        { name: 'Docker', icon: 'docker' },
        { name: 'Kubernetes', icon: 'kubernetes' },
        { name: 'AWS ECS', icon: 'aws' }
      ]
    },
    {
      title: 'CMS Platforms',
      items: [
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
      ]
    },
    {
      title: 'Frameworks & Libraries',
      items: [
        { name: 'Laravel', icon: 'laravel' },
        { name: 'Symfony', icon: 'symfony' },
        { name: 'Spring Boot', icon: 'springboot' },
        { name: 'Express.js', icon: 'express' },
        { name: 'Vue.js', icon: 'vue' },
        { name: 'React.js', icon: 'react' },
        { name: 'Next.js', icon: 'next' },
        { name: 'Nuxt.js', icon: 'nuxt' },
        { name: 'Node.js', icon: 'node' },
        { name: 'Bootstrap', icon: 'bootstrap' },
        { name: 'Angular', icon: 'angular' },
        { name: 'Tailwind CSS', icon: 'tailwind' },
        { name: 'jQuery', icon: 'jquery' },
        { name: 'Django', icon: 'django' },
        { name: 'Ruby on Rails', icon: 'rails' }
      ]
    },
    {
      title: 'CI/CD & Automation',
      items: [
        { name: 'Jenkins', icon: 'jenkins' },
        { name: 'GitHub Actions', icon: 'github' },
        { name: 'GitLab CI/CD', icon: 'gitlab' },
        { name: 'CircleCI', icon: 'circleci' }
      ]
    },
    {
      title: 'Monitoring & Analytics',
      items: [
        { name: 'Grafana', icon: 'grafana' },
        { name: 'Prometheus', icon: 'prometheus' },
        { name: 'Kibana', icon: 'kibana' },
        { name: 'SQL', icon: 'sql' }
      ]
    },
    {
      title: 'Cloud & Security',
      items: [
        { name: 'Cloudflare', icon: 'cloudflare' },
        { name: 'SSL Certificates', icon: 'ruby' },
        { name: 'SEO & Speed', icon: 'seo' },
        { name: 'AWS', icon: 'aws' }
      ]
    },
    {
      title: 'Hosting Providers',
      items: [
        { name: 'Bluehost', icon: 'bluehost' },
        { name: 'GoDaddy', icon: 'godaddy' },
        { name: 'Hostinger', icon: 'hostinger' },
        { name: 'SiteGround', icon: 'siteground' },
        { name: 'HostGator', icon: 'hostgator' },
        { name: 'AWS', icon: 'aws' },
        { name: 'Google Cloud', icon: 'googlecloud' },
        { name: 'Azure', icon: 'microsoft-azure' },
        { name: 'DigitalOcean', icon: 'digitalocean' },
        { name: 'Linode', icon: 'linode' }
      ]
    },
    {
      title: 'E-Commerce Platforms',
      items: [
        { name: 'Shopify', icon: 'shopify' },
        { name: 'WooCommerce', icon: 'woocommerce' },
        { name: 'Magento', icon: 'magento' },
        { name: 'OpenCart', icon: 'opencart' }
      ]
    },
    {
      title: 'Web Servers',
      items: [
        { name: 'LiteSpeed', icon: 'lightning' },
        { name: 'Tomcat', icon: 'tomcat' },
        { name: 'Caddy', icon: 'ruby' },
        { name: 'Go', icon: 'go' }
      ]
    },
    {
      title: 'Databases',
      items: [
        { name: 'MySQL', icon: 'mysql' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'MongoDB', icon: 'mongodb' },
        { name: 'SQLite', icon: 'sqlite' },
        { name: 'Redis', icon: 'redis' },
        { name: 'Elasticsearch', icon: 'elasticsearch' },
        { name: 'Firebase', icon: 'firebase' }
      ]
    }
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

        {/* Technology Categories - Horizontal Scroll Layout */}
        <div className="tech-categories-wrapper">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="tech-category-row">
              <h3 className="category-title-horizontal">{category.title}</h3>
              <div className="tech-scroll-container">
                <div className="tech-items-horizontal">
                  {category.items.map((tech, index) => (
                    <div key={index} className="tech-item-horizontal">
                      <div className="tech-icon-circle-horizontal">
                        <img 
                          src={importIcon(tech.icon)} 
                          alt={tech.name} 
                          className="tech-svg-icon-horizontal"
                        />
                      </div>
                      <p className="tech-label-horizontal">{tech.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhoWeAreSection;
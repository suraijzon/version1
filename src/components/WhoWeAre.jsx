import React from 'react';
import '../styles/whoweare.css';

import wordpressIcon from '../assets/icons/wordpress.svg';
import joomlaIcon from '../assets/icons/joomla.svg';
import drupalIcon from '../assets/icons/drupal.svg';
import strapiIcon from '../assets/icons/strapi.svg';
import magentoIcon from '../assets/icons/magento.svg';
import gravIcon from '../assets/icons/grav.svg';
import ghostIcon from '../assets/icons/ghost.svg';
import umbracoIcon from '../assets/icons/umbraco.svg';
import squarespaceIcon from '../assets/icons/squarespace.svg';
import webflowIcon from '../assets/icons/webflow.svg';

import phpIcon from '../assets/icons/php.svg';
import javaIcon from '../assets/icons/java.svg';
import javascriptIcon from '../assets/icons/javascript.svg';
import typescriptIcon from '../assets/icons/typescript.svg';
import pythonIcon from '../assets/icons/python.svg';
import csharpIcon from '../assets/icons/csharp.svg';
import cppIcon from '../assets/icons/cpp.svg';
import kotlinIcon from '../assets/icons/kotlin.svg';
import swiftIcon from '../assets/icons/swift.svg';
import goIcon from '../assets/icons/go.svg';
import rubyIcon from '../assets/icons/ruby.svg';

import dockerIcon from '../assets/icons/docker.svg';
import kubernetesIcon from '../assets/icons/kubernetes.svg';
import awsIcon from '../assets/icons/aws.svg';

import jenkinsIcon from '../assets/icons/jenkins.svg';
import githubIcon from '../assets/icons/github.svg';
import gitlabIcon from '../assets/icons/gitlab.svg';
import circleciIcon from '../assets/icons/circleci.svg';

import shopifyIcon from '../assets/icons/shopify.svg';
import woocommerceIcon from '../assets/icons/woocommerce.svg';
import opencartIcon from '../assets/icons/opencart.svg';

import laravelIcon from '../assets/icons/laravel.svg';
import symfonyIcon from '../assets/icons/symfony.svg';
import springbootIcon from '../assets/icons/springboot.svg';
import expressIcon from '../assets/icons/express.svg';
import vueIcon from '../assets/icons/vue.svg';
import reactIcon from '../assets/icons/react.svg';
import nextIcon from '../assets/icons/next.svg';
import nuxtIcon from '../assets/icons/nuxt.svg';
import nodeIcon from '../assets/icons/node.svg';
import bootstrapIcon from '../assets/icons/bootstrap.svg';

import lightningIcon from '../assets/icons/lightning.svg';
import tomcatIcon from '../assets/icons/tomcat.svg';

import grafanaIcon from '../assets/icons/grafana.svg';
import prometheusIcon from '../assets/icons/prometheus.svg';
import kibanaIcon from '../assets/icons/kibana.svg';
import sqlIcon from '../assets/icons/sql.svg';

import cloudflareIcon from '../assets/icons/cloudflare.svg';
import sslIcon from '../assets/icons/ssl.svg';
import seoIcon from '../assets/icons/seo.svg';

import bluehostIcon from '../assets/icons/bluehost.svg';
import godaddyIcon from '../assets/icons/godaddy.svg';
import hostgatorIcon from '../assets/icons/hostgator.svg';
import googleCloudIcon from '../assets/icons/google-cloud.svg';
import azureIcon from '../assets/icons/microsoft-azure.svg';
import digitaloceanIcon from '../assets/icons/digitalocean.svg';
import linodeIcon from '../assets/icons/linode.svg';

import mysqlIcon from '../assets/icons/mysql.svg';
import postgresqlIcon from '../assets/icons/postgresql.svg';
import mongodbIcon from '../assets/icons/mongodb.svg';
import sqliteIcon from '../assets/icons/sqlite.svg';
import redisIcon from '../assets/icons/redis.svg';
import elasticsearchIcon from '../assets/icons/elasticsearch.svg';
import firebaseIcon from '../assets/icons/firebase.svg';

const WhoWeAreSection = () => {
  const cmsplatforms = [
    { name: 'WordPress', svg: wordpressIcon },
    { name: 'Joomla', svg: joomlaIcon },
    { name: 'Drupal', svg: drupalIcon },
    { name: 'Strapi', svg: strapiIcon },
    { name: 'Typo3', svg: magentoIcon },
    { name: 'Magento', svg: magentoIcon },
    { name: 'Grav', svg: gravIcon },
    { name: 'Ghost', svg: ghostIcon },
    { name: 'Umbraco', svg: umbracoIcon },
    { name: 'Squarespace', svg: squarespaceIcon },
    { name: 'Webflow', svg: webflowIcon }
  ];

  const programmingLanguages = [
    { name: 'PHP', svg: phpIcon },
    { name: 'Java', svg: javaIcon },
    { name: 'JavaScript', svg: javascriptIcon },
    { name: 'TypeScript', svg: typescriptIcon },
    { name: 'Python', svg: pythonIcon },
    { name: 'C#', svg: csharpIcon },
    { name: 'C++', svg: cppIcon },
    { name: 'Kotlin', svg: kotlinIcon },
    { name: 'Swift', svg: swiftIcon },
    { name: 'Go', svg: goIcon },
    { name: 'Ruby', svg: rubyIcon }
  ];

  const containerization = [
    { name: 'Docker', svg: dockerIcon },
    { name: 'Kubernetes', svg: kubernetesIcon },
    { name: 'AWS ECS', svg: awsIcon }
  ];

  const cicd = [
    { name: 'Jenkins', svg: jenkinsIcon },
    { name: 'GitHub Actions', svg: githubIcon },
    { name: 'GitLab CI/CD', svg: gitlabIcon },
    { name: 'CircleCI', svg: circleciIcon }
  ];

  const ecommerce = [
    { name: 'Shopify', svg: shopifyIcon },
    { name: 'WooCommerce', svg: woocommerceIcon },
    { name: 'Magento', svg: magentoIcon },
    { name: 'OpenCart', svg: opencartIcon }
  ];

  const frameworks = [
    { name: 'Laravel', svg: laravelIcon },
    { name: 'Symfony', svg: symfonyIcon },
    { name: 'Spring Boot', svg: springbootIcon },
    { name: 'Express.js', svg: expressIcon },
    { name: 'Vue.js', svg: vueIcon },
    { name: 'React.js', svg: reactIcon },
    { name: 'Next.js', svg: nextIcon },
    { name: 'Nuxt.js', svg: nuxtIcon },
    { name: 'Node.js', svg: nodeIcon },
    { name: 'Bootstrap', svg: bootstrapIcon }
  ];

  const webServers = [
    { name: 'LiteSpeed', svg: lightningIcon },
    { name: 'Tomcat', svg: tomcatIcon },
    { name: 'Caddy', svg: rubyIcon },
    { name: 'Go', svg: goIcon }
  ];

  const monitoring = [
    { name: 'Grafana', svg: grafanaIcon },
    { name: 'Prometheus', svg: prometheusIcon },
    { name: 'Kibana', svg: kibanaIcon },
    { name: 'SQL', svg: sqlIcon }
  ];

  const cloudSecurity = [
    { name: 'Cloudflare', svg: cloudflareIcon },
    { name: 'SSL Certificates', svg: sslIcon },
    { name: 'SEO & Speed Optimization', svg: seoIcon },
    { name: 'Java', svg: javaIcon }
  ];

  const hostingProviders = [
    { name: 'Bluehost', svg: bluehostIcon },
    { name: 'GoDaddy', svg: godaddyIcon },
    { name: 'Hostinger', svg: rubyIcon },
    { name: 'SiteGround', svg: rubyIcon },
    { name: 'HostGator', svg: hostgatorIcon },
    { name: 'AWS', svg: awsIcon },
    { name: 'Google Cloud', svg: googleCloudIcon },
    { name: 'Microsoft Azure', svg: azureIcon },
    { name: 'DigitalOcean', svg: digitaloceanIcon },
    { name: 'Linode', svg: linodeIcon }
  ];

  const databases = [
    { name: 'MySQL', svg: mysqlIcon },
    { name: 'PostgreSQL', svg: postgresqlIcon },
    { name: 'MongoDB', svg: mongodbIcon },
    { name: 'SQLite', svg: sqliteIcon },
    { name: 'Redis', svg: redisIcon },
    { name: 'Elasticsearch', svg: elasticsearchIcon },
    { name: 'Firebase', svg: firebaseIcon }
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
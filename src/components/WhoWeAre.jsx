import React from 'react';
import '../styles/whoweare.css';

const importIcon = (iconName) => {
  try {
    return require(`../assets/icons/${iconName}.svg`).default;
  } catch {
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
        { name: 'Angular', icon: 'ruby' },
        { name: 'Tailwind CSS', icon: 'ruby' },
        { name: 'jQuery', icon: 'ruby' },
        { name: 'Django', icon: 'ruby' },
        { name: 'Ruby on Rails', icon: 'ruby' }
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
      <h2 className="stack-title">OUR TECHNOLOGY STACK</h2>

      <div className="stack-grid">
        {categories.map((cat, i) => (
          <div className="stack-card" key={i}>
            <h3>{cat.title}</h3>

            <div className="stack-items">
              {cat.items.map((item, idx) => (
                <div className="stack-item" key={idx}>
                  <div className="icon-circle">
                    <img src={importIcon(item.icon)} alt={item.name} />
                  </div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeAreSection;

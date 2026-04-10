import React, { useEffect } from 'react';
import '../styles/whoweare.css';

// Import icons safely
const importIcon = (iconName) => {
  try {
    return require(`../assets/icons/${iconName}.svg`).default || require(`../assets/icons/${iconName}.svg`);
  } catch (e) {
    console.error(`Failed to load icon: ${iconName}`);
    return null;
  }
};

const WhoWeAreSection = () => {

  // Drag scroll (KEEP SAME)
  useEffect(() => {
    const sliders = document.querySelectorAll('.tech-scroll-row');

    sliders.forEach((slider) => {
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });

      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
      });

      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
      });

      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
      });
    });
  }, []);

  // ✅ ONLY ONE ROW WITH SELECTED CARDS
  const rows = [
    [
      {
        title: 'Programming Languages',
        items: [
          { name: 'Java', icon: 'java' },
          { name: 'JavaScript', icon: 'javascript' },
          { name: 'TypeScript', icon: 'typescript' },
          { name: 'Python', icon: 'python' },
          { name: 'C#' , icon: 'cpp'},
          { name: 'Php' , icon: 'php'},
        ]
      },
      {
        title: 'Frameworks & Development',
        items: [
          { name: 'React', icon: 'react' },
          { name: 'Next.js', icon: 'next' },
          { name: '.Net', icon: 'vue' },
          { name: 'Node.js', icon: 'node' },
          { name: 'SpringBoot', icon: 'springboot' }
        ]
      },
      {
        title: 'CMS & E-commerce',
        items: [
          { name: 'WordPress', icon: 'wordpress' },
          { name: 'Shopify', icon: 'shopify' },
          { name: 'WooCommerce', icon: 'woocommerce' }
        ]
      },
      {
        title: 'Cloud & Infrastructure',
        items: [
          { name: 'AWS', icon: 'aws' },
          { name: 'Docker', icon: 'docker' },
          { name: 'Google Cloud', icon: 'googlecloud' }
        ]
      },
      {
        title: 'AI & Automation',
        items: [
          { name: '.NET', icon: 'NET' },
          { name: 'Chatbots', icon: 'chatbots' },
          { name :'OpenAI', icon:'chatgpt'}
        ]
      }
    ]
  ];

  return (
    <section className="whoweare-section">
      <div className="whoweare-container">

        {/* Header */}
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

        {/* SINGLE ROW */}
        <div className="tech-rows-container">
          {rows.map((row, rowIndex) => {
            const duplicatedRow = Array(6).fill(row).flat(); // keep animation

            return (
              <div key={rowIndex} className="tech-scroll-row">
                <div className={`tech-cards-track tech-cards-track-1`}>
                  {duplicatedRow.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="tech-category-card">
                      <h3 className="category-title">{category.title}</h3>

                      <div className="tech-items-wrapper">
                        {category.items.map((tech, index) => (
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
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhoWeAreSection;
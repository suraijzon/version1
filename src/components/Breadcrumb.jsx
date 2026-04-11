import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/breadcrumb.css";

const breadcrumbMap = {
  "/ai-web-application-development": [
    { name: "Home", link: "/" },
    { name: "AI & Technology", link: "/ai-web-application-development" },
    { name: "AI Web Application Development" }
  ],

  "/website-maintenance-performance-security": [
    { name: "Home", link: "/" },
    { name: "UX & Interactive", link: "/website-maintenance-performance-security" },
    { name: "Website Maintenance" }
  ],

  "/ecommerce-development-optimization": [
    { name: "Home", link: "/" },
    { name: "UX & Interactive", link: "/ecommerce-development-optimization" },
    { name: "Ecommerce Development" }
  ],
  "/ai-website-design-development": [
    { name: "Home", link: "/" },
    { name: "UX & Interactive", link: "/ai-website-design-development" },
    { name: "AI Website Designing" }    
  ],

  "/seo-services": [
    { name: "Home", link: "/" },
    { name: "SEO & Lead Generation", link: "#" },
    { name: "SEO Strategy" }
  ],

  "/google-search-console": [
    { name: "Home", link: "/" },
    { name: "SEO & Lead Generation", link: "#" },
    { name: "Search Console Setup" }
  ],

  "/full-stack-web-development": [
    { name: "Home", link: "/" },
    { name: "UX & Interactive", link: "#" },
    { name: "Full Stack Web Development" }
  ],

  "/ai-software-development": [
    { name: "Home", link: "/" },
    { name: "AI & Technology", link: "#" },
    { name: "AI Software Development" }
  ],

  "/about": [
    { name: "Home", link: "/" },
    { name: "Who We Are", link: "#" },
    { name: "About Us" }
  ],

  "/contact": [
    { name: "Home", link: "/" },
    { name: "Who We Are", link: "#" },
    { name: "Contact Info" }
  ]
  
};

const Breadcrumb = () => {
  const location = useLocation();

  const crumbs = breadcrumbMap[location.pathname] || [
    { name: "Home", link: "/" },
    { name: "Page" }
  ];

  return (
    <div className="breadcrumb-wrap">
      <div className="breadcrumb-container">
        {crumbs.map((item, index) => (
          <React.Fragment key={index}>
            {item.link ? (
              <Link to={item.link}>{item.name}</Link>
            ) : (
              <span className="active">{item.name}</span>
            )}

            {index !== crumbs.length - 1 && <span>›</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
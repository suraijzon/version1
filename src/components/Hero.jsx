import React, { useState } from "react";
import "../styles/hero.css";
import heroImg from "../assets/icons/hero.png";   

const Hero = () => {

  const [website,setWebsite] = useState("");
  const [email,setEmail] = useState("");
   const [type,setType] = useState(0);
  return (

    <section className="hero-section" role="region" aria-label="Hero">
      <div className="hero-inner">
        <div className="hero-copy">

          <div className="hero-sub">
            <p>Outdated website? No online visibility? Struggling to keep up with AI trends?</p>
          </div>

          <div className="hero-sub2">
            <p>
              In today’s digital-first world, a slow website, poor SEO, or missing automation can stall
              your growth. Businesses are losing leads and conversions due to poor design and unoptimized
              experiences.
            </p>
          </div>

          {/* Website Input Search Bar */}
          
          <form
            className="hero-search-form"
            // onSubmit={(e) => {
            //   e.preventDefault();
            //   const website = e.target.elements.website.value;

            //   console.log("Website submitted:", website);
            //   alert(`Proposal request sent for: ${website}`);
            // }}
          >
            {(website == "" || type == 0) && 
            <input
              type="url"
              name="website"
              value={website}
              onChange={(e)=>{
                  setWebsite(e.target.value);
              }}
              className="hero-search-input"
              placeholder="Enter your website"
              required
            />
            }
             {((website != "" && email != "") || type >= 1) && 
            <input
              type="email"
              name="email"
              onChange={(e)=>{
                  setEmail(e.target.value);
              }}
              value={email}
              className="hero-search-input"
              placeholder="Enter your Email Address"
              required
            />
             }
            <button type="button" className="hero-search-btn" onClick={(e)=>{
              if (type == 0 && website != "")
              {
                setType(1);
              }
              else if (type == 1 && email != "")
              {
                setType(2);
              }
              
            }}>
              {(type == 0)?'Send me a Proposal!':'Send Proposal Request'}
            </button>
          </form>
        </div>

        <div className="hero-media" aria-hidden="false">
          <img src={heroImg} alt="Digital solutions illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

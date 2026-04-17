import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://zonzoctech.com";
const SITE_NAME = "ZonzocTech";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;
const DEFAULT_TWITTER = "@zonzoctech";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon3.png`,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: `${SITE_URL}/contact`,
  },
  sameAs: ["https://www.linkedin.com/company/zonzoctech"],
};

const SEO = ({
  title,
  description,
  path = "",
  image,
  type = "website",
  keywords,
  jsonLd,
  noindex = false,
}) => {
  const canonical = `${SITE_URL}${path}`;
  const ogImage = image || DEFAULT_IMAGE;

  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonical} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={DEFAULT_TWITTER} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Organization schema on every page */}
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>

      {/* Optional page-specific JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

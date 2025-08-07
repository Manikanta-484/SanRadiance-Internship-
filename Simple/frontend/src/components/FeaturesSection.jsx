import React from 'react';
import '../FeaturesSection.css';

const features = [
  {
    title: 'Instant Analytics',
    description: 'Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.',
  },
  {
    title: 'Metadata',
    description: 'Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.',
  },
  {
    title: 'SEO & Performance',
    description: 'Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.',
  },
  {
    title: 'Custom Code',
    description: 'Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.',
  },
  {
    title: 'Localization',
    description: 'Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.',
  },
  {
    title: 'Canonical URL',
    description: 'Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.',
  },
];

function FeaturesSection() {
  return (
    <section className="features-section">
      <h2 className="features-heading">Simple helps your teams work more efficiently together</h2>
      <div className="features-globe">
        <div className="globe-image"></div>
        <div className="location location-1">mark-w/website-tweaks<br /><span>Amsterdam, Netherlands</span></div>
        <div className="location location-2">mary-w/saas-website</div>
        <div className="location location-3">mary-w/new-redesign</div>
        <div className="location location-4">eric-wireframe-canvas<br /><span>London, UK</span></div>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;

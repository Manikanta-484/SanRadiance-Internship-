import React from 'react';
import '../ValueSection.css';

const values = [
  {
    icon: 'https://img.icons8.com/?size=100&id=bY5t0noHcfXn&format=png&color=000000',
    title: 'Fast Performance',
    description: 'We ensure blazing fast speeds for optimal user experience.',
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=63686&format=png&color=000000',
    title: 'Secure Platform',
    description: 'Your data is encrypted and securely stored.',
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=RntMFwIniVlj&format=png&color=000000',
    title: '24/7 Support',
    description: 'Our team is here to help you anytime, anywhere.',
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=19209&format=png&color=000000',
    title: 'Innovative Solutions',
    description: 'We continuously bring new ideas to the table.',
  },
];

function ValueSection() {
  return (
    <section className="value-section">
      <h2 className="value-title">Why Choose Us</h2>
      <div className="value-grid">
        {values.map((feature, index) => (
  <div className="value-card" key={index}>
    <img src={feature.icon} alt={feature.title} className="value-icon" />
    <h3>{feature.title}</h3>
    <p>{feature.description}</p>
  </div>
))}

      </div>
    </section>
  );
}

export default ValueSection;

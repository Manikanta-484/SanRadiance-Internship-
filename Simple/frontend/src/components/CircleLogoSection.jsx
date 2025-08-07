import React from 'react';
import '../CircleLogosSection.css';

const logos = [
   { name: 'GitHub', icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
   { name: 'Google', icon: 'https://cdn-icons-png.flaticon.com/512/281/281764.png' },
   { name: 'Slack', icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111615.png' },
   { name: 'Notion', icon: 'https://cdn-icons-png.flaticon.com/512/906/906324.png' },
   { name: 'Zapier', icon: 'https://cdn-icons-png.flaticon.com/512/906/906338.png' },
   { name: 'Linear', icon: 'https://cdn-icons-png.flaticon.com/512/5969/5969052.png' },
   { name: 'Wistia', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968841.png' },
   { name: 'WhatsApp', icon: 'https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000' },
   { name: 'Figma', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' }
];

const CircleLogosSection = () => {
   return (
      <section className="circle-logos">
         <div className="circle-container">
            {logos.map((logo, index) => (
               <div className="logo-item" key={index}>
                  <img src={logo.icon} alt={logo.name} />
               </div>
            ))}
            <div className="center-logo">
               <img src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000" alt="Main" />
            </div>
         </div>
      </section>
   );
};

export default CircleLogosSection;

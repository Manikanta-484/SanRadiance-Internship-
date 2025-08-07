import React from 'react';
import '../HeroSection.css';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [terminalText, setTerminalText] = useState('');
  const [currentCommand, setCurrentCommand] = useState(0);

  const commands = ['npm login', 'npm publish'];

  useEffect(() => {
    const command = commands[currentCommand];
    let index = 0;

    const typeCommand = () => {
      if (index < command.length) {
        setTerminalText(prev => prev + command[index]);
        index++;
        setTimeout(typeCommand, 100);
      } else {
        setTimeout(() => {
          if (currentCommand < commands.length - 1) {
            setTerminalText(prev => prev + '\n');
            setCurrentCommand(currentCommand + 1);
          }
        }, 2000);
      }
    };

    setTimeout(typeCommand, 1000);
  }, [currentCommand]);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="profile-icons">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src={`https://randomuser.me/api/portraits/thumb/men/${i + 1}.jpg`}
              alt="user"
              className="user-icon"
            />
          ))}
        </div>
        <h1>The website builder you're looking for</h1>
        <p>
          Simple is a modern website builder powered by AI that changes how companies create user interfaces together.
        </p>
        <div className="hero-buttons">
          <button className="start-free">Start Free Trial</button>
          <button className="learn-more">Learn More</button>
        </div>

        {/* ✅ Updated Terminal Section Below */}
        <div className="terminal-container">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="traffic-lights">
                <div className="light red"></div>
                <div className="light yellow"></div>
                <div className="light green"></div>
              </div>
              <div className="terminal-title">cruip.com</div>
              <div></div>
            </div>
            <div className="terminal-body">
              <div className="terminal-content">
                <div className="terminal-line">
                  <span className="prompt-symbol">$</span>
                  <span className="terminal-text">{terminalText}</span>
                  <span className="cursor"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="category-buttons">
          <button className="active">Startups</button>
          <button>Web Apps</button>
          <button>eCommerce</button>
          <button>Enterprise</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

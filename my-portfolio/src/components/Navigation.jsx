import React from 'react';

const Navigation = () => {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  const handleNavigation = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li key={section}>
            <button onClick={() => handleNavigation(section)}>
              {section}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

import { useState, useEffect } from 'react';

const techSkills = [
  { 
    category: 'Programming Languages', 
    skills: ['C', 'C++', 'Python', 'JavaScript', 'Java', 'Kotlin'],
    icon: '{ }'
  },
  { 
    category: 'Frontend Development', 
    skills: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS', 'Bootstrap'],
    icon: '</>'
  },
  { 
    category: 'Data Science & ML', 
    skills: ['Scikit-learn', 'Matplotlib', 'NumPy', 'Pandas', 'Seaborn', 'TensorFlow', 'Keras', 'OpenCV'],
    icon: '📊'
  },
  { 
    category: 'Backend Development', 
    skills: ['Node.js', 'Express.js', 'Django', 'REST APIs'],
    icon: '⚙️'
  },
  { 
    category: 'Database Systems', 
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'OracleDB', 'Firebase'],
    icon: '🗄️'
  },
  { 
    category: 'Cloud & DevOps', 
    skills: ['AWS', 'Google Cloud', 'Git', 'Docker', 'CI/CD'],
    icon: '☁️'
  },
  { 
    category: 'Development Tools', 
    skills: ['Visual Studio Code', 'Postman', 'Jupyter Notebook', 'Android Studio', 'Anaconda'],
    icon: '🛠️'
  },
  { 
    category: 'Computer Science Fundamentals', 
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Operating Systems', 'Computer Networks', 'Database Management'],
    icon: '🎓'
  }
];

const socialLinks = [
  { name: 'LinkedIn', url: '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { name: 'GitHub', url: '#', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
  { name: 'LeetCode', url: '#', icon: 'M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.857 2.133 8.046-.074l8.541-8.41c.292-.287.434-.667.434-1.046 0-.379-.142-.759-.434-1.046L19.1 3.334a1.375 1.375 0 0 0-.961-.438H13.483zm.961 2.518h3.693L8.596 12.061l-2.98-2.904L13.483 2.518z' },
  { name: 'Email', url: 'mailto:saniyamilindgupte@gmail.com', icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' }
];

export default function ProfessionalAbout() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showSkills, setShowSkills] = useState(false);
  
  const fullText = "Full-Stack Developer & AI Engineer";

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap');
      
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        overflow-x: hidden;
      }

      .professional-about {
        font-family: 'JetBrains Mono', monospace;
        background-color: #000000;
        color: #ffffff;
        min-height: 100vh;
        padding-top: 80px;
        background-image: 
          radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.1) 0%, transparent 70%),
          radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.05) 0%, transparent 70%);
      }

      .container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 2rem;
      }

      /* Animations */
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }

      @keyframes slideInFromLeft {
        0% { transform: translateX(-100px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }

      @keyframes slideInFromRight {
        0% { transform: translateX(100px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }

      @keyframes fadeInUp {
        0% { transform: translateY(50px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }

      @keyframes glow {
        0%, 100% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.4); }
        50% { box-shadow: 0 0 60px rgba(34, 197, 94, 0.8); }
      }

      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }

      .terminal-cursor {
        animation: blink 1s infinite;
      }

      .animate-slideInLeft {
        animation: slideInFromLeft 1.2s ease-out forwards;
      }

      .animate-slideInRight {
        animation: slideInFromRight 1.2s ease-out forwards;
      }

      .animate-fadeInUp {
        animation: fadeInUp 0.8s ease-out forwards;
      }

      .animate-glow {
        animation: glow 3s ease-in-out infinite;
      }

      .animate-pulse {
        animation: pulse 2s ease-in-out infinite;
      }

      .animate-float {
        animation: float 6s ease-in-out infinite;
      }

      .opacity-0 {
        opacity: 0;
      }

      /* Hero Section */
      .hero-section {
        min-height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4rem;
      }

      .hero-card {
        background: linear-gradient(145deg, rgba(15, 15, 15, 0.9) 0%, rgba(26, 26, 26, 0.9) 100%);
        backdrop-filter: blur(20px);
        border: 2px solid rgba(34, 197, 94, 0.3);
        border-radius: 24px;
        padding: 3rem;
        width: 100%;
        max-width: 1200px;
        position: relative;
        overflow: hidden;
      }

      .hero-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent 30%, rgba(34, 197, 94, 0.1) 50%, transparent 70%);
        pointer-events: none;
      }

      .hero-content {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 4rem;
        align-items: center;
        position: relative;
        z-index: 2;
      }

      @media (max-width: 1024px) {
        .hero-content {
          grid-template-columns: 1fr;
          gap: 2rem;
          text-align: center;
        }
      }

      /* Left Side - Info */
      .hero-info {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .terminal-window {
        background: linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 100%);
        border: 2px solid rgba(34, 197, 94, 0.4);
        border-radius: 16px;
        padding: 1.5rem;
        margin-bottom: 2rem;
      }

      .terminal-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1rem;
      }

      .terminal-dot {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }

      .terminal-dot.red { background-color: #ef4444; }
      .terminal-dot.yellow { background-color: #eab308; }
      .terminal-dot.green { background-color: #22c55e; }

      .terminal-path {
        margin-left: 1rem;
        color: #9ca3af;
        font-size: 1rem;
      }

      .terminal-content {
        color: #22c55e;
        line-height: 1.8;
        font-size: 1.1rem;
      }

      .terminal-prompt {
        color: #9ca3af;
      }

      .terminal-output {
        color: #ffffff;
        font-size: 1.2rem;
        font-weight: 600;
      }

      .terminal-role {
        color: #4ade80;
        font-size: 1.3rem;
        font-weight: 700;
      }

      .hero-details {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .hero-title {
        font-family: 'Inter', sans-serif;
        font-size: 3rem;
        font-weight: 900;
        background: linear-gradient(135deg, #ffffff 0%, #4ade80 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        line-height: 1.2;
      }

      .hero-subtitle {
        font-size: 1.5rem;
        color: #9ca3af;
        font-weight: 300;
        line-height: 1.4;
      }

      .hero-description {
        font-size: 1.2rem;
        color: #d1d5db;
        line-height: 1.6;
        font-family: 'Inter', sans-serif;
      }

      .contact-info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .contact-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.1rem;
        color: #d1d5db;
      }

      .contact-item a {
        color: inherit;
        text-decoration: none;
        transition: color 0.3s ease;
      }

      .contact-item a:hover {
        color: #4ade80;
      }

      .contact-icon {
        color: #22c55e;
        font-size: 1.2rem;
      }

      .social-links {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .social-link {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem 1.5rem;
        background: linear-gradient(145deg, #1f2937 0%, #111827 100%);
        border: 2px solid #374151;
        border-radius: 12px;
        text-decoration: none;
        color: #9ca3af;
        font-size: 1rem;
        font-weight: 500;
        transition: all 0.3s ease;
      }

      .social-link:hover {
        background: linear-gradient(145deg, #22c55e 0%, #16a34a 100%);
        border-color: #22c55e;
        color: #000000;
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(34, 197, 94, 0.4);
      }

      .social-link svg {
        width: 20px;
        height: 20px;
        fill: currentColor;
      }

      /* Right Side - Profile Image */
      .hero-image {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .profile-image-container {
        position: relative;
      }

      .profile-image {
        width: 300px;
        height: 300px;
        border-radius: 24px;
        background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
        border: 4px solid #22c55e;
        padding: 2px;
        position: relative;
      }

      .profile-image-inner {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #9ca3af;
        font-size: 1rem;
        text-align: center;
        flex-direction: column;
        gap: 1rem;
      }

      .profile-emoji {
        font-size: 4rem;
      }

      .profile-text {
        font-size: 1.2rem;
        font-weight: 600;
      }

      .profile-status {
        position: absolute;
        top: -12px;
        right: -12px;
        width: 36px;
        height: 36px;
        background-color: #22c55e;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 4px solid #000000;
      }

      .profile-status-dot {
        width: 12px;
        height: 12px;
        background-color: #000000;
        border-radius: 50%;
      }

      .availability-badge {
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
        color: #000000;
        padding: 0.75rem 1.5rem;
        border-radius: 25px;
        font-size: 0.9rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        box-shadow: 0 10px 30px rgba(34, 197, 94, 0.3);
      }

      .status-dot {
        width: 8px;
        height: 8px;
        background-color: #000000;
        border-radius: 50%;
      }

      /* Skills Section */
      .skills-section {
        margin-top: 6rem;
        padding: 4rem 0;
      }

      .section-divider {
        height: 2px;
        background: linear-gradient(to right, transparent, #22c55e, transparent);
        margin: 4rem 0;
      }

      .skills-header {
        text-align: center;
        margin-bottom: 4rem;
      }

      .skills-title {
        font-family: 'Inter', sans-serif;
        font-size: 3rem;
        font-weight: 900;
        background: linear-gradient(135deg, #ffffff 0%, #4ade80 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 1rem;
      }

      .skills-subtitle {
        font-size: 1.3rem;
        color: #9ca3af;
        font-weight: 300;
      }

      .skills-categories {
        display: flex;
        flex-direction: column;
        gap: 3rem;
      }

      .skill-category {
        background: linear-gradient(145deg, rgba(15, 15, 15, 0.8) 0%, rgba(26, 26, 26, 0.8) 100%);
        backdrop-filter: blur(10px);
        border: 2px solid rgba(34, 197, 94, 0.2);
        border-radius: 20px;
        padding: 2.5rem;
        animation-fill-mode: forwards;
      }

      .category-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2rem;
      }

      .category-icon {
        font-size: 2rem;
      }

      .category-title {
        font-family: 'Inter', sans-serif;
        font-size: 1.8rem;
        font-weight: 700;
        color: #ffffff;
      }

      .category-line {
        flex: 1;
        height: 2px;
        background: linear-gradient(to right, #22c55e, transparent);
      }

      .skills-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }

      @media (min-width: 768px) {
        .skills-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (min-width: 1024px) {
        .skills-grid {
          grid-template-columns: repeat(4, 1fr);
        }
      }

      .skill-tag {
        background: linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%);
        border: 2px solid rgba(34, 197, 94, 0.3);
        border-radius: 12px;
        padding: 1.2rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        color: #d1d5db;
      }

      .skill-tag:hover,
      .skill-tag.active {
        background: linear-gradient(145deg, #22c55e 0%, #16a34a 100%);
        border-color: #22c55e;
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(34, 197, 94, 0.4);
        color: #000000;
      }

      .skill-text {
        font-size: 1rem;
        font-weight: 600;
      }

      /* Scroll Animation */
      .scroll-reveal {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease;
      }

      .scroll-reveal.revealed {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => setIsLoaded(true), 100);
    
    // Type animation
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 120);

    // Scroll detection for skills section
    const handleScroll = () => {
      const skillsSection = document.querySelector('.skills-section');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.7;
        setShowSkills(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.head.removeChild(style);
      clearInterval(typeInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="professional-about">
      <div className="container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className={`hero-card ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="hero-content">
              
              {/* Left Side - Info */}
              <div className="hero-info">
                
                {/* Terminal */}
                <div className="terminal-window animate-float">
                  <div className="terminal-header">
                    <div className="terminal-dot red"></div>
                    <div className="terminal-dot yellow"></div>
                    <div className="terminal-dot green"></div>
                    <span className="terminal-path">~/developer/about</span>
                  </div>
                  <div className="terminal-content">
                    <span className="terminal-prompt">$</span> whoami
                    <br />
                    <span className="terminal-output">Saniya Gupte</span>
                    <br />
                    <span className="terminal-prompt">$</span> echo $ROLE
                    <br />
                    <span className="terminal-role">{typedText}</span>
                    <span className="terminal-cursor terminal-role">|</span>
                  </div>
                </div>

                {/* Main Info */}
                <div className="hero-details">
                  <h1 className="hero-title">Building Tomorrow's Tech</h1>
                  <p className="hero-subtitle">Crafting innovative solutions with code & creativity</p>
                  <p className="hero-description">
                    Passionate software engineer specializing in full-stack development, 
                    artificial intelligence, and scalable system architecture. Turning 
                    complex problems into elegant digital solutions.
                  </p>
                </div>

                {/* Contact */}
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <a href="mailto:saniyamilindgupte@gmail.com">
                      saniyamilindgupte@gmail.com
                    </a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📱</span>
                    <a href="tel:+918698748211">
                      +91 8698748211
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="social-links">
                  {socialLinks.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.url}
                      className="social-link"
                    >
                      <svg viewBox="0 0 24 24">
                        <path d={link.icon} />
                      </svg>
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Side - Profile Image */}
              <div className="hero-image">
                <div className="profile-image-container">
                  <div className="profile-image animate-glow">
                    <div className="profile-image-inner">
                      <div className="profile-emoji">👨‍💻</div>
                      <div className="profile-text">Software Engineer</div>
                    </div>
                  </div>
                  <div className="profile-status">
                    <div className="profile-status-dot animate-pulse"></div>
                  </div>
                  <div className="availability-badge">
                    <div className="status-dot animate-pulse"></div>
                    <span>Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="section-divider"></div>

        {/* Skills Section */}
        <div className={`skills-section scroll-reveal ${showSkills ? 'revealed' : ''}`}>
          <div className="skills-header">
            <h2 className="skills-title">Technical Arsenal</h2>
            <p className="skills-subtitle">Tools & technologies I work with</p>
          </div>

          <div className="skills-categories">
            {techSkills.map((category, categoryIndex) => (
              <div 
                key={category.category}
                className={`skill-category scroll-reveal ${showSkills ? 'revealed' : ''}`}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-title">{category.category}</h3>
                  <div className="category-line"></div>
                </div>
                
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`skill-tag ${activeSkill === skill ? 'active' : ''}`}
                      onMouseEnter={() => setActiveSkill(skill)}
                      onMouseLeave={() => setActiveSkill(null)}
                    >
                      <div className="skill-text">{skill}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
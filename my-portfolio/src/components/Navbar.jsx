import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'About', path: '/' },
  { name: 'Experience', path: '/experience' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Projects', path: '/projects' },
];

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    background: 'rgba(0, 0, 0, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(34, 197, 94, 0.3)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '16px 24px',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: '24px',
    fontWeight: '900',
    background: 'linear-gradient(to right, #4ade80, #86efac)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    cursor: 'pointer',
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  navLink: {
    position: 'relative',
    padding: '12px 24px',
    fontSize: '18px',
    fontWeight: '700',
    letterSpacing: '0.05em',
    textDecoration: 'none',
    borderRadius: '8px',
    border: '2px solid transparent',
    transition: 'all 0.3s ease',
    display: 'block',
  },
  navLinkActive: {
    color: '#000',
    background: '#4ade80',
    boxShadow: '0 10px 25px rgba(74, 222, 128, 0.5)',
  },
  navLinkInactive: {
    color: '#86efac',
  },
  navLinkHover: {
    color: '#4ade80',
    borderColor: 'rgba(74, 222, 128, 0.5)',
    transform: 'scale(1.05)',
    boxShadow: '0 20px 40px rgba(74, 222, 128, 0.25)',
  },
  hoverBackground: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to right, rgba(34, 197, 94, 0.2), rgba(74, 222, 128, 0.2))',
    borderRadius: '8px',
    opacity: 0,
  },
  activeIndicator: {
    position: 'absolute',
    bottom: '-4px',
    left: '50%',
    width: '8px',
    height: '8px',
    background: '#4ade80',
    borderRadius: '50%',
    boxShadow: '0 0 10px rgba(74, 222, 128, 0.75)',
    transform: 'translateX(-50%)',
  },
  glowBorder: {
    position: 'absolute',
    inset: 0,
    borderRadius: '8px',
    border: '2px solid transparent',
    transition: 'all 0.2s ease',
  },
  mobileMenu: {
    display: 'none',
    flexDirection: 'column',
    gap: '4px',
    cursor: 'pointer',
    padding: '8px',
  },
  menuLine: {
    width: '24px',
    height: '2px',
    background: '#4ade80',
  },
  gradientLine: {
    height: '1px',
    background: 'linear-gradient(to right, transparent, rgba(74, 222, 128, 0.5), transparent)',
  },
};

// Mobile styles
const mobileStyles = `
  @media (max-width: 768px) {
    .mobile-menu {
      display: flex !important;
    }
    .desktop-nav {
      display: none !important;
    }
  }
`;

export default function Navbar() {
  const location = useLocation();

  const handleNavLinkHover = (e, isHover) => {
    if (isHover) {
      Object.assign(e.target.style, styles.navLinkHover);
      const hoverBg = e.target.querySelector('.hover-bg');
      if (hoverBg) hoverBg.style.opacity = '1';
      const glowBorder = e.target.querySelector('.glow-border');
      if (glowBorder) {
        glowBorder.style.borderColor = 'rgba(74, 222, 128, 0.6)';
        glowBorder.style.boxShadow = '0 0 20px rgba(74, 222, 128, 0.3)';
      }
    } else {
      if (location.pathname !== e.target.getAttribute('data-path')) {
        Object.assign(e.target.style, styles.navLinkInactive);
        e.target.style.transform = 'scale(1)';
        e.target.style.borderColor = 'transparent';
        e.target.style.boxShadow = 'none';
      }
      const hoverBg = e.target.querySelector('.hover-bg');
      if (hoverBg) hoverBg.style.opacity = '0';
      const glowBorder = e.target.querySelector('.glow-border');
      if (glowBorder) {
        glowBorder.style.borderColor = 'transparent';
        glowBorder.style.boxShadow = 'none';
      }
    }
  };

  return (
    <>
      <style>{mobileStyles}</style>
      <motion.nav 
        style={styles.navbar}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div style={styles.container}>
          <div style={styles.content}>
            {/* Logo/Brand */}
            <motion.div 
              style={styles.logo}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              PORTFOLIO
            </motion.div>

            {/* Navigation Items */}
            <div style={styles.navContainer} className="desktop-nav">
              {navItems.map(({ name, path }, index) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  style={{ position: 'relative' }}
                >
                  <NavLink
                    to={path}
                    data-path={path}
                    style={{
                      ...styles.navLink,
                      ...(location.pathname === path ? styles.navLinkActive : styles.navLinkInactive)
                    }}
                    onMouseEnter={(e) => handleNavLinkHover(e, true)}
                    onMouseLeave={(e) => handleNavLinkHover(e, false)}
                  >
                    <span style={{ position: 'relative', zIndex: 10 }}>{name}</span>
                    
                    {/* Hover effect background */}
                    <motion.div
                      className="hover-bg"
                      style={styles.hoverBackground}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    
                    {/* Active indicator */}
                    {location.pathname === path && (
                      <motion.div
                        style={styles.activeIndicator}
                        layoutId="activeIndicator"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    
                    {/* Glowing border effect on hover */}
                    <motion.div
                      className="glow-border"
                      style={styles.glowBorder}
                      transition={{ duration: 0.2 }}
                    />
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Mobile menu indicator */}
            <motion.div 
              style={styles.mobileMenu}
              className="mobile-menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div style={styles.menuLine}></div>
              <div style={styles.menuLine}></div>
              <div style={styles.menuLine}></div>
            </motion.div>
          </div>
        </div>
        
        {/* Subtle gradient line at bottom */}
        <div style={styles.gradientLine}></div>
      </motion.nav>
    </>
  );
}
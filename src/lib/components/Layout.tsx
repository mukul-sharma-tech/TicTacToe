import React from 'react';
import { LayoutProps } from '../types';
import { colors } from '../theme';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const layoutStyle: React.CSSProperties = {
    minHeight: '100vh',
    width: '100%',
    background: `linear-gradient(135deg, ${colors.background.dark} 0%, ${colors.background.light} 100%)`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 1rem',
    position: 'relative',
    overflow: 'hidden',
  };

  const backgroundCircleOne: React.CSSProperties = {
    position: 'absolute',
    bottom: '-10%',
    left: '-5%',
    width: '30%',
    height: '40%',
    borderRadius: '50%',
    background: `radial-gradient(circle, ${colors.secondary[600]} 0%, transparent 70%)`,
    opacity: 0.3,
    zIndex: 0,
  };

  const backgroundCircleTwo: React.CSSProperties = {
    position: 'absolute',
    top: '-10%',
    right: '-5%',
    width: '30%',
    height: '40%',
    borderRadius: '50%',
    background: `radial-gradient(circle, ${colors.primary[700]} 0%, transparent 70%)`,
    opacity: 0.3,
    zIndex: 0,
  };

  const contentStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    maxWidth: '500px',
  };

  // Add global styles for fonts
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap');
      body {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        color: white;
      }
      * {
        box-sizing: border-box;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={layoutStyle}>
      <div style={backgroundCircleOne}></div>
      <div style={backgroundCircleTwo}></div>
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
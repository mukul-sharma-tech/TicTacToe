import React from 'react';
import { CardProps } from '../types';
import { colors, borderRadius } from '../theme';

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  // Base styles for all cards
  const baseStyles: React.CSSProperties = {
    borderRadius: borderRadius['2xl'],
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  };

  // Variant-specific styles
  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      border: `1px solid rgba(255, 255, 255, 0.1)`,
      padding: '2rem',
    },
    elevated: {
      backgroundColor: 'rgba(255, 255, 255, 0.07)',
      backdropFilter: 'blur(10px)',
      border: `1px solid rgba(255, 255, 255, 0.1)`,
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      padding: '2rem',
    },
    outlined: {
      backgroundColor: 'transparent',
      border: `2px solid ${colors.primary[700]}`,
      padding: '2rem',
    },
  };

  const style = {
    ...baseStyles,
    ...variantStyles[variant],
  };

  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};

export default Card;
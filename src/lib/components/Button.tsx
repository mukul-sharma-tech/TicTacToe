import React from 'react';
import { ButtonProps } from '../types';
import { colors, transitions } from '../theme';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  type = 'button',
}) => {
  // Base styles
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.5rem',
    fontWeight: 500,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: transitions.DEFAULT,
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.6 : 1,
  };

  // Size styles
  const sizeStyles: Record<string, React.CSSProperties> = {
    small: {
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
    },
    medium: {
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
    },
    large: {
      padding: '1rem 2rem',
      fontSize: '1.125rem',
    },
  };

  // Variant styles
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: colors.secondary[500],
      color: colors.white,
      border: 'none',
      boxShadow: '0 4px 6px rgba(249, 115, 22, 0.25)',
      '&:hover': {
        backgroundColor: colors.secondary[600],
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 8px rgba(249, 115, 22, 0.3)',
      },
    },
    secondary: {
      backgroundColor: 'transparent',
      color: colors.secondary[500],
      border: `2px solid ${colors.secondary[500]}`,
      '&:hover': {
        backgroundColor: colors.secondary[50],
        transform: 'translateY(-2px)',
      },
    },
    text: {
      backgroundColor: 'transparent',
      color: colors.secondary[500],
      border: 'none',
      padding: '0.5rem',
      '&:hover': {
        backgroundColor: colors.secondary[50],
        textDecoration: 'underline',
      },
    },
  };

  // Combine styles
  const style = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  // Inline styles for hover (since we can't use pseudo-classes in inline styles)
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && variantStyles[variant]['&:hover']) {
      Object.entries(variantStyles[variant]['&:hover'] as Record<string, any>).forEach(([key, value]) => {
        (e.currentTarget.style as any)[key] = value;
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      Object.keys(variantStyles[variant]['&:hover'] as Record<string, any>).forEach((key) => {
        (e.currentTarget.style as any)[key] = (variantStyles[variant] as any)[key] || '';
      });
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;
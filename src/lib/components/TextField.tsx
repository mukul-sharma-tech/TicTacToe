import React from 'react';
import { TextFieldProps } from '../types';
import { colors, borderRadius, fontSize, fontFamily, transitions } from '../theme';

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  required = false,
  error,
  disabled = false,
  fullWidth = true,
}) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: fullWidth ? '100%' : '300px',
    marginBottom: '1.5rem',
  };

  const labelStyle: React.CSSProperties = {
    marginBottom: '0.5rem',
    fontSize: fontSize.sm,
    fontFamily: fontFamily.sans,
    color: colors.white,
    fontWeight: 500,
  };

  const inputStyle: React.CSSProperties = {
    padding: '0.75rem 1rem',
    borderRadius: borderRadius.lg,
    border: `1px solid ${error ? colors.error : 'rgba(255, 255, 255, 0.2)'}`,
    background: 'rgba(255, 255, 255, 0.05)',
    color: colors.white,
    fontSize: fontSize.base,
    fontFamily: fontFamily.sans,
    width: '100%',
    transition: transitions.DEFAULT,
    outline: 'none',
    backdropFilter: 'blur(5px)',
  };

  const errorStyle: React.CSSProperties = {
    color: colors.error,
    fontSize: fontSize.xs,
    marginTop: '0.25rem',
    fontFamily: fontFamily.sans,
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  // Inline styles for focus (since we can't use pseudo-classes in inline styles)
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) {
      e.target.style.borderColor = colors.primary[400];
      e.target.style.boxShadow = `0 0 0 2px ${colors.primary[400]}40`;
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) {
      e.target.style.borderColor = error ? colors.error : 'rgba(255, 255, 255, 0.2)';
      e.target.style.boxShadow = 'none';
    }
  };

  return (
    <div style={containerStyle}>
      <label htmlFor={id} style={labelStyle}>
        {label} {required && <span style={{ color: colors.error }}>*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        style={inputStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
};

export default TextField;
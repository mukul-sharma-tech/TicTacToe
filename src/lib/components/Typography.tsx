import React from 'react';
import { TypographyProps } from '../types';
import { textStyles } from '../theme';

const Typography: React.FC<TypographyProps> = ({
  children,
  variant,
  color,
  className = '',
}) => {
  const style = {
    ...textStyles[variant],
    color: color,
  };

  let Component: keyof JSX.IntrinsicElements;

  switch (variant) {
    case 'h1':
      Component = 'h1';
      break;
    case 'h2':
      Component = 'h2';
      break;
    case 'h3':
      Component = 'h3';
      break;
    case 'h4':
      Component = 'h4';
      break;
    case 'subtitle1':
    case 'subtitle2':
      Component = 'h6';
      break;
    case 'button':
      Component = 'span';
      break;
    case 'caption':
      Component = 'span';
      break;
    default:
      Component = 'p';
  }

  return (
    <Component
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
};

export default Typography;
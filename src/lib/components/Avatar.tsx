import React from 'react';
import { AvatarProps } from '../types';
import { colors, borderRadius } from '../theme';

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 'medium',
  fallback,
}) => {
  // Size mapping
  const sizeMap = {
    small: 32,
    medium: 48,
    large: 64,
  };

  const pixelSize = sizeMap[size];

  // Styles
  const containerStyle: React.CSSProperties = {
    width: `${pixelSize}px`,
    height: `${pixelSize}px`,
    borderRadius: borderRadius.full,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray[200],
    border: `2px solid ${colors.white}`,
  };

  const imgStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const fallbackStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary[600],
    color: colors.white,
    fontSize: Math.floor(pixelSize / 2.5),
    fontWeight: 500,
  };

  // Function to generate initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div style={containerStyle}>
      {src ? (
        <img src={src} alt={alt} style={imgStyle} />
      ) : (
        <div style={fallbackStyle}>
          {fallback ? getInitials(fallback) : '?'}
        </div>
      )}
    </div>
  );
};

export default Avatar;
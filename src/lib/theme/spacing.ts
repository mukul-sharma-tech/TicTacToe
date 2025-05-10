// Base spacing unit (8px)
const BASE = 8;

export const spacing = {
  0: '0',
  0.5: `${BASE / 16}rem`,  // 4px
  1: `${BASE / 8}rem`,     // 8px
  2: `${BASE / 4}rem`,     // 16px
  3: `${BASE / 2.67}rem`,  // 24px
  4: `${BASE / 2}rem`,     // 32px
  5: `${BASE / 1.6}rem`,   // 40px
  6: `${BASE / 1.33}rem`,  // 48px
  8: `${BASE}rem`,         // 64px
  10: `${BASE * 1.25}rem`, // 80px
  12: `${BASE * 1.5}rem`,  // 96px
  16: `${BASE * 2}rem`,    // 128px
  20: `${BASE * 2.5}rem`,  // 160px
  24: `${BASE * 3}rem`,    // 192px
  32: `${BASE * 4}rem`,    // 256px
};

export const borderRadius = {
  none: '0',
  sm: '0.125rem',    // 2px
  DEFAULT: '0.25rem', // 4px
  md: '0.375rem',     // 6px
  lg: '0.5rem',       // 8px
  xl: '0.75rem',      // 12px
  '2xl': '1rem',      // 16px
  '3xl': '1.5rem',    // 24px
  full: '9999px',
};
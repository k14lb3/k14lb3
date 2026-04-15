import * as stylex from '@stylexjs/stylex';

const pulse = stylex.keyframes({
  '50%': {
    opacity: 0.5,
  },
});

const wiggle = stylex.keyframes({
  '0%, 100%': {
    transform: 'rotate(0deg)',
  },
  '50%': {
    transform: 'rotate(10deg)',
  },
});

const bounce = stylex.keyframes({
  '0%, 100%': {
    transform: 'translateY(-10%)',
    animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
  },
  '50%': {
    transform: 'translateY(0)',
    animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
  },
});

const spin = stylex.keyframes({
  to: {
    transform: 'rotate(360deg)',
  },
});

const shake = stylex.keyframes({
  '0%, 100%': {
    transform: 'translateX(0)',
  },
  '25%': {
    transform: 'translateX(-0.1rem)',
  },
  '75%': {
    transform: 'translateX(0.071rem)',
  },
});

export const animations = stylex.defineConsts({
  pulse,
  wiggle,
  bounce,
  spin,
  shake,
});

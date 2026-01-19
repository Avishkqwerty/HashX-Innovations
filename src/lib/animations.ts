import type { Variants } from 'motion/react';

/**
 * Fade In + Slide Up Animation
 * Perfect for hero sections, headings, and main content
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

/**
 * Staggered container for sequential animations
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

/**
 * Stagger item - use with staggerContainer
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

/**
 * Fade In animation
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

/**
 * Scale + Fade In animation for cards and elements
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 }
  }
};

/**
 * Slide In from Left
 */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

/**
 * Slide In from Right
 */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

/**
 * Hover animation for buttons - subtle scale
 */
export const hoverButtonScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2 }
};

/**
 * Hover animation for cards - lift effect
 */
export const hoverCardLift = {
  whileHover: { y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' },
  transition: { duration: 0.3 }
};

/**
 * Shimmer animation for loading states
 */
export const shimmer: Variants = {
  initial: { backgroundPosition: '0% 0%' },
  animate: {
    backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
};

/**
 * Rotate animation for spinning icons
 */
export const rotateInfinite = {
  animate: {
    rotate: 360,
    transition: {
      duration: 3,
      repeat: Infinity
    }
  }
};

/**
 * Bounce animation for CTAs
 */
export const bounce: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity
    }
  }
};

/**
 * Pulse animation for emphasis
 */
export const pulse: Variants = {
  animate: {
    opacity: [1, 0.7, 1],
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
};

/**
 * Container for staggered list items
 */
export const listContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

/**
 * List item animation
 */
export const listItem: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  }
};

/**
 * Slide down animation for menus/dropdowns
 */
export const slideDown: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 }
  }
};

/**
 * Icon pulse for attention
 */
export const iconPulse = {
  animate: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

/**
 * Glow effect for premium feel
 */
export const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(97, 91, 234, 0.3)',
      '0 0 40px rgba(97, 91, 234, 0.6)',
      '0 0 20px rgba(97, 91, 234, 0.3)'
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

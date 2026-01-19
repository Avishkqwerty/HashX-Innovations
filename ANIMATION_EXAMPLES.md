# Animation Examples - Quick Reference Guide

## 1. Import Animations

```tsx
import { motion } from 'motion/react';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  fadeIn,
  scaleIn,
  slideInLeft,
  slideInRight,
  hoverButtonScale,
  hoverCardLift,
  listContainer,
  listItem,
  slideDown
} from '@/lib/animations';
```

## 2. Common Patterns

### Pattern 1: Fade In on Page Load

```tsx
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Hello World
</motion.h1>
```

### Pattern 2: Staggered Entrance (Children appear one by one)

```tsx
<motion.div
  variants={staggerContainer}
  initial="hidden"
  animate="visible"
>
  <motion.h2 variants={staggerItem}>Title</motion.h2>
  <motion.p variants={staggerItem}>Description</motion.p>
  <motion.button variants={staggerItem}>CTA</motion.button>
</motion.div>
```

### Pattern 3: Entrance on Scroll (Viewport Trigger)

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
>
  This appears when scrolled into view
</motion.div>
```

### Pattern 4: Hover Effects

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  Hover Me
</motion.button>
```

### Pattern 5: Animated Lists

```tsx
<motion.ul
  variants={listContainer}
  initial="hidden"
  animate="visible"
>
  {items.map((item) => (
    <motion.li key={item.id} variants={listItem}>
      {item.text}
    </motion.li>
  ))}
</motion.ul>
```

## 3. Animation Timing Guide

- **Entrance animations:** 0.4s - 0.8s
- **Micro-interactions:** 0.1s - 0.3s
- **State transitions:** 0.2s - 0.5s
- **Complex sequences:** 0.6s - 1.2s (with stagger delays)

## 4. Easing Presets

- `easeOut`: Fast entrance, slow end (recommended for entrances)
- `easeIn`: Slow start, fast end (recommended for exits)
- `easeInOut`: Smooth both ways (recommended for hovers)
- `linear`: Consistent speed (recommended for continuous animations)

Example with custom easing:

```tsx
<motion.div
  animate={{ x: 100 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
/>
```

## 5. Combining Animations

Entrance + Hover Effect Example:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
>
  Card with entrance + hover
</motion.div>
```

## 6. Staggered Grid Animations

```tsx
<div className="grid grid-cols-3 gap-4">
  {items.map((item, index) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      {item.content}
    </motion.div>
  ))}
</div>
```

## 7. Continuous Animations

### Pulsing Effect

```tsx
<motion.div
  animate={{ opacity: [1, 0.7, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  Pulsing Element
</motion.div>
```

### Rotating Animation

```tsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
>
  Rotating Icon
</motion.div>
```

### Bouncing Animation

```tsx
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 1.5, repeat: Infinity }}
>
  Bouncing Element
</motion.div>
```

## 8. Modal/Dialog Animations

```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.9 }}
  transition={{ duration: 0.2 }}
>
  Modal Content
</motion.div>
```

## 9. Page Transition Animations

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
  Page Content
</motion.div>
```

## 10. Responsive Animations

Adjust timing for mobile:

```tsx
const duration = window.innerWidth < 768 ? 0.3 : 0.6;

<motion.div
  animate={{ y: 20 }}
  transition={{ duration }}
/>
```

## Useful Properties

- **opacity**: 0 - 1
- **scale**: 0 - 1 (0.5 = 50% size)
- **rotate**: degrees (360 = full rotation)
- **x/y**: pixels or percentage
- **skewX/skewY**: degrees
- **borderRadius**: pixels or percentage
- **boxShadow**: shadow string
- **backgroundColor**: color value
- **color**: color value

## Viewport Animation Settings

```tsx
viewport={{ 
  once: true,        // Only animate once (default: false)
  amount: 0.3        // Trigger when 30% visible (0-1)
}}
```

Common amounts:
- `0`: Trigger when any part enters
- `0.3`: Trigger when 30% is visible (default for sections)
- `0.5`: Trigger when 50% is visible
- `1`: Trigger when fully visible

## Complete Card Component Example

```tsx
export function AnimatedCard({ title, description }) {
  return (
    <motion.div
      className="bg-white rounded-lg p-6 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
    >
      <motion.h3
        className="text-xl font-bold mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        {title}
      </motion.h3>
      
      <motion.p
        className="text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {description}
      </motion.p>
      
      <motion.button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        Learn More
      </motion.button>
    </motion.div>
  );
}
```

## Debugging Animations

To slow down animations during development:

```tsx
<motion.div
  transition={{ ...myTransition, duration: myTransition.duration * 3 }}
>
  Slower animation for testing
</motion.div>
```

Use Chrome DevTools → More Tools → Rendering → Painting flashing to see which elements are being animated.

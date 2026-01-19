# Animation Cheat Sheet - Quick Reference

## 🎬 Import Statement (Always Use)
```tsx
import { motion } from 'motion/react';
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem,
  hoverButtonScale 
} from '@/lib/animations';
```

## 📌 Most Common Patterns

### Pattern 1️⃣ - Page Load Entrance
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content fades in and slides up
</motion.div>
```

### Pattern 2️⃣ - Entrance on Scroll
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
>
  Animates when scrolled into view
</motion.div>
```

### Pattern 3️⃣ - Hover Animation
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  Hover and click me
</motion.button>
```

### Pattern 4️⃣ - Staggered List (Everything Appears Sequentially)
```tsx
<motion.ul
  variants={staggerContainer}
  initial="hidden"
  animate="visible"
>
  {items.map(item => (
    <motion.li key={item.id} variants={staggerItem}>
      {item.text}
    </motion.li>
  ))}
</motion.ul>
```

### Pattern 5️⃣ - Grid with Staggered Timing (Delay Each Item)
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

### Pattern 6️⃣ - Continuous Animation (Looping)
```tsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
>
  Spinning icon
</motion.div>
```

### Pattern 7️⃣ - Preset-Based (Use Animations File)
```tsx
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <motion.h1 variants={fadeInUp}>Title</motion.h1>
  <motion.p variants={fadeInUp}>Description</motion.p>
  <motion.button variants={fadeInUp}>CTA</motion.button>
</motion.div>
```

## ⚡ Quick Timing Guide

**Fast (Micro-interactions)**
- Duration: 0.1 - 0.2s
- Use for: Hover effects, button clicks, small transitions
```tsx
transition={{ duration: 0.2 }}
```

**Standard (Default)**
- Duration: 0.4 - 0.6s
- Use for: Page entrances, card animations, state changes
```tsx
transition={{ duration: 0.5 }}
```

**Slow (Large Movements)**
- Duration: 0.8 - 1.2s
- Use for: Full page transitions, complex animations
```tsx
transition={{ duration: 1 }}
```

**Continuous (Looping)**
- Duration: 2 - 5s
- Use for: Infinite animations, indicators
```tsx
transition={{ duration: 3, repeat: Infinity }}
```

## 🎨 Easing Functions

```tsx
// Recommended defaults:
ease: 'easeOut'      // ← Fast start, slow end (ENTRANCES)
ease: 'easeIn'       // ← Slow start, fast end (EXITS)
ease: 'easeInOut'    // ← Slow both ends (HOVERS)
ease: 'linear'       // ← Constant speed (CONTINUOUS)
```

## 🎯 Available Animation Variables

**Opacity** (0 = invisible, 1 = visible)
```tsx
animate={{ opacity: 0.5 }}
```

**Scale** (1 = normal, 0.5 = 50%, 1.5 = 150%)
```tsx
whileHover={{ scale: 1.1 }}
```

**Position** (x, y in pixels)
```tsx
animate={{ x: 100, y: 50 }}
```

**Rotation** (degrees)
```tsx
animate={{ rotate: 360 }}
```

**Color**
```tsx
animate={{ backgroundColor: '#615BEA' }}
```

**Shadow**
```tsx
whileHover={{ boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
```

## 📱 Viewport Settings (When to Trigger)

```tsx
viewport={{ 
  once: true,      // Only animate once (set to false for repeat)
  amount: 0.3      // Trigger when 30% visible (0 = any, 1 = fully)
}}

// Common amounts:
amount: 0       // Trigger immediately when entering viewport
amount: 0.3     // Trigger when 30% visible (default for sections)
amount: 0.5     // Trigger when 50% visible
amount: 1       // Trigger when fully visible
```

## ✨ 10-Second Template (Copy & Paste)

```tsx
import { motion } from 'motion/react';

<motion.div
  initial={{ opacity: 0, y: 20 }}           // Start state
  whileInView={{ opacity: 1, y: 0 }}        // When visible
  whileHover={{ scale: 1.05 }}              // On hover
  viewport={{ once: true, amount: 0.3 }}    // Viewport trigger
  transition={{ duration: 0.5 }}             // How fast
>
  Your content here
</motion.div>
```

## 🚨 Common Mistakes to Avoid

❌ **Don't:**
- Forget `viewport={{ once: true }}` (will re-animate on scroll)
- Use long durations for small interactions (use 0.2s max)
- Animate position without using transform (performance issue)
- Skip transition timing (animations will be instant)

✅ **Do:**
- Always set viewport with `once: true` for page load animations
- Use 0.2-0.3s for micro-interactions
- Use opacity and scale (GPU-accelerated)
- Set appropriate duration based on animation size

## 📊 Animation Checklist

When adding animations to a component:

- [ ] Import `motion` from 'motion/react'
- [ ] Import animation presets from '@/lib/animations'
- [ ] Add `initial` state
- [ ] Add `animate` or `whileInView` target
- [ ] Add `viewport={{ once: true, amount: 0.3 }}` for scroll
- [ ] Set `transition` duration
- [ ] Test on mobile
- [ ] Check performance (should be smooth 60fps)
- [ ] Ensure animation doesn't block interaction

## 🔗 File Locations

- **Animation Presets:** `src/lib/animations.ts`
- **Code Examples:** `src/lib/ANIMATION_EXAMPLES.tsx`
- **Full Guide:** `ANIMATIONS_GUIDE.md`
- **Change Summary:** `ANIMATION_CHANGES.md`

## 🎬 Test Your Animation

To debug animations:
1. Slow down in Chrome DevTools: `Ctrl+Shift+P` → "Slow down"
2. Use React DevTools to inspect motion props
3. Check "Rendering" tab for paint flashing
4. Use `console.time()` to measure performance

## 💡 Pro Tips

1. **Stagger delay formula:** `delay: index * 0.1` (each item 100ms apart)
2. **Combine animations:** `whileInView` + `whileHover` work together
3. **Preset reuse:** Always use presets from `animations.ts`
4. **Mobile first:** Test animations look good on mobile
5. **Group animations:** Use `staggerContainer` for better control

---

**Remember:** Good animations are smooth, fast, and purposeful. When in doubt, keep it simple! 🚀

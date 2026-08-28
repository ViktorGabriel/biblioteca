---
name: modern-css
description: >-
  Modern CSS styling guidelines, CSS variables design systems, fluid responsive layouts,
  Glassmorphism, Dark/Light mode theming, and polished micro-interactions.
---

# Modern CSS & Design System Skill

This skill guides the implementation of premium, responsive, and maintainable CSS.

## Core Directives

### 1. CSS Custom Properties (Variables) & Theming
Define all design tokens in `:root` and support Dark Mode seamlessly with `data-theme` or `prefers-color-scheme`.

```css
:root {
  --primary: #4f46e5;
  --primary-hover: #4338ca;
  --success: #10b981;
  --danger: #ef4444;
  --bg-main: #f8fafc;
  --card-bg: #ffffff;
  --text-primary: #0f172a;
  --text-secondary: #64748b;
  --border-color: #e2e8f0;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --radius-md: 12px;
  --transition-base: 0.2s ease-in-out;
}

[data-theme="dark"] {
  --bg-main: #0b0f19;
  --card-bg: #1e293b;
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --border-color: #334155;
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.5);
}
```

### 2. Fluid & Responsive Grid
Use auto-fill minmax without fixed heights to prevent text overflow.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}
```

### 3. Glassmorphism & Micro-Interactions
- Subtle backdrop filters (`backdrop-filter: blur(8px)`).
- Smooth hover elevation (`transform: translateY(-4px)` with gentle box-shadow transitions).
- Active button press states (`transform: scale(0.98)`).

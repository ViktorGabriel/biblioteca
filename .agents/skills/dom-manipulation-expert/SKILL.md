---
name: dom-manipulation-expert
description: >-
  Expert guidelines for high-performance, secure, and clean DOM manipulation in Vanilla JS,
  avoiding memory leaks, reflow thrashing, and dangerous innerHTML string injections.
---

# DOM Manipulation Expert Skill

This skill guides the safe, performant, and declarative manipulation of the DOM in Vanilla JavaScript.

## Core Directives

### 1. Avoid Unsanitized `innerHTML`
- Direct string concatenation into `innerHTML` causes Cross-Site Scripting (XSS) vulnerabilities.
- Prefer `document.createElement()`, `<template>` clones, or safe text assignment via `.textContent` / `.innerText`.

### 2. High-Performance List Rendering
- Use `DocumentFragment` to batch DOM updates in a single reflow/repaint cycle.

```javascript
function renderList(items, container) {
  container.innerHTML = '';
  const fragment = document.createDocumentFragment();

  items.forEach(item => {
    const card = createCardElement(item);
    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}
```

### 3. Safe Element Creation Helpers
Use structured helper functions to build DOM trees cleanly:

```javascript
function createElement(tag, className = '', attributes = {}, textContent = '') {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (textContent) el.textContent = textContent;
  Object.entries(attributes).forEach(([key, val]) => el.setAttribute(key, val));
  return el;
}
```

### 4. Image Fallback Handling
Always add graceful error handling for external images:

```javascript
const img = document.createElement('img');
img.src = item.coverUrl;
img.alt = `Capa do livro ${item.title}`;
img.onerror = () => {
  img.src = 'assets/img/default-cover.png'; // or inline SVG placeholder
};
```

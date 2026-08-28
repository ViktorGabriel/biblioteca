---
name: javascript-pro
description: >-
  Advanced JavaScript patterns for Vanilla JS web apps, state management,
  safe LocalStorage persistence, clean code architecture, and event delegation.
---

# JavaScript Pro & Clean Architecture Skill

This skill provides architectural guidelines, best practices, and code patterns for building robust Vanilla JavaScript web applications.

## Core Directives

### 1. State Management & Entity Modeling
- Always use unique, stable identifiers for entities (`id: crypto.randomUUID()` or `id: Date.now()`).
- Never rely on array indices (`index`) for mutation actions (delete, update, toggle status), because sorting, filtering, or searching will desynchronize array positions with the UI.
- Maintain an immutable or centralized state updater pattern.

```javascript
// State definition
const state = {
  books: [],
  filter: 'all', // 'all' | 'read' | 'unread'
  searchQuery: ''
};
```

### 2. Resilient LocalStorage Handling
- Always wrap `localStorage.getItem` and `localStorage.setItem` in `try...catch` blocks to gracefully handle:
  - Private browsing storage blocks
  - Quota exceeded errors (`QuotaExceededError`)
  - Malformed or corrupted JSON strings
- Provide fallback default data when storage is empty or corrupted.

```javascript
function loadFromStorage(key, fallback = []) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (error) {
    console.error(`Error loading ${key} from localStorage:`, error);
    return fallback;
  }
}

function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
}
```

### 3. Event Delegation Over Inline Handlers
- Avoid inline HTML event handlers (e.g. `onclick="removerLivro(1)"`).
- Attach a single listener to container elements using `data-action` and `data-id` attributes:

```javascript
container.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]');
  if (!target) return;

  const action = target.dataset.action;
  const id = target.dataset.id;

  if (action === 'toggle-status') handleToggleStatus(id);
  if (action === 'remove-book') handleRemoveBook(id);
});
```

### 4. Input Sanitization & Validation
- Always `.trim()` string inputs.
- Validate URLs with the native `URL` constructor or regex.
- Reject empty submissions and display clear feedback to the user.

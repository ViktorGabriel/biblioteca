---
name: ui-ux-design
description: >-
  UI/UX design patterns for interactive web apps, custom dialog modals, toast notifications,
  real-time filtering, search bars, and meaningful empty states.
---

# UI/UX Design Patterns Skill

This skill provides patterns for user-centric interfaces, non-blocking feedback, and intuitive interactions.

## Core Directives

### 1. Non-Blocking Notifications (Toast System)
Replace native `alert()` with an asynchronous toast notification system:

```javascript
function showToast(message, type = 'info', duration = 3000) {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type} toast-enter`;
  toast.textContent = message;
  
  const container = document.getElementById('toast-container');
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.replace('toast-enter', 'toast-exit');
    toast.addEventListener('animationend', () => toast.remove());
  }, duration);
}
```

### 2. Custom Accessible Confirm Modals
Replace native `confirm()` with non-blocking modal components:

```javascript
function openConfirmModal({ title, message, onConfirm }) {
  const modal = document.getElementById('confirm-modal');
  modal.querySelector('#modal-title').textContent = title;
  modal.querySelector('#modal-message').textContent = message;
  
  const confirmBtn = modal.querySelector('#btn-confirm-action');
  confirmBtn.onclick = () => {
    onConfirm();
    closeModal(modal);
  };
  
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}
```

### 3. Real-Time Search & Filtering
- Provide instantaneous feedback when typing in search inputs (with 150-200ms debounce).
- Provide filter pills/chips ("Todos", "Lidos", "Não Lidos") with active state highlights and item counts.

### 4. Meaningful Empty State
When no books match the filter or the library is empty, show an engaging illustration/icon, a helpful message, and an action button to add a book.

---
name: web-accessibility
description: >-
  Web accessibility guidelines conforming to WCAG 2.1 AA, screen reader optimization,
  ARIA roles, keyboard navigation management, and color contrast.
---

# Web Accessibility (WCAG 2.1 AA) Skill

This skill ensures interfaces are accessible to all users, including those using assistive technologies or keyboard-only navigation.

## Core Directives

### 1. Form Accessibility
- Every `<input>`, `<select>`, and `<textarea>` must have an explicit associated `<label>` or `aria-label`.
- Do not rely solely on `placeholder` for field labels.

```html
<label for="input-titulo" class="sr-only">Título do Livro</label>
<input type="text" id="input-titulo" placeholder="Nome do Livro" required aria-required="true">
```

### 2. Accessible Action Buttons
- Icon-only buttons (like delete `🗑️`) must have an `aria-label` and `title`.
- Toggles should indicate their state with `aria-pressed`.

```html
<button class="btn-remove" aria-label="Remover livro: O Senhor dos Anéis" title="Remover livro">
  <span aria-hidden="true">🗑️</span>
</button>

<button class="btn-status" aria-pressed="true" aria-label="Marcar como lido">
  Lido ✅
</button>
```

### 3. Keyboard Navigation & Focus Trapping
- Ensure all interactive elements have visible `:focus-visible` outlines.
- When a modal opens, trap keyboard focus within the modal and restore focus to the trigger element when closed.
- Support `Escape` key to close open dialogs or dropdowns.

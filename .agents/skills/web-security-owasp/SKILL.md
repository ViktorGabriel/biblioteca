---
name: web-security-owasp
description: >-
  Front-end web security guidelines focusing on XSS prevention, Content Security Policy,
  secure client-side storage, input sanitization, and URL validation.
---

# Web Security & XSS Prevention Skill

This skill enforces security best practices for front-end web applications.

## Core Directives

### 1. Cross-Site Scripting (XSS) Prevention
- Never trust client inputs (user input, query parameters, data from localStorage).
- Treat all dynamic strings as untrusted data.
- Use `.textContent` or encode HTML entities (`&`, `<`, `>`, `"`, `'`) before outputting to HTML.

```javascript
function escapeHTML(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
```

### 2. URL Protocol Validation
- Protect against `javascript:` pseudoprotocols in links and image sources.
- Allow only `http:`, `https:`, `data:` (for base64 images), or relative paths.

```javascript
function isValidHttpUrl(string) {
  try {
    const url = new URL(string);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (_) {
    return false;
  }
}
```

### 3. LocalStorage Security
- Never store secrets or sensitive credentials in `localStorage`.
- Sanitize data when reading it back from `localStorage` before displaying it.

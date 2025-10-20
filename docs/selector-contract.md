# Selector Contract (Lebara & NoteApp Tests)

### Locator Order of Preference
1. **Accessibility ID (~content-desc / accessibilityIdentifier)**
2. **Resource ID (id=...)**
3. **UiSelector (Android) / Class Chain (iOS)**
4. **XPath only as last resort** — requires explicit justification

### Key Rules
- No XPath unless approved in review.
- Avoid indexed selectors like [2]/[3].
- Avoid text-based lookups (`text()=`, `contains(@text,...)`).
- Prefer dedicated test IDs for automation (data-testid / content-desc).
- All selectors defined at the screen level, not inline in tests.

### Exception Process
If XPath or text-based selector is absolutely needed,  
add a comment above it:
```js
// selector-exception: temporary fallback, awaiting stable ID

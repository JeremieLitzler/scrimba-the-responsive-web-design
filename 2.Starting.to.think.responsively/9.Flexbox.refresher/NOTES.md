# Notes

- The children of a flex element have a width equal to the content.
- To set a width, use the percentage unit.
- `em` can also be relative in the element itself

Example:

```css
.btn {
  /* changing the font-size will affect relatively the padding */
  padding: 0.5em 1.2em;
}

.btn-big {
  font-size: 1.5rem;
}

.btn-small {
  font-size: 0.75rem;
}
```

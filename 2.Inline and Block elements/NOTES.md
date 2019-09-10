# Notes

- Importants things about inline elements:
  - inline elements respects only margin from left and right.
  - inline elements can only be nested in an inline element.

This is ok:

```html
<strong><a href="#">Link</a></strong>
```

This is ko:

```html
<strong><p>Link</p></strong>
```

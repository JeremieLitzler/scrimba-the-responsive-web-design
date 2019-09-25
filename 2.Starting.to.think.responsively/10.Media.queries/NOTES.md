# Notes

- When using media queries for breakpoints, you don't need to specify the media type is it all.

```css
@media all and (min-width: 400px) {
}
```

is the same as :

```css
@media (min-width: 400px) {
}
```

Also, about organizing the media queries:

> Group all media queries at the end of the style sheet

- Advantages:
  - The rules in one section of the document.
  - The breakpoints are easily found.
- Drawbacks:
  - You have jump up and down the file to find the default style(s) of a element or selector.

> Write the media queries following with the default style(s) of a element or selector.

- Advantages:
  - You find the default styles and specific style in the same area of the file.
- Drawbacks:
  - The rules in one section of the document and it can become messy.
  - The breakpoints can become messy if you don't have a good organization in place.

**Question:** How to solve the problem of the second option?

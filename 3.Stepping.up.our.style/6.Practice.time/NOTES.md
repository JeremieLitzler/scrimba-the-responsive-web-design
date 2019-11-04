# Notes

- _Tips:_ Set the breaking points using the long text. Break point should be at the point where you have 15 to 20 words per line.
- The selector `h1 + p` selects the first `p` element following the `h1` element.
- The selector `h1 ~ p` selects all the `p` element following the `h1` element.
- **Always** set a fallback to `background-image` using the `background-color` property.

## viewport units

- `vw` is a unit based on the viewport width. Ex: `50vw` equals to 50% of the viewport _width_.
- `vh` is a unit based on the viewport height. Ex: `50vh` equals to 50% of the viewport _height_.
- `vmin` is a unit based on the smallest viewport size (width or height).
  - Ex: `50vmin` when `width > height` equals to 50% of the viewport _height_.
  - Ex: `50vmin` when `width < height` equals to 50% of the viewport _width_.
- `vmax` is a unit based on the biggest viewport size (width or height).
  - Ex: `50vmax` when `width > height` equals to 50% of the viewport _width_.
  - Ex: `50vmax` when `width < height` equals to 50% of the viewport _height_.

## Property box-sizing

Default example:

```css
.main-content {
  /*reset box spacing*/
  border: 0;
  padding: 0;
  margin: 0;

  box-sizing: content-box;

  width: 200px;
  padding: 30px;
  border: 10px solid fuchsia;
  margin: 40px;
  /* box is 200+30+10+40=280px wide */
}
```

`border-box` example:

```css
.main-content {
  /*reset box spacing*/
  border: 0;
  padding: 0;
  margin: 0;

  box-sizing: border-box;

  width: 200px;
  padding: 30px;
  border: 10px solid fuchsia;
  margin: 40px;
  /* box is 200+40=240px wide */
  /* padding and border are included in the width of 200px, e.g. element 200-30-10=170px */
}
```

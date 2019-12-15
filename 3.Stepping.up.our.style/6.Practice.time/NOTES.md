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

## Properties `align-items` and `justify-content`

**Be careful** when using `align-items`: the alignement happens on the cross axis.

If `flex-direction` is row, the cross axis is **top to bottom**. So `align-items` will align items in the middle of the total height of the flex element.

If `flex-direction` is column, the cross axis is **left ot right**. So `align-items` will align items in the middle of the total width of the flex element.
Using `justify-content` will however align the items in the middle of the total height of the flex element.

## CSS Gradient

```css
/* to destination, color start, color stop */
.box-1 { background-image: linear-gradient(to bottom right, red,        blue); }
/* degree orientation, color start, color stop */
.box-2 { background-image: linear-gradient(0deg, green, yellow)}
/* degree orientation, color start for x %, color stop */
.box-3 { background-image: linear-gradient(90deg, orange 75%, teal) }
/* degree orientation, color1 start at 0, color1 stop at x %, color2 start at x %, color2 stop at y %, etc...  */
.box-4 { background-image: linear-gradient(90deg, orange,
                                                              orange 10%,
                                                              teal 10%,
                                                              teal 20%,
                                                              orange 20%,
                                                              orange 30%,
                                                              teal 30%,
                                                              teal 40%,
                                                              orange 40%) }
/* start color, stop color */
.box-5 { background-image: radial-gradient(red, blue);
```

## Transition property

- Set the `transition` property on the non hover rule to effect the hover and non hover state.
- Keep the hover effects between 250ms and 500ms.
- You can't transition everything: [MDN site](https://developer.mozilla.org/fr/docs/Web/CSS/transition)

## Transform

- `scale`
# Notes

## `background-image`

- When do I need to use `background-image` property?
  - Ask those questions:
    - Do I have something over the images ?
      - YES : use the property.
      - NO : use `<img>` element.
- `background-image` **MUST NEVER** be used for content. **It is only for decoration**.
- Some tiny images that can be repeated: [click this link](https://www.toptal.com/designers/subtlepatterns/).
- Keep your background images in the a sub directory where the styles are stored.

## `background-position`

- Values can be:
  - units `px` or `em`
  - center, top, left, right and bottom.

This property is very used with `background-size` using the value `cover`.

## `background-size`

- Value `contain` always displays the image on one axis
  - If screen width is greater than the image, it will repeat on the X axis.
  - If screen width is smaller than the image, it will repeat on the Y axis.
- Value `cover` works a bit like `object-fits`.
  - Using `background-position` with a couple of either `left`, `right`, `top` or `bottom`, you can position what side of the image is the anchor.

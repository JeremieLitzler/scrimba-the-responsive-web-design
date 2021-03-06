# Notes

## Meta `viewport` and `charset`

Always include this line in the `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
```

## Building the HTML

- Use a `header` to start the body.
- Then have a `main` that holds your main contents.
  - Set the attribute `role="main"` if you want to support older browser.
- Then have a `aside` for secondary contents.
- Finally a `footer` to finish the body.

**Question :** When do you use an `article` rather than `section` ?

## Building the styles

- Start from typography.
- Then big layout,
- Finally, components layout.
- Set the images styles at the top, under the body because its styles usually applies to all the contents.

### Reordering elements

- Use the `order` property on the children of a flex element.

### Cropping images with CSS

- Along `width` and `height`, `object-fit` with the value `cover` will crop the image.
- `object-position` helps to decide from where we crop the image: left, right or the center.

# Notes

- With grid, there are no margin collapsing.

## Property `grid-template-columns`

Ex:

- column 1 is 100px.
- column 2 is 200px.
- etc...

```css
div {
  grid-template-columns: 100px 200px;
}
```

## Property `grid-template-rows`

Ex:

- row 1 is 50px.
- row 2 is 200px.
- etc...

```css
div {
  grid-template-rows: 50px 200px;
}
```

## Property `grid-template`

It is the shorthand for `grid-template-columns` and `grid-template-rows`.

Ex:

- row 1 is 50px.
- row 2 is 200px.
- column 1 is 100px.
- column 2 is 200px.
- column 3 is 50px.

```css
div {
  grid-template: 50px 200px / 100px 200px 50px;
}
```

# Notes

- `minmax` property allows to have responsiveness into the grid column width.
- The units we know can be used : `px`, `em`, `%`.
- When choosing the min value, try not exceed the min-width when using a breakpoint.

```css
.main-grid {
  display: grid;
  /* 
    3 columns where 
      => col 1 size is 1em to 1fr
      => col 2 size is 0 to 500px
      => col 3 size is 1em to 1fr
  */
  grid-template-columns: minmax(1em, 1fr) minmax(0px, 800px) minmax(1em, 1fr);
  column-gap: 2em;
}

@media (min-width: 600px) {
  .main-grid {
    grid-template-columns:
      minmax(1em, 1fr)
      /*Why 3? Because we have 3 skills !*/
      repeat(3, minmax(140px, 320px))
      minmax(1em, 1fr);
  }
}
```

At 600px, there will be side scrolling because :

- The sum of
  - `180px x 3` from `repeat(3, minmax(140px, 320px))`
- added to
  - `2em x 5` from `column-gap: 2em;` for 5 columns
- equals to 700px!

So, At 600px, there will need `repeat(3, minmax(145px, 320px))` to avoid side scrolling.

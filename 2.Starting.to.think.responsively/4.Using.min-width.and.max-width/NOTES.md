# Notes

- Try to use `max-width` to set a max size for the content container.
- Better than using width so images never goes bigger than the image size
- Here is a snippet for the container pattern:

```css
.container {
  max-width: 620px;
  margin: 0 auto; /*to center*/
}
```

```html
<header>
  <div class="container">
    <!-- CONTENT HERE -->
  </div>
</header>

<section class="section section-one">
  <div class="container">
    <!-- CONTENT HERE -->
  </div>
</section>

<section class="section section-two">
  <div class="container">
    <!-- CONTENT HERE -->
  </div>
</section>
```

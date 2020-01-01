# Notes

## Columns and rows numbering

![How to count columns and rows](img/Image.969.png)

## Position a grid item

![Position a grid item](img/Image.970.png)

## Shorthand

![Let's not write too much!](img/Image-001.png)

### Concrete example

Before:

![Without shorthand](img/Image-003.png)

After:

![With shorthand](img/Image-002.png)

## Overlapping or no overlapping

Grid items will not overlap:

- if

  - one grid item has a positionning with `grid-row` and `grid-column` and
  - another with just `grid-row`,
  - **it won't overlap.**

- if

  - 2 grid items have a positionning with `grid-row` and `grid-column` that explicitly overlap,
  - **it will overlap.**

  See [index.html](index.html)

## Negative counting

Here we count positively: 1, 2, ..., N from left to right or top to bottom.
![How to count positively](img/Image-003.png)

But also, we can count negatively.
![How to count negatively](img/Image-004.png)

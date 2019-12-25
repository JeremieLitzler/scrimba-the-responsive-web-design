# Notes

- `flex-direction` (by default: `row`) set the flex items are a row or a column.
- `flex-wrap` (by default: `nowrap`) wraps the flex items neatly into the flex container.

See [flex-direction tests](index.flex-direction.html) and [flex-wrap tests](index.flex-wrap.html)

- `flex-flow` is just a shorthand of the previous two where the first value is the one of `flex-direction` and the second value is the one of `flex-wrap`.

## Main axis vs Cross axis

The main axis is defined by `flex-direction`.

- if the value is `row` or `row-reverse`, the main axis is **horizontal**.
- if the value is `column` or `column-reverse`, the main axis is **vertical**.

The cross axis is simply the opposite of the main axis.

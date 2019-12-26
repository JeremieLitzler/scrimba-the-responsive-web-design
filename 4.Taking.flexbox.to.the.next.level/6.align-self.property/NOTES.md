# Notes

- `flex-basis` always look at the main axis, so:
  - when `flex-direction: row`, the value of `flex-basis` will be equivalent to the width.
  - when `flex-direction: column`, the value of `flex-basis` will be equivalent to the height.
- **IMPORTANT**: `min-width` and `max-width` will prevent `flex-basis` to work!

- BTW, `flex` is a shorthand for `flex-grow`, `flex-shrink` and `flex-basis`.
- Also, `flex: initial` is the same as `flex: 1 0 auto`
- Finally, `flex: auto` is the same as `flex: 1 1 auto`

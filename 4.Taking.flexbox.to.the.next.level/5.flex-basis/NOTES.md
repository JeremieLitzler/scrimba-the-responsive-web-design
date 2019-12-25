# Notes

- `flex-basis` always look at the main axis, so:
  - when `flex-direction: row`, the value of `flex-basis` will be equivalent to the width.
  - when `flex-direction: column`, the value of `flex-basis` will be equivalent to the height.
- **IMPORTANT**: `min-width` and `max-width` will prevent `flex-basis` to work!

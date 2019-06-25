# react-windows-controls
Windows 10 title bar control buttons for React.

# Installation

To install this package, just run

```bash
$ npm install react-windows-controls
```

# Quick example

```typescript
import { WindowsControls } from 'react-windows-controls';

export default () => (
  <WindowsControls />
);
```

# Components

## `<WindowsControls />`

- `dark` boolean - whether to invert icons colors
- `onClose` Function - on close button click event
- `onMaximize` Function - on maximize button click event
- `onMinimize` Function - on minimize button click event
- `onMouseUp` Function
- `onMouseDown` Function
- `style` any

## `<WindowsControl />`

  - `maximize` boolean - whether the button is a maximize button
  - `close` boolean - whether the button is a close button
  - `minimize` boolean - whether the button is a minimize button
  - `whiteIcon` boolean - whether to invert icon color
  - `onClick` Function
  - `onMouseUp` Function
  - `onMouseDown` Function
  - `style` any

# react-windows-controls
Windows 10 title bar control buttons for React.

# Installation

To install this package, just run

```bash
$ npm install react-windows-controls
```

# Quick example

![image](https://user-images.githubusercontent.com/11065386/62898576-1cd3f200-bd56-11e9-8dea-ac78a3531c02.png)

```tsx
import { remote } from 'electron';
import { WindowsControls } from 'react-windows-controls';

export default () => (
  <WindowsControls isMaximized={remote.getCurrentWindow().isMaximized()} />
);
```

# Components

## `<WindowsControls />`

- `dark` boolean - whether to invert icons colors
- `onClose` Function - on close button click event
- `isMaximized` boolean - whether to show the restore button
- `onMaximize` Function - on maximize button click event
- `onMinimize` Function - on minimize button click event
- `onMouseUp` Function
- `onMouseDown` Function
- `style` any


## `<WindowsControl />`

  - `maximize` boolean - whether the button is a maximize button
  - `close` boolean - whether the button is a close button
  - `minimize` boolean - whether the button is a minimize button
  - `restore` boolean - whether the button is a restore button
  - `whiteIcon` boolean - whether to invert icon color
  - `onClick` Function
  - `onMouseUp` Function
  - `onMouseDown` Function
  - `style` any

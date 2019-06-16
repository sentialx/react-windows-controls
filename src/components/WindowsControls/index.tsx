import * as React from 'react';
import { WindowsControl } from '../WindowsControl';

interface Props {
  dark?: boolean;
  onClose?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMaximize?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMinimize?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const WindowsControls = ({
  dark,
  onClose,
  onMaximize,
  onMinimize,
}: Props) => {
  return (
    <div style={{ display: 'flex' }}>
      <WindowsControl minimize whiteIcon={dark} onClick={onMinimize} />
      <WindowsControl maximize whiteIcon={dark} onClick={onMaximize} />
      <WindowsControl close whiteIcon={dark} onClick={onClose} />
    </div>
  );
};

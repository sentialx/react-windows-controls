import * as React from 'react';
import { WindowsControl } from '../WindowsControl';

interface Props {
  dark?: boolean;
  onClose?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMaximize?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMinimize?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseUp?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: any;
  isMaximized?: boolean;
}

export const WindowsControls = ({
  dark,
  onClose,
  onMaximize,
  onMinimize,
  onMouseUp,
  style,
  isMaximized,
}: Props) => {
  return (
    <div onMouseUp={onMouseUp} style={{ display: 'flex', ...style }}>
      <WindowsControl minimize whiteIcon={dark} onClick={onMinimize} />
      <WindowsControl maximize isMaximized={isMaximized == false} whiteIcon={dark} onClick={onMaximize} />
      <WindowsControl restore isMaximized={isMaximized == true} whiteIcon={dark} onClick={onMaximize} />
      <WindowsControl close whiteIcon={dark} onClick={onClose} />
    </div>
  );
};

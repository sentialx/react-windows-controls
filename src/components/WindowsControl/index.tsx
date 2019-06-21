import * as React from 'react';

import closeIcon from '../../icons/close.svg';
import maximizeIcon from '../../icons/maximize.svg';
import minimizeIcon from '../../icons/minimize.svg';

interface Props {
  maximize?: boolean;
  close?: boolean;
  minimize?: boolean;
  whiteIcon?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseUp?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: any;
}

interface State {
  hover?: boolean;
}

export class WindowsControl extends React.PureComponent<Props, State> {
  state = {
    hover: false,
  };

  onMouseEnter = () => {
    this.setState({ hover: true });
  };

  onMouseLeave = () => {
    this.setState({ hover: false });
  };

  public render() {
    const { hover } = this.state;
    const { close, maximize, minimize, whiteIcon, onClick, style } = this.props;

    let icon: string;

    if (close) icon = closeIcon;
    else if (maximize) icon = maximizeIcon;
    else if (minimize) icon = minimizeIcon;

    return (
      <div
        onClick={onClick}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        style={{
          height: '100%',
          width: 45,
          minWidth: 45,
          position: 'relative',
          transition: '0.2s background-color',
          backgroundColor: hover
            ? !close
              ? 'rgba(196, 196, 196, 0.4)'
              : '#e81123'
            : 'transparent',
          ...style,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            transition: '0.2s filter',
            filter: whiteIcon || (close && hover) ? 'invert(100%)' : 'none',
            backgroundPosition: 'center',
            backgroundSize: '11px',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${icon})`,
          }}
        />
      </div>
    );
  }
}

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface IErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  // eslint-disable-next-line react/state-in-constructor
  public state: IErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Uncaught error: ', error, errorInfo);
  }

  private handleRefreshClick = () => {
    window.location.reload();
  };

  public render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <>
          <h1>Error</h1>
          <p>Something went wrong on our end.</p>
          <button type="submit" onClick={this.handleRefreshClick}>
            Refresh
          </button>
        </>
      );
    }

    return children;
  }
}

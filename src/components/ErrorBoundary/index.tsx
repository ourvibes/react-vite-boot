import React, { Component } from 'react';

export interface FallbackFunction {
  (error: Error): React.ReactNode | undefined;
}

export interface ErrorBoundaryNormalState {
  hasError: false;
  error: null;
}

export interface ErrorBoundaryErrorState {
  hasError: true;
  error: Error;
}

export interface ErrorBoundaryProps {
  fallback: FallbackFunction | React.ReactNode;
  children?: React.ReactElement;
}

export type ErrorBoundaryState = ErrorBoundaryNormalState | ErrorBoundaryErrorState;

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    const {
      props: { fallback, children },
      state,
    } = this;

    if (state.hasError) {
      if (typeof fallback === 'function') {
        return fallback(state.error);
      }

      return fallback;
    }

    return children;
  }
}

export default ErrorBoundary;

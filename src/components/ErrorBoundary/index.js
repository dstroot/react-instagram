import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });

    // You can also log the error to an error reporting service here
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // render custom fallback UI
      return <h1>Something went wrong!</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

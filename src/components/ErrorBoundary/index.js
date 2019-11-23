import { Component } from 'react';

// Error boundaries currently have to be classes.
export class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch() {
    // log the error to the server
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
      // <pre style={{whiteSpace: 'normal'}}>{this.state.error.message}</pre>
    }
    return this.props.children;
  }
}

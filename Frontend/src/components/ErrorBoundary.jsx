import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state to show fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // Log error to an error reporting service if needed
        console.error("Error caught by ErrorBoundary: ", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="text-center p-10 bg-red-100">
                    <h1 className="text-red-500 text-3xl">Something went wrong.</h1>
                    <p className="text-red-400">Please try again later or contact support.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

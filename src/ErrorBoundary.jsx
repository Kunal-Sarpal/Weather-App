import React from "react";


// Here i have use class component because if like server will down or any error will occur then we can use this component to show error to user it will not let the website down
// .

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        console.error("Error caught by boundary:", error, info);
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: null });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-5 bg-red-100 text-red-700 border border-red-700 rounded-md text-center max-w-md mx-auto font-sans mt-5">
                    <h2 className="text-lg font-semibold mb-2">Oops! Something went wrong.</h2>
                    <p className="text-sm">{this.state.error?.toString()}</p>
                    <button
                        onClick={this.handleRetry}
                        className="mt-3 px-4 py-2 bg-red-700 text-white rounded shadow hover:bg-red-800 transition duration-300"
                    >
                        Try Again
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
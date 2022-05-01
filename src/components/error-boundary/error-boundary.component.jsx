import React from 'react';
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles';
import notFound from "../../assets/404.gif";

class ErrorBoundary extends React.Component {
    constructor() {
        super()
        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        return {hasErrored: true}
    }

    render () {
        if(this.state.hasErrored) {
            return <ErrorImageOverlay>
                <ErrorImageContainer imageUrl={notFound} />
            </ErrorImageOverlay>
        }
        return this.props.children;
    }
}

export default ErrorBoundary
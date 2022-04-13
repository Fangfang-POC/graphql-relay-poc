import React, { ReactElement } from 'react';

type Props = {
    children: ReactElement;
};
type State = {
    hasError: boolean;
    errorMsg: string;
}
export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props:Props) {
      super(props);
      this.state = { hasError: false, errorMsg: '' };
    }
  
    static getDerivedStateFromError(error: Error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error: Error, errorInfo: any) {
      // You can also log the error to an error reporting service
      console.log(error, errorInfo);
      this.setState({ errorMsg: error.message });
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>{this.state.errorMsg}</h1>;
      }
  
      return this.props.children; 
    }
  }
import React, { Component, ErrorInfo, ReactNode } from 'react';
import {
  Code,
  Alert,
  Center,
  Button,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

interface IErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
  error: null | Error;
}

export class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  // eslint-disable-next-line react/state-in-constructor
  public state: IErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error(errorInfo);
  }

  private handleRefreshClick = () => {
    window.location.reload();
  };

  public render() {
    const { children } = this.props;
    const { hasError, error } = this.state;

    if (hasError) {
      return (
        <>
          <Center h="100vh" w="100vw" m="auto" bg="red.50">
            <Alert
              status="error"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
            >
              <AlertIcon boxSize="30px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                Something went wrong 😩
              </AlertTitle>
              <Code py="5" colorScheme="red">
                {error?.name}:{error?.message}
              </Code>
              <AlertDescription maxWidth="sm">
                Check the console to see more details.
                <br />
                Click below to get back to normal.
              </AlertDescription>
              <Button mt="5" onClick={this.handleRefreshClick}>
                Refresh
              </Button>
            </Alert>
          </Center>
        </>
      );
    }

    return children;
  }
}

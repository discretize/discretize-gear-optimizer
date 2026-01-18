import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import type { FallbackProps } from 'react-error-boundary';
import { getErrorMessage, ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  location?: string;
  resetKeys?: unknown[];
}

export default function ErrorBoundary({
  children,
  location = 'unspecified component',
  resetKeys = [],
}: ErrorBoundaryProps) {
  const fallbackRender = React.useCallback(
    function FallbackComponent({ error }: FallbackProps) {
      return (
        <Card>
          <CardContent>
            <Typography>
              {`Rendering error caught in ${location}! Please report this to the developers on GitHub or Discord.`}
            </Typography>
            <pre>{getErrorMessage(error)}</pre>
            {error instanceof Error && error.stack ? <pre>{error.stack}</pre> : false}
          </CardContent>
        </Card>
      );
    },
    [location],
  );
  return (
    <ReactErrorBoundary fallbackRender={fallbackRender} resetKeys={resetKeys}>
      {children}
    </ReactErrorBoundary>
  );
}

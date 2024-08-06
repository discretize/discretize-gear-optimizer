import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

export default function ErrorBoundary({
  children,
  location = 'unspecified component',
  resetKeys = [],
}) {
  const fallbackRender = React.useCallback(
    function FallbackComponent({ error }) {
      return (
        <Card>
          <CardContent>
            <Typography>
              {`Rendering error caught in ${location}! Please report this to the developers on GitHub or Discord.`}
            </Typography>
            <pre>{error.message}</pre>
            <pre>{error.stack}</pre>
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

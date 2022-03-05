import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const fallback =
  (location = 'unspecified component') =>
  ({ error }) =>
    (
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

export default ({ children, location, resetKeys }) => (
  <ErrorBoundary FallbackComponent={fallback(location)} resetKeys={resetKeys}>
    {children}
  </ErrorBoundary>
);

import * as Sentry from '@sentry/sveltekit';

Sentry.init({
  dsn: import.meta.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

export const handleError = Sentry.handleErrorWithSentry();

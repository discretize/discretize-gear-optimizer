Generally, all env vars from [vite](https://vitejs.dev/guide/env-and-mode.html) may be used. In addition to that we added a couple of our own variables.

Vite allows access to variables with `import.meta.env.VARIABLENAME`. This call gets replaced during build time.

## Cloudflare related

- `VITE_HAS_CF`: is true, when the applications runs in an environment where cloudflare functions can be executed.
- `VITE_IS_CF_PREVIEW`: is true, when the application runs in a preview build.
